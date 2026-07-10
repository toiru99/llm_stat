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
