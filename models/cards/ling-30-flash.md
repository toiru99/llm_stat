---
type: Model
title: Ling 3.0 Flash
creator: InclusionAI
license: Open
intelligence_index: 38.0
price_blended_usd_1m: 0.0475
output_speed_tps: 370.0
context_window: 262000
status: current
size_class: Medium
params_b: 124
is_reasoning: true
radar:
  knowledge: { s: 44.6, z: 0.19, r: 52.9, estimated: false }  # 전문 지식
  reasoning: { s: 45.7, z: 0.57, r: 58.5, estimated: false }  # 추론
  coding: { s: 68.3, z: 0.87, r: 63.0, estimated: false }  # 코딩
  agentic: { s: 49.2, z: 0.48, r: 57.3, estimated: false }  # 에이전트
  trust: { s: 55.7, z: 1.5, r: 72.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.7, z: 0.96, r: 64.4, estimated: false }  # 긴문맥
  instruction: { s: 76.3, z: 1.01, r: 65.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.0 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Ling 3.0 Flash

InclusionAI · Open · Medium(124B) · 컨텍스트 262k · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.07 · 출력 $0.22 · 혼합 $0.0475/1M · 370.0 t/s · TTFT 2.64s · 262k ctx` · 가성비 800.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.9 | +0.19 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 58.5 | +0.57 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 63.0 | +0.87 | 실측 | [[scicode]] 41.0%×1.0 |
| 에이전트 | 57.3 | +0.48 | 실측 | [[gdpval]] 30.0%×1.0, [[tau3-banking]] 27.0%×1.0 |
| 신뢰성 | 72.5 | +1.5 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.4 | +0.96 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 65.1 | +1.01 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
