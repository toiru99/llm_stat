import {test} from 'node:test';import assert from 'node:assert/strict';import {rankModels,onFrontier,tokenCost} from '../artifact/explorer.mjs';
test('정렬은 원시 실측만 사용하고 미측정은 마지막',()=>{const a={intel:99,aa:{scores:{}}},b={intel:10,aa:{scores:{'frontiercode-2-0':0.3}}};assert.equal(rankModels([a,b],'coding')[0],b);});
test('Pareto: 무료, 동점, 결측, 엄격 지배 구분',()=>{const a={intel:30,aa:{costPerTask:0}},b={intel:20,aa:{costPerTask:1}},c={intel:50,aa:{costPerTask:2}};assert.equal(onFrontier(a,[a,b,c]),true);assert.equal(onFrontier(b,[a,b,c]),false);assert.equal(onFrontier({...a},[a]),true);assert.equal(onFrontier({intel:99,aa:{}},[a]),false);});
test('토큰 비용은 실단가와 사용자 가정으로 계산하며 무료와 결측 구분',()=>{assert.equal(tokenCost({price_in:2,price_out:10},1000,500,1000),7);assert.equal(tokenCost({price_in:0,price_out:0},1000,500,1000),0);assert.equal(tokenCost({price_in:null,price_out:10},1000,500,1000),null);assert.equal(tokenCost({price_in:2,price_out:10},-1,500,1000),null);});

test('빠른 답변은 품질 하한과 실측 대기를 통과한 후보만 정렬',()=>{
 const m=(intel,firstAnswer)=>({intel,aa:{firstAnswer}});
 const low=m(5,0.01),missing=m(null,0.1),unknown=m(50,null),slow=m(40,3),fast=m(35,1);
 assert.deepEqual(rankModels([low,missing,unknown,slow,fast],'fast',30),[fast,slow]);
 assert.deepEqual(rankModels([low,fast],'fast',40),[]);
});

test('저장된 제작사는 현재 목록으로 검증하며 손상된 설정은 전체 보기',async()=>{
 const {parsePreferences}=await import('../artifact/explorer.mjs');
 assert.deepEqual(parsePreferences('{bad',['A']),{creators:[],only:false,minIntelligence:30});
 assert.deepEqual(parsePreferences(JSON.stringify({creators:['A','A','gone',1],only:true,minIntelligence:999}),['A']),{creators:['A'],only:true,minIntelligence:100});
 assert.equal(parsePreferences('{"creators":[],"only":true}',[]).only,false);
});
