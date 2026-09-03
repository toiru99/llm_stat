---
type: Model
title: Quasar 438B (max)
creator: Multiverse Computing
license: Proprietary
intelligence_index: 43.0
price_blended_usd_1m: 0.72
output_speed_tps: 176.0
context_window: 1000000
status: current
size_class: Large
params_b: 438
is_reasoning: true
radar:
  knowledge: { s: 37.0, z: -0.18, r: 47.3, estimated: false }  # 전문 지식
  reasoning: { s: 44.4, z: 0.48, r: 57.2, estimated: false }  # 추론
  coding: { s: 72.6, z: 1.07, r: 66.1, estimated: false }  # 코딩
  agentic: { s: 58.0, z: 0.8, r: 62.0, estimated: false }  # 에이전트
  trust: { s: 79.4, z: 2.59, r: 88.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 92.2, z: 1.64, r: 74.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Quasar 438B (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Quasar 438B (max)

Multiverse Computing · Proprietary · Large(438B) · 컨텍스트 1M · 종합지능 **43.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.6 · 출력 $1.8 · 혼합 $0.72/1M · 176.0 t/s · TTFT 1.05s · 1M ctx` · 가성비 59.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.3 | -0.18 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 57.2 | +0.48 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 66.1 | +1.07 | 실측 | [[scicode]] 45.0%×1.0 |
| 에이전트 | 62.0 | +0.8 | 실측 | [[gdpval]] 41.0%×1.0, [[tau3-banking]] 29.0%×1.0 |
| 신뢰성 | 88.8 | +2.59 | 실측 | [[aa-omniscience]] 79.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 74.6 | +1.64 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
