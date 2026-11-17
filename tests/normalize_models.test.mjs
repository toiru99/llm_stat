import {test} from 'node:test';
import assert from 'node:assert/strict';
import {normalizeModels} from '../scripts/normalize_models.mjs';
test('id와 추론 변형을 보존하고 v5 단위와 결측을 구분',()=>{
 const rows=normalizeModels([{id:'a',release:{slug:'x'},name:'X (High)',shortName:'X (high)',deprecated:false,modelCreatorName:'Lab',isOpenWeights:true,intelligenceIndex:50,scores:{'aa-briefcase':1400,'frontiercode-2-0':0.25,'mmmu-pro':0.5},intelligenceIndexCostPerTask:0,intelligenceIndexTimePerTask:120,price1mInputTokens:2,price1mOutputTokens:10,outputSpeed:40,timeToFirstAnswerToken:7}]);
 assert.equal(rows[0].aa.id,'a');assert.equal(rows[0].aa.costPerTask,0);assert.equal(rows[0]['MMMU-Pro'],50);assert.equal(rows[0]['Artificial Analysis Intelligence Index'],50);assert.equal(rows[0].aa.timePerTask,120);assert.equal(rows[0]['Median Tokens/s'],40);
 assert.equal(normalizeModels([{id:'b',name:'B',deprecated:false,scores:{}}])[0]['Artificial Analysis Intelligence Index'],null);
});
test('id 중복 제거 후 별도 추론 설정 보존',()=>{
 const a={id:'a',name:'X',shortName:'X',deprecated:false,scores:{}};assert.equal(normalizeModels([a,a,{...a,id:'b'}]).length,2);
});
