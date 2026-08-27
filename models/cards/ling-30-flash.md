---
type: Model
title: Ling 3.0 Flash
creator: InclusionAI
license: Open
intelligence_index: 38.0
price_blended_usd_1m: 0.0475
output_speed_tps: 390.0
context_window: 262000
status: current
size_class: Medium
params_b: 124
is_reasoning: true
radar:
  knowledge: { s: 43.9, z: 0.12, r: 51.8, estimated: false }  # 전문 지식
  reasoning: { s: 45.7, z: 0.48, r: 57.1, estimated: false }  # 추론
  coding: { s: 68.3, z: 0.8, r: 61.9, estimated: false }  # 코딩
  agentic: { s: 48.9, z: 0.44, r: 56.6, estimated: false }  # 에이전트
  trust: { s: 62.8, z: 1.42, r: 71.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.7, z: 0.89, r: 63.4, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 0.94, r: 64.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.0 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Ling 3.0 Flash

InclusionAI · Open · Medium(124B) · 컨텍스트 262k · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.07 · 출력 $0.22 · 혼합 $0.0475/1M · 390.0 t/s · TTFT 2.62s · 262k ctx` · 가성비 800.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.8 | +0.12 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 57.1 | +0.48 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 61.9 | +0.8 | 실측 | [[scicode]] 41.0%×1.0 |
| 에이전트 | 56.6 | +0.44 | 실측 | [[gdpval]] 30.0%×1.0, [[tau3-banking]] 27.0%×1.0 |
| 신뢰성 | 71.4 | +1.42 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.4 | +0.89 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 64.0 | +0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
