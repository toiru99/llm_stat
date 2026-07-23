---
type: Model
title: Inkling
creator: Thinking Machines
license: Open
intelligence_index: 41.0
price_blended_usd_1m: None
output_speed_tps: 59.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.6, z: 1.4, r: 70.9, estimated: false }  # 전문 지식
  reasoning: { s: 54.4, z: 1.08, r: 66.2, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.27, r: 69.1, estimated: false }  # 코딩
  agentic: { s: 66.2, z: 1.16, r: 67.4, estimated: false }  # 에이전트
  trust: { s: 41.4, z: 0.67, r: 60.0, estimated: false }  # 신뢰성
  multimodal: { s: 84.1, z: 0.58, r: 58.7, estimated: false }  # 멀티모달
  long_context: { s: 82.9, z: 1.01, r: 65.1, estimated: false }  # 긴문맥
  instruction: { s: 77.2, z: 1.01, r: 65.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# Inkling

Thinking Machines · Open · Unknown · 컨텍스트 1M · 종합지능 **41.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 신뢰성, 멀티모달

## 실용 지표
`입력 $1.87 · 출력 $4.68 · 혼합 $None/1M · 59.0 t/s · TTFT 1.85s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.9 | +1.4 | 실측 | [[aa-omniscience]] 40.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 66.2 | +1.08 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 69.1 | +1.27 | 실측 | [[scicode]] 46.0%×1.0 |
| 에이전트 | 67.4 | +1.16 | 실측 | [[gdpval]] 37.0%×1.0, [[tau3-banking]] 24.0%×1.0 |
| 신뢰성 | 60.0 | +0.67 | 실측 | [[aa-omniscience]] 37.0%×1.0 |
| 멀티모달 | 58.7 | +0.58 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 65.1 | +1.01 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 65.2 | +1.01 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
