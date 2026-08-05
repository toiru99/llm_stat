// node --test tests/artifact_ui.test.mjs
// 빌드된 아티팩트를 file:// 로 열어 우측 패널 동작을 검증한다.
// 사전: python3 scripts/build_artifact.py 로 artifact/llm-radar.html 이 최신이어야 함.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PAGE = 'file://' + join(ROOT, 'artifact', 'llm-radar.html');

let browser, page, jsErrors;

before(async () => {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  jsErrors = [];
  page.on('pageerror', (e) => jsErrors.push(e.message));
  await page.goto(PAGE, { waitUntil: 'load' });
  await page.waitForSelector('#list .mrow');
});
after(async () => { await browser.close(); });

// 목록에서 n개를 고른다 (첫 클릭은 단일 선택, 이후는 ⌘+클릭으로 비교 추가)
const select = async (n) => {
  const rows = page.locator('#list .mrow');
  await rows.nth(0).click();
  for (let i = 1; i < n; i++) await rows.nth(i).click({ modifiers: ['Meta'] });
};

test('1개 선택하면 배지 그리드, 비교표는 없음', async () => {
  await select(1);
  assert.equal(await page.locator('#panel .badges').count(), 1);
  assert.equal(await page.locator('#panel .cmp-tbl').count(), 0);
});

test('2개 선택하면 비교표로 전환되고 배지는 사라짐', async () => {
  await select(2);
  assert.equal(await page.locator('#panel .badges').count(), 0);
  assert.equal(await page.locator('#panel .cmp-tbl').count(), 1);
  // 헤더 = 라벨 열 1 + 모델 열 2
  assert.equal(await page.locator('#panel .cmp-tbl thead th').count(), 3);
});

test('3개 선택하면 모델 열이 3개', async () => {
  await select(3);
  assert.equal(await page.locator('#panel .cmp-tbl thead th').count(), 4);
});

test('비교를 해제해 1개로 돌아오면 배지로 복귀', async () => {
  await select(3);
  await page.locator('#list .mrow').nth(0).click();   // 일반 클릭 = 단일 선택
  assert.equal(await page.locator('#panel .badges').count(), 1);
  assert.equal(await page.locator('#panel .cmp-tbl').count(), 0);
});

test('지표 행 수가 METRICS 개수와 일치', async () => {
  await select(2);
  const rows = await page.locator('#panel .cmp-tbl tbody tr').count();
  const n = await page.evaluate(() => METRICS.length);
  assert.equal(rows, n);
  assert.equal(n, 12);
});

test('페이지 JS 오류 없음', () => {
  assert.deepEqual(jsErrors, []);
});
