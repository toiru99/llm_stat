import {test,before,after} from 'node:test';import assert from 'node:assert/strict';import {chromium} from 'playwright';
let b,p;
before(async()=>{b=await chromium.launch();p=await b.newPage({viewport:{width:1440,height:1000}});await p.goto('file://'+process.cwd()+'/artifact/llm-radar.html');});after(async()=>await b?.close());
test('기본 화면에서 레이더와 비교 대상이 바로 보임',async()=>{await p.getByRole('img',{name:'능력 레이더'}).waitFor();assert.equal(await p.locator('#comparison-slots').count(),1);});
test('보조키 없이 비교 추가·삭제하고 차트와 표가 함께 갱신',async()=>{const add=p.getByRole('button',{name:/비교에 추가$/}).first();await add.click();assert.equal(await p.locator('#panel .cmp-main').count(),1);assert.equal(await p.locator('.trace').count(),2);await p.locator('#comparison-slots button[data-remove]').last().click();assert.equal(await p.locator('.trace').count(),1);});

test('모바일 모델 추가는 목록을 열고 행을 선택하면 레이더로 돌아온다',async()=>{
  await p.setViewportSize({width:390,height:844});
  await p.reload();
  const library=p.locator('#model-library');
  assert.equal(await library.evaluate(d=>d.open),false);
  await p.getByRole('button',{name:'+ 모델 추가',exact:true}).click();
  assert.equal(await library.evaluate(d=>d.open),true);
  assert.equal(await p.locator('#search').evaluate(el=>el===document.activeElement),true);
  await p.locator('#list .model-pick[aria-pressed="false"]').first().press('Enter');
  assert.equal(await p.locator('.trace').count(),2);
  assert.equal(await library.evaluate(d=>d.open),false);
  assert.equal(await p.locator('#panel .cmp-main thead th').count(),3);
  assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth===innerWidth));
});
