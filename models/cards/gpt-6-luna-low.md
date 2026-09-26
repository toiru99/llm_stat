---
type: Model
title: GPT-6 Luna (low)
creator: OpenAI
license: Proprietary
intelligence_index: 21.0
price_blended_usd_1m: 0.077
output_speed_tps: 127.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.4, z: 0.6, r: 59.0, estimated: false }  # 전문 지식
  reasoning: { s: 20.5, z: -0.71, r: 39.4, estimated: false }  # 추론
  coding: { s: 66.7, z: 1.1, r: 66.5, estimated: false }  # 코딩
  agentic: { s: 37.3, z: -0.02, r: 49.8, estimated: false }  # 에이전트
  trust: { s: 14.4, z: -0.53, r: 42.1, estimated: false }  # 신뢰성
  multimodal: { s: 75.3, z: 0.25, r: 53.7, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.99, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: 65.3, z: 0.49, r: 57.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# GPT-6 Luna (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **21.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 신뢰성, 추론

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 127.0 t/s · TTFT 2.12s · 1M ctx` · 가성비 272.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.0 | +0.6 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 39.4 | -0.71 | 실측 | [[critpt]] 3.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 66.5 | +1.1 | 실측 | [[scicode]] 47.0%×1.0 |
| 에이전트 | 49.8 | -0.02 | 실측 | [[gdpval]] 25.0%×1.0 |
| 신뢰성 | 42.1 | -0.53 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | 53.7 | +0.25 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 64.9 | +0.99 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 57.4 | +0.49 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
