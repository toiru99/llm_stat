// AA 페이지 임베드(__next_f 청크 연결 텍스트)에서 모델 필터 속성만 추출.
// 소형(nav)·상세 두 형태의 모델 오브젝트가 있고 둘 다 "deprecated" 키를 가짐.
// id·slug·name으로 시작하는 오브젝트를 균형 파싱 →
// name+deprecated 를 갖춘 오브젝트만 채택. paramClass 보유(상세) 엔트리 우선.
// 리더보드 테이블은 shortName으로 렌더되므로(실측: "Claude Opus 4.8 (max)" ←
// name "Claude Opus 4.8 (Adaptive Reasoning, Max Effort)") name·shortName 둘 다
// 키로 등록한다. 정확한 name 매치가 shortName 매치보다 우선.
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

// 같은 모델이 소형(nav)·상세 두 형태로 여러 번 등장한다. 정보량이 많은 쪽을 남긴다.
// paramClass 만으로 판정하면 파라미터 비공개(null) 독점 모델이 가격까지 잃는다.
const detail = (a) =>
  [a.paramClass, a.totalParameters, a.blendedPrice, a.priceClass].filter((v) => v != null).length;

function blendedPrice(o) {
  if (Number.isFinite(o.price1mBlended7To2To1)) return o.price1mBlended7To2To1;
  const input = o.price1mInputTokens, output = o.price1mOutputTokens;
  if (!Number.isFinite(input) || !Number.isFinite(output)) return null;
  const cache = o.cacheHitPrice ?? input;
  if (!Number.isFinite(cache)) return null;
  return (7 * cache + 2 * input + output) / 10;
}

export function extractModelAttrs(text) {
  const byName = new Map();   // 정확한 name 키 (우선)
  const byShort = new Map();  // shortName 키 (보조 — 테이블 표기)
  // 모델 id 제거 및 creator 중첩 위치 변경에 영향받지 않도록 후보 자체를 파싱한다.
  for (const match of text.matchAll(/\{(?=\s*"(?:id|slug|name)"\s*:)/g)) {
    const raw = parseBalanced(text, match.index);
    if (!raw) continue;
    let o;
    try { o = JSON.parse(raw); } catch { continue; }
    if (typeof o.name !== 'string' || typeof o.deprecated !== 'boolean') continue;
    const attrs = {
      paramClass: o.paramClass ?? null,
      totalParameters: o.totalParameters ?? null,
      isReasoning: typeof o.isReasoning === 'boolean' ? o.isReasoning : null,
      deprecated: o.deprecated,
      // 기존 혼합가가 없으면 원본 단가로 복원 (캐시 미제공은 입력가 사용).
      blendedPrice: blendedPrice(o),
      priceClass: typeof o.priceClass === 'string' ? o.priceClass : null,
    };
    const prev = byName.get(o.name);
    if (!prev || detail(attrs) >= detail(prev)) byName.set(o.name, attrs);  // 상세 유지
    if (typeof o.shortName === 'string' && o.shortName !== o.name) {
      const prevS = byShort.get(o.shortName);
      if (!prevS || detail(attrs) >= detail(prevS)) byShort.set(o.shortName, attrs);
    }
  }
  // 병합: shortName 항목을 먼저 깔고 정확 name 항목으로 덮어씀 (name 우선)
  const out = new Map(byShort);
  for (const [k, v] of byName) out.set(k, v);
  return out;
}
