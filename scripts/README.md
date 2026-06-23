# scripts — 데이터 파이프라인

[Artificial Analysis 리더보드](https://artificialanalysis.ai/leaderboards/models)를 스크래핑해 `models/` 의 모델 카드를 생성·갱신한다. 공식 API는 무료 티어에 mmmu·omniscience·multilingual이 없어 쓰지 않는다. 2단계로 분리:

## 1) scrape_aa.mjs — 스크래퍼 (브라우저 필요)

리더보드를 열고 열 그룹(chevron) 14개를 펼쳐 **41열 표**를 JSON으로 저장.

```bash
npm i playwright && npx playwright install chromium   # 최초 1회
node scripts/scrape_aa.mjs
```
- 산출물: `models/data/aa-leaderboard-<날짜>.json`, `models/data/latest.json`
- 검증: 모델 수·열 수(<30이면 중단) — 사이트 구조 변경 감지용.
- `RUN_DATE=2026-06-23` 로 날짜 고정 가능(cron 로그 일관성).

## 2) build_cards.py — 카드 생성 (stdlib, 브라우저 불필요)

스냅샷 JSON → OKF 모델 카드. 스크래핑과 분리돼 재스크래핑 없이 테스트 가능.

```bash
python3 scripts/build_cards.py [TOP_N]   # 기본 40, 0이면 전체 218
```
- 산출물: `models/<slug>.md`, `models/index.md`
- 레이더 8축은 `models/radar-spec.md` 가 SSOT. 스크립트의 `AXES` 와 동기화할 것.

## 주기적 갱신 (주 1회 스케줄)

```bash
node scripts/scrape_aa.mjs && python3 scripts/build_cards.py
# (사이트 빌드 단계가 생기면 이어붙임)
```
클라우드 routine(cron)으로 매주 실행. 출처표기 의무: 데이터 노출 화면에 `출처: artificialanalysis.ai`.

## 주의

- 스크래핑은 사이트 프론트엔드 구조(헤더 chevron, 41열)에 의존 → AA가 UI를 바꾸면 `scrape_aa.mjs` 점검 필요.
- 다국어 축은 소스에 없음(제외). 멀티모달은 약 48%만 측정 → 카드에서 "측정 안 됨" 처리.
