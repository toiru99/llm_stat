---
type: Model
title: Quasar 438B (max)
creator: Multiverse Computing
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 0.72
output_speed_tps: 179.0
context_window: 1000000
status: current
size_class: Large
params_b: 438
is_reasoning: true
radar:
  knowledge: { s: 36.8, z: -0.2, r: 47.0, estimated: false }  # 전문 지식
  reasoning: { s: 44.1, z: 0.44, r: 56.6, estimated: false }  # 추론
  coding: { s: 69.4, z: 1.3, r: 69.5, estimated: false }  # 코딩
  agentic: { s: 57.2, z: 0.76, r: 61.4, estimated: false }  # 에이전트
  trust: { s: 79.4, z: 2.59, r: 88.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: 79.5, z: 1.12, r: 66.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Quasar 438B (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Quasar 438B (max)

Multiverse Computing · Proprietary · Large(438B) · 컨텍스트 1M · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.6 · 출력 $1.8 · 혼합 $0.72/1M · 179.0 t/s · TTFT 0.93s · 1M ctx` · 가성비 47.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.0 | -0.2 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 56.6 | +0.44 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 69.5 | +1.3 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 61.4 | +0.76 | 실측 | [[gdpval]] 37.0%×1.0, [[tau3-banking]] 29.0%×1.0 |
| 신뢰성 | 88.9 | +2.59 | 실측 | [[aa-omniscience]] 79.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 66.8 | +1.12 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
