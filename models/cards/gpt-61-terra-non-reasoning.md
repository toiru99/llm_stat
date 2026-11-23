---
type: Model
title: GPT-6.1 Terra (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 30.515898867357
price_blended_usd_1m: 0.735
output_speed_tps: 65.0397323723424
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.4, z: -0.96, r: 35.6, estimated: false }  # 전문 지식
  reasoning: { s: 20.5, z: -0.74, r: 38.8, estimated: false }  # 추론
  coding: { s: 67.2, z: 0.92, r: 63.8, estimated: false }  # 코딩
  agentic: { s: 74.4, z: 1.02, r: 65.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.0, z: 0.54, r: 58.1, estimated: false }  # 멀티모달
  long_context: { s: 76.3, z: 0.67, r: 60.1, estimated: false }  # 긴문맥
  instruction: { s: 44.3, z: -0.4, r: 44.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# GPT-6.1 Terra (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **30.515898867357**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · 65.0397323723424 t/s · TTFT 2.03916549314055s · 1M ctx` · 가성비 41.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.6 | -0.96 | 실측 | [[humanitys-last-exam]] 21.1306765523633%×0.3 |
| 추론 | 38.8 | -0.74 | 실측 | [[critpt]] 4.857142857142859%×1.0, [[humanitys-last-exam]] 21.1306765523633%×1.0 |
| 코딩 | 63.8 | +0.92 | 실측 | [[scicode]] 47.8009259259259%×1.0 |
| 에이전트 | 65.3 | +1.02 | 실측 | [[gdpval]] 1285.53%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.1 | +0.54 | 실측 | [[mmmu-pro]] 76.0115606936416%×1.0 |
| 긴문맥 | 60.1 | +0.67 | 실측 | [[aa-lcr]] 67.6666666666667%×1.0 |
| 지시 따르기 | 44.0 | -0.4 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
