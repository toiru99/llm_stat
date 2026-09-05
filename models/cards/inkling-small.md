---
type: Model
title: Inkling Small
creator: Thinking Machines
license: Open
intelligence_index: 32.0
price_blended_usd_1m: 0.222
output_speed_tps: 109.0
context_window: 1000000
status: current
size_class: Large
params_b: 266
is_reasoning: true
radar:
  knowledge: { s: 60.3, z: 0.94, r: 64.0, estimated: false }  # 전문 지식
  reasoning: { s: 57.3, z: 1.07, r: 66.1, estimated: false }  # 추론
  coding: { s: 62.3, z: 1.06, r: 65.9, estimated: true }  # 코딩
  agentic: { s: 46.0, z: 0.33, r: 54.9, estimated: false }  # 에이전트
  trust: { s: 36.1, z: 0.55, r: 58.3, estimated: false }  # 신뢰성
  multimodal: { s: 81.9, z: 0.58, r: 58.7, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 1.12, r: 66.7, estimated: false }  # 긴문맥
  instruction: { s: 83.7, z: 1.3, r: 69.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling Small
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Inkling Small

Thinking Machines · Open · Large(266B) · 컨텍스트 1M · 종합지능 **32.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 109.0 t/s · TTFT 2.67s · 1M ctx` · 가성비 144.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.0 | +0.94 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 66.1 | +1.07 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 65.9 | +1.06 | 추정 | (추정) |
| 에이전트 | 54.9 | +0.33 | 실측 | [[gdpval]] 35.0%×1.0, [[tau3-banking]] 19.0%×1.0 |
| 신뢰성 | 58.3 | +0.55 | 실측 | [[aa-omniscience]] 37.0%×1.0 |
| 멀티모달 | 58.7 | +0.58 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 66.7 | +1.12 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 69.5 | +1.3 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
