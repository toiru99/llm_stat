---
type: Model
title: Inkling Small
creator: Thinking Machines
license: Open
intelligence_index: 26.0
price_blended_usd_1m: 0.222
output_speed_tps: 180.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 60.0, z: 0.8, r: 62.1, estimated: false }  # 전문 지식
  reasoning: { s: 56.7, z: 0.92, r: 63.8, estimated: false }  # 추론
  coding: { s: 71.7, z: 1.21, r: 68.1, estimated: false }  # 코딩
  agentic: { s: 41.0, z: 0.08, r: 51.3, estimated: false }  # 에이전트
  trust: { s: 36.1, z: 0.44, r: 56.7, estimated: false }  # 신뢰성
  multimodal: { s: 80.8, z: 0.47, r: 57.1, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 82.6, z: 1.18, r: 67.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling Small
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# Inkling Small

Thinking Machines · Open · Large · 컨텍스트 1M · 종합지능 **26.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 180.0 t/s · TTFT 2.24s · 1M ctx` · 가성비 117.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.1 | +0.8 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 63.8 | +0.92 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 68.1 | +1.21 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 51.3 | +0.08 | 실측 | [[gdpval]] 30.0%×1.0, [[tau3-banking]] 19.0%×1.0 |
| 신뢰성 | 56.7 | +0.44 | 실측 | [[aa-omniscience]] 37.0%×1.0 |
| 멀티모달 | 57.1 | +0.47 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 67.7 | +1.18 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
