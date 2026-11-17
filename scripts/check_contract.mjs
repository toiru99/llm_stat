const CORE=['aa-briefcase','automationbench-aa','gdp-pdf','frontiercode-2-0','terminalbench-4-0','terminal-bench-science','critpt-v2-hard','omniscience-accuracy','omniscience-non-hallucination','hle-diamond'];
export function checkContract(rows,previous=null){
 const fields={index:r=>r['Artificial Analysis Intelligence Index'],cost:r=>r.aa?.costPerTask,time:r=>r.aa?.timePerTask,...Object.fromEntries(CORE.map(k=>[k,r=>r.aa?.scores?.[k]]))};
 const count=rs=>Object.fromEntries(Object.entries(fields).map(([k,get])=>[k,rs.filter(r=>Number.isFinite(get(r))).length]));
 const counts=count(rows),old=previous?count(previous):{};
 return Object.keys(fields).flatMap(k=>counts[k]<10?[`핵심 평가 소실 ${k}: ${counts[k]}`]:old[k]&&counts[k]<old[k]*0.5?[`핵심 평가 급감 ${k}: ${old[k]} → ${counts[k]}`]:[]);
}
