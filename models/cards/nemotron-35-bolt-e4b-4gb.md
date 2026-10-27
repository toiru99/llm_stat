---
type: Model
title: Nemotron 3.5 Bolt E4B 4GB
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 41.3, z: -0.09, r: 48.7, estimated: true }  # 전문 지식
  reasoning: { s: 37.4, z: 0.01, r: 50.1, estimated: true }  # 추론
  coding: { s: 37.7, z: -0.01, r: 49.9, estimated: true }  # 코딩
  agentic: { s: 33.8, z: -0.03, r: 49.5, estimated: true }  # 에이전트
  trust: { s: 13.9, z: -0.61, r: 40.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 57.0, z: 0.12, r: 51.9, estimated: true }  # 긴문맥
  instruction: { s: 69.0, z: 0.62, r: 59.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3.5 Bolt E4B 4GB
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Nemotron 3.5 Bolt E4B 4GB

NVIDIA · Open · Unknown · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.7 | -0.09 | 추정 | (추정) |
| 추론 | 50.1 | +0.01 | 추정 | (추정) |
| 코딩 | 49.9 | -0.01 | 추정 | (추정) |
| 에이전트 | 49.5 | -0.03 | 추정 | (추정) |
| 신뢰성 | 40.9 | -0.61 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 51.9 | +0.12 | 추정 | (추정) |
| 지시 따르기 | 59.3 | +0.62 | 실측 | [[ifbench]] 61.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
