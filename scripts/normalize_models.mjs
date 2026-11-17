import {extractModelAttrs} from './extract_attrs.mjs';
const LEGACY = {'mmmu-pro':'MMMU-Pro','humanitys-last-exam':"Humanity's Last Exam",'gpqa-diamond':'GPQA Diamond','critpt':'CritPt','artificial-analysis-long-context-reasoning':'AA-LCR','scicode':'SciCode','ifbench':'IFBench','terminalbench-hard':'Terminal-Bench Hard','tau2-bench':'τ²-Bench Telecom','tau3-banking':'Banking','gdpval-aa-normalized':'GDPval'};
const number = v => Number.isFinite(v) ? v : null;
export function normalizeModels(models) {
 const byId=new Map();
 for(const o of models) {
  if(!o || !(o.id||o.slug) || typeof o.name!=='string' || typeof o.deprecated!=='boolean' || !o.scores) continue;
  const row={Model:o.shortName||o.name,Creator:o.modelCreatorName||'Unknown',License:o.isOpenWeights===true?'Open':o.isOpenWeights===false?'Proprietary':'Unknown',
   'Artificial Analysis Intelligence Index':number(o.intelligenceIndex),'Context Window':o.contextWindowTokens,
   'Input Price':o.price1mInputTokens==null?null:String(o.price1mInputTokens),'Output Price':o.price1mOutputTokens==null?null:String(o.price1mOutputTokens),
   'Cache Hit Price':o.cacheHitPrice==null?null:String(o.cacheHitPrice),'Median Tokens/s':number(o.outputSpeed),
   'Latency First Chunk':number(o.timeToFirstToken),'Total Response':null,
   ...extractModelAttrs(JSON.stringify(o)).get(o.name),
   aa:{id:o.id||o.slug,releaseSlug:o.release?.slug||o.slug,fullName:o.name,suffix:o.suffix||null,scores:o.scores,
    costPerTask:number(o.intelligenceIndexCostPerTask),timePerTask:number(o.intelligenceIndexTimePerTask),firstAnswer:number(o.timeToFirstAnswerToken),cachePrice:number(o.cacheHitPrice)}};
  for(const [key,label] of Object.entries(LEGACY)) row[label]=number(o.scores[key])==null?null:o.scores[key]*(key==='gdpval-aa-normalized'?1:100);
  byId.set(o.id||o.slug,row);
 }
 return [...byId.values()];
}
