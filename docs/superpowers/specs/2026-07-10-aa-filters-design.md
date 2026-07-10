# AA 필터 5종 재현 + 전체 모델 유니버스 — 설계

- 작성일: 2026-07-10
- 상태: 설계 확정 대기 (사용자 리뷰 전)
- 관련 파일: `scripts/scrape_aa.mjs`, `config.toml`, `scripts/build_cards.py`, `scripts/build_artifact.py`, `artifact/llm-radar.html`(생성물), `models/radar-spec.md`

## 1. 목표

Artificial Analysis(AA) 리더보드의 필터 5종(**Weights / Size / Price / Reasoning / Status**)을 우리 사이트(레이더·가성비·표)에서도 그대로 걸 수 있게 한다. 이를 위해 모델 유니버스를 **전체 creator + current/past 전부**로 확장하고, 필터 속성을 AA 임베드 데이터에서 확보한다.

## 2. 브레인스토밍에서 확정된 결정

| 항목 | 결정 |
|---|---|
| 필터 범위 | AA 필터 5종 전부 |
| 모델 유니버스 | 전체 creator, current + past (약 570개) |
| 기본 화면 | Status=Current만 (약 267개) |
| 정규화 집단 | current+past 전체 기준 min-max (드리프트 특성 감수) |
| 카드(.md) 생성 | 전체 ~570개 모두 생성 |
| 아티팩트 스케일 | HTML ~1MB 감수 |

## 3. 라이브 AA 조사 결과 (2026-07-10 확인)

필터 UI 5종과 임베드 JSON(`self.__next_f` 스트리밍) 매핑:

| 필터 | AA UI 옵션 | 임베드 JSON 필드 | 우리 현황 |
|---|---|---|---|
| Weights | Open / Proprietary | `license` | 이미 있음(`License`: Open 171 / Proprietary 96) |
| Size | Tiny(<4.5B) / Small(4.5–40B) / Medium(40–150B) / Large(>150B) / Unknown | `paramClass`(tiny/small/medium/large; 없으면 Unknown) + `totalParameters`/`activeParameters` | 신규 캡처 필요 |
| Price | Low(<$0.15) / Medium($0.15–1) / High(>$1) | Blended 가격(숫자) | 이미 있음(숫자 가격) |
| Reasoning | Reasoning / Non-Reasoning | `isReasoning`(bool) | 신규 캡처 필요 |
| Status | "Current" 체크박스(기본 켜짐, 해제 시 과거 노출) | `deprecated`(bool) → current = `!deprecated` | 신규 캡처 필요 |

- 임베드 데이터에 약 570개 모델(현재 ~267 + 과거 ~300)이 존재. `deprecated`·`isReasoning`·`paramClass`가 모델마다 붙어 있음.
- 주의: JSON에 `paramClass`와 `sizeClass` 두 필드가 있으나, **Size 필터(파라미터 버킷)와 일치하는 것은 `paramClass`** 다. `sizeClass`는 사용하지 않는다.

## 4. 접근법

### 채택: 하이브리드 스크랩 (DOM 테이블 유지 + JSON 속성 조인)

1. Playwright로 AA 페이지 로드 후 **Status의 "Current" 체크를 해제** → 테이블이 current+past 전체(~570행)로 재렌더.
2. **검증된 DOM 테이블 스크랩**으로 벤치마크 41개 컬럼을 그대로 수집(현행 로직 재사용).
3. **임베드 JSON 파싱**으로 모델별 `{paramClass, totalParameters, isReasoning, deprecated}`만 추출.
4. **모델명으로 조인** → `latest.json` 각 행에 속성 필드 추가.

이유: 벤치마크 컬럼 파싱을 처음부터 재작성(=JSON 전면 파싱)하는 것보다 리스크가 낮다. 검증된 테이블 스크랩은 유지하고, 신규 3속성만 JSON에서 얹는다.

### 반려된 대안

- **B. JSON 전면 재작성**: 41개 벤치마크 컬럼 매핑을 다시 짜야 함 → 리스크·작업량 큼. (다만 DOM 구조가 크게 바뀌면 이 방식으로 폴백 가능.)
- **C. 필터별 반복 스크랩**: 필터 조합마다 여러 번 긁기 → 느리고 취약.

## 5. 컴포넌트별 변경 (의존성 실행 순)

### 5.1 `scripts/scrape_aa.mjs` — 하이브리드 스크랩
- 페이지 로드 후 "Current" 상태 필터 해제 클릭 → 테이블 재렌더 대기(행 수 증가 확인).
- 기존 DOM 테이블 파싱 유지.
- 임베드 JSON에서 모델별 `paramClass`·`totalParameters`·`isReasoning`·`deprecated` 추출.
- 모델명 정규화 후 조인. 조인 실패(미매칭) 모델은 로그로 남기고 속성 null 처리.
- `latest.json` 스키마: 기존 `scraped_at`·`source`·`headers`·`rows` 유지 + 각 row에 `paramClass`(문자열|null), `totalParameters`(숫자|null), `isReasoning`(bool), `deprecated`(bool) 추가.

### 5.2 `config.toml` — 화이트리스트 개방
- `creators.whitelist = []`(빈 배열 = 전체 허용, 주석에 명시된 동작). 필드는 향후 재큐레이션용으로 남겨둠.

### 5.3 `scripts/build_cards.py` — 전체 유니버스 + 속성 + 정규화
- 전체 모델(화이트리스트 빈 값 → 전체) 대상 카드 생성 (~570개 .md + `models/index.md`).
- 정규화: **current+past 전체 집단 기준 min-max**. `radar-spec.md`에 집단 기준 변경 + 시간 경과 하향 드리프트 특성 명시.
- 각 카드/`cards.json` 레코드에 필터 속성 부여:
  - `weights`: license(Open/Proprietary)
  - `size`: paramClass → 라벨(Tiny/Small/Medium/Large), 없으면 `Unknown`
  - `priceBucket`: Blended 기준 Low/Medium/High 파생
  - `reasoning`: isReasoning
  - `status`: deprecated → `current`/`past`
- 과거 모델의 결측 벤치마크는 기존 규칙(축 null = 점선·회색)대로 처리.

### 5.4 `scripts/build_artifact.py` + HTML 템플릿 — 필터 3종 추가
- 기존 필터 유지: 제작사, 라이선스(=Weights), 최대 가격 슬라이더.
- 신규 추가:
  - **Size**: 체크박스(Tiny/Small/Medium/Large/Unknown)
  - **Reasoning**: 체크박스(Reasoning/Non-reasoning)
  - **Status**: "Current" 체크박스, **기본 켜짐**(로드 시 current만 표시)
- Price: 기존 최대가격 슬라이더 유지(3버킷의 상위집합이라 더 유연). AA 버킷 라벨과의 정합은 슬라이더로 충분 — 의도적 편차.
- `filtered()` 함수에 신규 속성 필터 로직 배선. `buildFilters()`에 UI 그룹 추가.
- 기본 필터 상태에서 아티팩트는 current(~267)만 노출, Status 해제 시 전체(~570) 노출.

### 5.5 문서
- `models/radar-spec.md`: 정규화 집단(current+past) 및 드리프트 특성, 신규 필터 속성 출처 명시.

## 6. 데이터 흐름

```
AA 페이지 (Current 해제)
  → scrape_aa.mjs (DOM 테이블 + JSON 속성 조인)
  → latest.json (rows + paramClass/isReasoning/deprecated/totalParameters)
  → build_cards.py (전체 집단 정규화, cards/*.md + cards.json[속성])
  → build_artifact.py (llm-radar.html: 5필터)
  → site/index.html → Pages 배포
```

## 7. 에러 처리 / 견고성

- **스키마 새너티 체크(중요)**: 스크래퍼가 (a) 모델 수 ≥ 임계값(예: 400), (b) 필수 속성 필드 존재를 검증. 미달 시 **비정상 종료(exit≠0)**로 CI를 실패시켜 가시화 — AA 내부 JSON 의존이 DOM 컬럼보다 취약하므로 조용한 빈 산출을 방지.
- Status 해제 클릭 실패/미반영(행 수 미증가) 시에도 실패 처리.
- `paramClass` 없음 → size 버킷 `Unknown`.
- 결측 벤치마크 → 축 null(기존 규칙).

## 8. 테스트

- **스크래퍼 파서 단위 테스트**: 저장된 AA HTML 픽스처에서 N개 모델 × 필수 속성 추출 검증(조인 정확성 포함).
- **build_cards 테스트**: 소형 픽스처로 정규화 + 버킷 파생(특히 Unknown, price 경계값) 검증.
- **아티팩트 필터 JS**: 각 속성 필터가 기대 부분집합을 내는지 assert + 브라우저 수동 확인(5필터 토글).
- **회귀**: 기본(Current) 뷰 모델 수가 기존 current와 일치, Grok 잔존, 기존 축 점수 재현.

## 9. 리스크 / 감수 사항

- **AA 임베드 JSON은 비공개 내부 구조** → 사전 통보 없이 변경 가능. 완화: 새너티 체크 + 실패 시 즉시 가시화. DOM 테이블 스크랩은 유지되므로 벤치마크는 JSON 변경에 영향받지 않음.
- **정규화 드리프트**: 과거 모델 누적으로 current 모델 표시 점수가 시간이 지나며 하향(문서화됨, 감수).
- **아티팩트 ~1MB**: 감수됨.
- **~570개 카드 git 커밋**: 일일 재생성 diff 노이즈(현행도 CI가 커밋하는 구조라 동일 성격).

## 10. 범위 밖 (Out of scope)

- 서버사이드 실시간 필터링.
- 과거 모델의 결측 벤치마크 백필.
- 독점 모델 파라미터 크기 확보(계속 `Unknown`).
- Price를 AA식 3버킷 UI로 치환(기존 슬라이더 유지).
