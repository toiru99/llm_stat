---
type: Model
title: Quasar 438B (max)
creator: Multiverse Computing
license: Proprietary
intelligence_index: 27.0
price_blended_usd_1m: 0.72
output_speed_tps: 144.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 36.6, z: -0.24, r: 46.4, estimated: false }  # 전문 지식
  reasoning: { s: 43.8, z: 0.38, r: 55.7, estimated: false }  # 추론
  coding: { s: 68.3, z: 1.15, r: 67.3, estimated: false }  # 코딩
  agentic: { s: 53.1, z: 0.58, r: 58.8, estimated: false }  # 에이전트
  trust: { s: 79.4, z: 2.5, r: 87.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 1.06, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 0.99, r: 64.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Quasar 438B (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Quasar 438B (max)

Multiverse Computing · Proprietary · Large · 컨텍스트 1M · 종합지능 **27.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.6 · 출력 $1.8 · 혼합 $0.72/1M · 144.0 t/s · TTFT 1.37s · 1M ctx` · 가성비 37.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.4 | -0.24 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 55.7 | +0.38 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 67.3 | +1.15 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 58.8 | +0.58 | 실측 | [[gdpval]] 33.0%×1.0, [[tau3-banking]] 29.0%×1.0 |
| 신뢰성 | 87.5 | +2.5 | 실측 | [[aa-omniscience]] 79.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.8 | +1.06 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 64.8 | +0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
