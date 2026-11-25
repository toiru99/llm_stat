import {test,before,after} from 'node:test';import assert from 'node:assert/strict';import {chromium} from 'playwright';
let b,p;
before(async()=>{b=await chromium.launch();p=await b.newPage({viewport:{width:1440,height:1000}});await p.goto('file://'+process.cwd()+'/artifact/llm-radar.html');});after(async()=>await b?.close());
test('기본 화면에서 레이더와 비교 대상이 바로 보임',async()=>{await p.getByRole('img',{name:'능력 레이더'}).waitFor();assert.equal(await p.locator('#comparison-slots').count(),1);});
test('보조키 없이 비교 추가·삭제하고 차트와 표가 함께 갱신',async()=>{await p.locator('.add-slot').click();await p.locator('.model-pick:enabled').first().click();assert.equal(await p.locator('#panel .cmp-main').count(),1);assert.equal(await p.locator('.trace').count(),2);await p.locator('#comparison-slots button[data-remove]').last().click();assert.equal(await p.locator('.trace').count(),1);});

test('모바일 목록에서 추가한 결과가 즉시 반영되고 완료하면 레이더로 돌아온다',async()=>{
  await p.setViewportSize({width:390,height:844});
  await p.reload();
  const library=p.locator('#model-library');
  assert.equal(await library.isVisible(),false);
  await p.getByRole('button',{name:'+ 모델 추가',exact:true}).click();
  assert.equal(await library.isVisible(),true);
  assert.equal(await p.locator('#model-query').evaluate(el=>el===document.activeElement),true);
  await p.locator('#list .model-pick:enabled').first().press('Enter');
  assert.equal(await p.locator('.trace').count(),2);
  assert.equal(await library.isVisible(),true);
  await p.getByRole('button',{name:'선택 완료'}).click();
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
  await p.locator('.add-slot').click();
  for(let n=0;n<2;n++) await p.locator('.model-pick[aria-pressed=false]:enabled').first().click();
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
  assert.equal(await p.locator('.add-slot').innerText(),'모델 편집');
});

test('목록 열기·연속 추가·닫기 전후에 차트가 밀리지 않는다',async()=>{
  for(const width of [320,390,768,1440]){
    await p.setViewportSize({width,height:800});
    await p.reload();await p.evaluate(()=>document.fonts.ready);
    const geometry=()=>p.evaluate(()=>[document.querySelector('.grid').getBoundingClientRect().top,scrollY,document.documentElement.scrollWidth]);
    const before=await geometry();
    await p.locator('.add-slot').click();
    assert.deepEqual(await geometry(),before);
    const list=p.locator('#list');
    await p.locator('#model-query').fill('OpenAI');
    const choices=p.locator('.model-pick[aria-pressed=false]:enabled');
    const secondModel=choices.nth(7);
    await secondModel.scrollIntoViewIfNeeded();
    const scrollTop=await list.evaluate(e=>e.scrollTop);
    await secondModel.click();
    assert.equal(await p.locator('#model-query').inputValue(),'OpenAI');
    assert.equal(await list.evaluate(e=>e.scrollTop),scrollTop);
    assert.deepEqual(await geometry(),before);
    await p.locator('#model-query').fill('Google');
    await p.locator('#model-query').press('Enter');
    assert.equal(await p.locator('.comparison-slot').count(),3);
    assert.equal(await p.locator('#model-library').isVisible(),false);
    assert.deepEqual(await geometry(),before);
    assert.equal(await p.locator('.add-slot').evaluate(e=>document.activeElement===e),true);
  }
});

test('세 모델을 편집하면서 하나를 빼고 검색과 방향키로 다시 추가한다',async()=>{
  await p.reload();
  await p.locator('.add-slot').click();
  for(let i=0;i<2;i++) await p.locator('.model-pick[aria-pressed=false]:enabled').first().click();
  await p.locator('.add-slot').click();
  const list=p.locator('#list');
  const chosen=list.locator('[aria-pressed=true]');
  assert.equal(await chosen.count(),3);
  assert.equal(await list.locator('[aria-pressed=false]:enabled').count(),0);
  await chosen.last().click();
  await p.locator('#model-query').fill('OpenAI');
  await p.locator('#model-query').press('ArrowDown');
  assert.ok(await p.locator('.model-pick:focus').count());
  const unselected=list.locator('[aria-pressed=false]:enabled').first();
  await unselected.press('Enter');
  assert.equal(await p.locator('.replace-slot').count(),3);
  assert.equal(await list.isVisible(),false);
  await p.locator('.add-slot').click();
  await p.locator('#view-title').click();
  assert.equal(await list.isVisible(),false);
});
