---
type: Model
title: Quasar 438B (max)
creator: Multiverse Computing
license: Proprietary
intelligence_index: 27.0
price_blended_usd_1m: 0.72
output_speed_tps: 143.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 36.6, z: -0.28, r: 45.9, estimated: false }  # 전문 지식
  reasoning: { s: 43.8, z: 0.33, r: 55.0, estimated: false }  # 추론
  coding: { s: 68.3, z: 1.09, r: 66.4, estimated: false }  # 코딩
  agentic: { s: 53.1, z: 0.54, r: 58.2, estimated: false }  # 에이전트
  trust: { s: 79.4, z: 2.45, r: 86.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 79.9, z: 1.07, r: 66.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Quasar 438B (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# Quasar 438B (max)

Multiverse Computing · Proprietary · Large · 컨텍스트 1M · 종합지능 **27.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.6 · 출력 $1.8 · 혼합 $0.72/1M · 143.0 t/s · TTFT 1.15s · 1M ctx` · 가성비 37.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.9 | -0.28 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 55.0 | +0.33 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 66.4 | +1.09 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 58.2 | +0.54 | 실측 | [[gdpval]] 33.0%×1.0, [[tau3-banking]] 29.0%×1.0 |
| 신뢰성 | 86.8 | +2.45 | 실측 | [[aa-omniscience]] 79.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 66.0 | +1.07 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
