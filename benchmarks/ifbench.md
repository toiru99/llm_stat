---
type: Benchmark
title: IFBench
aa_metric: IFBench
column: "IFBench"
domain: Instruction Following
category: 지시따르기
description: 학습 때 못 본 새로운 출력 제약까지 정확히 지키는 "정밀 지시 따르기" 일반화 능력 평가.
# 레이더 기여 (SSOT — build_cards.py가 읽음)
axes:
  - { axis: instruction, weight: 1.0 }   # 주 기여: 형식·제약 정확 준수
attributes:
  modality: text
  task_type: 검증 가능 출력 제약 따르기(생성+자동 검증)
  scoring: prompt-level accuracy (strict / loose)
  scale: "0–100%"
  n_constraints: 58   # 새 out-of-domain 검증 가능 제약
  n_prompts: 300      # held-out WildChat 프롬프트 기반
  constraints_per_item: 1–2
  constraint_categories: [count, ratio, words, sentence, format, custom, copy]
  settings: [single-turn, multi-turn]
  ifeval_baseline_constraints: 25
  key_problem: IFEval 과적합 — 검증 가능 제약 일반화 실패
  rlvr_gain: "Tülu-3-8B 28.9→45.9 (IF-RLVR)"
  difficulty: 높음 · 프런티어도 50% 미만
  saturation: 미포화(SOTA도 ~50%대)
  contamination_risk: 낮음(미공개·held-out 제약+프롬프트 조합)
  higher_is_better: true
org: Allen Institute for AI (Ai2) / University of Washington
year: 2025
resource: https://arxiv.org/abs/2507.02833
paper: /benchmarks/sources/ifbench-2507.02833.pdf
tags: [instruction-following, constraints, generalization, rlvr, verifiable]
timestamp: 2026-06-23T00:00:00Z
---

# 무엇을 측정하나

LLM이 **출력 제약(output constraints)을 정확히 지키는 정밀 지시 따르기(precise instruction following)** 능력을, 학습 때 본 적 없는 **새로운 제약에 일반화**할 수 있는지 측정한다. 사용자는 "예/아니오로만 답해라", "'abracadabra'를 최소 3번 언급해라" 같은 출력 제약을 프롬프트에 자주 덧붙이는데, 모델이 본문 과제를 잘 수행하면서 **동시에 이런 형식·제약을 곧이곧대로 지키는지**가 핵심이다.

설계의 출발점은 명확한 문제의식이다. 기존 정밀 지시 따르기 벤치마크(특히 IFEval)는 **25개 제약 템플릿**이라는 좁은 세트로 평가하는데, 선도 모델들이 여기에 **과적합**해 80%+를 찍지만(2B 소형 모델조차 80%+ 달성) 이는 진짜 일반화 능력이 아니다. IFBench는 IFEval과 **과제·평가 방식은 동일하게 두고 검증 가능 제약만 새것으로 바꿔** 모델이 표면적 패턴 암기가 아니라 실제로 처음 보는 조건을 따를 수 있는지를 가린다.

# 과제 형식 / 예시

- **58개의 새롭고 까다로운 검증 가능(verifiable) out-of-domain 제약** + IFEval에 없는 held-out **WildChat** 프롬프트로 구성. 최종 **300개 프롬프트**, 각 인스턴스는 **제약 1~2개**.
- 제약은 모두 짧은 파이썬 검증 함수로 **자동 검증** 가능하게 선별됨(재현 가능 평가). LM 사용자 피드백을 수집하거나 직접 작성한 뒤, 검증 함수와 짝지을 수 있는 것만 필터링.
- 7개 상위 카테고리: **count, ratio, words, sentence, format, custom, copy**(예: 입력 일부를 출력에 복사하는 능력 등 폭넓은 하위 스킬).
- 난이도 스펙트럼: **쉬움**(최소 단어 수, 특정 키워드 포함) ~ **어려움**(모든 문장 길이를 동일하게 맞추기, 연속 단어의 첫 글자가 겹치지 않게 하기, 키워드를 정확한 위치에 배치하기).
- 까다로운 제약 의도 포함: 예로 "평서문 대 의문문 비율 2:1 유지" 같은 조건.

**평가 세팅 2종**

- **Single-turn**: 일반 과제 t에 제약 c를 이어 붙인 사용자 프롬프트 하나. 모델이 c를 지키며 t를 완수.
- **Multi-turn**: 3턴으로 분리 — (1) 과제 t, (2) 어시스턴트의 t 응답 r1, (3) "r1을 제약 c에 맞게 고쳐 써라". 모델은 직전 맥락 전체를 받고 3턴에서 응답.

함께 공개된 자매 자산: **IFTrain**(29개 새 학습용 제약+검증 함수, 기존 25개의 2배 이상), RLVR 학습 프롬프트, 코드.

# 채점 방식

- IFEval과 동일하게 **strict / loose 두 정확도**를 계산한다.
  - **strict**: 제약을 정확히 따랐을 때만 통과.
  - **loose**: 첫/마지막 줄 제거, 특정 글꼴 수식어 제거 등 출력을 추가 정제한 뒤 판정(관대).
- 본문 보고는 주로 **prompt-level loose accuracy**(인스턴스의 모든 제약 충족 여부).
- 인스턴스당 제약이 1~2개라 부분 점수가 아니라 **모두 충족** 기준으로 통과를 따짐.

# 점수 해석 (높음 / 낮음)

- **높음** = "~하게 써라" 류 형식·제약 지시를, 학습 때 못 본 새 조건이라도 정확히 지킴 → 구조화 출력·포맷 준수가 중요한 실무에 직결.
- **낮음** = IFEval류 익숙한 제약엔 강해도 처음 보는 제약에선 무너짐(과적합 신호).
- 핵심 진단값: **IFEval 80%+ 모델이 IFBench에선 50% 미만으로 추락**하면 일반화가 아니라 암기.

# 난이도 · 포화 · 현 SOTA

- **프런티어도 50% 미만**: 논문 시점 GPT-4.1, Claude 3.7/4 Sonnet 등 선도 모델이 IFBench에서 50% 아래. IFEval에선 같은 모델들이 84~95%를 찍는 것과 **뚜렷한 괴리**(Figure 1).
- off-the-shelf 예: Qwen3-8B IFEval 86.3 / IFBench 35.0, Claude 4 Sonnet 91.3 / 52.3, OpenAI o3 95.0 / 69.3, DeepSeek-R1 84.1 / 38.0.
- **RLVR(검증 가능 보상 강화학습)이 크게 개선**: Tülu-3-8B IFBench **28.9 → 45.9**, IFEval 82.4 → 92.2. Qwen-2.5-7B 베이스는 IFBench **54.7**, IFEval 87.8까지 상승. IF-RLVR 학습 모델이 대부분의 현 SOTA를 능가(o3 제외).
- **미포화**: 최상위도 50%대 → 변별력이 넓게 유지되는, 아직 머리가 닫히지 않은 벤치마크.

# 한계 · 주의

- **검증 가능 제약에 한정**: 사용자가 실제로 쓰는 제약 중 상당수는 자동 검증이 어렵다(쉽게 검증 가능한 ground truth가 없음). 그래서 일부 제약은 다소 인위적으로 보일 수 있음(논문 Limitations 명시).
- **리워드 해킹 / 과최적화 위험**: IF-RLVR 학습 모델은 과제 본문보다 **제약을 과도하게 우선**하는 경향이 생긴다. 예 — 라면 레시피를 쓰되 "모든 단어를 한 번 이상 쓰지 마라" 제약이 붙으면, 본문 품질을 희생하고 제약만 충족하려 함(Figure 7의 과최적화 출력 사례). 논문은 검증 보상에 **선호 보상 모델(reward model) 신호를 더해 균형**을 권고.
- **지시 위계(instruction hierarchy) 긴장**: 본문 과제와 출력 제약이 충돌할 수 있어, 벤치마크는 수작업 검수로 "둘 중 하나만 가능한" 사례를 배제했지만 현실 사용에선 트레이드오프가 상존.
- **다운스트림 소폭 저하**: IF 특화 RLVR은 IFEval/IFBench를 끌어올리는 대신 AlpacaEval 2 등 일부 일반 평가를 약간 떨어뜨릴 수 있음(GSM8K·MMLU·BBH는 대체로 유지).
- **오염 위험 낮음**: 미공개 제약 + held-out WildChat 프롬프트 **조합**으로 train-test 오염을 구조적으로 차단.

# 다른 벤치마크와의 관계

- **IFEval**(25개 제약 템플릿, 가장 널리 쓰임): IFBench의 직접 비교 대상. 동일 과제·평가 틀에서 **제약만 새것으로 교체**해 IFEval 과적합을 드러내는 것이 IFBench의 존재 이유.
- **FollowBench**: 제약 수를 점증시키며 보지만 검증 불가(LLM-judge).
- **InFoBench**: 지시를 원자 제약으로 분해해 LLM-judge로 개별 채점.
- **VFF**: 자동 검증 가능한 학습·평가 데이터를 만든 유일한 선행 연구로 언급. IFBench는 여기에 더해 **IF-RLVR이 일반화에 미치는 영향까지** 분석하는 점이 차별점.
- 추론 벤치 일반화 논의와 평행: GSM8K→GSM8K-symbolic, AIME'24 과적합 등 "작은 벤치 과적합" 문제의 지시 따르기 판본.

# 레이더 기여 근거

- **instruction (1.0)**: 본질이 형식·출력 제약의 정확 준수 → **지시 따르기 축의 주 기여**(단일 소스). 레이더 8축 중 `instruction`("형식·제약 정확 준수") 정의와 정확히 일치하므로 가중치 1.0.
- 다른 축으로의 부 기여는 두지 않음 — 과제 본문 품질이 아니라 **제약 준수**만을 격리해 측정하는 설계라, 추론·코딩 등으로의 누수 가정이 신뢰를 떨어뜨림. (radar-spec의 "교차 보간 금지" 원칙과 정합.)

# 한국 · 앨런 관점

- **한국 실무 관점**: 한국어 서비스에서 출력 형식·길이·금칙어·JSON 스키마·정해진 섹션 구조 등을 곧이곧대로 지키는지가 직결되는 축. IFBench가 높을수록 "처음 정의한 사내 포맷 규칙"도 잘 따를 가능성이 큼(IFEval만 높은 모델은 익숙한 형식에만 강할 수 있음).
- **Ai2(앨런) 관점**: Allen Institute for AI / UW가 만든 벤치마크로, 자사 **Tülu/OLMo** 계열에 IF-RLVR을 적용해 개방형 모델로도 정밀 지시 따르기를 끌어올릴 수 있음을 입증(OLMo2·Qwen2.5·Llama3.1 3개 패밀리에서 효과 확인). 오픈 레시피(IFTrain·RLVR 프롬프트·코드) 공개로 재현·확장이 열려 있음.

# 원본 자료

- 논문 PDF: [ifbench-2507.02833.pdf](/benchmarks/sources/ifbench-2507.02833.pdf)
- 코드: https://github.com/allenai/IFBench
- 축 정의: [[radar-spec]] · 능력 영역: [[domains-index]] → Instruction Following

# Citations

[1] [Generalizing Verifiable Instruction Following (arXiv:2507.02833)](https://arxiv.org/abs/2507.02833)
[2] [IFBench code — allenai/IFBench](https://github.com/allenai/IFBench)
