---
type: Model
title: Inkling Small
creator: Thinking Machines
license: Open
intelligence_index: 41.0
price_blended_usd_1m: 0.222
output_speed_tps: 52.0
context_window: 1000000
status: current
size_class: Large
params_b: 266
is_reasoning: true
radar:
  knowledge: { s: 60.6, z: 1.01, r: 65.1, estimated: false }  # 전문 지식
  reasoning: { s: 57.7, z: 1.17, r: 67.5, estimated: false }  # 추론
  coding: { s: 79.0, z: 1.37, r: 70.5, estimated: false }  # 코딩
  agentic: { s: 46.6, z: 0.37, r: 55.5, estimated: false }  # 에이전트
  trust: { s: 36.1, z: 0.56, r: 58.4, estimated: false }  # 신뢰성
  multimodal: { s: 84.3, z: 0.65, r: 59.7, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.27, r: 69.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling Small
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Inkling Small

Thinking Machines · Open · Large(266B) · 컨텍스트 1M · 종합지능 **41.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 52.0 t/s · TTFT 2.24s · 1M ctx` · 가성비 184.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.1 | +1.01 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 67.5 | +1.17 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 70.5 | +1.37 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 55.5 | +0.37 | 실측 | [[gdpval]] 38.0%×1.0, [[tau3-banking]] 19.0%×1.0 |
| 신뢰성 | 58.4 | +0.56 | 실측 | [[aa-omniscience]] 37.0%×1.0 |
| 멀티모달 | 59.7 | +0.65 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 69.1 | +1.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
