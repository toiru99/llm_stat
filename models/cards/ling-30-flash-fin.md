---
type: Model
title: Ling-3.0-flash-Fin
creator: InclusionAI
license: Open
intelligence_index: 23.0
price_blended_usd_1m: 0.0475
output_speed_tps: 161.0
context_window: 262000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 29.1, z: -0.59, r: 41.1, estimated: false }  # 전문 지식
  reasoning: { s: 23.0, z: -0.59, r: 41.1, estimated: false }  # 추론
  coding: { s: 58.3, z: 0.81, r: 62.1, estimated: false }  # 코딩
  agentic: { s: 59.3, z: 0.83, r: 62.4, estimated: false }  # 에이전트
  trust: { s: 59.8, z: 1.6, r: 73.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.99, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: 77.0, z: 0.97, r: 64.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling-3.0-flash-Fin
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# Ling-3.0-flash-Fin

InclusionAI · Open · Medium · 컨텍스트 262k · 종합지능 **23.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.07 · 출력 $0.22 · 혼합 $0.0475/1M · 161.0 t/s · TTFT 1.73s · 262k ctx` · 가성비 484.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.1 | -0.59 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 41.1 | -0.59 | 실측 | [[critpt]] 3.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 62.1 | +0.81 | 실측 | [[scicode]] 42.0%×1.0 |
| 에이전트 | 62.4 | +0.83 | 실측 | [[apex-agents]] 27.0%×1.0, [[gdpval]] 30.0%×1.0, [[tau3-banking]] 39.0%×1.0 |
| 신뢰성 | 73.9 | +1.6 | 실측 | [[aa-omniscience]] 60.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.9 | +0.99 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 64.6 | +0.97 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
