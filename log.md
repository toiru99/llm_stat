# Update Log

## 2026-06-23

* **Initialization**: OKF 규약 기반 LLM Wiki 디렉터리 구조 생성 (benchmarks/, benchmarks/sources/, domains/).
* **Creation**: Artificial Analysis 리더보드 벤치마크 원본 논문 15편 다운로드 및 검증 (benchmarks/sources/). GPQA·MMMU-Pro·HLE·SciCode·CritPt·IFBench·GDPval·ITBench·Terminal-Bench·τ/τ²/τ³(τ-Knowledge)·AA-Omniscience·APEX-Agents(+전신).
* **Creation**: AA 자체 지표(논문 없음) 방법론 원문 4건 저장 (Intelligence Index·Omniscience Index·AA-LCR·APEX-Agents-AA).
* **Creation**: 벤치마크 개념 문서 15개 작성 (benchmarks/*.md). 각 문서에 능력 영역(domain)·AA 지표명·원본 PDF 링크 포함.
* **Creation**: 능력 영역 매핑 문서 (domains/index.md), 벤치마크 목차 (benchmarks/index.md), 루트 index.md(okf_version 0.1).
* **Note**: τ³-Banking은 단독 논문 없음 → 정식 논문 τ-Knowledge(2603.04370)로 연결. Intelligence Index v4.1 구성은 캡처 리더보드와 일부 상이(은퇴/미포함 벤치마크 존재) — 종합점수 산식과 참고용 개별 점수를 구분 표기.
* **Update**: 원본 자료 폴더 `benchmarks/papers/` → `benchmarks/sources/` 로 이름 변경. 논문 외 모델 공식 소개 페이지·model card·가격 페이지 등 다양한 원본을 함께 수용하기 위함. 모델 추가 시 `models/sources/` 로 동일 패턴 적용 예정.

* **Decision**: 모델 카드 데이터 소스 = 공식 AA Data API(무료 키, 출처표기 의무), 갱신 = 주 1회 스케줄 클라우드 에이전트, 레이더 = 능력 8축(추론·코딩·에이전트·다국어·사실성·멀티모달·긴문맥·지시따르기) + 비용·속도·컨텍스트는 카드 배지.
* **Creation**: 모델 스탯 준비 스캐폴딩 — `models/radar-spec.md`(8축 SSOT), `models/_template.md`(카드 스키마), `models/index.md`, `scripts/fetch_aa.py`(AA API→카드 파이프라인, stdlib), `scripts/README.md`. 실제 데이터 채우기는 AA_API_KEY 발급 후 실행.

* **Decision**: 데이터 소스 최종 = Playwright 스크래핑(공식 API 폐기 — 무료 티어에 mmmu·omniscience·multilingual 없음). 리더보드 열 그룹 chevron 펼치면 41열 전체 확보 검증됨(218모델). 다국어는 어디에도 무료 부재 → 제외.
* **Decision**: 레이더 8축 확정 — 전문지식(Omniscience Accuracy)·추론(HLE)·코딩(SciCode)·에이전트(τ²+Terminal-Bench Hard)·신뢰성(Omniscience Non-Hallucination)·멀티모달(MMMU)·긴문맥(AA-LCR)·지시따르기(IFBench). 종합지능은 헤드라인 배지로.
* **Creation**: 파이프라인 재구성 — scripts/scrape_aa.mjs(Playwright 스크래퍼), scripts/build_cards.py(스냅샷→카드, stdlib). fetch_aa.py(API) 폐기. radar-spec.md·_template.md 스크래핑 방식으로 갱신. models/data/ 에 2026-06-23 스냅샷 저장.
* **Verification**: build_cards.py 로 실데이터 상위 12개 카드 생성·정합성 확인(헤더 41열↔본문 셀 정렬 OK).

* **Decision**: 결측 방법론 확정 — 같은-축 가늠(있는 것만 가중평균, 에이전트 6개 모두 포함), 빈 축은 kNN 추정('추정' 표기), 멀티모달은 모달리티 게이트(비전 미지원=‘미지원’ vs 미측정=추정). 레이더 표시는 z-score 평균기준선(r=50+15z).
* **Decision**: 제작사 화이트리스트 도입 — Anthropic·OpenAI·Google·Z AI·Alibaba·MiniMax·DeepSeek·Kimi·NVIDIA·LG AI Research (218→113 통과). 이름 전부 리더보드 Creator와 정확 일치 확인.
* **Creation/구조**: 루트 config.toml 신설(튜닝값 외부화: 화이트리스트·top_n·갱신주기·추정·정규화). models/cards/(자동생성 카드)·models/data/(스냅샷) 경로 분리. 데모 카드 12개 제거(재생성 예정).
* **Creation**: 벤치마크 문서 15개 enriched 심화 완료(PDF 근거 + column/axes/attributes SSOT). 축 매핑은 각 문서가 선언.

* **Creation**: build_cards.py 전면 재배선 — config.toml 구동(화이트리스트·top_n·dedupe·knn·z-score), 축매핑은 벤치마크 문서 SSOT에서 로드, 정규화→가중평균(있는것만)→z-score 평균기준선(r), 빈 축 kNN 추정(멀티모달은 모달리티 게이트로 보류). models/cards/에 출력.
* **Fix**: 동명 중복(추론 ON/OFF 변형)으로 slug 충돌 → dedupe_variants(최고 종합지능 1개) + slug 안전장치. 결과 113행→87 고유 모델, 파일=index=87 일치.
* **Verification**: 카드 87개 생성, 축별 실측/추정/결측 리포트 정상(멀티모달 49실측/38결측, 나머지 84~87 실측). YAML 결측 null 처리.
