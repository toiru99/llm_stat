# 우측 패널 다중 모델 비교표 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** ⌘+클릭으로 2~3개 모델을 고르면 우측 패널이 '지표 행 × 모델 열' 비교표로 바뀌어, 가격·속도·컨텍스트를 한 화면에서 나란히 볼 수 있게 한다.

**Architecture:** `artifact/template.html` 안의 인라인 스크립트만 고친다. 지표 정의를 `METRICS` 배열 하나로 모으고 `panelHTML()`을 선택 개수에 따라 `badgeView`(1개, 현행 유지) / `compareView`(2~3개)로 분기시킨다. 데이터 파이프라인은 건드리지 않는다 — 표에 쓰는 필드는 전부 `cards.json`에 이미 있다.

**Tech Stack:** 바닐라 JS(빌드 도구 없음, 인라인 `<script>`), CSS Grid, 네이티브 `<details>`. 테스트는 `node --test` + Playwright(이미 의존성).

## Global Constraints

- 설계 원본: `docs/superpowers/specs/2026-08-05-compare-panel-design.md`
- 수정 대상은 `artifact/template.html` 하나. `artifact/llm-radar.html`은 `python3 scripts/build_artifact.py` 산출물이므로 **직접 편집 금지**
- 외부 라이브러리·CDN 추가 금지. 아티팩트는 자체 완결 단일 HTML을 유지한다
- 비교 최대 3개(`toggleSelect`의 `state.selected.length<3`)는 변경하지 않는다
- 색은 기존 토큰만 사용: 시리즈 `--series-0/1/2`, 강조 `--good`, 보조 텍스트 `--muted`, 미측정 `--base`
- `dir` 규약: `+1` 클수록 좋음 / `-1` 작을수록 좋음 / `0` 강조 대상 아님
- 결측 표기는 `—`(em dash) 하나로 통일

---

### Task 1: 지표 정의 단일화 + 렌더 분기

**Files:**
- Modify: `artifact/template.html:334-358` (`panelHTML`), `artifact/template.html:88-99` (패널 CSS)
- Test: `tests/artifact_ui.test.mjs` (신규)

**Interfaces:**
- Produces: `METRICS` (배열), `badgeView(m) -> string`, `compareView(sel) -> string`, `cellOf(mt, m) -> {raw, body, sub}`. Task 2가 `compareView` 안에서 `bestIdx`를 호출하고, Task 3이 `compareView` 끝에 `axesHTML(sel)`을 덧붙인다.

- [ ] **Step 1: 실패하는 테스트 작성**

`tests/artifact_ui.test.mjs` 생성:

```js
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
```

- [ ] **Step 2: 실패 확인**

Run: `node --test tests/artifact_ui.test.mjs`
Expected: FAIL — `.cmp-tbl` count 0 ≠ 1, `METRICS is not defined`

- [ ] **Step 3: CSS 추가**

`artifact/template.html`의 `.badge .v small{...}` 줄(99행) **바로 아래**에 삽입:

```css
  /* compare table (2~3개 선택 시) */
  .cmp-wrap{overflow-x:auto;padding:12px 10px 4px}
  .cmp-tbl{width:100%;border-collapse:collapse;font-family:var(--mono)}
  .cmp-tbl th,.cmp-tbl td{padding:6px 7px;text-align:right;font-size:12.5px;
    border-bottom:1px solid var(--line-soft);white-space:nowrap}
  .cmp-tbl tbody th{text-align:left;font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;
    color:var(--muted);font-weight:400;white-space:normal}
  .cmp-tbl thead th{vertical-align:bottom;font-size:10.5px;font-weight:600;line-height:1.25;
    white-space:normal;border-bottom:1px solid var(--line);padding-bottom:8px}
  .cmp-tbl thead .sw{display:inline-block;width:8px;height:8px;border-radius:2px;margin-right:4px}
  .cmp-tbl thead .nm{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
  .cmp-tbl thead .cr{display:block;font-size:9px;font-weight:400;color:var(--muted);
    text-transform:uppercase;letter-spacing:.06em;margin-top:2px}
  .cmp-tbl td small{font-size:9.5px;color:var(--muted);font-weight:400}
  .cmp-tbl td.na{color:var(--base)}
```

- [ ] **Step 4: `panelHTML` 교체**

`artifact/template.html:334-358`의 `// ---------- right panel ----------` 블록 전체를 아래로 교체:

```js
// ---------- right panel ----------
const DASH="—";
const usd=v=>v==null?DASH:"$"+v;
const licLab=l=>l==='Open'?'오픈':l==='Proprietary'?'독점':l||'';

// 배지 뷰와 비교표가 함께 읽는 단일 지표 목록.
// dir: +1 클수록 좋음 / -1 작을수록 좋음 / 0 강조 안 함(범주형)
const METRICS=[
  {k:"종합지능",    g:m=>m.intel,      dir:+1},
  {k:"가성비",      g:m=>m.value,      dir:+1, tip:"종합지능 ÷ 혼합가"},
  {k:"혼합가",      g:m=>m.price,      dir:-1, fmt:usd, unit:"/1M",
   tip:"AA 혼합가 — 캐시히트 7 : 입력 2 : 출력 1 가중. 가성비 계산의 분모"},
  {k:"입력가",      g:m=>m.price_in,   dir:-1, fmt:usd, unit:"/1M"},
  {k:"출력가",      g:m=>m.price_out,  dir:-1, fmt:usd, unit:"/1M"},
  {k:"컨텍스트",    g:m=>m.ctx,        dir:+1, fmt:fmtCtx},
  {k:"속도",        g:m=>m.speed,      dir:+1, unit:" t/s"},
  {k:"TTFT",        g:m=>m.ttft,       dir:-1, unit:" s",
   tip:"첫 토큰까지 지연. 추론 모델은 사고시간 포함이라 큼"},
  {k:"총 응답시간", g:m=>m.total_resp, dir:-1, unit:" s"},
  {k:"멀티모달",    g:m=>m.radar.multimodal.measured?"측정":"미측정", dir:0},
  {k:"크기",        g:m=>m.size==="Unknown"?"비공개":m.size, dir:0,
   sub:m=>m.params!=null?` ${m.params}B`:""},
  {k:"추론 / 상태", g:m=>m.reasoning===true?"추론":m.reasoning===false?"비추론":DASH, dir:0,
   sub:m=>` · ${m.status}`},
];

function cellOf(mt,m){
  const raw=mt.g(m);
  const body=mt.fmt?mt.fmt(raw):(raw==null?DASH:String(raw));
  const sub=mt.sub?mt.sub(m):(raw==null?"":(mt.unit||""));
  return {raw,body,sub};
}

function badgeView(m){
  const badges=METRICS.map(mt=>{
    const c=cellOf(mt,m);
    return `<div class="badge"${mt.tip?` title="${mt.tip}"`:""}>`
      +`<div class="k">${mt.k}</div>`
      +`<div class="v">${c.body}${c.sub?`<small>${c.sub}</small>`:""}</div></div>`;
  }).join("");
  return `<div class="ph">
      <div class="creator">${m.creator} · ${licLab(m.license)}</div>
      <h2>${m.name}</h2>
      <div class="badges">${badges}</div>
    </div>`;
}

function compareView(sel){
  const head=sel.map((m,i)=>
    `<th><span class="sw" style="background:var(${SERIES[i]})"></span>`
    +`<span class="nm" title="${m.name}">${m.name}</span>`
    +`<span class="cr">${m.creator} · ${licLab(m.license)}</span></th>`).join("");
  const rows=METRICS.map(mt=>{
    const tds=sel.map(m=>{
      const c=cellOf(mt,m);
      return `<td>${c.body}${c.sub?`<small>${c.sub}</small>`:""}</td>`;
    }).join("");
    return `<tr><th${mt.tip?` title="${mt.tip}"`:""}>${mt.k}</th>${tds}</tr>`;
  }).join("");
  return `<div class="cmp-wrap"><table class="cmp-tbl">`
    +`<thead><tr><th></th>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
}

function panelHTML(){
  const p=$("#panel");
  const sel=state.selected.map(s=>MODELS.find(x=>x.slug===s)).filter(Boolean);
  if(!sel.length){p.innerHTML='<div class="empty">모델을 선택하세요</div>';return;}
  p.innerHTML = sel.length===1 ? badgeView(sel[0]) : compareView(sel);
}
```

- [ ] **Step 5: 아티팩트 재빌드 후 테스트 통과 확인**

Run: `python3 scripts/build_artifact.py && node --test tests/artifact_ui.test.mjs`
Expected: 6 tests PASS

- [ ] **Step 6: 커밋**

```bash
git add artifact/template.html artifact/llm-radar.html tests/artifact_ui.test.mjs
git commit -m "feat: 우측 패널 2~3개 선택 시 지표 비교표로 전환

지표 정의를 METRICS 배열 하나로 모으고 panelHTML 을 선택 개수에 따라
badgeView(1개, 현행 유지) / compareView(2~3개) 로 분기."
```

---

### Task 2: 행별 최고값 강조

**Files:**
- Modify: `artifact/template.html` (`compareView` 내부, 패널 CSS)
- Test: `tests/artifact_ui.test.mjs`

**Interfaces:**
- Consumes: Task 1의 `METRICS`, `cellOf`, `compareView`
- Produces: `bestIdx(mt, sel) -> Set<number>` — 강조할 열 인덱스 집합

- [ ] **Step 1: 실패하는 테스트 추가**

`tests/artifact_ui.test.mjs` 끝(`test('페이지 JS 오류 없음'...)` **앞**)에 삽입:

```js
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

test('범주형 행(크기·추론/상태)은 강조하지 않는다', async () => {
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
```

- [ ] **Step 2: 실패 확인**

Run: `node --test tests/artifact_ui.test.mjs`
Expected: FAIL — `bestIdx is not defined`, 강조 칸 없음

- [ ] **Step 3: `bestIdx` 추가 + `compareView` 배선**

`cellOf` 정의 **바로 아래**에 삽입:

```js
// 행 안에서 '더 좋은' 값의 열 인덱스. 동점은 모두 포함한다 —
// 하나만 고르면 값이 같은데 우열이 있는 것처럼 읽힌다.
function bestIdx(mt,sel){
  if(!mt.dir) return new Set();
  const nums=sel.map(m=>{const v=mt.g(m);return typeof v==="number"?v:null;});
  const cand=nums.filter(v=>v!=null);
  if(cand.length<2) return new Set();      // 유효값 1개 이하면 비교 자체가 성립 안 함
  const best=mt.dir>0?Math.max(...cand):Math.min(...cand);
  return new Set(nums.map((v,i)=>v===best?i:-1).filter(i=>i>=0));
}
```

`compareView`의 `rows` 계산을 아래로 교체:

```js
  const rows=METRICS.map(mt=>{
    const best=bestIdx(mt,sel);
    const tds=sel.map((m,i)=>{
      const c=cellOf(mt,m);
      return `<td class="${best.has(i)?"best":""}">${c.body}${c.sub?`<small>${c.sub}</small>`:""}</td>`;
    }).join("");
    return `<tr><th${mt.tip?` title="${mt.tip}"`:""}>${mt.k}</th>${tds}</tr>`;
  }).join("");
```

CSS에 한 줄 추가 (`.cmp-tbl td.na` 줄 위):

```css
  .cmp-tbl td.best{color:var(--good);font-weight:700}
```

- [ ] **Step 4: 통과 확인**

Run: `python3 scripts/build_artifact.py && node --test tests/artifact_ui.test.mjs`
Expected: 13 tests PASS

- [ ] **Step 5: 커밋**

```bash
git add artifact/template.html artifact/llm-radar.html tests/artifact_ui.test.mjs
git commit -m "feat: 비교표 행별 최고값 강조

dir(+1/-1/0) 방향에 따라 행마다 더 좋은 값을 굵게+녹색으로.
동점은 모두 강조, 결측·유효값 1개 이하는 강조하지 않음."
```

---

### Task 3: 8축 점수 접이식 섹션

**Files:**
- Modify: `artifact/template.html` (`compareView`, `state`, 패널 CSS)
- Test: `tests/artifact_ui.test.mjs`

**Interfaces:**
- Consumes: Task 2의 `compareView`, 전역 `AX`(축 순서 배열), `LAB`(축 한글 라벨)
- Produces: `axesHTML(sel) -> string`, `state.axesOpen: boolean`

- [ ] **Step 1: 실패하는 테스트 추가**

`test('페이지 JS 오류 없음'...)` **앞**에 삽입:

```js
test('8축 섹션은 기본 접힘, 8행을 담는다', async () => {
  await select(2);
  const d = page.locator('#panel .cmp-axes');
  assert.equal(await d.count(), 1);
  assert.equal(await d.evaluate((el) => el.open), false);
  assert.equal(await d.locator('tbody tr').count(), 8);
});

test('8축을 펼친 뒤 필터를 건드려도 펼친 상태가 유지된다', async () => {
  await select(2);
  await page.locator('#panel .cmp-axes summary').click();
  assert.equal(await page.locator('#panel .cmp-axes').evaluate((el) => el.open), true);
  // 리렌더 유발: 최대가격 슬라이더를 움직인다
  const slider = page.locator('.filters input[type=range]');
  await slider.fill(await slider.getAttribute('max'));
  await slider.dispatchEvent('input');
  assert.equal(await page.locator('#panel .cmp-axes').evaluate((el) => el.open), true);
});

test('8축 미측정 축은 미측정으로 표기되고 강조되지 않는다', async () => {
  await select(3);
  await page.evaluate(() => { state.axesOpen = true; render(); });
  const nas = page.locator('#panel .cmp-axes td.na');
  const n = await nas.count();
  for (let i = 0; i < n; i++) {
    assert.equal((await nas.nth(i).innerText()).trim(), '미측정');
    assert.ok(!((await nas.nth(i).getAttribute('class')) || '').includes('best'));
  }
});
```

- [ ] **Step 2: 실패 확인**

Run: `node --test tests/artifact_ui.test.mjs`
Expected: FAIL — `.cmp-axes` count 0 ≠ 1

- [ ] **Step 3: `state.axesOpen` 추가**

`artifact/template.html:162`의 `let state={...}` 에서 `curOnly:true` 뒤에 `,axesOpen:false` 추가:

```js
let state={view:"radar",selected:[(MODELS.find(m=>m.status==="current")||MODELS[0]).slug],q:"",creators:new Set(PAYLOAD.defaultCreators||[]),lic:new Set(),maxPrice:Infinity,minCtx:0,sizes:new Set(),reasoning:new Set(),curOnly:true,axesOpen:false};
```

- [ ] **Step 4: `axesHTML` 추가 + `compareView`·`panelHTML` 배선**

`bestIdx` **바로 아래**에 삽입:

```js
// 레이더 8축을 숫자로. 차트가 이미 겹쳐 보여주므로 기본은 접어 둔다.
function axesHTML(sel){
  const rows=AX.map(ax=>{
    const ds=sel.map(m=>m.radar[ax]);
    const nums=ds.filter(d=>d.measured).map(d=>d.r);
    const best=nums.length>=2?Math.max(...nums):null;   // 8축은 전부 클수록 좋음
    const tds=ds.map(d=>d.measured
      ? `<td class="${best!=null&&d.r===best?"best":""}">${d.r}${d.estimated?"<small>*</small>":""}</td>`
      : `<td class="na">미측정</td>`).join("");
    return `<tr><th>${LAB[ax]}</th>${tds}</tr>`;
  }).join("");
  return `<details class="cmp-axes"${state.axesOpen?" open":""}>`
    +`<summary>8축 점수 (평균=50 기준선)</summary>`
    +`<div class="cmp-wrap"><table class="cmp-tbl"><tbody>${rows}</tbody></table></div>`
    +`<p class="axnote">r=50이 추적 모델 평균. * = kNN 추정값.</p></details>`;
}
```

`compareView`의 `return` 문에 `axesHTML(sel)`을 덧붙인다:

```js
  return `<div class="cmp-wrap"><table class="cmp-tbl">`
    +`<thead><tr><th></th>${head}</tr></thead><tbody>${rows}</tbody></table></div>`
    +axesHTML(sel);
```

`panelHTML`에 토글 상태 보존을 추가한다 — `render()`가 패널을 innerHTML로 덮어쓰므로
상태를 밖에 두지 않으면 슬라이더만 건드려도 다시 접힌다:

```js
function panelHTML(){
  const p=$("#panel");
  const sel=state.selected.map(s=>MODELS.find(x=>x.slug===s)).filter(Boolean);
  if(!sel.length){p.innerHTML='<div class="empty">모델을 선택하세요</div>';return;}
  p.innerHTML = sel.length===1 ? badgeView(sel[0]) : compareView(sel);
  const d=p.querySelector(".cmp-axes");
  if(d) d.ontoggle=()=>{state.axesOpen=d.open;};
}
```

CSS에 추가 (`.cmp-tbl td.na` 줄 아래):

```css
  .cmp-axes{border-top:1px solid var(--line-soft)}
  .cmp-axes summary{font-family:var(--mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;
    color:var(--muted);padding:10px 14px;cursor:pointer;user-select:none}
  .cmp-axes summary:hover{color:var(--ink)}
  .cmp-axes .cmp-wrap{padding-top:0}
  .axnote{font-family:var(--mono);font-size:9.5px;color:var(--muted);padding:0 14px 10px;margin:0}
```

- [ ] **Step 5: 통과 확인**

Run: `python3 scripts/build_artifact.py && node --test tests/artifact_ui.test.mjs`
Expected: 16 tests PASS

- [ ] **Step 6: 커밋**

```bash
git add artifact/template.html artifact/llm-radar.html tests/artifact_ui.test.mjs
git commit -m "feat: 비교표에 8축 점수 접이식 섹션

기본 접힘. render() 가 패널을 통째로 덮어쓰므로 열림 상태를
state.axesOpen 에 보존한다. 미측정 축은 강조 후보에서 제외."
```

---

### Task 4: 패널 폭 확장 + 좁은 화면 대응

**Files:**
- Modify: `artifact/template.html:31-33` (`.grid` 미디어쿼리), `render()`
- Test: `tests/artifact_ui.test.mjs`

**Interfaces:**
- Consumes: Task 3까지의 패널 렌더
- Produces: `.grid.cmp` 클래스 규약 (비교 중일 때만 부착)

- [ ] **Step 1: 실패하는 테스트 추가**

`test('페이지 JS 오류 없음'...)` **앞**에 삽입:

```js
test('1440px에서 비교 중이면 패널이 420px로 넓어진다', async () => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await select(1);
  assert.equal(await page.locator('.grid').evaluate((el) => el.classList.contains('cmp')), false);
  const w1 = await page.locator('#panel').evaluate((el) => Math.round(el.getBoundingClientRect().width));
  await select(3);
  assert.equal(await page.locator('.grid').evaluate((el) => el.classList.contains('cmp')), true);
  const w3 = await page.locator('#panel').evaluate((el) => Math.round(el.getBoundingClientRect().width));
  assert.equal(w1, 320);
  assert.equal(w3, 420);
});

test('1100px에서는 비교 중이어도 320px 유지 (차트가 눌리지 않게)', async () => {
  await page.setViewportSize({ width: 1100, height: 900 });
  await select(3);
  const w = await page.locator('#panel').evaluate((el) => Math.round(el.getBoundingClientRect().width));
  assert.equal(w, 320);
  await page.setViewportSize({ width: 1440, height: 900 });
});

test('700px에서 비교표는 가로 스크롤이 가능하다', async () => {
  await page.setViewportSize({ width: 700, height: 900 });
  await select(3);
  const ov = await page.locator('#panel .cmp-wrap').first()
    .evaluate((el) => getComputedStyle(el).overflowX);
  assert.equal(ov, 'auto');
  await page.setViewportSize({ width: 1440, height: 900 });
});
```

- [ ] **Step 2: 실패 확인**

Run: `node --test tests/artifact_ui.test.mjs`
Expected: FAIL — `.grid.cmp` 미부착, w3가 320

- [ ] **Step 3: CSS + 토글 배선**

`artifact/template.html:31-33`의 `.grid` 규칙 아래에 한 줄 추가:

```css
  .grid{display:grid;grid-template-columns:248px minmax(0,1fr) 320px;gap:18px;align-items:start}
  /* 비교 중일 때만 패널을 넓힌다. 1200px 미만에서 넓히면 스테이지가 380px 아래로 눌려
     레이더가 읽히지 않는다 — 그 구간은 320px 유지하고 표를 가로 스크롤시킨다. */
  @media(min-width:1200px){.grid.cmp{grid-template-columns:248px minmax(0,1fr) 420px}}
  @media(max-width:1080px){.grid{grid-template-columns:220px minmax(0,1fr)}.panel{grid-column:1/-1}}
  @media(max-width:760px){.grid{grid-template-columns:1fr}.rail{order:2}}
```

`render()`에 클래스 토글 추가:

```js
function render(){
  document.querySelector(".grid").classList.toggle("cmp", state.selected.length>1);
  buildList();panelHTML();legendHTML();
  $("#viewwrap").innerHTML = state.view==="radar"?radarSVG():scatterSVG();
  if(state.view==="scatter"){
    $("#viewwrap").querySelectorAll("circle[data-slug]").forEach(c=>c.onclick=e=>toggleSelect(c.getAttribute("data-slug"),e.metaKey||e.ctrlKey||e.shiftKey));
  }
}
```

- [ ] **Step 4: 통과 확인**

Run: `python3 scripts/build_artifact.py && node --test tests/artifact_ui.test.mjs`
Expected: 19 tests PASS

- [ ] **Step 5: 눈으로 확인 — 3열이 실제로 읽히는지**

스펙 7절의 열어둔 위험(420px에 3열은 열당 ~97px)을 실제로 확인한다.

```bash
node -e "
import('/Users/kti0801/llm_stat/node_modules/playwright/index.mjs').then(async ({chromium})=>{
  const b=await chromium.launch();
  const p=await b.newPage({viewport:{width:1440,height:1000}});
  await p.goto('file:///Users/kti0801/llm_stat/artifact/llm-radar.html');
  await p.waitForSelector('#list .mrow');
  const r=p.locator('#list .mrow');
  await r.nth(0).click();
  await r.nth(1).click({modifiers:['Meta']});
  await r.nth(2).click({modifiers:['Meta']});
  await p.locator('#panel .cmp-axes summary').click();
  await p.locator('#panel').screenshot({path:'/tmp/cmp-panel.png'});
  // 셀이 잘렸는지: scrollWidth > clientWidth 인 칸 보고
  const clipped=await p.evaluate(()=>Array.from(document.querySelectorAll('#panel .cmp-tbl td,#panel .cmp-tbl th'))
    .filter(e=>e.scrollWidth>e.clientWidth+1).map(e=>e.innerText.trim()));
  console.log('잘린 칸:', clipped.length?clipped:'없음');
  await b.close();
});"
```

`/tmp/cmp-panel.png`를 Read 툴로 열어 확인한다. 글자가 잘리거나 열이 겹치면
`.cmp-tbl th,.cmp-tbl td`의 `padding:6px 7px`를 `5px 5px`로, `font-size:12.5px`를 `12px`로 줄인다.
조정했으면 `python3 scripts/build_artifact.py` 후 테스트를 다시 돌린다.

- [ ] **Step 6: 전체 테스트 + 커밋**

```bash
node --test tests/*.test.mjs && python3 -m unittest discover -s tests -p "test_*.py"
git add artifact/template.html artifact/llm-radar.html tests/artifact_ui.test.mjs
git commit -m "feat: 비교 중 패널 폭 확장 (1200px 이상) + 좁은 화면 가로 스크롤"
```

---

## Self-Review

**스펙 커버리지**

| 스펙 절 | 담당 |
|---|---|
| 4.1 지표 단일 출처 | Task 1 Step 4 (`METRICS`) |
| 4.2 렌더 분기 | Task 1 Step 4 (`panelHTML`) |
| 4.3 비교표 마크업 | Task 1 Step 3·4 |
| 4.4 폭 확장 | Task 4 Step 3 |
| 4.5 최고값 강조 | Task 2 |
| 4.6 8축 접이식 | Task 3 |
| 4.7 좁은 화면 | Task 4 Step 3 (`.cmp-wrap{overflow-x:auto}`는 Task 1에서 이미 부여, Task 4에서 검증) |
| 5 테스트 10종 | Task 1 (1·2·3·9·JS오류), Task 2 (4·5·6·7), Task 3 (8), Task 4 (폭) |
| 7 위험: 3열 빽빽함 | Task 4 Step 5 (스크린샷 + 잘림 검사) |

**타입·이름 일관성**

- `METRICS` 항목 키: `k`(라벨) `g`(getter) `dir` `fmt` `unit` `sub` `tip` — Task 1~3에서 동일하게 사용
- `bestIdx(mt, sel)`는 Task 2에서 정의하고 Task 2 `compareView`에서만 호출. Task 3 `axesHTML`은 8축 전용 최대값 로직을 따로 쓴다(`METRICS` 구조가 아니라 `m.radar[ax]`를 읽으므로 `bestIdx`를 재사용할 수 없다)
- `.cmp-wrap`은 Task 1에서 정의, Task 3의 8축 표가 재사용

**스펙과 달라진 점 (의도적)**

- 배지의 "가성비 (지능÷혼합$)" 라벨을 "가성비"로 줄이고 설명을 `title` 툴팁으로 옮긴다.
  420px 비교표의 라벨 열(약 100px)에 원래 문구가 들어가지 않는다
