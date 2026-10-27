import { test } from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { captureModels } from '../scripts/capture_models.mjs';
import { extractModelAttrs } from '../scripts/extract_attrs.mjs';

function context() {
  const c = vm.createContext({});
  vm.runInContext(`(${captureModels.toString()})()`, c);
  return c;
}
test('지연 로드된 모델의 가격·과거 상태를 포착해 조인한다', () => {
  const c = context();
  vm.runInContext(`JSON.parse('[{"slug":"past","name":"Past","deprecated":true,"price1mInputTokens":2,"price1mOutputTokens":10}]')`, c);
  const text = vm.runInContext('JSON.stringify(globalThis.__llmStatModels)', c);
  assert.equal(extractModelAttrs(text ?? '').get('Past')?.blendedPrice, 2.8);
  assert.equal(extractModelAttrs(text ?? '').get('Past')?.deprecated, true);
});
test('일반 JSON, reviver, 파싱 오류 동작을 보존한다', () => {
  const c = context();
  assert.equal(vm.runInContext(`JSON.parse('{"n":2}', (k,v)=>k==='n'?v*3:v).n`, c), 6);
  assert.throws(() => vm.runInContext(`JSON.parse('invalid')`, c));
  assert.equal(vm.runInContext(`JSON.parse('[1,2]').length`, c), 2);
});
