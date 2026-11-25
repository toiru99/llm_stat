// AA Intelligence Index v5.0.2. Omniscience contributes two separate scores.
export const INDEX_COMPONENTS = [
  {group:'업무', key:'aa-briefcase', label:'AA-Briefcase v1.1', short:'문서 업무', unit:'Elo', weight:15},
  {group:'업무', key:'automationbench-aa', label:'AutomationBench-AA', short:'업무 자동화', unit:'%', weight:5},
  {group:'업무', key:'gdp-pdf', label:'GDP.pdf', short:'PDF 이해', unit:'%', weight:5},
  {group:'코딩', key:'frontiercode-2-0', label:'FrontierCode-AA 2.0', short:'저장소 수정', unit:'%', weight:15},
  {group:'코딩', key:'terminalbench-4-1', label:'Terminal-Bench 4.1', short:'터미널 수행', unit:'%', weight:10},
  {group:'과학', key:'terminal-bench-science', label:'Terminal-Bench-Science 0.1', short:'과학 과업', unit:'%', weight:15},
  {group:'과학', key:'critpt-v2-hard', label:'CritPt v2 Hard', short:'물리 추론', unit:'%', weight:10},
  {group:'일반', key:'omniscience-accuracy', label:'AA-Omniscience v1.1', short:'지식 정확도', unit:'%', weight:10},
  {group:'일반', key:'omniscience-non-hallucination', label:'AA-Omniscience v1.1', short:'비환각률', unit:'%', weight:5},
  {group:'일반', key:'hle-diamond', label:'HLE-Diamond', short:'고난도 문답', unit:'%', weight:10},
];
