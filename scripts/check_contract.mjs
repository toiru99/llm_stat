import {INDEX_COMPONENTS} from '../artifact/benchmarks.mjs';

export function checkContract(rows, previous=null) {
  const fields = {
    index: r => r['Artificial Analysis Intelligence Index'],
    cost: r => r.aa?.costPerTask,
    time: r => r.aa?.timePerTask,
    size: r => r.totalParameters,
    activeSize: r => r.aa?.activeParameters,
    ...Object.fromEntries(INDEX_COMPONENTS.map(({key})=>[key,r=>r.aa?.scores?.[key]])),
  };
  const errors = [];
  for (const [key,get] of Object.entries(fields)) {
    const coverage = records => records.filter(r=>Number.isFinite(get(r))).length;
    const count = coverage(rows);
    const prior = previous ? coverage(previous) : 0;
    if (count<10) errors.push(`핵심 지표 소실 ${key}: ${count}`);
    else if (count<prior/2) errors.push(`핵심 지표 급감 ${key}: ${prior} → ${count}`);
  }
  // Before hydration AA shows just the featured models. Catch that on the first run too.
  const sizedOpen = rows.filter(r=>r.License==='Open' && r.paramClass!=null);
  if (sizedOpen.filter(r=>Number.isFinite(r.totalParameters)).length<sizedOpen.length/2) {
    errors.push('공개 가중치 전체 파라미터 표 로딩 미완료');
  }
  return errors;
}
