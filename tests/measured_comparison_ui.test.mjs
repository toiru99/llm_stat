import {test,before,after} from 'node:test';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';

let browser, page;
const errors=[];
before(async()=>{
  browser=await chromium.launch();
  page=await browser.newPage();
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto('file://'+process.cwd()+'/artifact/llm-radar.html');
});
after(async()=>await browser?.close());

test('기본 레이더의 실제 좌표와 Elo 별도 표기가 원본 평가 점수에 일치',async()=>{
  await page.locator('.add-slot').click();
  await page.locator('.model-pick:enabled').first().click();
  await page.getByRole('button',{name:'선택 완료'}).click();
  const {value,y,elo}=await page.evaluate(()=>{
    const m=MODELS.find(m=>m.slug===state.selected[0]);
    const first=document.querySelector('.trace [data-axis="automationbench-aa"]');
    return {value:m.aa.scores['automationbench-aa'],y:Number(first.getAttribute('cy')),elo:m.aa.scores['aa-briefcase']};
  });
  assert.ok(Math.abs(y-(195-154*value))<0.00001);
  assert.ok((await page.locator('.elo-band').innerText()).includes(new Intl.NumberFormat('ko-KR',{maximumFractionDigits:2}).format(elo)+' Elo'));
  assert.equal(await page.locator('.score-detail').first().locator('tbody tr').count(),10);
  assert.ok(await page.locator('.score-detail').last().locator('tbody tr').count()>10);
});
test('실측 0을 그리되 결측·추정 축을 평균으로 연결하지 않는다',async()=>{
  const result=await page.evaluate(()=>{
    const fixture={name:'부분 측정',slug:'fixture',aa:{scores:{'gdp-pdf':0,'critpt-v2-hard':0.25}},
      radar:{coding:{measured:true,r:75,estimated:true},reasoning:{measured:true,r:78,estimated:false}}};
    const inspect=mode=>{
      state.radarMode=mode;
      const t=document.createElement('template');t.innerHTML=radarHTML([fixture]);
      return {axes:[...t.content.querySelectorAll('.trace circle')].map(c=>c.dataset.axis),
        lines:t.content.querySelectorAll('.trace path,.trace polygon').length};
    };
    const result=[inspect('current'),inspect('legacy')];state.radarMode='current';return result;
  });
  assert.deepEqual(result,[{axes:['gdp-pdf','critpt-v2-hard'],lines:0},{axes:['reasoning'],lines:0}]);
});
test('크기별 차트·순위표는 필터, 선택, 파라미터 기준, 빈 결과에 함께 반응',async()=>{
  await page.getByRole('button',{name:'모델 크기별 성능'}).click();
  for(const mode of ['total','active','group']){
    await page.locator('#size-mode').selectOption(mode);
    const expected=await page.evaluate(mode=>filtered().filter(m=>Number.isFinite(m.intel)&&
      (mode==='group'?['Tiny','Small','Medium','Large'].includes(m.size):Number.isFinite(mode==='total'?m.params:m.aa?.activeParameters))).length,mode);
    assert.ok(expected>0);assert.equal(await page.locator('#viewwrap circle[data-slug]').count(),expected);
    assert.equal(await page.locator('.size-table tbody tr').count(),expected);
  }
  await page.locator('.size-group[data-size=Small] button[data-add-model]').first().click();
  assert.equal(await page.locator('#panel .cmp-main thead th').count(),3);
  await page.locator('#filter-toggle').click();
  await page.locator('#search').fill('no-matching-model-here');
  assert.equal(await page.locator('#viewwrap circle[data-slug]').count(),0);
  assert.ok(await page.locator('#viewwrap .empty').isVisible());
  await page.locator('#search').fill('');
  await page.setViewportSize({width:390,height:844});
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  assert.deepEqual(errors,[]);
});

test('비용 차트는 작업당 비용으로 열리고 단가 전환 시 비용 0과 미측정을 구분한다',async()=>{
  await page.locator('[data-view=scatter]').click();
  assert.equal(await page.locator('[data-cost-mode=task]').getAttribute('aria-pressed'),'true');
  for(const metric of ['task','tokens']){
    await page.locator('[data-cost-mode='+metric+']').click();
    const points=await page.locator('.price-chart circle').evaluateAll(nodes=>nodes.map(n=>({
      slug:n.dataset.slug, x:Number(n.getAttribute('cx')), y:Number(n.getAttribute('cy'))
    })));
    const costs=await page.evaluate(key=>Object.fromEntries(filtered().filter(m=>Number.isFinite(m.intel))
      .map(m=>[m.slug,key==='task'?m.aa?.costPerTask:m.price])
      .filter(([,cost])=>Number.isFinite(cost)&&cost>=0)),metric);
    assert.deepEqual(points.map(v=>v.slug).sort(),Object.keys(costs).sort());
    const ordered=points.toSorted((a,b)=>costs[a.slug]-costs[b.slug]);
    assert.ok(ordered.every((v,i)=>Number.isFinite(v.y)&&(!i || v.x>=ordered[i-1].x)));
    const zeros=ordered.filter(v=>costs[v.slug]===0);
    if(zeros.length && zeros.length<ordered.length) assert.ok(zeros[0].x<ordered[zeros.length].x);
    assert.match(await page.locator('.cost-coverage').innerText(),/비용 미공개/);
  }
  await page.locator('#filter-toggle').click();
  await page.locator('#search').fill('no-matching-cost');
  assert.equal(await page.locator('.price-chart circle').count(),0);
  assert.ok(await page.locator('#viewwrap .empty').isVisible());
  assert.deepEqual(errors,[]);
});
