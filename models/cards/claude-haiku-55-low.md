---
type: Model
title: Claude Haiku 5.5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 29.0
price_blended_usd_1m: 0.077
output_speed_tps: 178.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 47.9, z: 0.24, r: 53.7, estimated: false }  # 전문 지식
  reasoning: { s: 35.7, z: -0.04, r: 49.4, estimated: false }  # 추론
  coding: { s: 70.0, z: 1.13, r: 67.0, estimated: false }  # 코딩
  agentic: { s: 45.6, z: 0.25, r: 53.7, estimated: false }  # 에이전트
  trust: { s: 54.6, z: 1.29, r: 69.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.9, z: 0.87, r: 63.1, estimated: false }  # 긴문맥
  instruction: { s: 70.7, z: 0.68, r: 60.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Claude Haiku 5.5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 178.0 t/s · TTFT 9.72s · 1M ctx` · 가성비 376.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.7 | +0.24 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 49.4 | -0.04 | 실측 | [[critpt]] 9.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 67.0 | +1.13 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 53.7 | +0.25 | 실측 | [[gdpval]] 31.0%×1.0 |
| 신뢰성 | 69.3 | +1.29 | 실측 | [[aa-omniscience]] 55.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.1 | +0.87 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 60.2 | +0.68 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
