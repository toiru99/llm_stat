import {test,before,after} from 'node:test';import assert from 'node:assert/strict';import {chromium} from 'playwright';
let b,p;
before(async()=>{b=await chromium.launch();p=await b.newPage({viewport:{width:1440,height:1000}});await p.goto('file://'+process.cwd()+'/artifact/llm-radar.html');});after(async()=>await b?.close());
test('기본 화면에서 레이더와 비교 대상이 바로 보임',async()=>{await p.getByRole('img',{name:'능력 레이더'}).waitFor();assert.equal(await p.locator('#comparison-slots').count(),1);});
test('보조키 없이 비교 추가·삭제하고 차트와 표가 함께 갱신',async()=>{const add=p.getByRole('button',{name:/비교에 추가$/}).first();await add.click();assert.equal(await p.locator('#panel .cmp-main').count(),1);assert.equal(await p.locator('.trace').count(),2);await p.locator('#comparison-slots button[data-remove]').last().click();assert.equal(await p.locator('.trace').count(),1);});
