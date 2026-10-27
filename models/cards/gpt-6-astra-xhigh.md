---
type: Model
title: GPT-6 Astra (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 52.0
price_blended_usd_1m: 7.7
output_speed_tps: 69.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 93.8, z: 2.34, r: 85.2, estimated: false }  # 전문 지식
  reasoning: { s: 94.6, z: 2.6, r: 89.0, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.48, r: 72.2, estimated: false }  # 코딩
  agentic: { s: 84.2, z: 1.71, r: 75.6, estimated: false }  # 에이전트
  trust: { s: 51.5, z: 1.1, r: 66.5, estimated: false }  # 신뢰성
  multimodal: { s: 97.3, z: 1.26, r: 68.8, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.11, r: 66.7, estimated: false }  # 긴문맥
  instruction: { s: 76.9, z: 0.96, r: 64.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# GPT-6 Astra (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **52.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 69.0 t/s · TTFT 175.2s · 1M ctx` · 가성비 6.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 85.2 | +2.34 | 실측 | [[aa-omniscience]] 62.0%×1.0, [[gpqa-diamond]] 96.0%×0.4, [[humanitys-last-exam]] 55.0%×0.3 |
| 추론 | 89.0 | +2.6 | 실측 | [[critpt]] 31.0%×1.0, [[gpqa-diamond]] 96.0%×1.0, [[humanitys-last-exam]] 55.0%×1.0 |
| 코딩 | 72.2 | +1.48 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 75.6 | +1.71 | 실측 | [[gdpval]] 1569.0%×1.0, [[tau3-banking]] 43.0%×1.0 |
| 신뢰성 | 66.5 | +1.1 | 실측 | [[aa-omniscience]] 52.0%×1.0 |
| 멀티모달 | 68.8 | +1.26 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 66.7 | +1.11 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 64.4 | +0.96 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
