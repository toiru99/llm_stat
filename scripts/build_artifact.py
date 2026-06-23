#!/usr/bin/env python3
"""cards.json → artifact/llm-radar.html (템플릿에 데이터 주입).

build_cards.py 다음에 실행. 산출된 artifact/llm-radar.html 를 Artifact 도구로
config.toml [artifact].url 에 재발행한다(재발행은 Claude 측 동작).
"""
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
tpl = (ROOT / "artifact" / "template.html").read_text(encoding="utf-8")
data = (ROOT / "models" / "data" / "cards.json").read_text(encoding="utf-8")
out = tpl.replace("__CARDS__", data)
assert "__CARDS__" not in out, "주입 실패: 템플릿에 __CARDS__ 토큰이 없습니다"
dest = ROOT / "artifact" / "llm-radar.html"
dest.write_text(out, encoding="utf-8")
print(f"[완료] {dest.relative_to(ROOT)} 생성 ({len(out)} bytes)")
