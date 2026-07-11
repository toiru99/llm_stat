---
type: Model
title: GPT-5.6 Luna (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 49.0
price_blended_usd_1m: 0.87
output_speed_tps: 191.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.2, z: 1.59, r: 73.9, estimated: false }  # 전문 지식
  reasoning: { s: 75.7, z: 2.23, r: 83.5, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.58, r: 73.7, estimated: false }  # 코딩
  agentic: { s: 77.6, z: 1.61, r: 74.2, estimated: false }  # 에이전트
  trust: { s: 10.6, z: -0.81, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: 92.8, z: 1.02, r: 65.3, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.3, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: 78.3, z: 1.07, r: 66.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# GPT-5.6 Luna (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **49.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.0 · 출력 $6.0 · 혼합 $0.87/1M · 191.0 t/s · TTFT 32.37s · 1M ctx` · 가성비 56.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.9 | +1.59 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 83.5 | +2.23 | 실측 | [[critpt]] 21.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 73.7 | +1.58 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 74.2 | +1.61 | 실측 | [[gdpval]] 52.0%×1.0, [[tau3-banking]] 24.0%×1.0 |
| 신뢰성 | 37.8 | -0.81 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 65.3 | +1.02 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 69.4 | +1.3 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 66.0 | +1.07 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
