---
type: Model
title: Ling-3.0-flash-Fin
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 29.4, z: -0.85, r: 37.3, estimated: false }  # 전문 지식
  reasoning: { s: 29.4, z: -0.67, r: 39.9, estimated: false }  # 추론
  coding: { s: 58.4, z: 0.7, r: 60.4, estimated: false }  # 코딩
  agentic: { s: 64.0, z: 0.99, r: 64.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.9, r: 63.5, estimated: false }  # 긴문맥
  instruction: { s: 41.1, z: -0.5, r: 42.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling-3.0-flash-Fin
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Ling-3.0-flash-Fin

InclusionAI · Open · Medium · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.3 | -0.85 | 실측 | [[humanitys-last-exam]] 22.6%×0.3 |
| 추론 | 39.9 | -0.67 | 실측 | [[humanitys-last-exam]] 22.6%×1.0 |
| 코딩 | 60.4 | +0.7 | 실측 | [[scicode]] 42.4%×1.0 |
| 에이전트 | 64.9 | +0.99 | 실측 | [[apex-agents]] 27.4%×1.0, [[gdpval]] 1108.0%×1.0, [[tau3-banking]] 38.6%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.5 | +0.9 | 실측 | [[aa-lcr]] 73.7%×1.0 |
| 지시 따르기 | 42.4 | -0.5 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
