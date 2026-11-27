---
type: Model
title: Ling-3.0-flash-Fin
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: current
size_class: Medium
params_b: 124
is_reasoning: true
radar:
  knowledge: { s: 29.4, z: -0.84, r: 37.4, estimated: false }  # 전문 지식
  reasoning: { s: 18.3, z: -0.84, r: 37.4, estimated: false }  # 추론
  coding: { s: 58.3, z: 0.58, r: 58.7, estimated: false }  # 코딩
  agentic: { s: 70.8, z: 0.83, r: 62.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.78, r: 61.7, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling-3.0-flash-Fin
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Ling-3.0-flash-Fin

InclusionAI · Open · Medium(124B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 37.4 | -0.84 | 실측 | [[humanitys-last-exam]] 22.6135%×0.3 |
| 추론 | 37.4 | -0.84 | 실측 | [[critpt]] 2.57143%×1.0, [[humanitys-last-exam]] 22.6135%×1.0 |
| 코딩 | 58.7 | +0.58 | 실측 | [[scicode]] 42.3611%×1.0 |
| 에이전트 | 62.5 | +0.83 | 실측 | [[gdpval]] 1106.78 Elo×1.0, [[tau3-banking]] 38.5567%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.7 | +0.78 | 실측 | [[aa-lcr]] 73.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
