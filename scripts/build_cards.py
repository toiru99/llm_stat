#!/usr/bin/env python3
"""스냅샷 JSON + 벤치마크 문서 → OKF 모델 카드 (config.toml 구동).

- 표준 라이브러리만 (tomllib 포함, Python 3.11+).
- 축↔벤치마크 매핑은 benchmarks/*.md 의 frontmatter(column/axes)가 SSOT.
- 방법론: models/radar-spec.md (정규화→가중평균→z-score 평균기준선, kNN 결측 추정).
- 사용: python3 scripts/build_cards.py
- 산출물: <output_dir>/<slug>.md, models/index.md
"""
import re, json, math, tomllib, pathlib, statistics

ROOT = pathlib.Path(__file__).resolve().parent.parent
CFG = tomllib.load(open(ROOT / "config.toml", "rb"))
SNAP = json.load(open(ROOT / "models" / "data" / "latest.json", encoding="utf-8"))

AX_ORDER = ["knowledge", "reasoning", "coding", "agentic", "trust", "multimodal", "long_context", "instruction"]
AX_LABEL = {"knowledge": "전문 지식", "reasoning": "추론", "coding": "코딩", "agentic": "에이전트",
            "trust": "신뢰성", "multimodal": "멀티모달", "long_context": "긴문맥", "instruction": "지시 따르기"}

H_INTEL, H_PRICE, H_SPEED, H_CTX = (
    "Artificial Analysis Intelligence Index", "Blended USD/1M Tokens", "Median Tokens/s", "Context Window")
H_PIN, H_POUT, H_TTFT, H_TOTAL = ("Input Price", "Output Price", "Latency First Chunk", "Total Response")


# ---------- 파싱 헬퍼 ----------
def col(row, *needles):
    for k in row:
        if all(n in k for n in needles):
            return row[k]
    return None

def pct(v):
    if v is None or v in ("--", ""): return None
    m = re.search(r"-?\d+(?:\.\d+)?", str(v));  return float(m.group()) if m else None

def money(v):
    if not v or v in ("--", ""): return None
    m = re.search(r"-?\d+(?:\.\d+)?", str(v).replace(",", ""));  return float(m.group()) if m else None

def ctx(v):
    if not v or v in ("--", ""): return None
    s = str(v).lower().replace(",", "");  m = re.search(r"(\d+(?:\.\d+)?)\s*([mk]?)", s)
    if not m: return None
    return int(float(m.group(1)) * (1_000_000 if m.group(2) == "m" else 1_000 if m.group(2) == "k" else 1))

def slugify(name):
    return re.sub(r"[\s_]+", "-", re.sub(r"[^\w\s-]", "", name.lower())).strip("-")


# ---------- 벤치마크 문서에서 축 매핑 로드 (SSOT) ----------
def load_axis_map():
    """return axis -> list of {bench, column, weight}, and benchmark wiki slug per column."""
    amap = {}
    for f in sorted((ROOT / "benchmarks").glob("*.md")):
        if f.stem == "index": continue
        t = f.read_text(encoding="utf-8")
        m = re.search(r"^---\n(.*?)\n---", t, re.S)
        if not m: continue
        fm = m.group(1)
        if re.search(r"^role:\s*headline", fm, re.M): continue
        top_col = re.search(r'^column:\s*"?([^"\n]+)"?', fm, re.M)
        top_col = top_col.group(1).strip() if top_col else None
        seg = re.search(r"\naxes:\s*\n(.*?)(?:\n[a-zA-Z_]+:|\Z)", fm, re.S)
        if not seg: continue
        for line in seg.group(1).splitlines():
            if "axis:" not in line: continue
            ax = re.search(r"axis:\s*([A-Za-z_]+)", line)
            w = re.search(r"weight:\s*([0-9.]+)", line)
            c = re.search(r'column:\s*"?([^",}]+)"?', line)
            if not ax: continue
            amap.setdefault(ax.group(1), []).append(
                {"bench": f.stem, "column": (c.group(1).strip() if c else top_col),
                 "weight": float(w.group(1)) if w else 1.0})
    return amap


# ---------- 메인 ----------
def main():
    wl = CFG["creators"]["whitelist"]
    top_n = CFG["cards"].get("top_n", 0)
    out_dir = ROOT / CFG["cards"].get("output_dir", "models/cards")
    knn_k = CFG["imputation"].get("knn_k", 5)
    method = CFG["imputation"].get("empty_axis_method", "knn")
    mm_gate = CFG["imputation"].get("multimodal_modality_gate", True)
    center = CFG["normalization"].get("zscore_center", 50)
    scale = CFG["normalization"].get("zscore_scale", 15)

    amap = load_axis_map()
    rows = SNAP["rows"]
    scraped_at = SNAP.get("scraped_at", "")

    # 1) 제작사 필터
    models = [r for r in rows if (not wl) or (col(r, "Creator") in wl)]

    # 1b) 동명 중복(추론 ON/OFF 변형) dedup — 최고 종합지능 1개만 유지
    if CFG["cards"].get("dedupe_variants", True):
        best = {}
        for r in models:
            nm = col(r, "Model")
            iv = pct(col(r, H_INTEL))
            iv = iv if iv is not None else -1
            if nm not in best or iv > best[nm][0]:
                best[nm] = (iv, r)
        models = [v[1] for v in best.values()]

    # 2) 컬럼별 raw% 수집 + min-max 정규화 범위 (필터된 모델 집단 기준 = 평균기준선 모집단)
    needed_cols = {c["column"] for lst in amap.values() for c in lst}
    raw_by_col = {c: [] for c in needed_cols}
    for m in models:
        for c in needed_cols:
            raw_by_col[c].append(pct(col(m, c)))
    norm_range = {}
    for c, vals in raw_by_col.items():
        present = [v for v in vals if v is not None]
        norm_range[c] = (min(present), max(present)) if present else (0.0, 1.0)

    def normcol(c, v):
        if v is None: return None
        lo, hi = norm_range[c]
        return 100.0 if hi == lo else (v - lo) / (hi - lo) * 100

    # 3) 모델별 축 집계값 s (정규화→가중평균, 있는 것만) + 구성내역
    recs = []
    for m in models:
        axes_s, comps = {}, {}
        for ax in AX_ORDER:
            num = den = 0.0; parts = []
            for c in amap.get(ax, []):
                rawv = pct(col(m, c["column"]))
                nv = normcol(c["column"], rawv)
                if nv is not None:
                    num += c["weight"] * nv; den += c["weight"]
                    parts.append((c["bench"], rawv, c["weight"]))
            axes_s[ax] = (num / den) if den > 0 else None
            comps[ax] = parts
        recs.append({
            "name": col(m, "Model"), "creator": col(m, "Creator"), "license": col(m, "License"),
            "intel": pct(col(m, H_INTEL)), "price": money(col(m, H_PRICE)),
            "price_in": money(col(m, H_PIN)), "price_out": money(col(m, H_POUT)),
            "ttft": pct(col(m, H_TTFT)), "total_resp": pct(col(m, H_TOTAL)),
            "speed": pct(col(m, H_SPEED)), "ctx": ctx(col(m, H_CTX)),
            "s": axes_s, "comps": comps, "est": {ax: False for ax in AX_ORDER},
        })

    # 4) 빈 축 kNN 추정 (멀티모달은 모달리티 게이트 미구축 → 추정 안 함)
    report = {ax: {"measured": 0, "imputed": 0, "missing": 0} for ax in AX_ORDER}
    def dist(a, b):
        common = [ax for ax in AX_ORDER if a["s"][ax] is not None and b["s"][ax] is not None]
        if not common: return None
        return math.sqrt(sum((a["s"][ax] - b["s"][ax]) ** 2 for ax in common) / len(common))
    for r in recs:
        for ax in AX_ORDER:
            if r["s"][ax] is not None:
                report[ax]["measured"] += 1; continue
            gated = (ax == "multimodal" and mm_gate)   # 모달리티 데이터 없을 때 멀티모달은 추정 보류
            if method == "knn" and not gated:
                donors = [(dist(r, o), o) for o in recs if o is not r and o["s"][ax] is not None]
                donors = [(d, o) for d, o in donors if d is not None]
                donors.sort(key=lambda x: x[0])
                if donors:
                    knn = donors[:knn_k]
                    r["s"][ax] = sum(o["s"][ax] for _, o in knn) / len(knn)
                    r["est"][ax] = True; report[ax]["imputed"] += 1; continue
            report[ax]["missing"] += 1

    # 5) 축별 평균기준선(μ,σ) — 실측+추정 포함된 s 기준
    base = {}
    for ax in AX_ORDER:
        vals = [r["s"][ax] for r in recs if r["s"][ax] is not None]
        mu = statistics.fmean(vals) if vals else 0.0
        sd = statistics.pstdev(vals) if len(vals) > 1 else 1.0
        base[ax] = (mu, sd if sd else 1.0)

    def zr(ax, s):
        if s is None: return None, None
        mu, sd = base[ax]; z = (s - mu) / sd
        return round(z, 2), round(max(0, min(100, center + scale * z)), 1)

    # 정렬 + top_n
    recs.sort(key=lambda r: (r["intel"] is None, -(r["intel"] or 0)))
    emit = recs if top_n == 0 else recs[:top_n]

    # 출력 폴더 초기화 (cards/만 통째 재생성)
    out_dir.mkdir(parents=True, exist_ok=True)
    for p in out_dir.glob("*.md"): p.unlink()

    written = []
    export = []
    seen_slugs = {}
    for m in emit:
        slug = slugify(m["name"])
        if slug in seen_slugs:           # slug 충돌 안전장치 (비dedup 모드 등)
            seen_slugs[slug] += 1; slug = f"{slug}-{seen_slugs[slug]}"
        else:
            seen_slugs[slug] = 1
        z = {ax: zr(ax, m["s"][ax]) for ax in AX_ORDER}
        scored = sorted([(ax, z[ax][0]) for ax in AX_ORDER if z[ax][0] is not None], key=lambda x: -x[1])
        strong = [AX_LABEL[a] for a, _ in scored[:2]]
        weak = [AX_LABEL[a] for a, _ in scored[-2:]] if len(scored) >= 4 else []
        value = round(m["intel"] / m["price"], 1) if (m["intel"] and m["price"]) else None
        ctxd = (f"{m['ctx']//1000}k" if m["ctx"] and m["ctx"] < 1_000_000 else f"{m['ctx']//1_000_000}M" if m["ctx"] else "--")

        fm = ["---", "type: Model", f"title: {m['name']}", f"creator: {m['creator']}", f"license: {m['license']}",
              f"intelligence_index: {m['intel']}", f"price_blended_usd_1m: {m['price']}",
              f"output_speed_tps: {m['speed']}", f"context_window: {m['ctx']}", "radar:"]
        for ax in AX_ORDER:
            s = m["s"][ax]; zz, rr = z[ax]
            sv = round(s, 1) if s is not None else "null"
            zv = zz if zz is not None else "null"
            rv = rr if rr is not None else "null"
            fm.append(f"  {ax}: {{ s: {sv}, z: {zv}, r: {rv}, estimated: {str(m['est'][ax]).lower()} }}  # {AX_LABEL[ax]}")
        fm += ["sources:", "  - type: leaderboard", f"    title: Artificial Analysis — {m['name']}",
               "    url: https://artificialanalysis.ai/leaderboards/models",
               f"updated: {scraped_at}", f"timestamp: {scraped_at}T00:00:00Z", "---"]

        body = ["", f"# {m['name']}", "",
                f"{m['creator']} · {m['license']} · 컨텍스트 {ctxd} · 종합지능 **{m['intel']}**", "",
                "## 강점 / 약점 (평균 대비)",
                f"- **강점**: {', '.join(strong) if strong else '—'}",
                f"- **약점**: {', '.join(weak) if weak else '—'}", "",
                "## 실용 지표",
                f"`입력 ${m['price_in']} · 출력 ${m['price_out']} · 혼합 ${m['price']}/1M · {m['speed']} t/s · TTFT {m['ttft']}s · {ctxd} ctx`"
                + (f" · 가성비 {value}" if value else ""), "",
                "## 레이더 8축 (평균=50 기준선)", "",
                "| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |", "|---|---|---|---|---|"]
        for ax in AX_ORDER:
            zz, rr = z[ax]
            if m["s"][ax] is None:
                state, rr_disp, z_disp, parts = "측정 안 됨", "—", "—", "—"
            else:
                state = "추정" if m["est"][ax] else "실측"
                rr_disp, z_disp = rr, (f"+{zz}" if zz >= 0 else f"{zz}")
                parts = ", ".join(f"[[{b}]] {raw}%×{w}" for b, raw, w in m["comps"][ax]) or "(추정)"
            body.append(f"| {AX_LABEL[ax]} | {rr_disp} | {z_disp} | {state} | {parts} |")
        body += ["", "> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).",
                 "", "## 출처", "출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)", ""]
        (out_dir / f"{slug}.md").write_text("\n".join(fm + body), encoding="utf-8")
        written.append((slug, m["name"], m["intel"]))
        export.append({
            "slug": slug, "name": m["name"], "creator": m["creator"], "license": m["license"],
            "intel": m["intel"], "price": m["price"], "price_in": m["price_in"], "price_out": m["price_out"],
            "ttft": m["ttft"], "total_resp": m["total_resp"], "speed": m["speed"], "ctx": m["ctx"], "value": value,
            "radar": {ax: {"r": z[ax][1], "z": z[ax][0], "estimated": m["est"][ax],
                           "measured": m["s"][ax] is not None} for ax in AX_ORDER},
        })

    # index.md
    rel = out_dir.relative_to(ROOT / "models")
    idx = ["# 모델 (Models)", "",
           f"`scripts/build_cards.py` 자동 생성 · 데이터 {scraped_at} · 제작사 {len(wl)}곳 · 출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)",
           "", "- 레이더 축·방법론: [radar-spec.md](radar-spec.md) · 설정: [../config.toml](../config.toml)",
           "", f"## 모델 목록 (종합지능 내림차순, {len(written)}개)", ""]
    for slug, name, intel in written:
        idx.append(f"* [{name}]({rel}/{slug}.md) - 종합지능 {intel}")
    (ROOT / "models" / "index.md").write_text("\n".join(idx) + "\n", encoding="utf-8")

    # Artifact/뷰용 집계 JSON
    (ROOT / "models" / "data" / "cards.json").write_text(
        json.dumps({"scraped_at": scraped_at, "axes": AX_ORDER, "labels": AX_LABEL, "models": export},
                   ensure_ascii=False, indent=2), encoding="utf-8")

    # 리포트
    print(f"[완료] {len(written)}개 카드 → {out_dir.relative_to(ROOT)} (필터 통과 {len(models)}/{len(rows)}, 데이터 {scraped_at})")
    print("축별 실측/추정/결측:")
    for ax in AX_ORDER:
        r = report[ax]
        print(f"  {AX_LABEL[ax]:7s} 실측 {r['measured']:3d} · 추정 {r['imputed']:3d} · 결측 {r['missing']:3d}")


if __name__ == "__main__":
    main()
