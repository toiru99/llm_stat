---
type: Model
title: Inkling Small
creator: Thinking Machines
license: Open
intelligence_index: 41.0
price_blended_usd_1m: 0.222
output_speed_tps: 74.0
context_window: 1000000
status: current
size_class: Large
params_b: 266
is_reasoning: true
radar:
  knowledge: { s: 62.2, z: 1.07, r: 66.0, estimated: false }  # 전문 지식
  reasoning: { s: 59.1, z: 1.24, r: 68.6, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.43, r: 71.4, estimated: false }  # 코딩
  agentic: { s: 47.4, z: 0.41, r: 56.2, estimated: false }  # 에이전트
  trust: { s: 36.1, z: 0.57, r: 58.6, estimated: false }  # 신뢰성
  multimodal: { s: 84.3, z: 0.65, r: 59.8, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 1.04, r: 65.5, estimated: false }  # 긴문맥
  instruction: { s: 83.5, z: 1.31, r: 69.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling Small
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Inkling Small

Thinking Machines · Open · Large(266B) · 컨텍스트 1M · 종합지능 **41.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 74.0 t/s · TTFT 2.28s · 1M ctx` · 가성비 184.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.0 | +1.07 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 68.6 | +1.24 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 71.4 | +1.43 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 56.2 | +0.41 | 실측 | [[gdpval]] 38.0%×1.0, [[tau3-banking]] 19.0%×1.0 |
| 신뢰성 | 58.6 | +0.57 | 실측 | [[aa-omniscience]] 37.0%×1.0 |
| 멀티모달 | 59.8 | +0.65 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 65.5 | +1.04 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 69.7 | +1.31 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
