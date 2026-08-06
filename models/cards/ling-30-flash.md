---
type: Model
title: Ling-3.0-flash
creator: InclusionAI
license: Proprietary
intelligence_index: 37.0
price_blended_usd_1m: 0.0475
output_speed_tps: 280.0
context_window: 262000
status: current
size_class: Medium
params_b: 124
is_reasoning: true
radar:
  knowledge: { s: 45.8, z: 0.21, r: 53.1, estimated: false }  # 전문 지식
  reasoning: { s: 45.3, z: 0.53, r: 57.9, estimated: false }  # 추론
  coding: { s: 68.3, z: 0.87, r: 63.1, estimated: false }  # 코딩
  agentic: { s: 55.4, z: 0.78, r: 61.8, estimated: false }  # 에이전트
  trust: { s: 63.2, z: 1.58, r: 73.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: 75.5, z: 0.92, r: 63.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling-3.0-flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Ling-3.0-flash

InclusionAI · Proprietary · Medium(124B) · 컨텍스트 262k · 종합지능 **37.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.07 · 출력 $0.22 · 혼합 $0.0475/1M · 280.0 t/s · TTFT 1.96s · 262k ctx` · 가성비 778.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.1 | +0.21 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 57.9 | +0.53 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 63.1 | +0.87 | 실측 | [[scicode]] 41.0%×1.0 |
| 에이전트 | 61.8 | +0.78 | 실측 | [[gdpval]] 30.0%×1.0, [[tau3-banking]] 28.0%×1.0 |
| 신뢰성 | 73.7 | +1.58 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 63.7 | +0.92 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
