// AA 리더보드 스크래퍼 (주 1회 cron 실행 전제).
// Playwright(node)로 리더보드를 열고 Status(Current) 필터를 해제해 과거 모델까지 포함한 뒤
// 열 그룹을 펼쳐 41열 표를 JSON으로 저장. 임베드 __next_f에서 모델 속성
// (paramClass/totalParameters/isReasoning/deprecated)을 추출해 행에 조인한다.
// 사용: node scripts/scrape_aa.mjs  (사전: npm i playwright && npx playwright install chromium)
// 산출물: models/data/aa-leaderboard-<YYYY-MM-DD>.json, models/data/latest.json
// 출처표기 의무: artificialanalysis.ai

import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { extractModelAttrs } from './extract_attrs.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'models', 'data');
const URL = 'https://artificialanalysis.ai/leaderboards/models';

const run = async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ userAgent: 'Mozilla/5.0 llm-stat/0.1' });
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 90000 });
  await page.waitForSelector('table thead th', { timeout: 30000 });

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
    // 임베드 __next_f 청크 연결 (속성 추출용 — Node 쪽에서 파싱)
    const nextf = (self.__next_f || [])
      .map((c) => (Array.isArray(c) && typeof c[1] === 'string' ? c[1] : ''))
      .join('');
    return { headerCount: headers.length, headers, modelCount: rows.length, rows, nextf };
  });

  await browser.close();

  if (!data.modelCount || data.headerCount < 30) {
    throw new Error(`스크래핑 검증 실패: 열 ${data.headerCount}, 모델 ${data.modelCount}. 사이트 구조 변경 의심.`);
  }
  if (data.modelCount < 400) {
    throw new Error(`전체 유니버스 검증 실패: ${data.modelCount}개(<400). Status 해제 미반영 의심.`);
  }

  // __next_f 속성 조인 (모델 표기명 기준)
  const attrs = extractModelAttrs(data.nextf);
  delete data.nextf;                                          // 저장 파일에 원문 미포함
  let joined = 0;
  for (const row of data.rows) {
    const a = attrs.get(row['Model']);
    if (a) { Object.assign(row, a); joined++; }
    else Object.assign(row, { paramClass: null, totalParameters: null, isReasoning: null, deprecated: null });
  }
  if (joined / data.modelCount < 0.9) {
    throw new Error(`속성 조인율 검증 실패: ${joined}/${data.modelCount}. 임베드 구조 변경 의심.`);
  }
  const past = data.rows.filter((r) => r.deprecated === true).length;

  // 날짜는 환경변수로 주입(스크립트 내 Date 사용 가능하나 cron 로그 일관성 위해 인자 우선)
  const today = process.env.RUN_DATE || new Date().toISOString().slice(0, 10);
  const payload = { scraped_at: today, source: URL, currentCount, ...data };
  mkdirSync(DATA, { recursive: true });
  const out = JSON.stringify(payload, null, 2);
  writeFileSync(join(DATA, `aa-leaderboard-${today}.json`), out);
  writeFileSync(join(DATA, 'latest.json'), out);
  console.log(`[완료] ${data.modelCount}개 모델(current ${currentCount} · past ${past}) × ${data.headerCount}열 저장, 속성 조인 ${joined} (${today}).`);
};

run().catch((e) => { console.error('[중단]', e.message); process.exit(1); });
