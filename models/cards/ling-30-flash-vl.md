---
type: Model
title: Ling-3.0-flash-VL
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
  knowledge: { s: 62.7, z: 0.77, r: 61.6, estimated: false }  # 전문 지식
  reasoning: { s: 40.8, z: 0.28, r: 54.2, estimated: false }  # 추론
  coding: { s: 61.3, z: 0.68, r: 60.3, estimated: false }  # 코딩
  agentic: { s: 68.0, z: 0.74, r: 61.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.0, z: 0.74, r: 61.2, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 0.94, r: 64.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling-3.0-flash-VL
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Ling-3.0-flash-VL

InclusionAI · Open · Medium(124B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 61.6 | +0.77 | 실측 | [[gpqa-diamond]] 86.1616%×0.4, [[humanitys-last-exam]] 21.9648%×0.3 |
| 추론 | 54.2 | +0.28 | 실측 | [[critpt]] 2%×1.0, [[gpqa-diamond]] 86.1616%×1.0, [[humanitys-last-exam]] 21.9648%×1.0 |
| 코딩 | 60.3 | +0.68 | 실측 | [[scicode]] 44.213%×1.0 |
| 에이전트 | 61.0 | +0.74 | 실측 | [[gdpval]] 1166.55 Elo×1.0, [[tau3-banking]] 34.433%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.2 | +0.74 | 실측 | [[mmmu-pro]] 78.9595%×1.0 |
| 긴문맥 | 64.1 | +0.94 | 실측 | [[aa-lcr]] 78.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
