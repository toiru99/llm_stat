---
type: Model
title: Ling 3.0 Flash
creator: InclusionAI
license: Open
intelligence_index: 38.0
price_blended_usd_1m: 0.0475
output_speed_tps: 377.0
context_window: 262000
status: current
size_class: Medium
params_b: 124
is_reasoning: true
radar:
  knowledge: { s: 43.9, z: 0.13, r: 51.9, estimated: false }  # 전문 지식
  reasoning: { s: 45.7, z: 0.51, r: 57.6, estimated: false }  # 추론
  coding: { s: 68.3, z: 0.82, r: 62.4, estimated: false }  # 코딩
  agentic: { s: 48.9, z: 0.48, r: 57.2, estimated: false }  # 에이전트
  trust: { s: 62.8, z: 1.58, r: 73.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.7, z: 0.92, r: 63.8, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 0.95, r: 64.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.0 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-15
timestamp: 2026-08-15T00:00:00Z
---

# Ling 3.0 Flash

InclusionAI · Open · Medium(124B) · 컨텍스트 262k · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.07 · 출력 $0.22 · 혼합 $0.0475/1M · 377.0 t/s · TTFT 1.76s · 262k ctx` · 가성비 800.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.9 | +0.13 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 57.6 | +0.51 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 62.4 | +0.82 | 실측 | [[scicode]] 41.0%×1.0 |
| 에이전트 | 57.2 | +0.48 | 실측 | [[gdpval]] 30.0%×1.0, [[tau3-banking]] 27.0%×1.0 |
| 신뢰성 | 73.7 | +1.58 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.8 | +0.92 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 64.2 | +0.95 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
