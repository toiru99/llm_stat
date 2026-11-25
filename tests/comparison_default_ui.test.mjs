import {test,before,after} from 'node:test';import assert from 'node:assert/strict';import {chromium} from 'playwright';
let b,p;
before(async()=>{b=await chromium.launch();p=await b.newPage({viewport:{width:1440,height:1000}});await p.goto('file://'+process.cwd()+'/artifact/llm-radar.html');});after(async()=>await b?.close());
test('기본 화면에서 레이더와 비교 대상이 바로 보임',async()=>{await p.getByRole('img',{name:'능력 레이더'}).waitFor();assert.equal(await p.locator('#comparison-slots').count(),1);});
test('보조키 없이 비교 추가·삭제하고 차트와 표가 함께 갱신',async()=>{await p.locator('.add-slot').click();await p.locator('.model-pick:enabled').first().click();assert.equal(await p.locator('#panel .cmp-main').count(),1);assert.equal(await p.locator('.trace').count(),2);await p.locator('#comparison-slots button[data-remove]').last().click();assert.equal(await p.locator('.trace').count(),1);});

test('모바일 모델 추가는 목록을 열고 행을 선택하면 레이더로 돌아온다',async()=>{
  await p.setViewportSize({width:390,height:844});
  await p.reload();
  const library=p.locator('#model-library');
  assert.equal(await library.isVisible(),false);
  await p.getByRole('button',{name:'+ 모델 추가',exact:true}).click();
  assert.equal(await library.isVisible(),true);
  assert.equal(await p.locator('#model-query').evaluate(el=>el===document.activeElement),true);
  await p.locator('#list .model-pick:enabled').first().press('Enter');
  assert.equal(await p.locator('.trace').count(),2);
  assert.equal(await library.isVisible(),false);
  assert.equal(await p.locator('#panel .cmp-main thead th').count(),3);
  assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth===innerWidth));
});

test('PC 문서 스크롤바만 숨기며 본문과 모델 목록의 휠 이동을 보존한다',async()=>{
  await p.setViewportSize({width:1280,height:720});
  await p.reload();
  assert.equal(await p.locator('html').evaluate(e=>getComputedStyle(e).scrollbarWidth),'none');
  await p.locator('.stage').hover({position:{x:20,y:20}});
  await p.mouse.wheel(0,220);
  await p.waitForFunction(()=>window.scrollY>0);
  await p.keyboard.press('Control+Home');
  await p.evaluate(()=>window.scrollTo(0,0));
  await p.locator('.add-slot').click();
  const list=p.locator('#list');
  assert.equal(await list.evaluate(e=>getComputedStyle(e).scrollbarWidth),'thin');
  const initialY=await p.evaluate(()=>window.scrollY);
  await list.hover();
  await p.mouse.wheel(0,160);
  await p.waitForFunction(()=>document.querySelector('#list').scrollTop>0);
  assert.equal(await p.evaluate(()=>window.scrollY),initialY);
  await p.keyboard.press('Escape');
  assert.equal(await list.isVisible(),false);
  await p.keyboard.press('PageDown');
  await p.waitForFunction(y=>window.scrollY>y,initialY);
});

test('세 모델 중 지정한 슬롯만 교체하고 선택용 검색어는 탐색 필터에 남기지 않는다',async()=>{
  await p.reload();
  for(let n=0;n<2;n++){
    await p.locator('.add-slot').click();
    await p.locator('.model-pick:enabled').first().click();
  }
  const slots=p.locator('.replace-slot');
  const before=await slots.allTextContents();
  await slots.nth(1).click();
  await p.locator('#model-query').fill('OpenAI');
  const choice=p.locator('.model-pick:enabled').first();
  const name=await choice.locator('.nm').textContent();
  await choice.click();
  assert.deepEqual(await slots.allTextContents(),[before[0],name,before[2]]);
  assert.equal(await slots.nth(1).evaluate(e=>e===document.activeElement),true);
  assert.equal(await p.locator('#search').inputValue(),'');
  assert.equal(await p.locator('.trace').count(),3);
  assert.equal(await p.locator('.add-slot').count(),0);
});
