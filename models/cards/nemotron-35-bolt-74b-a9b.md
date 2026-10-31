---
type: Model
title: Nemotron 3.5 Bolt 74B-A9B
creator: NVIDIA
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
  knowledge: { s: 40.0, z: -0.41, r: 43.8, estimated: false }  # 전문 지식
  reasoning: { s: 40.0, z: -0.25, r: 46.2, estimated: false }  # 추론
  coding: { s: 55.0, z: 0.6, r: 59.0, estimated: false }  # 코딩
  agentic: { s: 52.4, z: 0.63, r: 59.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.79, r: 61.9, estimated: false }  # 긴문맥
  instruction: { s: 51.6, z: -0.04, r: 49.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3.5 Bolt 74B-A9B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
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
| 전문 지식 | 43.8 | -0.41 | 실측 | [[humanitys-last-exam]] 25.0%×0.3 |
| 추론 | 46.2 | -0.25 | 실측 | [[humanitys-last-exam]] 25.0%×1.0 |
| 코딩 | 59.0 | +0.6 | 실측 | [[scicode]] 40.0%×1.0 |
| 에이전트 | 59.4 | +0.63 | 실측 | [[gdpval]] 979.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.9 | +0.79 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 49.3 | -0.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
