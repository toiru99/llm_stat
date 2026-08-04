// 스크래핑 결과 새너티 게이트 — 사이트 구조 변경을 조용히 통과시키지 않기 위한 방어선.
// 이력: 2026-07-21 AA가 "Blended USD/1M Tokens" 열을 "Cost per Task USD"로 교체했을 때
// 열 수(41)·모델 수(590)·조인율은 모두 정상이라 게이트를 통과했고, 가격이 전량 비어 있는
// 데이터가 2주간 배포됐다. 이후 "값이 실제로 채워졌는가"도 함께 본다.
// 출처: artificialanalysis.ai

export const MIN_HEADERS = 30;      // 표 열 그룹을 모두 펼쳤을 때 기대 최소 열 수
export const MIN_MODELS = 400;      // Status(Current) 해제 시 전체 유니버스 규모
export const MIN_JOIN_RATE = 0.9;   // 임베드 속성 조인율
export const MIN_PRICE_RATE = 0.5;  // 혼합가 보유 비율 (실측 ~0.68)

export function checkScrape({ headerCount, modelCount, rows, joined }) {
  const errs = [];
  if (!modelCount || headerCount < MIN_HEADERS)
    errs.push(`열 ${headerCount}, 모델 ${modelCount}. 표 구조 변경 의심.`);
  if (modelCount < MIN_MODELS)
    errs.push(`전체 유니버스 ${modelCount}개(<${MIN_MODELS}). Status 해제 미반영 의심.`);
  if (modelCount && joined / modelCount < MIN_JOIN_RATE)
    errs.push(`속성 조인율 ${joined}/${modelCount}. 임베드 구조 변경 의심.`);
  const priced = rows.filter((r) => r.blendedPrice != null).length;
  if (modelCount && priced / modelCount < MIN_PRICE_RATE)
    errs.push(`가격 보유 ${priced}/${modelCount}. 가격 필드 변경 의심.`);
  return errs;
}
