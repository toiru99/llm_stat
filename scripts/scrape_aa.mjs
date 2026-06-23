// AA 리더보드 스크래퍼 (주 1회 cron 실행 전제).
// Playwright(node)로 리더보드를 열고 열 그룹을 펼친 뒤 41열 표를 JSON으로 저장.
// 사용: node scripts/scrape_aa.mjs  (사전: npm i playwright && npx playwright install chromium)
// 산출물: models/data/aa-leaderboard-<YYYY-MM-DD>.json, models/data/latest.json
// 출처표기 의무: artificialanalysis.ai

import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'models', 'data');
const URL = 'https://artificialanalysis.ai/leaderboards/models';

const run = async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ userAgent: 'Mozilla/5.0 llm-stat/0.1' });
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 90000 });
  await page.waitForSelector('table thead th', { timeout: 30000 });

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

  if (!data.modelCount || data.headerCount < 30) {
    throw new Error(`스크래핑 검증 실패: 열 ${data.headerCount}, 모델 ${data.modelCount}. 사이트 구조 변경 의심.`);
  }

  // 날짜는 환경변수로 주입(스크립트 내 Date 사용 가능하나 cron 로그 일관성 위해 인자 우선)
  const today = process.env.RUN_DATE || new Date().toISOString().slice(0, 10);
  const payload = { scraped_at: today, source: URL, ...data };
  mkdirSync(DATA, { recursive: true });
  const out = JSON.stringify(payload, null, 2);
  writeFileSync(join(DATA, `aa-leaderboard-${today}.json`), out);
  writeFileSync(join(DATA, 'latest.json'), out);
  console.log(`[완료] ${data.modelCount}개 모델 × ${data.headerCount}열 저장 (${today}).`);
};

run().catch((e) => { console.error('[중단]', e.message); process.exit(1); });
