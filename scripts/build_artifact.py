#!/usr/bin/env python3
"""cards.json → artifact/llm-radar.html (완결 HTML 문서, GitHub Pages 서빙용).

build_cards.py 다음에 실행. 템플릿(artifact/template.html, body 내용)에 데이터를 주입하고
doctype/head(title·viewport·favicon)로 감싼 자체 완결 문서를 만든다.
"""
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
tpl = (ROOT / "artifact" / "template.html").read_text(encoding="utf-8")
data = (ROOT / "models" / "data" / "cards.json").read_text(encoding="utf-8")

body = tpl.replace("__CARDS__", data)
assert "__CARDS__" not in body, "주입 실패: 템플릿에 __CARDS__ 토큰이 없습니다"

FAVICON = ("data:image/svg+xml,"
           "<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>"
           "<text y=%22.9em%22 font-size=%2290%22>📡</text></svg>")
HEAD = (
    "<!doctype html>\n<html lang=\"ko\">\n<head>\n"
    "<meta charset=\"utf-8\">\n"
    "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n"
    "<title>LLM 능력 레이더 · Alan</title>\n"
    f"<link rel=\"icon\" href=\"{FAVICON}\">\n"
    "</head>\n<body>\n"
)
out = HEAD + body + "\n</body>\n</html>\n"

dest = ROOT / "artifact" / "llm-radar.html"
dest.write_text(out, encoding="utf-8")
print(f"[완료] {dest.relative_to(ROOT)} 생성 ({len(out)} bytes, 완결 문서)")
