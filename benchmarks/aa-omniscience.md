---
type: Benchmark
title: AA-Omniscience
description: 사실 회상 + 환각 회피 + 모를 때 기권까지 함께 보는 교차 도메인 지식 신뢰성 평가. AA 자체 arXiv 논문 존재.
domain: Knowledge / Non-Hallucination
category: 지식·추론
aa_metric: AA-Omniscience Accuracy / Non-Hallucination Rate / Omniscience Index
# 레이더 기여 (SSOT — build_cards.py가 읽음)
# 한 평가에서 두 지표가 나오므로 per-axis column 오버라이드 사용 (top-level column 생략)
axes:
  - { axis: knowledge, weight: 1.0, column: "AA-Omniscience Accuracy" }          # 6개 도메인 사실지식 폭
  - { axis: trust,     weight: 1.0, column: "AA-Omniscience Non-Hallucination" }  # 환각 회피(신뢰성)
attributes:
  modality: text
  task_type: 단답형 사실 질의(short exact-answer) — 컨텍스트·도구 없이
  scoring: calibration-aware (CORRECT / PARTIALLY_CORRECT / INCORRECT / NOT_ATTEMPTED)
  grading_model: Gemini 2.5 Flash Preview (09-2025) with reasoning
  n_items: 6000
  topics: 42
  domains: [비즈니스, 인문·사회과학, 과학·공학·수학(STEM), 헬스, 법, 소프트웨어공학]
  metrics: [Accuracy, "Non-Hallucination Rate (1 − hallucination rate)", "Omniscience Index (−100 ~ 100)"]
  omniscience_index_range: "−100 ~ 100"
  guess_baseline: 해당없음(단답·기권 허용 — 추측 기저선 없음)
  index_contribution: "AA Intelligence Index v4.1에 12% (Accuracy 8% + Non-Hallucination 4%, 2:1)"
  saturation: 낮음(프런티어 난이도로 필터링 — 출시 시 Omniscience Index > 0 모델 3개뿐)
  contamination_risk: 낮음(최신 출처 기반·필터링·지속 갱신 설계)
  context_or_tools: 없음(모델 내재 지식만 측정)
  higher_is_better: true
org: Artificial Analysis
year: 2025
resource: https://arxiv.org/abs/2511.13029
paper: /benchmarks/sources/aa-omniscience-2511.13029.pdf
methodology: /benchmarks/sources/aa-omniscience-index-methodology.md
tags: [knowledge, hallucination, calibration, reliability, factuality]
timestamp: 2026-06-23T00:00:00Z
---

# 무엇을 측정하나

LLM이 **여러 도메인에 걸친 사실을 정확히 회상하는 능력**과, 모를 때 **자기 지식의 한계를 인지하고 기권(abstain)하는 능력**을 동시에 측정한다. 핵심 문제의식은 "현재 평가 대부분이 정답률(accuracy)만 보상하기 때문에 모델이 불확실할 때 기권보다 추측을 하도록 학습되고, 그 결과 자신있게 틀린 답(환각)을 내놓는다"는 것이다. AA-Omniscience는 정답을 맞히는 능력뿐 아니라 **환각을 얼마나 피하는지(보정, calibration)**까지 한 점수에 묶어, 지식이 중요한 실무에서 모델이 얼마나 "믿을 만한지(knowledge reliability)"를 가린다.

저자들은 검색·도구 사용이 있더라도 **모델 내재 지식**이 여전히 핵심이라고 본다. 내재 지식이 약하면 도구를 불필요하게 자주 호출하거나(비효율), 맥락·약어를 이해하지 못해 검색조차 제대로 못 하기 때문이다. 그래서 이 평가는 **컨텍스트도 도구도 주지 않고** 모델의 raw 지식 회상력만 측정한다.

# 과제 형식 / 예시

- 모델에게 **컨텍스트나 도구 접근을 전혀 주지 않고** 단답형 사실 질문을 던진다(날짜·이름·숫자·위치 등 짧고 정확한 답).
- 답하기 전에 모델에게 "**확신할 때만 답하고, 틀리느니 기권하는 편이 낫다**"고 지시한다(전체 프롬프트는 논문 Appendix A.1).
- 질문은 **자동 질문 생성 에이전트**가 권위 있는 1차 문서·학술/산업 출처에서 사실 명제를 뽑아 생성하고, 유사도·난이도·모호성 기준으로 필터링·수정한다(논문 Table 1에 수정 예시: 모호한 질문은 구체화하거나 제거, 특정 출처 텍스트 의존 질문은 추상화).
- 설계 원칙: **Difficult**(해당 분야 전문가만 알 정도 — 포화 회피), **Unambiguous**(정답이 하나, 필요한 맥락은 질문에 포함, 예: 버전 번호), **Not reliant on specific sources**(특정 출판물의 페이지·발행정보가 아니라 주제 지식 자체를 시험 — 단 법처럼 조문 인용이 본질인 도메인은 예외), **Precise**(짧고 정확한 답, 답 형식을 질문에 명시).
- 최신성: 질문의 "first answerable date"(해당 정보가 처음 공개적으로 답 가능해진 추정 시점)를 최신 쪽으로 편향시켜 현행성을 확보(2025년에 처음 답 가능해진 문항은 2% 미만).

# 채점 방식

- 각 응답을 **CORRECT / PARTIALLY_CORRECT / INCORRECT / NOT_ATTEMPTED** 4단계로 분류한다(논문 Table 2).
  - **Correct**: 정답을 온전히 포함하거나 동등(예: "24.8").
  - **Partially correct**: 정확하고 거의 완전하나 요구한 정밀도에 못 미침(예: "25").
  - **Incorrect**: 정답과 의미가 다르거나 모순(예: 틀린 값을 단언).
  - **Not attempted**: 답을 내지 않음 — 지식 부족을 밝히거나 추가 맥락이 필요하다고 함(예: "신뢰할 출처 없이는 정확한 값을 확신할 수 없다").
- 채점은 **Gemini 2.5 Flash Preview (09-2025) with reasoning**를 채점 모델로 사용. 사람 수작업 채점과의 정렬이 다른 후보(gpt-oss-120b, Qwen3-235B-A22B-Thinking, GPT-5)보다 높아 선정.
- 전체 평가 점수는 **반복 평균이 아니라 전체 문항 1회 통과(single pass)**로 계산. 표본 모델 10회 반복에서 Omniscience Index 표준편차가 0.005 미만이라 단일 통과로 충분.

## 세 가지 지표

이 한 번의 평가에서 세 지표가 나온다(c=정답, p=부분정답, i=오답, a=기권 수):

- **Omniscience Index (헤드라인)** = `100 · (c − i) / (c + p + i + a)`. **−100 ~ 100** 범위. 정답에 +, 환각(오답)에 −, 기권은 중립. 오답 페널티 p=1로 정답 보상과 동일 크기. **Index가 양수가 되려면 맞힌 횟수가 틀린 횟수보다 많아야** 한다.
- **Accuracy** = `c / (c + p + i + a)`. 시도율과 무관한 순수 정답률. 다른 벤치마크와 직접 비교 및 내재 지식 폭 파악용.
- **Hallucination rate** = `i / (p + i + a)` — 정답을 못 맞힐 때 (부분정답·기권 대신) 틀린 답을 단언할 확률. 리더보드에는 **Non-Hallucination Rate = 1 − hallucination rate**로 표기.

# 점수 해석 (높음 / 낮음)

- **Accuracy 높음** = 여러 도메인에 걸쳐 아는 사실이 많음(내재 지식 폭이 넓음).
- **Non-Hallucination / Omniscience Index 높음** = 모르면 모른다고 기권하고 **틀린 걸 자신있게 말하지 않음** → 신뢰성이 높음. 사실성이 중요한 용도에서는 정답률보다 이쪽이 더 중요할 수 있음.
- **Omniscience Index = 0** = 맞히는 만큼 틀림(평균적으로 사실 신뢰성이 중립) — 또는 모든 문항에 기권해도 0(논문이 인정하는 한계).
- **Omniscience Index 음수** = 맞히는 것보다 틀리는 게 많음 → 환각이 우세.
- Index 해석 기준점(논문 Table 3): 100% 정답·0% 오답 → **OI 100**(항상 정확, 최고 신뢰성) / 50% 정답·50% 오답 → **OI 0** / 모든 문항 기권 → **OI 0**(이득도 손해도 없음) / 100% 오답 → **OI −100**(매번 환각, 최저 신뢰성).

# 난이도 · 포화 · 현 SOTA

- 질문이 **현 프런티어 모델에도 어렵도록 필터링**되어 기존 사실성 벤치마크의 포화 문제를 피한다.
- 출시 시점 결과(논문 Figure 1): **Omniscience Index가 양수인 모델은 단 3개뿐**. 최고점은 **Claude 4.1 Opus = 4.8**. 즉 "어려운 질문에서 대부분의 모델은 정답보다 환각을 낼 가능성이 더 높다"는 뜻.
- 시도율(attempt rate)로 본 보정 경향: 평가된 모델 중 **최저 시도율 42%**(그다음으로 낮은 65%보다 크게 낮음) — 일부 모델만 적극적으로 기권.
- **도메인별 1위 모델이 갈린다**: 6개 도메인에서 서로 다른 3개 연구소의 모델이 각각 선두. → 단일 "종합 성능"보다 **용도별로 모델을 골라야 한다**는 함의.

# 한계 · 주의

- **기권 악용 가능성**: 모든 문항에 기권하면 OI가 0이 되어, 시험된 36개 모델 중 4위에 해당하는 위치가 된다(논문이 직접 지적한 한계). 다만 실제로 그런 전략을 쓴 모델은 드묾(최저 시도율 42%).
- **LLM 채점 의존**: 정답 분류를 Gemini 2.5 Flash가 수행 → 채점 모델의 편향·오류 가능성. 사람 정렬도로 보정했으나 완전하지 않음.
- **LLM 생성 문항**: 질문 자체를 생성 에이전트가 만들어(사람은 검토·검증만) 확장성·일관성은 높지만 생성 모델 특성이 스며들 여지.
- **단일 통과**: 분산이 작다고 보고되나 반복 측정은 아님.
- **사실 회상 한정**: 추론·코딩·에이전트 능력은 측정하지 않음. "지식 신뢰성"이라는 좁고 분명한 축.

# 다른 벤치마크와의 관계

- [[gpqa-diamond]] GPQA Diamond — 과학 3개 분야의 박사급 **추론**. AA-Omniscience는 6개 경제 도메인의 **사실 회상·보정**으로 범위가 넓고 추론보다 지식·신뢰성에 초점.
- [[humanitys-last-exam]] HLE — 초고난도 다분야. 정답률 중심으로 환각 회피·기권을 따로 점수화하지 않음.
- 대부분의 사실성·QA 벤치마크는 **추측을 보상**(정답률만 평가)하지만, AA-Omniscience는 Omniscience Index로 **기권 > 오답**이 되도록 설계한 점이 핵심 차별점.
- AA Intelligence Index와의 관계: 이 평가는 Index v4.1에 **두 성분으로 12%** 기여(Accuracy 8% + Non-Hallucination 4%, 2:1). 단, Intelligence Index는 헤드라인 Omniscience Index가 아니라 Accuracy와 Non-Hallucination을 따로 소비.

# 레이더 기여 근거

이 평가는 한 번의 실행에서 성격이 다른 두 지표가 나오므로, **per-axis column 오버라이드**로 두 축에 각각 다른 열을 매핑한다([[radar-spec]] "다중 메트릭 벤치마크" 규칙).

- **knowledge (1.0, column "AA-Omniscience Accuracy")**: 6개 도메인 사실 정답률은 "여러 도메인의 사실 지식 폭"이라는 전문지식 축 정의에 정확히 부합 → 주 기여.
- **trust (1.0, column "AA-Omniscience Non-Hallucination")**: Non-Hallucination Rate는 "틀린 걸 자신있게 말하지 않음 = 환각 회피"라는 신뢰성 축 정의 그 자체 → 신뢰성 축의 핵심 소스.

> 신뢰성 축은 단일 소스 축이므로, 이 열이 결측이면 해당 모델의 trust 축은 그대로 결측 처리된다([[radar-spec]] 결측 처리 규칙).

# 한국 · 앨런 관점

법률·의료·금융·소프트웨어처럼 **틀린 답의 비용이 큰 실무**에서 모델을 고를 때 직접 쓰이는 축이다. "많이 아는가(Accuracy)"와 "모를 때 헛소리를 안 하는가(Non-Hallucination)"를 분리해 보여주므로, 정확도가 약간 낮더라도 환각이 적은 모델을 선택하는 식의 **용도 맞춤 선택**에 유용하다. 또한 도메인별 1위가 갈린다는 발견은 단일 만능 모델 가정보다 **태스크별 모델 배치** 전략을 뒷받침한다.

# 원본 자료

- 논문 PDF: [aa-omniscience-2511.13029.pdf](/benchmarks/sources/aa-omniscience-2511.13029.pdf) (Declan Jackson, William Keating, George Cameron, Micah Hill-Smith, Artificial Analysis, 2025-11-17)
- 방법론: [aa-omniscience-index-methodology.md](/benchmarks/sources/aa-omniscience-index-methodology.md)
- 공개 데이터셋: AA-Omniscience-Public (HuggingFace)
- 축 정의: [[radar-spec]] · 능력 영역: [[domains-index]] → Knowledge / Non-Hallucination

# Citations

[1] [AA-Omniscience: Evaluating Cross-Domain Knowledge Reliability in Large Language Models](https://arxiv.org/abs/2511.13029)
[2] [Artificial Analysis — Omniscience Evaluation](https://artificialanalysis.ai/evaluations/omniscience)
