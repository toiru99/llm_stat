---
type: Model
title: Ling-3.0-flash-VL
creator: InclusionAI
license: Open
intelligence_index: 25.0
price_blended_usd_1m: 0.0475
output_speed_tps: 142.0
context_window: 262000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 39.3, z: -0.14, r: 47.9, estimated: false }  # 전문 지식
  reasoning: { s: 43.2, z: 0.32, r: 54.8, estimated: false }  # 추론
  coding: { s: 61.7, z: 0.89, r: 63.3, estimated: false }  # 코딩
  agentic: { s: 57.2, z: 0.72, r: 60.9, estimated: false }  # 에이전트
  trust: { s: 78.4, z: 2.44, r: 86.6, estimated: false }  # 신뢰성
  multimodal: { s: 87.7, z: 0.84, r: 62.6, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.1, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 77.7, z: 0.99, r: 64.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling-3.0-flash-VL
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Ling-3.0-flash-VL

InclusionAI · Open · Medium · 컨텍스트 262k · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.07 · 출력 $0.22 · 혼합 $0.0475/1M · 142.0 t/s · TTFT 1.86s · 262k ctx` · 가성비 526.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.9 | -0.14 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 54.8 | +0.32 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 63.3 | +0.89 | 실측 | [[scicode]] 44.0%×1.0 |
| 에이전트 | 60.9 | +0.72 | 실측 | [[gdpval]] 32.0%×1.0, [[tau3-banking]] 34.0%×1.0 |
| 신뢰성 | 86.6 | +2.44 | 실측 | [[aa-omniscience]] 78.0%×1.0 |
| 멀티모달 | 62.6 | +0.84 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 66.6 | +1.1 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 64.8 | +0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
