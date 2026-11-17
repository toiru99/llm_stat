import {test} from 'node:test';import assert from 'node:assert/strict';import {checkContract} from '../scripts/check_contract.mjs';
const keys=['aa-briefcase','automationbench-aa','gdp-pdf','frontiercode-2-0','terminalbench-4-0','terminal-bench-science','critpt-v2-hard','omniscience-accuracy','omniscience-non-hallucination','hle-diamond'];
const rows=n=>Array.from({length:n},()=>({'Artificial Analysis Intelligence Index':1,aa:{costPerTask:1,timePerTask:1,scores:Object.fromEntries(keys.map(k=>[k,0]))}}));
test('v5 핵심 평가 키 전량 소실 또는 절반 초과 급감은 차단',()=>{assert.deepEqual(checkContract(rows(30)),[]);assert.ok(checkContract(rows(0)).length);assert.ok(checkContract(rows(20),rows(50)).length);assert.deepEqual(checkContract(rows(30),rows(50)),[]);});

test("지수·비용·시간도 급감 차단",()=>{const old=rows(50),next=rows(50);next.forEach((r,i)=>{if(i>10)r.aa.costPerTask=null;});assert.ok(checkContract(next,old).some(s=>s.includes("cost")));});
