// node --test 로 실행. 픽스처는 실측 AA 임베드 구조 축약본.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractModelAttrs, parseBalanced } from '../scripts/extract_attrs.mjs';

const FIXTURE = [
  // 소형 오브젝트 (nav 목록형): paramClass 없음, creator 중첩
  '{"models":[{"id":"16149b9c-a1e9-4669-a5cb-ff3c00d78f89","slug":"gpt-oss-20b-low",',
  '"name":"gpt-oss-20b (low)","shortName":"gpt-oss-20b (low)","deprecated":false,',
  '"isReasoning":true,"creator":{"id":"e67e56e3","name":"OpenAI","color":"#1f1f1f"}}]}',
  // 상세 오브젝트: paramClass/totalParameters/가격 포함, deprecated=true(과거 모델)
  ',{"id":"0081ab31-d10a-44a0-a10d-eee5533fec65","name":"GLM-4.5V (Non-reasoning)",',
  '"shortName":"GLM-4.5V","slug":"glm-4-5v","releaseDate":"2025-08-11",',
  '"isReasoning":false,"deprecated":true,"modelCreatorName":"Z AI",',
  '"intelligenceIndex":6.99,"contextWindowTokens":64000,"totalParameters":108,',
  '"priceClass":"medium","price1mBlended7To2To1":0.72,"price1mBlended0To3To1":0.9,',
  '"price1mInputTokens":0.6,"price1mOutputTokens":1.8,"cacheHitPrice":null,',
  '"sizeClass":"medium","paramClass":"medium","activeParameters":12,"isOpenWeights":true}',
  // 같은 모델의 소형 버전이 뒤에 또 나와도 상세(paramClass 보유)를 유지해야 함
  ',{"id":"0081ab31-d10a-44a0-a10d-eee5533fec65","slug":"glm-4-5v",',
  '"name":"GLM-4.5V (Non-reasoning)","deprecated":true,"isReasoning":false,',
  '"creator":{"id":"z1","name":"Z AI"}}',
  // 테이블 표기(shortName) ≠ name 인 케이스 — 실측: 테이블은 shortName으로 렌더
  ',{"id":"aaaa1111-2222-3333-4444-555566667777",',
  '"name":"Claude Opus 4.8 (Adaptive Reasoning, Max Effort)",',
  '"shortName":"Claude Opus 4.8 (max)","slug":"claude-opus-4-8","releaseDate":"2026-05-01",',
  '"isReasoning":true,"deprecated":false,"modelCreatorName":"Anthropic",',
  '"totalParameters":null,"paramClass":null}',
  // 독점 모델: paramClass 는 비공개(null)지만 가격은 있음 — 뒤따르는 소형 엔트리가 덮으면 안 됨
  ',{"id":"bbbb2222-3333-4444-5555-666677778888","name":"Sonnet Pro","shortName":"Sonnet Pro",',
  '"slug":"sonnet-pro","isReasoning":true,"deprecated":false,"paramClass":null,',
  '"totalParameters":null,"priceClass":"high","price1mBlended7To2To1":1.54}',
  ',{"id":"bbbb2222-3333-4444-5555-666677778888","slug":"sonnet-pro","name":"Sonnet Pro",',
  '"deprecated":false,"isReasoning":true,"creator":{"id":"a1","name":"Anthropic"}}',
].join('');

test('소형+상세 오브젝트에서 속성 추출·병합', () => {
  const m = extractModelAttrs(FIXTURE);
  assert.deepEqual(m.get('gpt-oss-20b (low)'), {
    paramClass: null, totalParameters: null, isReasoning: true, deprecated: false,
    blendedPrice: null, priceClass: null,
  });
  assert.deepEqual(m.get('GLM-4.5V (Non-reasoning)'), {
    paramClass: 'medium', totalParameters: 108, isReasoning: false, deprecated: true,
    blendedPrice: 0.72, priceClass: 'medium',
  });
});

// AA가 2026-07-21 표에서 "Blended USD/1M Tokens" 열을 삭제(→ Cost per Task USD)했으나
// 임베드에는 같은 값이 price1mBlended7To2To1 로 남아 있다. 이 경로로 가격을 되살린다.
test('임베드에서 혼합가(price1mBlended7To2To1)를 추출', () => {
  const m = extractModelAttrs(FIXTURE);
  assert.equal(m.get('GLM-4.5V (Non-reasoning)').blendedPrice, 0.72);
  assert.equal(m.get('GLM-4.5V').blendedPrice, 0.72);   // shortName 경로도 동일
});

test('임베드에서 AA 가격 버킷(priceClass)을 추출', () => {
  const m = extractModelAttrs(FIXTURE);
  assert.equal(m.get('GLM-4.5V (Non-reasoning)').priceClass, 'medium');
});

test('가격 필드 없는 오브젝트는 blendedPrice·priceClass 가 null', () => {
  const m = extractModelAttrs(FIXTURE);
  assert.equal(m.get('gpt-oss-20b (low)').blendedPrice, null);
  assert.equal(m.get('gpt-oss-20b (low)').priceClass, null);
});

// 상세(가격 보유) 엔트리가 나중에 온 소형 엔트리에 덮이면 다시 가격이 사라진다.
test('가격 보유 상세 엔트리가 이후 소형 엔트리에 덮이지 않음', () => {
  const m = extractModelAttrs(FIXTURE);
  assert.equal(m.get('GLM-4.5V (Non-reasoning)').blendedPrice, 0.72);
});

// paramClass 가 null 인 독점 모델은 "상세 여부" 판정을 paramClass 로만 하면 가격을 잃는다.
test('paramClass 비공개(null) 독점 모델도 가격을 유지', () => {
  const m = extractModelAttrs(FIXTURE);
  assert.equal(m.get('Sonnet Pro').blendedPrice, 1.54);
  assert.equal(m.get('Sonnet Pro').priceClass, 'high');
});

test('shortName으로도 조회 가능 (테이블 표기 = shortName)', () => {
  const m = extractModelAttrs(FIXTURE);
  // 테이블에는 "Claude Opus 4.8 (max)"로 표시되지만 JSON name은 풀네임
  assert.deepEqual(m.get('Claude Opus 4.8 (max)'), {
    paramClass: null, totalParameters: null, isReasoning: true, deprecated: false,
    blendedPrice: null, priceClass: null,
  });
  // 풀네임 name으로도 여전히 조회 가능
  assert.equal(m.get('Claude Opus 4.8 (Adaptive Reasoning, Max Effort)').isReasoning, true);
  // shortName 키가 기존 정확 name 키를 덮어쓰지 않음 (name 우선)
  assert.equal(m.get('GLM-4.5V (Non-reasoning)').paramClass, 'medium');
});

test('creator 중첩 오브젝트는 모델로 오인하지 않음', () => {
  const m = extractModelAttrs(FIXTURE);
  assert.equal(m.has('OpenAI'), false);
  assert.equal(m.has('Z AI'), false);
});

test('name/deprecated 없는 잡동사니는 무시', () => {
  const m = extractModelAttrs('{"id":"x","foo":1} junk {"deprecated":false,"nope":2}');
  assert.equal(m.size, 0);
});

test('parseBalanced: 문자열 내 중괄호·이스케이프 처리', () => {
  const s = 'pre {"id":"a","t":"br{ace \\" quote","n":{"x":1}} post';
  const start = s.indexOf('{');
  assert.equal(parseBalanced(s, start), '{"id":"a","t":"br{ace \\" quote","n":{"x":1}}');
});
