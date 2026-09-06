---
type: Model
title: Ling 3.0 Flash
creator: InclusionAI
license: Open
intelligence_index: 27.0
price_blended_usd_1m: 0.0475
output_speed_tps: 322.0
context_window: 262000
status: current
size_class: Medium
params_b: 124
is_reasoning: true
radar:
  knowledge: { s: 43.3, z: 0.12, r: 51.7, estimated: false }  # 전문 지식
  reasoning: { s: 44.4, z: 0.45, r: 56.7, estimated: false }  # 추론
  coding: { s: 57.1, z: 0.87, r: 63.1, estimated: false }  # 코딩
  agentic: { s: 47.4, z: 0.38, r: 55.7, estimated: false }  # 에이전트
  trust: { s: 55.7, z: 1.47, r: 72.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 1.01, r: 65.2, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.8, r: 62.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.0 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Ling 3.0 Flash

InclusionAI · Open · Medium(124B) · 컨텍스트 262k · 종합지능 **27.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.07 · 출력 $0.22 · 혼합 $0.0475/1M · 322.0 t/s · TTFT 2.55s · 262k ctx` · 가성비 568.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.7 | +0.12 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 56.7 | +0.45 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 63.1 | +0.87 | 실측 | [[scicode]] 42.0%×1.0 |
| 에이전트 | 55.7 | +0.38 | 실측 | [[gdpval]] 27.0%×1.0, [[tau3-banking]] 27.0%×1.0 |
| 신뢰성 | 72.1 | +1.47 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.2 | +1.01 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 62.0 | +0.8 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
