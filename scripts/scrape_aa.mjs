// AA 리더보드 스크래퍼 (주 1회 cron 실행 전제).
// Playwright(node)로 리더보드를 열고 Status(Current) 필터를 해제해 과거 모델까지 포함한 뒤
// 열 그룹을 펼쳐 41열 표를 JSON으로 저장. 임베드 __next_f에서 모델 속성
// (paramClass/totalParameters/isReasoning/deprecated/혼합가/priceClass)을 추출해 행에 조인한다.
// 혼합가를 임베드에서 가져오는 이유: AA가 2026-07-21 표에서 "Blended USD/1M Tokens" 열을
// "Cost per Task USD"로 교체했으나 임베드에는 같은 값이 price1mBlended7To2To1 로 남아 있다.
// 사용: node scripts/scrape_aa.mjs  (사전: npm i playwright && npx playwright install chromium)
// 산출물: models/data/aa-leaderboard-<YYYY-MM-DD>.json, models/data/latest.json
// 출처표기 의무: artificialanalysis.ai

import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { extractModelAttrs } from './extract_attrs.mjs';
import { checkScrape } from './validate_scrape.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'models', 'data');
const URL = 'https://artificialanalysis.ai/leaderboards/models';

// __next_f(RSC 스트림 청크)를 이어붙여 반환. 간헐적으로 비어 있는 응답이 오므로
// 표 조작 전에, 필요하면 새로고침까지 해가며 확보한다.
const grabEmbed = (page) => page.evaluate(() =>
  (self.__next_f || []).map((c) => (Array.isArray(c) && typeof c[1] === 'string' ? c[1] : '')).join(''));

const loadWithEmbed = async (page, tries = 3) => {
  for (let i = 1; i <= tries; i++) {
    await page.goto(URL, { waitUntil: 'networkidle', timeout: 90000 });
    await page.waitForSelector('table thead th', { timeout: 30000 });
    const embed = await grabEmbed(page);
    if (extractModelAttrs(embed).size > 0) return embed;
    console.warn(`[재시도] 임베드 비어 있음 (${i}/${tries})`);
  }
  return '';
};

const run = async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ userAgent: 'Mozilla/5.0 llm-stat/0.1' });
  // 임베드는 표를 건드리기 전에 확보한다 — 필터 조작 뒤에 읽으면 간헐적으로 비어 있다.
  const embed = await loadWithEmbed(page);

  // Status 필터의 "Current" 체크 해제 → 과거(deprecated) 모델 포함 전체 행 노출.
  // 기본(current) 행 수를 기록해 두면 조인 없이도 current/past 규모를 검증할 수 있다.
  const currentCount = await page.locator('tbody tr').count();
  await page.getByRole('button', { name: /^Status:/ }).click();
  await page.getByRole('checkbox').first().click();          // 팝오버 내 Current 체크박스
  await page.waitForFunction(
    (n) => document.querySelectorAll('tbody tr').length > n, currentCount, { timeout: 30000 });
  await page.keyboard.press('Escape');                        // 팝오버 닫기

  const data = await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    // 각 그룹 헤더의 펼치기(chevron) 버튼 클릭 → 전체 열 노출
    const chevrons = Array.from(document.querySelectorAll('table thead th button')).filter((b) => b.querySelector('svg'));
    for (const b of chevrons) b.click();
    await sleep(2500);
    const tbl = document.querySelector('table');
    const theadRows = Array.from(tbl.querySelectorAll('thead tr'));
    // 그룹행(colspan)+세부행 중, 세부 헤더행 = 본문 셀 수와 일치하는 마지막 행
    const headerRow = theadRows[theadRows.length - 1];
    const headers = Array.from(headerRow.querySelectorAll('th')).map((t) => t.innerText.trim().replace(/\s+/g, ' '));
    const rows = Array.from(tbl.querySelectorAll('tbody tr')).map((tr) => {
      const cells = Array.from(tr.querySelectorAll('td,th')).map((c) => c.innerText.trim().replace(/\s+/g, ' '));
      const obj = {};
      headers.forEach((h, i) => { obj[h] = cells[i] ?? null; });
      return obj;
    });
    return { headerCount: headers.length, headers, modelCount: rows.length, rows };
  });

  await browser.close();

  // __next_f 속성 조인 (모델 표기명 기준)
  const attrs = extractModelAttrs(embed);
  const EMPTY = { paramClass: null, totalParameters: null, isReasoning: null, deprecated: null,
                  blendedPrice: null, priceClass: null };
  let joined = 0;
  for (const row of data.rows) {
    const a = attrs.get(row['Model']);
    if (a) { Object.assign(row, a); joined++; }
    else Object.assign(row, EMPTY);
  }

  const errs = checkScrape({ ...data, joined });
  if (errs.length) throw new Error(`스크래핑 검증 실패 — ${errs.join(' / ')}`);

  const past = data.rows.filter((r) => r.deprecated === true).length;
  const priced = data.rows.filter((r) => r.blendedPrice != null).length;

  // 날짜는 환경변수로 주입(스크립트 내 Date 사용 가능하나 cron 로그 일관성 위해 인자 우선)
  const today = process.env.RUN_DATE || new Date().toISOString().slice(0, 10);
  const payload = { scraped_at: today, source: URL, currentCount, ...data };
  mkdirSync(DATA, { recursive: true });
  const out = JSON.stringify(payload, null, 2);
  writeFileSync(join(DATA, `aa-leaderboard-${today}.json`), out);
  writeFileSync(join(DATA, 'latest.json'), out);
  console.log(`[완료] ${data.modelCount}개 모델(current ${currentCount} · past ${past}) × ${data.headerCount}열 저장, 속성 조인 ${joined} · 가격 ${priced} (${today}).`);
};

run().catch((e) => { console.error('[중단]', e.message); process.exit(1); });
