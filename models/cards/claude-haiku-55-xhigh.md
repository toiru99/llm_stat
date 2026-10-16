---
type: Model
title: Claude Haiku 5.5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 41.0
price_blended_usd_1m: 0.077
output_speed_tps: 190.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.3, z: 0.63, r: 59.5, estimated: false }  # 전문 지식
  reasoning: { s: 69.8, z: 1.51, r: 72.7, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.28, r: 69.3, estimated: false }  # 코딩
  agentic: { s: 75.0, z: 1.35, r: 70.3, estimated: false }  # 에이전트
  trust: { s: 55.7, z: 1.3, r: 69.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.07, r: 66.0, estimated: false }  # 긴문맥
  instruction: { s: 77.0, z: 0.94, r: 64.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-16
timestamp: 2026-10-16T00:00:00Z
---

# Claude Haiku 5.5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **41.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 190.0 t/s · TTFT 58.91s · 1M ctx` · 가성비 532.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.5 | +0.63 | 실측 | [[aa-omniscience]] 35.0%×1.0, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 72.7 | +1.51 | 실측 | [[critpt]] 23.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 69.3 | +1.28 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 70.3 | +1.35 | 실측 | [[gdpval]] 51.0%×1.0 |
| 신뢰성 | 69.6 | +1.3 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.0 | +1.07 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 64.1 | +0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
