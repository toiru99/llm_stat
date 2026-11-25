import {test,before,after} from 'node:test';import assert from 'node:assert/strict';import {chromium} from 'playwright';
let b,p;const errors=[];
before(async()=>{b=await chromium.launch();p=await b.newPage();p.on('pageerror',e=>errors.push(e.message));await p.goto('file://'+process.cwd()+'/artifact/llm-radar-legacy.html');await p.locator('[data-view=explore]').click();});after(async()=>{await b?.close();});
test('용도별 탐색 탭은 버전·측정 공백 표시',async()=>{assert.match(await p.locator('#freshness').innerText(),/5\.0\.1/);assert.equal(await p.locator('.explorer').count(),1);assert.match(await p.locator('.coverage').innerText(),/실측/);});
test('코딩 목적 변경 시 실측 점수 내림차순·근거 표시',async()=>{await p.locator('[data-purpose=coding]').click();assert.match(await p.locator('.explore-note').first().innerText(),/FrontierCode/);const nums=await p.locator('.explore-table tbody tr td:nth-child(2)').allTextContents();const values=nums.filter(x=>x!=='미측정').map(parseFloat);assert.ok(values.length>0);assert.ok(values.every((v,i)=>!i||values[i-1]>=v));});
test('음수 토큰 비용 계산 거부 및 비교 다운로드 제공',async()=>{await p.locator('summary').filter({hasText:'API 비용'}).click();await p.locator('#budget-in').fill('-1');assert.match(await p.locator('#budget-results').innerText(),/계산 불가/);const dl=p.waitForEvent('download');await p.locator('#download-comparison').click();assert.equal((await dl).suggestedFilename(),'model-comparison.json');});
test('모바일에서 문서 전체가 가로로 넘치지 않음',async()=>{await p.setViewportSize({width:390,height:844});assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth));assert.deepEqual(errors,[]);await p.screenshot({path:'/tmp/llm-explorer-mobile.png',fullPage:true});await p.setViewportSize({width:1440,height:1000});await p.screenshot({path:'/tmp/llm-explorer-desktop.png',fullPage:true});});

test('전체 제작사 검색·고정·취소·재방문 유지와 전체 보기',async()=>{
 await p.locator('#filter-toggle').click();
 await p.getByRole('button',{name:'고정 편집'}).click();
 await p.getByRole('button',{name:'모두 해제',exact:true}).click();
 await p.getByLabel('제작사 검색',{exact:true}).fill('OpenAI');
 await p.getByRole('checkbox',{name:'OpenAI',exact:true}).check();
 await p.getByRole('button',{name:'저장하고 적용'}).click();
 assert.equal(await p.locator('#creator-manager').isVisible(),false);
 await p.reload();await p.locator('[data-view=explore]').click();await p.locator('#filter-toggle').click();
 assert.equal(await p.getByRole('button',{name:'고정만 (1)',exact:true}).getAttribute('aria-pressed'),'true');
 assert.ok(await p.locator('.explore-table tbody tr').count()>0);
 const creators=await p.locator('.explore-table tbody tr td:first-child small').allTextContents();
 assert.ok(creators.every(s=>s.startsWith('OpenAI')));
 await p.getByRole('button',{name:'고정 편집'}).click();
 await p.getByRole('button',{name:'모두 해제',exact:true}).click();
 await p.keyboard.press('Escape');await p.reload();await p.locator('[data-view=explore]').click();await p.locator('#filter-toggle').click();
 assert.equal(await p.getByRole('button',{name:'고정만 (1)',exact:true}).getAttribute('aria-pressed'),'true');
 await p.getByRole('button',{name:'전체 보기',exact:true}).click();
 await p.reload();await p.locator('[data-view=explore]').click();await p.locator('#filter-toggle').click();assert.equal(await p.getByRole('button',{name:'전체 보기',exact:true}).getAttribute('aria-pressed'),'true');
});
test('빠른 답변 품질 조건 적용·저장 및 비용 가정 유지',async()=>{
 await p.locator('[data-purpose=fast]').click();
 assert.equal(await p.locator('#quality-floor').inputValue(),'30');
 const ids=await p.locator('[data-choose]').evaluateAll(bs=>bs.map(b=>b.dataset.choose));
 assert.ok(ids.length>0);
 assert.ok(await p.evaluate(ids=>ids.every(id=>{const m=MODELS.find(m=>m.slug===id);return m.intel>=30&&Number.isFinite(m.aa?.firstAnswer);}),ids));
 await p.locator('#quality-floor').selectOption('50');await p.reload();await p.locator('[data-view=explore]').click();
 await p.locator('[data-purpose=fast]').click();assert.equal(await p.locator('#quality-floor').inputValue(),'50');
 await p.locator('summary').filter({hasText:'API 비용'}).click();await p.locator('#budget-in').fill('9000');
 await p.locator('[data-purpose=coding]').click();assert.equal(await p.locator('#budget-in').inputValue(),'9000');
 assert.deepEqual(errors,[]);
});

test('용도별 순위 페이지 이동과 필터 변경 후 첫 페이지 복귀',async()=>{
  await p.reload();await p.locator('[data-view=explore]').click();
  const rows=p.locator('.explore-table [data-choose]');
  const first=await rows.first().getAttribute('data-choose');
  await p.locator('#rank-pages [data-step="1"]').click();
  assert.notEqual(await rows.first().getAttribute('data-choose'),first);
  assert.equal(await p.locator('.explore-table-wrap').evaluate(e=>e.scrollHeight<=e.clientHeight),true);
  await p.locator('[data-purpose=coding]').click();
  assert.equal(await p.locator('#rank-pages [data-step="-1"]').isDisabled(),true);
});
