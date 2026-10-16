---
type: Model
title: Nemotron 3.5 Bolt 74B-A9B
creator: NVIDIA
license: Open
intelligence_index: 21.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 28.7, z: -0.65, r: 40.3, estimated: false }  # 전문 지식
  reasoning: { s: 26.1, z: -0.49, r: 42.7, estimated: false }  # 추론
  coding: { s: 55.0, z: 0.6, r: 59.1, estimated: false }  # 코딩
  agentic: { s: 35.3, z: -0.15, r: 47.7, estimated: false }  # 에이전트
  trust: { s: 55.7, z: 1.3, r: 69.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.8, r: 62.0, estimated: false }  # 긴문맥
  instruction: { s: 56.9, z: 0.1, r: 51.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3.5 Bolt 74B-A9B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-16
timestamp: 2026-10-16T00:00:00Z
---

# Nemotron 3.5 Bolt 74B-A9B

NVIDIA · Open · Medium · 컨텍스트 262k · 종합지능 **21.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.3 | -0.65 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[humanitys-last-exam]] 25.0%×0.3 |
| 추론 | 42.7 | -0.49 | 실측 | [[critpt]] 4.0%×1.0, [[humanitys-last-exam]] 25.0%×1.0 |
| 코딩 | 59.1 | +0.6 | 실측 | [[scicode]] 40.0%×1.0 |
| 에이전트 | 47.7 | -0.15 | 실측 | [[gdpval]] 24.0%×1.0 |
| 신뢰성 | 69.6 | +1.3 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.0 | +0.8 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 51.5 | +0.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
