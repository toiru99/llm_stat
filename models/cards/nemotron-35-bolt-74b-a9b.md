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
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 32.2, z: -0.72, r: 39.2, estimated: false }  # 전문 지식
  reasoning: { s: 22.1, z: -0.66, r: 40.2, estimated: false }  # 추론
  coding: { s: 53.9, z: 0.48, r: 57.2, estimated: false }  # 코딩
  agentic: { s: 60.9, z: 0.57, r: 58.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.6, z: 0.75, r: 61.3, estimated: false }  # 긴문맥
  instruction: { s: 52.3, z: -0.06, r: 49.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3.5 Bolt 74B-A9B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Nemotron 3.5 Bolt 74B-A9B

NVIDIA · Open · Medium · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.2 | -0.72 | 실측 | [[humanitys-last-exam]] 24.6524559777572%×0.3 |
| 추론 | 40.2 | -0.66 | 실측 | [[critpt]] 4.28571428571429%×1.0, [[humanitys-last-exam]] 24.6524559777572%×1.0 |
| 코딩 | 57.2 | +0.48 | 실측 | [[scicode]] 39.6990740740741%×1.0 |
| 에이전트 | 58.5 | +0.57 | 실측 | [[gdpval]] 979.03%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.3 | +0.75 | 실측 | [[aa-lcr]] 69.6666666666667%×1.0 |
| 지시 따르기 | 49.1 | -0.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
