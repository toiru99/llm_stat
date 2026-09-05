---
type: Model
title: GPT-5.6 Sol (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: 3.08
output_speed_tps: 82.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.5, z: 2.29, r: 84.4, estimated: false }  # 전문 지식
  reasoning: { s: 88.8, z: 2.59, r: 88.8, estimated: false }  # 추론
  coding: { s: 89.3, z: 2.01, r: 80.1, estimated: false }  # 코딩
  agentic: { s: 84.7, z: 1.81, r: 77.1, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.86, r: 37.1, estimated: false }  # 신뢰성
  multimodal: { s: 94.4, z: 1.2, r: 68.0, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.32, r: 69.9, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.28, r: 69.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GPT-5.6 Sol (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 82.0 t/s · TTFT 76.03s · 1M ctx` · 가성비 16.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 84.4 | +2.29 | 실측 | [[aa-omniscience]] 59.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 47.0%×0.3 |
| 추론 | 88.8 | +2.59 | 실측 | [[critpt]] 29.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 47.0%×1.0 |
| 코딩 | 80.1 | +2.01 | 실측 | [[scicode]] 57.0%×1.0, [[terminal-bench]] 61.0%×0.5 |
| 에이전트 | 77.1 | +1.81 | 실측 | [[gdpval]] 55.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 38.0%×1.0, [[terminal-bench]] 61.0%×1.0 |
| 신뢰성 | 37.1 | -0.86 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 68.0 | +1.2 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 69.9 | +1.32 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 69.2 | +1.28 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
