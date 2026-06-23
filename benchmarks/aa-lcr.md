---
type: Benchmark
title: AA-LCR (Long Context Reasoning)
aa_metric: AA-LCR
column: "AA-LCR"
domain: Long Context Reasoning
category: 긴문맥
# 레이더 기여 (SSOT — build_cards.py가 읽음)
axes:
  - { axis: long_context, weight: 1.0 }   # 주 기여(단독): 긴 문맥 통합 추론
attributes:
  modality: text
  task_type: 개방형 서술 응답(여러 긴 문서 종합 추론)
  scoring: "LLM 동등성 판정 · pass@1"
  grader: "Qwen3 235B A22B 2507 (Non-Reasoning)"
  scale: "0–100%"
  n_items: 100
  document_categories: [Company Reports, Industry Reports, Government Consultations, Academia, Legal, Marketing Materials, Survey Reports]
  tokens_per_question: "~100k (cl100k_base 기준)"
  min_context_window: "128K"
  index_weight: "6% (Intelligence Index v4.1)"
  added_version: "v2.2 (2025-08)"
  paper_status: "학술 논문 없음 — 방법론 페이지만 근거"
  contamination_risk: 낮음(비공개 비중·초장문 입력)
  higher_is_better: true
org: Artificial Analysis
year: 2025
resource: https://artificialanalysis.ai/methodology/intelligence-benchmarking
methodology: /benchmarks/sources/aa-lcr-methodology.md
tags: [long-context, reasoning, retrieval]
timestamp: 2026-06-23T00:00:00Z
---

# 무엇을 측정하나

여러 개의 **긴 문서에 걸친 추론(Long Context Reasoning)** 능력을 측정한다. 질문 하나에 약 **10만 토큰**(cl100k_base 토크나이저 기준) 분량의 입력이 딸려 있고, 모델은 그 방대한 자료를 통째로 읽은 뒤 **여러 문서를 가로질러 정보를 종합·연결해야** 답을 낼 수 있다. 핵심 설계 의도는 단순한 "검색(needle-in-haystack)"이 아니라, 문서 전반에 흩어진 사실을 **모아서 추론**하는 능력을 가리는 것이다. 즉 "긴 입력에서 한 조각을 찾는가"가 아니라 "긴 입력 전체를 이해하고 그 위에서 사고하는가"를 본다.

# 과제 형식 / 예시

- **100개의 고난도 텍스트 문항**으로 구성. 각 문항은 여러 긴 문서가 묶인 컨텍스트를 동반한다.
- 문서는 **7개 카테고리**에서 가져온다: Company Reports(기업 보고서), Industry Reports(산업 보고서), Government Consultations(정부 의견 수렴 자료), Academia(학술), Legal(법률), Marketing Materials(마케팅 자료), Survey Reports(설문 보고서).
- 질문당 입력이 **~10만 토큰**이라, 일부만 읽고 답하는 식으로는 풀리지 않는다. 답은 서로 다른 문서·섹션에 분산된 단서를 결합해야 나온다.
- 응답은 객관식이 아니라 **개방형 서술**이며, 별도 채점기가 정답과의 동등성을 판정한다(아래 채점 참조).

# 채점 방식

- **pass@1**: 모델은 한 번의 응답으로 평가받는다(여러 번 시도해서 최고를 고르는 방식이 아님).
- **LLM 동등성 판정기(equality checker)**: 모델 응답이 기준 정답과 같은지를 **Qwen3 235B A22B 2507 (Non-Reasoning)** 모델이 판정한다. 사람 채점이 아니라 LLM 채점이라는 점이 이 벤치마크의 특징이다.
- 점수는 100문항 중 통과 비율(accuracy, 0–100%).

# 점수 해석 (높음 / 낮음)

- **높음** = 아주 긴 문서더미를 통째로 읽고, 그 안에 흩어진 정보를 연결해 추론·종합하는 능력이 강함. 장문 보고서 분석, 대량 자료 요약·대조, 큰 코드베이스/문서집합 처리에 직결.
- **낮음** = 짧은 입력엔 강해도 입력이 길어지면 앞부분을 잊거나, 문서 간 연결을 놓치거나, 컨텍스트 중간 정보를 흘리는 식으로 무너짐("lost in the middle" 류 약점).
- 컨텍스트 윈도우가 **128K 미만**인 모델은 ~10만 토큰 입력을 담지 못해 **애초에 점수가 산출되지 않는다**(평가 자격 미달).

# 난이도 · 포화 · 현 SOTA

- **고난도** 100문항으로 설계되어 일반적인 단답·검색형 긴문맥 테스트보다 어렵다. 단서가 여러 문서에 분산돼 있어 표층 검색으로는 부족하다.
- **주의 — 정확한 SOTA 수치는 방법론 페이지에 명시돼 있지 않다.** 본 문서는 출처(방법론 페이지)에 있는 사실만 기록하므로, 구체적 리더보드 점수·1위 모델은 단정하지 않는다. 최신 순위는 AA 리더보드 원본을 확인해야 한다.
- 평가 자격 자체가 **128K+ 컨텍스트**를 요구하므로, 장문 입력을 지원하지 않는 모델은 비교에서 빠진다.

# 한계 · 주의 (논문 부재 · 방법론 기반)

- **학술 논문이 없다.** AA-LCR은 Artificial Analysis가 자체 구성한 벤치마크이며, 공개된 근거는 **공식 방법론 페이지뿐**이다. 동료심사(peer review)를 거친 문항 설계·검증 절차 문서가 존재하지 않는다. 이 문서의 모든 사실은 그 방법론 페이지에서만 가져왔다.
- **LLM 채점의 한계**: 동등성 판정을 Qwen3 235B(Non-Reasoning)가 수행한다. 채점 모델 자체의 편향·오판 가능성이 있고, 판정기 모델이 바뀌면 점수가 흔들릴 수 있다. 사람 검수 기반 채점이 아니다.
- **문항 수가 적음(100개)**: 표본이 작아 모델 간 미세한 점수 차의 통계적 안정성에 한계가 있다.
- **개방성 부족**: 문항·정답이 일반에 완전 공개·검증된 형태가 아니라, 외부 재현·감사가 제약된다.
- **단일 출처 축**: 레이더에서 긴문맥 축에 기여하는 거의 유일한 소스라, 이 벤치마크의 특성이 곧 축 특성이 된다(아래 레이더 기여 근거 참조).

# 다른 벤치마크와의 관계

- 전통적 긴문맥 테스트(예: needle-in-a-haystack류)는 "긴 입력에서 한 조각 찾기"에 가까운 반면, AA-LCR은 **여러 문서를 종합한 추론**을 요구해 한 단계 더 어렵다.
- [[gpqa-diamond]] GPQA Diamond·[[humanitys-last-exam]] HLE 등은 짧은 입력의 **추론 깊이**를 보지만, AA-LCR은 **입력 길이 × 추론**의 결합 능력을 본다 → 레이더에서 추론 축이 아니라 **긴문맥 축**에 배치되는 이유.
- AA Intelligence Index 안에서는 **General 카테고리**에 속하며 **v4.1 기준 6% 가중치**를 차지한다(처음 추가: v2.2, 2025-08).

# 레이더 기여 근거

- **long_context (1.0, 단독)**: 벤치마크의 본질이 ~10만 토큰 다문서 통합 추론이므로 긴문맥 축에 **주 기여(가중치 1.0)**. 긴문맥 축의 핵심 정의("대량 문서 통합 추론", [[radar-spec]])와 정확히 일치한다.
- **다른 축으로 분산하지 않은 이유**: "추론"이 들어가지만 그 추론은 어디까지나 **장문 입력 처리 능력에 종속**된 추론이다. 짧은 추론(reasoning 축)과 섞으면 축 정의가 흐려지므로, reasoning 축에는 기여시키지 않고 long_context 단독으로 둔다.
- **결측 처리 유의**: 긴문맥은 단일 소스 축에 가깝다. 모델이 128K 미만이라 점수가 없으면, 방법론 규칙상 교차 보간하지 않고 그대로 **결측(null)** 처리된다([[radar-spec]] 집계 방법론).

# 한국 · 앨런 관점

긴 한국어/영어 문서더미(법률 계약서, 정부 공고·의견 수렴 자료, 산업·기업 보고서, 논문 묶음)를 한 번에 넣고 "전체를 읽고 종합해줘"라고 시키는 실무에 직결되는 축이다. RFP·제안서·정산 서류처럼 **여러 장문 문서를 가로질러 사실을 대조·종합**해야 하는 작업에서 모델을 얼마나 믿을 수 있는지를 가늠하는 지표로 유용하다. 다만 문항이 영어 기반이고 한국어 장문에 대한 별도 평가가 아니라는 점은 해석 시 감안해야 한다.

# 원본 자료

- 방법론: [aa-lcr-methodology.md](/benchmarks/sources/aa-lcr-methodology.md) (공식 페이지 갈무리)
- 출처 원본: [Artificial Analysis — Intelligence Benchmarking Methodology](https://artificialanalysis.ai/methodology/intelligence-benchmarking)
- 축 정의: [[radar-spec]] · 능력 영역: [[domains-index]] → Long Context Reasoning
- **참고: 본 벤치마크는 학술 논문이 없다.** 위 방법론 페이지가 유일한 1차 근거다.

# Citations

[1] [Artificial Analysis Intelligence Benchmarking Methodology](https://artificialanalysis.ai/methodology/intelligence-benchmarking)
