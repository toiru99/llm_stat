# AA 필터 5종 재현 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) 구문으로 추적.

**Goal:** AA 리더보드의 필터 5종(Weights/Size/Price/Reasoning/Status)을 우리 레이더 사이트에서 재현 — 유니버스를 전체 creator + current/past(~570개)로 확장하고 아티팩트에 필터 UI 3종을 추가한다.

**Architecture:** 하이브리드 스크랩 — 검증된 DOM 테이블 스크랩은 유지하되 Status "Current" 체크를 해제해 과거 모델까지 긁고, 임베드 `__next_f` JSON에서 모델별 `{paramClass, totalParameters, isReasoning, deprecated}`만 추출해 모델명으로 조인한다. 정규화(min-max)는 current+past 전체 집단 기준. 기본 화면은 Status=Current.

**Tech Stack:** Node(ESM) + Playwright(스크랩), `node:test`(JS 테스트), Python 3.11 표준 라이브러리 + `unittest`(파이프라인 테스트), 순수 JS 인라인(아티팩트).

**스펙:** `docs/superpowers/specs/2026-07-10-aa-filters-design.md`

## Global Constraints

- Python은 **표준 라이브러리만** (tomllib 포함, 외부 패키지 금지 — 리포 철칙).
- Node 의존성은 playwright 하나 유지(신규 추가 금지). 테스트는 내장 `node:test`.
- 스크래퍼 새너티: 전체 모델 수 < **400** 또는 속성 조인율 < **90%** 면 exit≠0 (CI 가시화).
- Size 버킷 매핑: `paramClass` tiny→Tiny / small→Small / medium→Medium / large→Large / 그 외·결측→Unknown.
- Price 버킷: Blended 기준 `<0.15`→Low / `0.15~1.0`(포함)→Medium / `>1.0`→High.
- Status: `deprecated===true`→`past`, 그 외(false·null)→`current`.
- 커밋 메시지 말미: `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>` (하네스 규칙).
- main 직접 push는 하네스가 차단 — 커밋만 하고 push는 사용자에게 요청.

---

### Task 1: 임베드 JSON 속성 추출 모듈 (`extract_attrs.mjs`)

**Files:**
- Create: `scripts/extract_attrs.mjs`
- Test: `tests/extract_attrs.test.mjs`

**Interfaces:**
- Produces: `extractModelAttrs(text: string): Map<string, {paramClass: string|null, totalParameters: number|null, isReasoning: boolean|null, deprecated: boolean}>` — key는 모델 표기명(`name`). `parseBalanced(text, start): string|null` (내부용이지만 export, 테스트 대상).
- Task 2가 이 함수를 import해 DOM 행과 조인한다.

**배경 (실측 확인된 임베드 구조):** AA 페이지의 `self.__next_f.push([1,"..."])` 청크를 브라우저에서 이어붙이면 언이스케이프된 텍스트가 되고, 그 안에 모델 오브젝트가 두 형태로 존재한다:
- 소형: `{"id":"<uuid>","slug":"...","name":"gpt-oss-20b (low)","shortName":"...","deprecated":false,"isReasoning":true,"creator":{...}}`
- 상세: `{"id":"<uuid>","name":"GLM-4.5V (Non-reasoning)","shortName":"...","slug":"...","releaseDate":"...","isReasoning":false,"deprecated":true,...,"totalParameters":108,"paramClass":"medium",...}`

둘 다 `deprecated` 키를 갖고, 상세만 `paramClass`를 가진다. 전략: `"deprecated":` 등장 지점마다 역방향으로 가장 가까운 `{"id":"`를 오브젝트 시작 후보로 잡고, 문자열 인식 브레이스 매칭으로 오브젝트를 잘라 `JSON.parse` → `name`(string)+`deprecated`(bool) 있으면 채택. 같은 name이 소형·상세 둘 다에 있으면 **paramClass를 가진 쪽으로 업그레이드**.

- [ ] **Step 1: 실패하는 테스트 작성**

`tests/extract_attrs.test.mjs`:

```js
// node --test 로 실행. 픽스처는 실측 AA 임베드 구조 축약본.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractModelAttrs, parseBalanced } from '../scripts/extract_attrs.mjs';

const FIXTURE = [
  // 소형 오브젝트 (nav 목록형): paramClass 없음, creator 중첩
  '{"models":[{"id":"16149b9c-a1e9-4669-a5cb-ff3c00d78f89","slug":"gpt-oss-20b-low",',
  '"name":"gpt-oss-20b (low)","shortName":"gpt-oss-20b (low)","deprecated":false,',
  '"isReasoning":true,"creator":{"id":"e67e56e3","name":"OpenAI","color":"#1f1f1f"}}]}',
  // 상세 오브젝트: paramClass/totalParameters 포함, deprecated=true(과거 모델)
  ',{"id":"0081ab31-d10a-44a0-a10d-eee5533fec65","name":"GLM-4.5V (Non-reasoning)",',
  '"shortName":"GLM-4.5V","slug":"glm-4-5v","releaseDate":"2025-08-11",',
  '"isReasoning":false,"deprecated":true,"modelCreatorName":"Z AI",',
  '"intelligenceIndex":6.99,"contextWindowTokens":64000,"totalParameters":108,',
  '"sizeClass":"medium","paramClass":"medium","activeParameters":12,"isOpenWeights":true}',
  // 같은 모델의 소형 버전이 뒤에 또 나와도 상세(paramClass 보유)를 유지해야 함
  ',{"id":"0081ab31-d10a-44a0-a10d-eee5533fec65","slug":"glm-4-5v",',
  '"name":"GLM-4.5V (Non-reasoning)","deprecated":true,"isReasoning":false,',
  '"creator":{"id":"z1","name":"Z AI"}}',
].join('');

test('소형+상세 오브젝트에서 속성 추출·병합', () => {
  const m = extractModelAttrs(FIXTURE);
  assert.equal(m.size, 2);
  assert.deepEqual(m.get('gpt-oss-20b (low)'), {
    paramClass: null, totalParameters: null, isReasoning: true, deprecated: false,
  });
  assert.deepEqual(m.get('GLM-4.5V (Non-reasoning)'), {
    paramClass: 'medium', totalParameters: 108, isReasoning: false, deprecated: true,
  });
});

test('creator 중첩 오브젝트는 모델로 오인하지 않음', () => {
  const m = extractModelAttrs(FIXTURE);
  assert.equal(m.has('OpenAI'), false);
  assert.equal(m.has('Z AI'), false);
});

test('name/deprecated 없는 잡동사니는 무시', () => {
  const m = extractModelAttrs('{"id":"x","foo":1} junk {"deprecated":false,"nope":2}');
  assert.equal(m.size, 0);
});

test('parseBalanced: 문자열 내 중괄호·이스케이프 처리', () => {
  const s = 'pre {"id":"a","t":"br{ace \\" quote","n":{"x":1}} post';
  const start = s.indexOf('{');
  assert.equal(parseBalanced(s, start), '{"id":"a","t":"br{ace \\" quote","n":{"x":1}}');
});
```

- [ ] **Step 2: 실패 확인**

Run: `node --test tests/extract_attrs.test.mjs`
Expected: FAIL — `Cannot find module '.../scripts/extract_attrs.mjs'`

- [ ] **Step 3: 구현**

`scripts/extract_attrs.mjs`:

```js
// AA 페이지 임베드(__next_f 청크 연결 텍스트)에서 모델 필터 속성만 추출.
// 소형(nav)·상세 두 형태의 모델 오브젝트가 있고 둘 다 "deprecated" 키를 가짐.
// "deprecated": 등장 지점마다 가장 가까운 {"id":" 를 시작 후보로 균형 파싱 →
// name+deprecated 를 갖춘 오브젝트만 채택. paramClass 보유(상세) 엔트리 우선.
// 출처: artificialanalysis.ai (내부 구조 — 변경 시 scrape 새너티 체크가 잡는다)

export function parseBalanced(text, start) {
  if (text[start] !== '{') return null;
  let depth = 0, inStr = false, esc = false;
  for (let j = start; j < text.length; j++) {
    const ch = text[j];
    if (inStr) {
      if (esc) esc = false;
      else if (ch === '\\') esc = true;
      else if (ch === '"') inStr = false;
    } else if (ch === '"') inStr = true;
    else if (ch === '{') depth++;
    else if (ch === '}') { depth--; if (depth === 0) return text.slice(start, j + 1); }
  }
  return null;
}

export function extractModelAttrs(text) {
  const out = new Map();
  let i = 0;
  for (;;) {
    const k = text.indexOf('"deprecated":', i);
    if (k < 0) break;
    i = k + '"deprecated":'.length;
    const start = text.lastIndexOf('{"id":"', k);
    if (start < 0) continue;
    const raw = parseBalanced(text, start);
    if (!raw) continue;
    let o;
    try { o = JSON.parse(raw); } catch { continue; }
    if (typeof o.name !== 'string' || typeof o.deprecated !== 'boolean') continue;
    const prev = out.get(o.name);
    if (prev && prev.paramClass != null && o.paramClass == null) continue; // 상세 유지
    out.set(o.name, {
      paramClass: o.paramClass ?? null,
      totalParameters: o.totalParameters ?? null,
      isReasoning: typeof o.isReasoning === 'boolean' ? o.isReasoning : null,
      deprecated: o.deprecated,
    });
  }
  return out;
}
```

- [ ] **Step 4: 테스트 통과 확인**

Run: `node --test tests/extract_attrs.test.mjs`
Expected: PASS (4 tests)

- [ ] **Step 5: 커밋**

```bash
git add scripts/extract_attrs.mjs tests/extract_attrs.test.mjs
git commit -m "feat: AA 임베드 JSON 모델 속성 추출 모듈 (paramClass/isReasoning/deprecated)"
```

---

### Task 2: 스크래퍼 확장 — Status 해제 + 속성 조인 (`scrape_aa.mjs`)

**Files:**
- Modify: `scripts/scrape_aa.mjs` (전체 58줄 파일)

**Interfaces:**
- Consumes: Task 1의 `extractModelAttrs(text)`.
- Produces: `latest.json`의 각 row에 4개 필드 추가 — `paramClass`(string|null), `totalParameters`(number|null), `isReasoning`(bool|null), `deprecated`(bool|null). 톱레벨에 `currentCount`(number) 추가. Task 3이 이 필드를 읽는다.

**주의:** 이 태스크의 검증은 실제 사이트 스크랩 1회 실행(약 1~2분). 라이브 페이지 조사(2026-07-10)에서 확인된 셀렉터 — Status 필터는 `button` 텍스트 `Status:`, 팝오버 안에 `checkbox`(Current, 기본 checked) 하나.

- [ ] **Step 1: scrape_aa.mjs 수정**

기존 파일에서 `await page.waitForSelector('table thead th', ...)` 다음, `const data = await page.evaluate(...)` 앞에 Status 해제 블록을 삽입하고, evaluate 뒤에 속성 조인 블록을 추가한다. 수정 후 전체 파일:

```js
// AA 리더보드 스크래퍼 (주 1회 cron 실행 전제).
// Playwright(node)로 리더보드를 열고 Status(Current) 필터를 해제해 과거 모델까지 포함한 뒤
// 열 그룹을 펼쳐 41열 표를 JSON으로 저장. 임베드 __next_f에서 모델 속성
// (paramClass/totalParameters/isReasoning/deprecated)을 추출해 행에 조인한다.
// 사용: node scripts/scrape_aa.mjs  (사전: npm i playwright && npx playwright install chromium)
// 산출물: models/data/aa-leaderboard-<YYYY-MM-DD>.json, models/data/latest.json
// 출처표기 의무: artificialanalysis.ai

import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { extractModelAttrs } from './extract_attrs.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'models', 'data');
const URL = 'https://artificialanalysis.ai/leaderboards/models';

const run = async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ userAgent: 'Mozilla/5.0 llm-stat/0.1' });
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 90000 });
  await page.waitForSelector('table thead th', { timeout: 30000 });

  // Status 필터의 "Current" 체크 해제 → 과거(deprecated) 모델 포함 전체 행 노출.
  // 기본(current) 행 수를 기록해 두면 조인 없이도 current/past 규모를 검증할 수 있다.
  const currentCount = await page.locator('tbody tr').count();
  await page.getByRole('button', { name: /^Status:/ }).click();
  await page.getByRole('checkbox').first().click();          // 팝오버 내 Current 체크박스
  await page.waitForFunction(
    (n) => document.querySelectorAll('tbody tr').length > n, currentCount, { timeout: 30000 });
  await page.keyboard.press('Escape');                        // 팝오버 닫기

  const data = await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    // 각 그룹 헤더의 펼치기(chevron) 버튼 클릭 → 전체 열 노출
    const chevrons = Array.from(document.querySelectorAll('table thead th button')).filter((b) => b.querySelector('svg'));
    for (const b of chevrons) b.click();
    await sleep(2500);
    const tbl = document.querySelector('table');
    const theadRows = Array.from(tbl.querySelectorAll('thead tr'));
    // 그룹행(colspan)+세부행 중, 세부 헤더행 = 본문 셀 수와 일치하는 마지막 행
    const headerRow = theadRows[theadRows.length - 1];
    const headers = Array.from(headerRow.querySelectorAll('th')).map((t) => t.innerText.trim().replace(/\s+/g, ' '));
    const rows = Array.from(tbl.querySelectorAll('tbody tr')).map((tr) => {
      const cells = Array.from(tr.querySelectorAll('td,th')).map((c) => c.innerText.trim().replace(/\s+/g, ' '));
      const obj = {};
      headers.forEach((h, i) => { obj[h] = cells[i] ?? null; });
      return obj;
    });
    // 임베드 __next_f 청크 연결 (속성 추출용 — Node 쪽에서 파싱)
    const nextf = (self.__next_f || [])
      .map((c) => (Array.isArray(c) && typeof c[1] === 'string' ? c[1] : ''))
      .join('');
    return { headerCount: headers.length, headers, modelCount: rows.length, rows, nextf };
  });

  await browser.close();

  if (!data.modelCount || data.headerCount < 30) {
    throw new Error(`스크래핑 검증 실패: 열 ${data.headerCount}, 모델 ${data.modelCount}. 사이트 구조 변경 의심.`);
  }
  if (data.modelCount < 400) {
    throw new Error(`전체 유니버스 검증 실패: ${data.modelCount}개(<400). Status 해제 미반영 의심.`);
  }

  // __next_f 속성 조인 (모델 표기명 기준)
  const attrs = extractModelAttrs(data.nextf);
  delete data.nextf;                                          // 저장 파일에 원문 미포함
  let joined = 0;
  for (const row of data.rows) {
    const a = attrs.get(row['Model']);
    if (a) { Object.assign(row, a); joined++; }
    else Object.assign(row, { paramClass: null, totalParameters: null, isReasoning: null, deprecated: null });
  }
  if (joined / data.modelCount < 0.9) {
    throw new Error(`속성 조인율 검증 실패: ${joined}/${data.modelCount}. 임베드 구조 변경 의심.`);
  }
  const past = data.rows.filter((r) => r.deprecated === true).length;

  // 날짜는 환경변수로 주입(스크립트 내 Date 사용 가능하나 cron 로그 일관성 위해 인자 우선)
  const today = process.env.RUN_DATE || new Date().toISOString().slice(0, 10);
  const payload = { scraped_at: today, source: URL, currentCount, ...data };
  mkdirSync(DATA, { recursive: true });
  const out = JSON.stringify(payload, null, 2);
  writeFileSync(join(DATA, `aa-leaderboard-${today}.json`), out);
  writeFileSync(join(DATA, 'latest.json'), out);
  console.log(`[완료] ${data.modelCount}개 모델(current ${currentCount} · past ${past}) × ${data.headerCount}열 저장, 속성 조인 ${joined} (${today}).`);
};

run().catch((e) => { console.error('[중단]', e.message); process.exit(1); });
```

- [ ] **Step 2: 실행으로 검증 (라이브 스크랩 1회)**

Run: `node scripts/scrape_aa.mjs`
Expected: `[완료] 5xx개 모델(current 2xx · past 3xx) × 41열 저장, 속성 조인 5xx (2026-07-XX).`
실패 시(셀렉터 미스 등) 에러 메시지 확인 후 셀렉터 조정. 성공 후 산출 확인:

```bash
python3 -c "
import json; d=json.load(open('models/data/latest.json'))
rows=d['rows']; print('total', len(rows), '/ current', d['currentCount'])
print('past', sum(1 for r in rows if r.get('deprecated') is True))
print('paramClass 보유', sum(1 for r in rows if r.get('paramClass')))
print('isReasoning 보유', sum(1 for r in rows if r.get('isReasoning') is not None))"
```
Expected: total ≥ 400, past ≥ 100, paramClass·isReasoning 보유율 90%+.

- [ ] **Step 3: 기존 단위 테스트 회귀 확인**

Run: `node --test tests/extract_attrs.test.mjs`
Expected: PASS

- [ ] **Step 4: 커밋** (신규 스냅샷 JSON 포함 — 일일 갱신과 동일 성격)

```bash
git add scripts/scrape_aa.mjs models/data/
git commit -m "feat: 스크래퍼 Status 해제 + 전체 유니버스 + 속성 조인"
```

---

### Task 3: 파이프라인 확장 — 화이트리스트 개방 + 속성 파생 (`build_cards.py`, `config.toml`)

**Files:**
- Modify: `config.toml` (creators.whitelist)
- Modify: `scripts/build_cards.py`
- Modify: `models/radar-spec.md` (정규화 집단 문서화)
- Test: `tests/test_derivations.py`

**Interfaces:**
- Consumes: Task 2의 row 필드 `paramClass`/`totalParameters`/`isReasoning`/`deprecated`.
- Produces: 모듈 함수 `size_bucket(param_class) -> str`, `price_bucket(blended) -> str|None`, `status_of(deprecated) -> str`. `cards.json`의 각 모델에 `size`(Tiny/Small/Medium/Large/Unknown), `params`(number|null), `reasoning`(bool|null), `status`("current"|"past"), `priceBucket`(Low/Medium/High|null) 추가 — Task 4의 아티팩트 JS가 읽는다.

- [ ] **Step 1: 실패하는 테스트 작성**

`tests/test_derivations.py`:

```python
"""build_cards.py 파생 함수 단위 테스트 (표준 라이브러리 unittest)."""
import sys, pathlib, unittest
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent.parent / "scripts"))
from build_cards import size_bucket, price_bucket, status_of  # noqa: E402


class TestDerivations(unittest.TestCase):
    def test_size_bucket(self):
        self.assertEqual(size_bucket("tiny"), "Tiny")
        self.assertEqual(size_bucket("small"), "Small")
        self.assertEqual(size_bucket("medium"), "Medium")
        self.assertEqual(size_bucket("large"), "Large")
        self.assertEqual(size_bucket(None), "Unknown")     # 독점모델 비공개
        self.assertEqual(size_bucket("weird"), "Unknown")  # 미지 값 방어

    def test_price_bucket_boundaries(self):
        self.assertIsNone(price_bucket(None))
        self.assertEqual(price_bucket(0.0), "Low")
        self.assertEqual(price_bucket(0.14), "Low")
        self.assertEqual(price_bucket(0.15), "Medium")   # 경계: 0.15는 Medium
        self.assertEqual(price_bucket(1.0), "Medium")    # 경계: 1.0은 Medium
        self.assertEqual(price_bucket(1.01), "High")

    def test_status_of(self):
        self.assertEqual(status_of(True), "past")
        self.assertEqual(status_of(False), "current")
        self.assertEqual(status_of(None), "current")     # 조인 실패는 current 취급


if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: 실패 확인**

Run: `python3 -m unittest tests.test_derivations -v`
Expected: FAIL — `ImportError: cannot import name 'size_bucket'`

- [ ] **Step 3: build_cards.py에 파생 함수 추가**

`slugify` 함수 정의 바로 아래에 추가:

```python
# ---------- AA 필터 속성 파생 (스크래퍼가 조인한 paramClass/deprecated/가격 → UI 버킷) ----------
def size_bucket(param_class):
    """AA Size 필터 버킷: Tiny(<4.5B)/Small(4.5-40B)/Medium(40-150B)/Large(>150B). 비공개는 Unknown."""
    return {"tiny": "Tiny", "small": "Small", "medium": "Medium", "large": "Large"}.get(param_class or "", "Unknown")

def price_bucket(blended):
    """AA Price 필터 버킷: Low(<$0.15) / Medium($0.15~1) / High(>$1). Blended 기준."""
    if blended is None: return None
    return "Low" if blended < 0.15 else "Medium" if blended <= 1.0 else "High"

def status_of(deprecated):
    """AA Status: deprecated=True → past, 그 외(false/결측) → current."""
    return "past" if deprecated is True else "current"
```

- [ ] **Step 4: 테스트 통과 확인**

Run: `python3 -m unittest tests.test_derivations -v`
Expected: PASS (3 tests OK)

- [ ] **Step 5: config.toml 화이트리스트 개방**

`config.toml`의 whitelist 배열을 빈 배열로 교체(기존 목록은 주석 보존):

```toml
[creators]
# 카드로 만들 제작사 화이트리스트 — 리더보드 "Creator" 표기와 정확히 일치해야 함.
# 비우면 [] → 전체 제작사 허용.
# 2026-07-10: AA 필터 5종 재현으로 전체 유니버스 개방(스펙 docs/superpowers/specs/2026-07-10-aa-filters-design.md).
# 이전 큐레이션: Anthropic OpenAI Google "Z AI" Alibaba MiniMax DeepSeek Kimi NVIDIA "LG AI Research" xAI SpaceXAI
whitelist = []
```

- [ ] **Step 6: build_cards.py — 속성 수집·export·카드 확장**

(a) `recs.append({...})` (3단계 모델별 집계 루프)에 속성 필드 추가 — `"s": axes_s` 라인 앞에 삽입:

```python
            "size": size_bucket(m.get("paramClass")), "params": m.get("totalParameters"),
            "reasoning": m.get("isReasoning"), "status": status_of(m.get("deprecated")),
```

(b) 카드 frontmatter(`fm` 리스트)의 `f"context_window: {m['ctx']}"` 뒤, `"radar:"` 앞에 삽입:

```python
              f"status: {m['status']}", f"size_class: {m['size']}",
              f"params_b: {m['params'] if m['params'] is not None else 'null'}",
              f"is_reasoning: {str(m['reasoning']).lower() if m['reasoning'] is not None else 'null'}",
```

(c) `export.append({...})`의 `"ctx": m["ctx"], "value": value,` 라인 뒤에 추가:

```python
            "size": m["size"], "params": m["params"], "reasoning": m["reasoning"],
            "status": m["status"], "priceBucket": price_bucket(m["price"]),
```

(d) 카드 본문 헤더라인(`f"{m['creator']} · {m['license']} · 컨텍스트 {ctxd} · 종합지능 **{m['intel']}**"`)을 status·크기 반영으로 교체:

```python
                f"{m['creator']} · {m['license']} · {m['size']}"
                + (f"({m['params']}B)" if m['params'] is not None else "")
                + f" · 컨텍스트 {ctxd} · 종합지능 **{m['intel']}**"
                + (" · ⚠️ past(구세대)" if m['status'] == 'past' else ""),
```

(e) index.md 생성부 — `제작사 {len(wl)}곳`은 빈 화이트리스트에서 "0곳"이 되므로 실제 제작사 수로 교체하고, past 모델 표기 추가. 기존:

```python
    idx = ["# 모델 (Models)", "",
           f"`scripts/build_cards.py` 자동 생성 · 데이터 {scraped_at} · 제작사 {len(wl)}곳 · 출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)",
```

교체:

```python
    n_creators = len({m["creator"] for m in emit})
    n_past = sum(1 for m in emit if m["status"] == "past")
    idx = ["# 모델 (Models)", "",
           f"`scripts/build_cards.py` 자동 생성 · 데이터 {scraped_at} · 제작사 {n_creators}곳 · current {len(emit)-n_past} + past {n_past} · 출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)",
```

그리고 목록 루프의 `written.append((slug, m["name"], m["intel"]))`을 status 포함으로 교체:

```python
        written.append((slug, m["name"], m["intel"], m["status"]))
```

index 목록 루프 교체:

```python
    for slug, name, intel, status in written:
        tag = " · past" if status == "past" else ""
        idx.append(f"* [{name}]({rel}/{slug}.md) - 종합지능 {intel}{tag}")
```

- [ ] **Step 7: radar-spec.md 정규화 집단 문서화**

`models/radar-spec.md`의 정규화 규칙 1번 항목(`min-max → 0~100` 문장)에 집단 정의를 덧붙인다. 기존 "각 벤치마크 열을 추적 모델 집단 기준 min-max → 0~100" 문장 뒤에 추가:

```markdown
   - 추적 모델 집단 = **전체 creator의 current+past 전부**(2026-07-10부터, AA Status 해제 스크랩). 과거 모델이 누적되면 min 바닥이 내려가 동일 모델의 표시 점수가 시간이 지나며 서서히 하향(드리프트)할 수 있다 — 절대 척도가 아닌 집단 상대 척도임을 명시한다.
```

- [ ] **Step 8: 파이프라인 실행으로 검증**

```bash
python3 scripts/build_cards.py && python3 -c "
import json; d=json.load(open('models/data/cards.json'))
ms=d['models']; print('총', len(ms))
from collections import Counter
print('status', Counter(m['status'] for m in ms))
print('size  ', Counter(m['size'] for m in ms))
print('reason', Counter(m['reasoning'] for m in ms))
print('priceB', Counter(m['priceBucket'] for m in ms))
grok=[m['name'] for m in ms if 'grok' in m['name'].lower()]; print('grok', len(grok))"
```
Expected: 총 400+, status에 current/past 둘 다, size 5버킷 분포, grok ≥ 5. `[완료] NNN개 카드` 출력의 NNN이 총 모델 수와 일치.

- [ ] **Step 9: 커밋** (생성물 포함 — CI 커밋과 동일 성격)

```bash
git add config.toml scripts/build_cards.py models/ tests/test_derivations.py
git commit -m "feat: 전체 유니버스 카드 + AA 필터 속성 파생 (size/price/reasoning/status)"
```

---

### Task 4: 아티팩트 필터 UI 3종 (`template.html`)

**Files:**
- Modify: `artifact/template.html` (state/buildFilters/filtered/목록/패널/메타)

**Interfaces:**
- Consumes: Task 3의 cards.json 모델 필드 `size`/`reasoning`/`status`/`params`.
- Produces: 사용자 필터 — 크기(5버킷 칩), 추론(추론/비추론 칩), 상태("Current만" 칩, 기본 켜짐). 가격·제작사·라이선스는 기존 유지.

- [ ] **Step 1: state 확장 + 초기 선택 보정**

`let state={...}` 라인을 교체:

```js
let state={view:"radar",selected:[(MODELS.find(m=>m.status==="current")||MODELS[0]).slug],q:"",creators:new Set(),lic:new Set(),maxPrice:Infinity,minCtx:0,sizes:new Set(),reasoning:new Set(),curOnly:true};
```

- [ ] **Step 2: buildFilters()에 3그룹 추가**

기존 가격 그룹(`f.appendChild(pg);`) 뒤, 함수 닫는 `}` 앞에 추가:

```js
  // 크기 (AA Size: 파라미터 버킷)
  const sg=el("div","filter-grp");sg.innerHTML="<span>크기 (파라미터)</span>";
  const sch=el("div","chips");
  const SIZE_LAB={Tiny:"Tiny <4.5B",Small:"Small 4.5–40B",Medium:"Med 40–150B",Large:"Large >150B",Unknown:"비공개"};
  ["Tiny","Small","Medium","Large","Unknown"].filter(s=>MODELS.some(m=>m.size===s)).forEach(s=>{
    const b=el("span","chip");b.textContent=SIZE_LAB[s];b.setAttribute("aria-pressed","false");
    b.onclick=()=>{b.getAttribute("aria-pressed")==="true"?(state.sizes.delete(s),b.setAttribute("aria-pressed","false")):(state.sizes.add(s),b.setAttribute("aria-pressed","true"));render();};
    sch.appendChild(b);});
  sg.appendChild(sch);f.appendChild(sg);
  // 추론 (AA Reasoning)
  const rg=el("div","filter-grp");rg.innerHTML="<span>추론</span>";
  const rch=el("div","chips");
  [["R","추론"],["NR","비추론"]].forEach(([k,lab])=>{
    const b=el("span","chip");b.textContent=lab;b.setAttribute("aria-pressed","false");
    b.onclick=()=>{b.getAttribute("aria-pressed")==="true"?(state.reasoning.delete(k),b.setAttribute("aria-pressed","false")):(state.reasoning.add(k),b.setAttribute("aria-pressed","true"));render();};
    rch.appendChild(b);});
  rg.appendChild(rch);f.appendChild(rg);
  // 상태 (AA Status: 기본 Current만 — 해제 시 past 노출)
  const stg=el("div","filter-grp");stg.innerHTML="<span>상태</span>";
  const stc=el("div","chips");
  const cb=el("span","chip");cb.textContent="Current만";cb.setAttribute("aria-pressed","true");
  cb.onclick=()=>{state.curOnly=!state.curOnly;cb.setAttribute("aria-pressed",String(state.curOnly));render();};
  stc.appendChild(cb);stg.appendChild(stc);f.appendChild(stg);
```

- [ ] **Step 3: filtered()에 배선**

`filtered()`의 `return true;` 앞에 추가:

```js
    if(state.curOnly && m.status!=="current") return false;
    if(state.sizes.size && !state.sizes.has(m.size)) return false;
    if(state.reasoning.size){
      const k=m.reasoning===true?"R":m.reasoning===false?"NR":null;
      if(!k||!state.reasoning.has(k)) return false;
    }
```

- [ ] **Step 4: 목록 past 배지 + 패널 배지 + 메타 문구**

(a) CSS `.mrow .ix{...}` 라인 뒤에 추가:

```css
  .mrow .pastb{font-family:var(--mono);font-size:9px;color:var(--warn);border:1px solid var(--line);border-radius:3px;padding:0 4px;flex:none}
```

(b) `buildList()`의 `r.append(dot,nm,ix);`를 교체:

```js
    if(m.status==="past"){const pb=el("span","pastb");pb.textContent="past";r.append(dot,nm,pb,ix);}
    else r.append(dot,nm,ix);
```

(c) `panelHTML()`의 badges에 추가 — `멀티모달` badge 라인 뒤:

```js
        <div class="badge"><div class="k">크기</div><div class="v">${m.size==="Unknown"?"비공개":m.size}${m.params!=null?`<small> ${m.params}B</small>`:""}</div></div>
        <div class="badge"><div class="k">추론 / 상태</div><div class="v">${m.reasoning===true?"추론":m.reasoning===false?"비추론":"—"}<small> · ${m.status}</small></div></div>
```

(d) `$("#meta").innerHTML=...` 라인을 교체:

```js
$("#meta").innerHTML=`데이터 ${PAYLOAD.scraped_at} · ${MODELS.length}개 모델(전체 제작사·current+past) · 기본 Current만 표시`;
```

- [ ] **Step 5: 빌드 + 검증**

```bash
python3 scripts/build_artifact.py
python3 - <<'PY'
html = open('artifact/llm-radar.html', encoding='utf-8').read()
for token in ['크기 (파라미터)', 'Current만', '비추론', 'state.curOnly', 'm.status!=="current"']:
    assert token in html, f'누락: {token}'
print('필터 토큰 검증 OK,', len(html), 'bytes')
PY
```
Expected: `필터 토큰 검증 OK` (바이트 수 ~1MB).

브라우저 확인(Playwright MCP 또는 수동): `file://…/artifact/llm-radar.html` 열어 (1) 기본 목록이 current만인지(카운트 = currentCount 근사), (2) "Current만" 해제 시 past 배지 모델이 추가되는지, (3) 크기·추론 칩이 목록을 줄이는지 확인.

- [ ] **Step 6: 커밋**

```bash
git add artifact/template.html artifact/llm-radar.html
git commit -m "feat: 아티팩트 필터 3종 추가 (크기/추론/상태, 기본 Current)"
```

---

### Task 5: 통합 검증 + 회귀 확인

**Files:**
- 없음(검증만). 필요 시 발견된 버그 수정.

**Interfaces:**
- Consumes: Task 1~4 전체.
- Produces: 검증된 파이프라인. push는 사용자 수행.

- [ ] **Step 1: 전체 파이프라인 재실행 (스크랩 제외 — Task 2 산출물 사용)**

```bash
python3 scripts/build_cards.py && python3 scripts/build_artifact.py
node --test tests/extract_attrs.test.mjs && python3 -m unittest tests.test_derivations
```
Expected: 모두 성공.

- [ ] **Step 2: 회귀 체크리스트**

```bash
python3 - <<'PY'
import json
d = json.load(open('models/data/cards.json')); ms = d['models']
cur = [m for m in ms if m['status'] == 'current']
grok = [m for m in ms if 'grok' in m['name'].lower() and m['status'] == 'current']
latest = json.load(open('models/data/latest.json'))
print('cards 총', len(ms), '/ current', len(cur), '/ latest currentCount', latest['currentCount'])
print('current Grok', len(grok))
assert len(grok) >= 5, 'Grok 회귀!'
assert abs(len(cur) - latest['currentCount']) <= 5, 'current 수 불일치(dedupe 감안 ±5)'
print('회귀 OK')
PY
```
Expected: `회귀 OK`. (dedupe_variants로 동명 중복이 접히므로 ±5 허용.)

- [ ] **Step 3: 워크플로 확인 (수정 불필요 검증)**

`.github/workflows/update.yml`의 실행 명령(`node scripts/scrape_aa.mjs`, `python3 scripts/build_cards.py`, `python3 scripts/build_artifact.py`)이 변경 없이 그대로 동작함을 확인 — 신규 파일(extract_attrs.mjs)은 scrape가 import하므로 별도 스텝 불필요.

- [ ] **Step 4: 최종 커밋 + 사용자 push 안내**

작업 트리에 잔여 변경이 있으면 커밋. 이후 사용자에게 `! git push origin main` 안내, push 후 `gh workflow run update.yml`로 실제 배포 검증(라이브 스크랩 포함 전체 사이클) 및 사이트에서 5필터 확인.
