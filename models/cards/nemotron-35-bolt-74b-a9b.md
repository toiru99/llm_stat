---
type: Model
title: Nemotron 3.5 Bolt 74B-A9B
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: current
size_class: Medium
params_b: 74
is_reasoning: true
radar:
  knowledge: { s: 32.2, z: -0.71, r: 39.4, estimated: false }  # 전문 지식
  reasoning: { s: 22.1, z: -0.65, r: 40.3, estimated: false }  # 추론
  coding: { s: 53.9, z: 0.43, r: 56.5, estimated: false }  # 코딩
  agentic: { s: 60.9, z: 0.49, r: 57.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.6, z: 0.64, r: 59.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3.5 Bolt 74B-A9B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Nemotron 3.5 Bolt 74B-A9B

NVIDIA · Open · Medium(74B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 39.4 | -0.71 | 실측 | [[humanitys-last-exam]] 24.6525%×0.3 |
| 추론 | 40.3 | -0.65 | 실측 | [[critpt]] 4.28571%×1.0, [[humanitys-last-exam]] 24.6525%×1.0 |
| 코딩 | 56.5 | +0.43 | 실측 | [[scicode]] 39.6991%×1.0 |
| 에이전트 | 57.3 | +0.49 | 실측 | [[gdpval]] 979.03 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.6 | +0.64 | 실측 | [[aa-lcr]] 69.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
