---
type: Model
title: Ling 3.0 Tiny
creator: InclusionAI
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0
output_speed_tps: 48.0
context_window: 262000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 27.5, z: -0.67, r: 39.9, estimated: false }  # 전문 지식
  reasoning: { s: 28.9, z: -0.32, r: 45.2, estimated: false }  # 추론
  coding: { s: 28.3, z: -0.23, r: 46.5, estimated: false }  # 코딩
  agentic: { s: 41.2, z: 0.13, r: 51.9, estimated: false }  # 에이전트
  trust: { s: 70.1, z: 2.07, r: 81.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 67.4, z: 0.51, r: 57.7, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.47, r: 42.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.0 Tiny
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Ling 3.0 Tiny

InclusionAI · Open · Small · 컨텍스트 262k · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 48.0 t/s · TTFT 3.32s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.9 | -0.67 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 45.2 | -0.32 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 46.5 | -0.23 | 실측 | [[scicode]] 24.0%×1.0 |
| 에이전트 | 51.9 | +0.13 | 실측 | [[tau3-banking]] 21.0%×1.0 |
| 신뢰성 | 81.0 | +2.07 | 실측 | [[aa-omniscience]] 70.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.7 | +0.51 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 42.9 | -0.47 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
