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
  knowledge: { s: 32.2, z: -0.71, r: 39.4, estimated: false }  # 전문 지식
  reasoning: { s: 32.2, z: -0.54, r: 42.0, estimated: false }  # 추론
  coding: { s: 53.9, z: 0.55, r: 58.2, estimated: false }  # 코딩
  agentic: { s: 52.4, z: 0.6, r: 59.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.6, z: 0.77, r: 61.5, estimated: false }  # 긴문맥
  instruction: { s: 39.7, z: -0.56, r: 41.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3.5 Bolt 74B-A9B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Nemotron 3.5 Bolt 74B-A9B

NVIDIA · Open · Medium · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.4 | -0.71 | 실측 | [[humanitys-last-exam]] 24.7%×0.3 |
| 추론 | 42.0 | -0.54 | 실측 | [[humanitys-last-exam]] 24.7%×1.0 |
| 코딩 | 58.2 | +0.55 | 실측 | [[scicode]] 39.7%×1.0 |
| 에이전트 | 59.0 | +0.6 | 실측 | [[gdpval]] 979.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.5 | +0.77 | 실측 | [[aa-lcr]] 69.7%×1.0 |
| 지시 따르기 | 41.5 | -0.56 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
