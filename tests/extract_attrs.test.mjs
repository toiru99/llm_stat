// node --test 로 실행. 픽스처는 실측 AA 임베드 구조 축약본.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractModelAttrs, parseBalanced } from '../scripts/extract_attrs.mjs';

const FIXTURE = [
  // 소형 오브젝트 (nav 목록형): paramClass 없음, creator 중첩
  '{"models":[{"id":"16149b9c-a1e9-4669-a5cb-ff3c00d78f89","slug":"gpt-oss-20b-low",',
  '"name":"gpt-oss-20b (low)","shortName":"gpt-oss-20b (low)","deprecated":false,',
  '"isReasoning":true,"creator":{"id":"e67e56e3","name":"OpenAI","color":"#1f1f1f"}}]}',
  // 상세 오브젝트: paramClass/totalParameters 포함, deprecated=true(과거 모델)
  ',{"id":"0081ab31-d10a-44a0-a10d-eee5533fec65","name":"GLM-4.5V (Non-reasoning)",',
  '"shortName":"GLM-4.5V","slug":"glm-4-5v","releaseDate":"2025-08-11",',
  '"isReasoning":false,"deprecated":true,"modelCreatorName":"Z AI",',
  '"intelligenceIndex":6.99,"contextWindowTokens":64000,"totalParameters":108,',
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
].join('');

test('소형+상세 오브젝트에서 속성 추출·병합', () => {
  const m = extractModelAttrs(FIXTURE);
  assert.deepEqual(m.get('gpt-oss-20b (low)'), {
    paramClass: null, totalParameters: null, isReasoning: true, deprecated: false,
  });
  assert.deepEqual(m.get('GLM-4.5V (Non-reasoning)'), {
    paramClass: 'medium', totalParameters: 108, isReasoning: false, deprecated: true,
  });
});

test('shortName으로도 조회 가능 (테이블 표기 = shortName)', () => {
  const m = extractModelAttrs(FIXTURE);
  // 테이블에는 "Claude Opus 4.8 (max)"로 표시되지만 JSON name은 풀네임
  assert.deepEqual(m.get('Claude Opus 4.8 (max)'), {
    paramClass: null, totalParameters: null, isReasoning: true, deprecated: false,
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
