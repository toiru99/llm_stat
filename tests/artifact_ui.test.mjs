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

// 표에 실제로 그려진 숫자를 읽어 최소/최대를 독립적으로 구한 뒤,
// .best 가 그 칸에만 붙었는지 본다 (구현식을 그대로 되풀이하지 않는다)
const rowCells = async (label) => {
  const tr = page.locator('#panel .cmp-tbl tbody tr', { has: page.locator(`th:text-is("${label}")`) });
  const tds = tr.locator('td');
  const n = await tds.count();
  const out = [];
  for (let i = 0; i < n; i++) {
    const txt = (await tds.nth(i).innerText()).trim();
    const num = parseFloat(txt.replace(/[$,]/g, ''));
    out.push({ txt, num: Number.isNaN(num) ? null : num,
               best: (await tds.nth(i).getAttribute('class') || '').includes('best') });
  }
  return out;
};

test('혼합가 행은 가장 싼 칸이 강조된다 (작을수록 좋음)', async () => {
  await select(3);
  const cells = await rowCells('혼합가');
  const nums = cells.map(c => c.num).filter(v => v != null);
  const min = Math.min(...nums);
  cells.forEach(c => assert.equal(c.best, c.num === min, `혼합가 ${c.txt}`));
});

test('종합지능 행은 가장 높은 칸이 강조된다 (클수록 좋음)', async () => {
  await select(3);
  const cells = await rowCells('종합지능');
  const nums = cells.map(c => c.num).filter(v => v != null);
  const max = Math.max(...nums);
  cells.forEach(c => assert.equal(c.best, c.num === max, `종합지능 ${c.txt}`));
});

test('범주형 행(크기·추론/상태·멀티모달)은 강조하지 않는다', async () => {
  await select(3);
  for (const label of ['크기', '추론 / 상태', '멀티모달']) {
    const cells = await rowCells(label);
    assert.ok(cells.every(c => !c.best), `${label} 행에 강조가 붙음`);
  }
});

test('bestIdx: 동점이면 동점자를 모두 강조', async () => {
  const idx = await page.evaluate(() =>
    [...bestIdx({ g: m => m.x, dir: 1 }, [{ x: 1 }, { x: 2 }, { x: 2 }])]);
  assert.deepEqual(idx.sort(), [1, 2]);
});

test('bestIdx: 결측(null)은 후보에서 제외', async () => {
  const idx = await page.evaluate(() =>
    [...bestIdx({ g: m => m.x, dir: -1 }, [{ x: null }, { x: 5 }, { x: 9 }])]);
  assert.deepEqual(idx, [1]);
});

test('bestIdx: 유효값이 1개뿐이면 강조하지 않는다', async () => {
  const idx = await page.evaluate(() =>
    [...bestIdx({ g: m => m.x, dir: 1 }, [{ x: null }, { x: 7 }, { x: null }])]);
  assert.deepEqual(idx, []);
});

test('bestIdx: dir 0 은 항상 빈 집합', async () => {
  const idx = await page.evaluate(() =>
    [...bestIdx({ g: m => m.x, dir: 0 }, [{ x: 1 }, { x: 2 }])]);
  assert.deepEqual(idx, []);
});

test('페이지 JS 오류 없음', () => {
  assert.deepEqual(jsErrors, []);
});
