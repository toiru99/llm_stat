// node --test 로 실행. 스크래핑 결과 새너티 게이트.
// 2026-07-21 AA가 "Blended USD/1M Tokens" 열을 내렸을 때 열 수·모델 수·조인율만 보던
// 기존 게이트가 이를 통과시켜 2주간 가격 없는 데이터가 조용히 배포됐다. 그 재발을 막는다.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkScrape } from '../scripts/validate_scrape.mjs';

const rows = (n, withPrice) =>
  Array.from({ length: n }, (_, i) => ({ Model: `m${i}`, blendedPrice: i < withPrice ? 1.5 : null }));

const ok = { headerCount: 41, modelCount: 590, joined: 588, rows: rows(590, 400) };

test('정상 스크래핑은 오류 없음', () => {
  assert.deepEqual(checkScrape(ok), []);
});

test('가격 보유 비율이 바닥나면 오류 (Blended 열 삭제 재발 감지)', () => {
  const errs = checkScrape({ ...ok, rows: rows(590, 0) });
  assert.equal(errs.length, 1);
  assert.match(errs[0], /가격/);
  assert.match(errs[0], /0\/590/);
});

test('가격 보유 비율이 절반 밑이면 오류', () => {
  assert.equal(checkScrape({ ...ok, rows: rows(590, 200) }).length, 1);
});

test('가격 보유 비율이 절반 이상이면 통과', () => {
  assert.deepEqual(checkScrape({ ...ok, rows: rows(590, 295) }), []);
});

test('열 수가 줄면 오류 (표 구조 변경)', () => {
  assert.match(checkScrape({ ...ok, headerCount: 12 })[0], /열/);
});

test('모델 수가 400 미만이면 오류 (Status 해제 미반영)', () => {
  assert.match(checkScrape({ ...ok, modelCount: 300, rows: rows(300, 250) })[0], /유니버스/);
});

test('속성 조인율이 90% 미만이면 오류 (임베드 구조 변경)', () => {
  assert.match(checkScrape({ ...ok, joined: 0 })[0], /조인율/);
});

test('여러 게이트가 동시에 깨지면 모두 보고 (첫 오류에서 멈추지 않음)', () => {
  const errs = checkScrape({ headerCount: 5, modelCount: 10, joined: 0, rows: rows(10, 0) });
  assert.equal(errs.length, 4);
});
