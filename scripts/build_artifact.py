#!/usr/bin/env python3
"""cards.json → artifact/llm-radar.html (완결 HTML 문서, GitHub Pages 서빙용).

build_cards.py 다음에 실행. 템플릿(artifact/template.html, body 내용)에 데이터를 주입하고
doctype/head(title·viewport·favicon)로 감싼 자체 완결 문서를 만든다.
"""
import pathlib, subprocess

ROOT = pathlib.Path(__file__).resolve().parent.parent
tpl = (ROOT / "artifact" / "template.html").read_text(encoding="utf-8")
data = (ROOT / "models" / "data" / "cards.json").read_text(encoding="utf-8")

body = tpl.replace("__CARDS__", data.replace("</", "<\\/"))
body = body.replace("__BENCHMARKS__", (ROOT / "artifact/benchmarks.mjs").read_text().replace("export ", ""))
body = body.replace("__COMPARISON_CHARTS__", (ROOT / "artifact/comparison-charts.js").read_text())
body = body.replace("__EXPLORER_CORE__", (ROOT / "artifact/explorer.mjs").read_text().replace("export ", ""))
body = body.replace("__CREATOR_PREFS__", (ROOT / "artifact/creator-prefs.js").read_text())
body = body.replace("__EXPLORER_UI__", (ROOT / "artifact/explorer-ui.js").read_text())
body = "<style>" + (ROOT / "artifact/explorer.css").read_text() + (ROOT / "artifact/comparison.css").read_text() + "</style>" + body
assert "__CARDS__" not in body, "주입 실패: 템플릿에 __CARDS__ 토큰이 없습니다"

FAVICON = ("data:image/svg+xml,"
           "<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>"
           "<text y=%22.9em%22 font-size=%2290%22>📡</text></svg>")
HEAD = (
    "<!doctype html>\n<html lang=\"ko\">\n<head>\n"
    "<meta charset=\"utf-8\">\n"
    "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n"
    "<title>LLM 모델 가이드 · Alan</title>\n"
    f"<link rel=\"icon\" href=\"{FAVICON}\">\n"
    "</head>\n<body>\n"
)
out = HEAD + body + "\n</body>\n</html>\n"

dest = ROOT / "artifact" / "llm-radar-legacy.html"
dest.write_text(out.replace("__RADAR_MODE__", "legacy"), encoding="utf-8")
(ROOT / "artifact/llm-radar.html").write_text(out.replace("__RADAR_MODE__", "current"), encoding="utf-8")
print(f"[완료] {dest.relative_to(ROOT)} 생성 ({len(out)} bytes, 완결 문서)")

# Astryx is bundled locally; the deployed file needs no CDN or runtime build server.
subprocess.run(["node", str(ROOT / "scripts/build_ui.mjs")], cwd=ROOT, check=True)
js = (ROOT / "web/dist/main.js").read_text().replace("</script", "<\\/script")
css = (ROOT / "web/dist/main.css").read_text()
safe_data = data.replace("<", "\\u003c")
html = HEAD.replace("<body>", "<style>" + css + "</style><body>") + '<div id="root"></div>' + '<script>globalThis.MODEL_DATA=' + safe_data + ';</script><script>' + js + '</script></body></html>'
main_dest = ROOT / "artifact/llm-guide-astryx.html"
main_dest.write_text(html, encoding="utf-8")
print(f"[완료] Astryx UI → {main_dest.relative_to(ROOT)} ({len(html)} characters)")
