---
type: Model
title: GPT-5.6 Terra (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 47.0
price_blended_usd_1m: 1.74
output_speed_tps: 80.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.6, z: 1.47, r: 72.1, estimated: false }  # 전문 지식
  reasoning: { s: 66.3, z: 1.56, r: 73.4, estimated: false }  # 추론
  coding: { s: 80.6, z: 1.41, r: 71.2, estimated: false }  # 코딩
  agentic: { s: 63.3, z: 1.0, r: 65.1, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.77, r: 38.4, estimated: false }  # 신뢰성
  multimodal: { s: 87.3, z: 0.83, r: 62.5, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 1.04, r: 65.6, estimated: false }  # 긴문맥
  instruction: { s: 70.4, z: 0.73, r: 60.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# GPT-5.6 Terra (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **47.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 80.0 t/s · TTFT 1.74s · 1M ctx` · 가성비 27.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.1 | +1.47 | 실측 | [[aa-omniscience]] 45.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 73.4 | +1.56 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 71.2 | +1.41 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 65.1 | +1.0 | 실측 | [[gdpval]] 45.0%×1.0, [[tau2-bench]] 73.0%×1.0, [[tau3-banking]] 26.0%×1.0 |
| 신뢰성 | 38.4 | -0.77 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 62.5 | +0.83 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 65.6 | +1.04 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 60.9 | +0.73 | 실측 | [[ifbench]] 62.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
