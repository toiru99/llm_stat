let purpose='all', rankingPage=0;
const RANKING_PAGE_SIZE=10;
const budget={input:1000,output:500,count:1000};
const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const dec=v=>Number.isFinite(v)?new Intl.NumberFormat('ko-KR',{maximumFractionDigits:2}).format(v):'미측정';
function scoreText(v,unit){return Number.isFinite(v)?dec(v*(unit==='%'?100:1))+(unit==='%'?'%':' '+unit):'미측정';}
function pagerHTML(page, total) {
  if (total < 2) return "";
  return `<button type="button" data-step="-1" ${page===0?"disabled":""}>이전</button><span>${page+1} / ${total}</span><button type="button" data-step="1" ${page===total-1?"disabled":""}>다음</button>`;
}
function explorerHTML(){
 const rows=rankModels(filtered(),purpose,qualityFloor),p=PURPOSES[purpose];
 const pages=Math.ceil(rows.length/RANKING_PAGE_SIZE);
 rankingPage=Math.min(rankingPage,Math.max(0,pages-1));
 const visible=rows.slice(rankingPage*RANKING_PAGE_SIZE,(rankingPage+1)*RANKING_PAGE_SIZE);
 const quality=rows.filter(m=>m.intel!=null).length,priced=rows.filter(m=>m.aa?.costPerTask!=null).length;
 return `<div class="explorer"><div class="explore-intro"><h2>용도별 실측 순위</h2></div>
 <div class="purpose-tabs" aria-label="용도">${Object.entries(PURPOSES).map(([k,v])=>`<button data-purpose="${k}" aria-pressed="${k===purpose}">${v.label}</button>`).join('')}</div>
 ${purpose==='fast'?`<div class="quality-control"><label for="quality-floor">품질 조건</label><select id="quality-floor" aria-label="빠른 답변 최소 종합지수">${[0,20,30,40,50,qualityFloor].filter((v,i,a)=>a.indexOf(v)===i).sort((a,b)=>a-b).map(v=>`<option value="${v}" ${qualityFloor===v?'selected':''}>종합지수 ${v} 이상${v===30?' · 기본':''}</option>`).join('')}</select><p>실측 종합지수와 첫 답변 대기가 모두 있는 모델만 표시합니다. 기본 30은 탐색용 기준이며 실제 업무 품질을 보장하지 않습니다. 전체 답변 완료 시간이 아닌 첫 답변 토큰까지의 대기입니다.</p></div>`:''}
 <p class="explore-note">${p.key?`정렬 근거: ${safe(p.bench)} · ${p.lower?'낮을수록':'높을수록'} 우수. 이 평가 하나로 해당 업무 전체의 적합성을 보장하지 않습니다.`:'정렬 근거: AA Intelligence Index v'+safe(PAYLOAD.methodology?.intelligence||'미확인')+'. 점수가 없는 모델은 아래에 표시합니다.'}</p>
 <div class="coverage" id="ranking-top" tabindex="-1">검색 결과 ${rows.length}개 중 종합지수 ${quality}개 · 과제 비용 ${priced}개 실측 <span>추정값으로 순위를 채우지 않습니다.</span></div>
 <div class="explore-table-wrap"><table class="explore-table"><thead><tr><th>모델 / 비교 선택</th><th>${p.key?'용도별 실측':'종합지수'}</th><th>과제 비용<small>USD / 과제</small></th><th>과제 시간<small>분 / 과제</small></th></tr></thead><tbody>${visible.map(m=>`<tr${state.selected.includes(m.slug)?' class="chosen"':''}><td><button class="choose-model" data-choose="${safe(m.slug)}" aria-pressed="${state.selected.includes(m.slug)}">${state.selected.includes(m.slug)?'✓ ':''}${safe(m.name)}</button><small>${safe(m.creator)} · ${m.license==='Open'?'공개 가중치':'독점'} ${onFrontier(m,rows)?' · <b>비용·지능 효율 후보</b>':''}</small></td><td>${p.key?scoreText(purposeScore(m,purpose),p.unit):dec(m.intel)}</td><td>${m.aa?.costPerTask!=null?usd(m.aa.costPerTask):'미측정'}</td><td>${dec(m.aa?.timePerTask==null?null:m.aa.timePerTask/60)}</td></tr>`).join('')}</tbody></table></div>
 <div id="rank-pages" class="pager">${pagerHTML(rankingPage,pages)}</div>
 ${!rows.length?'<p class="empty">조건에 맞는 모델이 없습니다. 품질 기준을 낮추거나 제작사·가격·검색 조건을 완화해 보세요.</p>':''}
 <p class="explore-note">효율 후보: 현재 검색 결과에서 비용이 더 낮거나 같으면서 지수가 더 높거나 같은 다른 후보가 없는 모델입니다. 과제 비용·시간은 AA 평가 기준이며 사용자 작업·채팅 구독료와 다릅니다.</p>
 <details class="developer-tools"><summary>API 비용 계산 · 개발자 도구</summary><p>요청당 입·출력 토큰과 월 요청 수를 입력하세요. 추론·도구·캐시 저장 비용은 포함하지 않습니다.</p><div class="cost-inputs"><label>입력 토큰<input id="budget-in" type="number" min="0" value="${budget.input}"></label><label>출력 토큰<input id="budget-out" type="number" min="0" value="${budget.output}"></label><label>월 요청 수<input id="budget-count" type="number" min="0" value="${budget.count}"></label></div><div id="budget-results"></div></details>
 <details class="developer-tools"><summary>평가 구성·데이터 한계</summary><p>v5: 업무·코딩·과학·일반 각 25%. 공식 영역 점수를 자체로 만들지 않고 개별 실측을 보여줍니다. 영어 중심 평가이며 한국어 능력을 보장하지 않습니다. 이미지 입력이 일부 과제에 포함됩니다.</p><p>성능 v3의 속도는 첫 토큰 대기를 포함합니다. 첫 토큰(TTFT)과 첫 답변 토큰은 별도 지표입니다. 구형 데이터와 직접 시계열 비교하지 않습니다.</p><a href="https://artificialanalysis.ai/methodology/intelligence-benchmarking" target="_blank" rel="noopener">공식 방법론 읽기 ↗</a></details></div>`;
}
// Extra and historical leaderboard scores outside the current index.
const extraNames = {
  'aa-3d':'AA-3D','aa-analyst-agent':'AA-AnalystAgent','aime-2025':'AIME 2025',
  'apex-agents-aa':'APEX-Agents-AA','artificial-analysis-long-context-reasoning':'AA-LCR',
  'code2video-aa':'Code2Video-AA','critpt':'CritPt','enterprise-ops-gym-aa':'EnterpriseOps-Gym-AA',
  'frontiercode':'FrontierCode','gdpval-aa-normalized':'GDPval-AA','gpqa-diamond':'GPQA Diamond',
  'harvey-lab-aa':'Harvey LAB-AA','healthbench':'HealthBench','healthbench-professional':'HealthBench Professional',
  'humanitys-last-exam':"Humanity’s Last Exam",'ifbench':'IFBench','itbench-aa':'ITBench-AA',
  'livecodebench':'LiveCodeBench','mka':'MKA','mlcr-aa':'MLCR-AA','mmmu-pro':'MMMU-Pro',
  'scicode':'SciCode','tau2-bench':'τ²-Bench Telecom','tau3-banking':'τ³-Banking',
  'terminalbench-4-0':'Terminal-Bench 4.0','terminalbench-2-1':'Terminal-Bench 2.1','terminalbench-hard':'Terminal-Bench Hard','vials-aa':'VIALS-AA'
};
const extraElo = new Set(['aa-3d','code2video-aa','gdpval-aa-normalized']);
const indexKeys = new Set(INDEX_COMPONENTS.map(c=>c.key));
const extraKeys = [...new Set(MODELS.flatMap(m=>Object.entries(m.aa?.scores??{})
  .filter(([key,v])=>!indexKeys.has(key)&&Number.isFinite(v)).map(([key])=>key)))].sort();

function scoreTable(sel, metrics) {
  const head = sel.map((m,i)=>`<th scope="col" style="border-top:3px solid var(${SERIES[i]})">${safe(m.name)}</th>`).join('');
  const rows = metrics.map(c=>`<tr><th scope="row">${c.group?`<small>${c.group} · 지수 비중 ${c.weight}%</small>`:''}${safe(c.label)}${c.short?`<small>${c.short}</small>`:''}</th>
    ${sel.map(m=>`<td>${scoreText(m.aa?.scores?.[c.key],c.unit)}</td>`).join('')}</tr>`).join('');
  return `<div class="evidence-table-wrap"><table class="evidence-table"><thead><tr><th>실측 지표</th>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
}
function benchmarkTables(sel) {
  const prefix=state.view;
  const extra = extraKeys.map(key=>({key,label:extraNames[key]||key,unit:extraElo.has(key)?'Elo':Object.hasOwn(extraNames,key)?'%':'원본값'}));
  return `<details class="score-detail" data-evidence="${prefix}-index" ${state.openEvidence.has(prefix+'-index')?'open':''}><summary>AA 지수 구성 · 9개 평가 / 10개 점수</summary>${scoreTable(sel,INDEX_COMPONENTS)}</details>
    <details class="score-detail" data-evidence="${prefix}-extra" ${state.openEvidence.has(prefix+'-extra')?'open':''}><summary>지수 외 평가 · 수집된 ${extra.length}개 점수</summary>${scoreTable(sel,extra)}</details>`;
}
function evidenceHTML(sel){
  return `<div class="evidence-head"><h2>비교의 근거</h2><button id="download-comparison">비교 JSON 저장</button></div>
    ${benchmarkTables(sel)}
    <p class="chart-note">첫 답변 대기 · ${sel.map(m=>safe(m.name)+' '+scoreText(m.aa?.firstAnswer,'초')).join(' / ')}</p>
    <p class="chart-note">미측정은 공개된 점수가 없는 경우입니다. 추론 설정에 따라 같은 모델도 결과가 달라집니다.</p>`;
}
function bindExplorer(){
 $('#rank-pages').onclick=e=>{
   const step=e.target.closest('[data-step]');
   if(!step) return;
   rankingPage+=Number(step.dataset.step);render();$('#ranking-top').focus();
 };
 const floor=$('#quality-floor');if(floor)floor.onchange=()=>{rankingPage=0;qualityFloor=Number(floor.value);persistPreferences();render();};
 document.querySelectorAll('[data-purpose]').forEach(b=>b.onclick=()=>{rankingPage=0;purpose=b.dataset.purpose;render();});
 document.querySelectorAll('[data-choose]').forEach(b=>b.onclick=()=>toggleSelect(b.dataset.choose));
 const selected=MODELS.filter(m=>state.selected.includes(m.slug));
 const dl=$('#download-comparison');if(dl)dl.onclick=()=>{const blob=new Blob([JSON.stringify({scraped_at:PAYLOAD.scraped_at,methodology:PAYLOAD.methodology,purpose,models:selected.map(m=>({id:m.aa?.id,name:m.name,aa:m.aa,intel:m.intel}))},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='model-comparison.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);};
 const update=()=>{const a=Number($('#budget-in').value),b=Number($('#budget-out').value),n=Number($('#budget-count').value);Object.assign(budget,{input:a,output:b,count:n});$('#budget-results').textContent=selected.map(m=>{const c=tokenCost(m,a,b,n);return m.name+': '+(c==null?'계산 불가':'월 $'+dec(c));}).join(' / ') || '비용을 계산할 모델을 선택하세요.';};
 if($('#budget-in')){['#budget-in','#budget-out','#budget-count'].forEach(id=>$(id).oninput=update);update();}
}
