# 우측 패널 다중 모델 비교표 — 설계

- 작성일: 2026-08-05
- 상태: 설계 확정 대기 (사용자 리뷰 전)
- 관련 파일: `artifact/template.html`, `scripts/build_artifact.py`(재빌드만), `tests/artifact_ui.test.mjs`(신규)

## 1. 목표

⌘+클릭으로 최대 3개까지 모델을 고르면 레이더 차트는 이미 겹쳐 그려진다. 그런데 우측 패널은
`state.selected[0]` 하나의 지표만 보여준다. 가격·속도·컨텍스트 같은 실용 지표를 비교하려면
모델을 번갈아 클릭하며 숫자를 외워야 한다.

**선택한 모델 전부의 지표를 한 화면에 나란히** 놓아 이 왕복을 없앤다.

## 2. 브레인스토밍에서 확정된 결정

| 항목 | 결정 |
|---|---|
| 배치 | 우측 패널을 '지표 행 × 모델 열' 표로 전환 (새 섹션 추가 아님) |
| 단일 선택 시 | 현재 배지 그리드(2열 × 6행) 그대로 유지 |
| 패널 폭 | 비교 중 + 뷰포트 ≥1200px 일 때만 320 → 420px |
| 차이 강조 | 행별 최고값을 굵게 + `--good` 녹색 |
| 8축 점수 | `<details>`로 접어서 표 하단에 추가 (기본 접힘) |
| 최대 비교 수 | 현행 3개 유지 (변경 없음) |

## 3. 현재 구조 (2026-08-05 기준)

```
.grid  248px | minmax(0,1fr) | 320px
       rail  | stage(차트)   | panel
```

- `panelHTML()` — `MODELS.find(x => x.slug === state.selected[0])` 하나만 렌더
- `.badges` — `grid-template-columns:1fr 1fr`, 배지 12개
- `state.selected` — slug 배열, 최대 3 (`toggleSelect`)
- `SERIES = ["--series-0","--series-1","--series-2"]` — 선택 순서별 색. 목록 점·레이더 다각형·범례가 이미 이 색을 씀
- `render()` — 필터·선택이 바뀔 때마다 `panelHTML()`이 패널을 통째로 덮어씀

## 4. 설계

### 4.1 지표 정의를 단일 출처로

배지 경로와 표 경로가 같은 목록을 읽는다. 지표를 추가·수정할 때 한 곳만 고친다.

```js
// dir: +1 = 클수록 좋음, -1 = 작을수록 좋음, 0 = 강조 대상 아님
const METRICS = [
  { k:"종합지능",        v:m=>m.intel,       dir:+1 },
  { k:"가성비",          v:m=>m.value,       dir:+1, tip:"종합지능 ÷ 혼합가" },
  { k:"혼합가",          v:m=>m.price,       dir:-1, fmt:usd, unit:"/1M",
    tip:"AA 혼합가 — 캐시히트 7 : 입력 2 : 출력 1 가중" },
  { k:"입력가",          v:m=>m.price_in,    dir:-1, fmt:usd, unit:"/1M" },
  { k:"출력가",          v:m=>m.price_out,   dir:-1, fmt:usd, unit:"/1M" },
  { k:"컨텍스트",        v:m=>m.ctx,         dir:+1, fmt:fmtCtx },
  { k:"속도",            v:m=>m.speed,       dir:+1, unit:"t/s" },
  { k:"TTFT",            v:m=>m.ttft,        dir:-1, unit:"s",
    tip:"첫 토큰까지 지연. 추론 모델은 사고시간 포함이라 큼" },
  { k:"총 응답시간",     v:m=>m.total_resp,  dir:-1, unit:"s" },
  { k:"멀티모달",        v:m=>m.radar.multimodal.measured ? "측정" : "미측정", dir:0 },
  { k:"크기",            v:m=>m.size === "Unknown" ? "비공개" : m.size, dir:0 },
  { k:"추론 / 상태",     v:m=>fmtReasoning(m), dir:0 },
];
```

기존 배지와 동일한 12개 항목이다. 순서만 비교하기 좋게 조정한다(가격 3종을 붙이고,
지능·가성비를 맨 위로).

### 4.2 렌더 분기

```js
function panelHTML() {
  const sel = state.selected.map(s => MODELS.find(x => x.slug === s)).filter(Boolean);
  if (!sel.length) return empty();
  return sel.length === 1 ? badgeView(sel[0]) : compareView(sel);
}
```

`badgeView`는 지금 코드를 `METRICS`를 읽도록 바꾼 것이다. 항목 12개는 그대로고 배열 순서만
`METRICS` 순서를 따른다 — 가격 3종이 혼합가·입력가·출력가 순으로 붙는다.

단일 선택을 1열 표로 만들지 않는 이유: 배지는 2열 × 6행으로 320px 안에 들어가지만,
1열 표는 12행 세로로 늘어져 지금보다 읽기 나쁘다.

### 4.3 비교표 마크업

```html
<table class="cmp-tbl">
  <thead>
    <tr>
      <th></th>
      <th><span class="sw" style="background:var(--series-0)"></span>Claude Opus 5 (max)</th>
      <th><span class="sw" style="background:var(--series-1)"></span>Claude Sonnet 5 (max)</th>
    </tr>
  </thead>
  <tbody>
    <tr><th>종합지능</th><td class="best">61</td><td>53</td></tr>
    …
  </tbody>
</table>
```

- 열 머리: 시리즈 색 스와치 + 모델명. 2줄까지 줄바꿈, 넘치면 말줄임 + `title` 전체 이름
- 제작사·라이선스는 열 머리 아래 한 줄(9.5px, `--muted`)
- `tip`이 있는 지표는 행 머리에 `title` 속성

### 4.4 폭 확장

```css
@media(min-width:1200px){ .grid.cmp{ grid-template-columns:248px minmax(0,1fr) 420px } }
```

`render()`에서 `document.querySelector(".grid").classList.toggle("cmp", state.selected.length > 1)`.

1200px 미만에서 넓히지 않는 이유: 1081px 뷰포트에서 패널을 420px로 늘리면 스테이지가
`1081 − 248 − 420 − 36 = 377px`까지 눌린다. 레이더가 읽히지 않을 만큼 작아진다.
그 구간에서는 320px을 유지하고 표에 가로 스크롤을 건다.

### 4.5 최고값 강조

```js
function bestIdx(metric, sel) {
  if (!metric.dir) return new Set();
  const vals = sel.map(metric.v);
  const nums = vals.map(v => typeof v === "number" ? v : null);
  const cand = nums.filter(v => v != null);
  if (cand.length < 2) return new Set();          // 비교 대상이 1개 이하면 강조 무의미
  const best = metric.dir > 0 ? Math.max(...cand) : Math.min(...cand);
  return new Set(nums.map((v, i) => v === best ? i : -1).filter(i => i >= 0));
}
```

- `dir: 0` 행(멀티모달·크기·추론/상태)은 강조하지 않는다
- `null` 칸은 `—`로 표기하고 후보에서 제외
- 동점이면 동점자를 **모두** 강조한다. 하나만 고르면 같은 값인데 우열이 있는 것처럼 읽힌다
- 유효값이 1개뿐이면 강조하지 않는다 — 나머지가 결측인 것이지 그 모델이 이긴 게 아니다
- **전원 동점이면 강조하지 않는다** (구현 중 추가). 컨텍스트가 세 모델 모두 `1M`일 때 전부
  녹색이 되면 우열 정보는 없이 시선만 끈다. 위 두 규칙과 같은 원리 — 비교가 성립하지 않는
  행은 강조 대상이 아니다
- 8축 표도 같은 `bestIdx`를 재사용해 규칙을 일치시킨다 (미측정은 `null`로 넘겨 후보에서 제외)

### 4.6 8축 접이식

```html
<details class="cmp-axes" ${state.axesOpen ? "open" : ""}>
  <summary>8축 점수 (평균=50 기준선)</summary>
  <table class="cmp-tbl">…</table>
</details>
```

- `render()`가 패널을 통째로 다시 그리므로 열림 상태를 `state.axesOpen`(기본 `false`)에 보관한다.
  없으면 슬라이더만 건드려도 다시 접힌다
- **갱신은 `toggle` 이벤트가 아니라 `panelHTML()`이 innerHTML을 덮어쓰기 직전에 현재 DOM의
  `.open`을 읽는 방식으로 한다** (구현 중 정정). `toggle`은 비동기라 사용자가 펼친 것과 같은 틱에
  리렌더가 걸리면 `state`에 반영되기 전에 다시 접히는 레이스가 있다 — 테스트가 잡았다.
  결과적으로 마운트된 `<details>`가 열림 상태의 주인이고 `state.axesOpen`은 리렌더를 건너는
  운반체다. `state.axesOpen`만 바꾸고 `render()`를 불러도 반영되지 않는다
- 값은 `m.radar[ax].r`. `measured: false`면 `미측정`, 강조 후보에서 제외
- `estimated: true`면 값 뒤에 `*`를 붙이고 범례에 `* 추정`을 단다 — 카드(.md)의 실측/추정 구분과 같은 원칙
- 8축은 전부 `dir: +1`(r이 클수록 평균 대비 우수)

### 4.7 좁은 화면

- ≤1080px: 패널이 이미 `grid-column:1/-1`로 전체 너비 → 표가 오히려 여유롭다. 추가 처리 없음
- ≤760px: `.cmp-tbl` 래퍼에 `overflow-x:auto`

## 5. 테스트

`tests/artifact_ui.test.mjs` 신규. `node --test`로 실행하며, 이미 의존성에 있는 Playwright로
빌드된 `artifact/llm-radar.html`을 `file://`로 연다.

| # | 검증 |
|---|---|
| 1 | 모델 1개 선택 → `.badges` 렌더, `.cmp-tbl` 없음 |
| 2 | 2개 선택 → `.cmp-tbl` 열 2개(+라벨 열), 배지 없음 |
| 3 | 3개 선택 → 열 3개 |
| 4 | 혼합가 행(`dir:-1`)에서 **가장 싼** 칸에 `.best` — 값이 서로 다른 모델 조합으로 검증 |
| 5 | 종합지능 행(`dir:+1`)에서 **가장 높은** 칸에 `.best` |
| 6 | 동점 지표는 동점자 모두 `.best` |
| 7 | 결측(`—`) 칸에는 `.best`가 붙지 않음 |
| 8 | 8축 `<details>` 기본 접힘, 펼친 뒤 필터를 건드려도 열린 채 유지 |
| 9 | 비교 해제(1개로 복귀) → 배지로 복귀, `.grid.cmp` 해제 |
| 10 | 페이지 JS 오류 없음 |

TDD로 진행한다 — 각 검증을 먼저 실패시키고 구현한다.

### 범위 밖 (별건)

CI(`.github/workflows/update.yml`)는 현재 테스트를 전혀 실행하지 않는다. 이번 작업에서
`tests/artifact_ui.test.mjs`를 추가해도 자동으로 돌지는 않는다. CI에 테스트 단계를 넣는 것은
별도 작업으로 남긴다.

## 6. 변경 파일

| 파일 | 변경 |
|---|---|
| `artifact/template.html` | CSS(`.cmp-tbl`·`.grid.cmp`·`details`), `METRICS`, `badgeView`/`compareView`/`bestIdx`, `state.axesOpen`, `render()`의 클래스 토글 |
| `tests/artifact_ui.test.mjs` | 신규 |
| `artifact/llm-radar.html` | `build_artifact.py` 재빌드 산출물 |

데이터 파이프라인(`scrape_aa.mjs`·`build_cards.py`·`cards.json`)은 건드리지 않는다.
표에 쓰는 필드는 모두 `cards.json`에 이미 있다.

## 7. 열어둔 위험

- **420px에 3열이 빽빽하다.** 열당 약 97px이다. `$25.00`(13px mono ≈ 47px)는 들어가지만
  모델명은 2줄로 접히고 일부는 말줄임된다. 구현 후 실제로 열어 보고 폰트·패딩을 조정한다
- **`<details>` 상태 보존.** `render()`가 innerHTML을 덮어쓰는 구조라 상태를 밖에 둬야 한다.
  같은 문제가 앞으로 다른 접이식 UI에도 생긴다 — 지금은 `state.axesOpen` 하나로 충분하지만,
  두 번째가 생기면 패널 렌더를 부분 갱신으로 바꾸는 편이 낫다
