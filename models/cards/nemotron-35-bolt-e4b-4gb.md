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
  knowledge: { s: 62.5, z: 0.58, r: 58.7, estimated: true }  # 전문 지식
  reasoning: { s: 57.9, z: 0.56, r: 58.4, estimated: true }  # 추론
  coding: { s: 56.8, z: 0.65, r: 59.7, estimated: true }  # 코딩
  agentic: { s: 49.9, z: 0.53, r: 58.0, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 79.7, z: 0.81, r: 62.1, estimated: true }  # 긴문맥
  instruction: { s: 68.8, z: 0.67, r: 60.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3.5 Bolt E4B 4GB
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Nemotron 3.5 Bolt E4B 4GB

NVIDIA · Open · Unknown · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.7 | +0.58 | 추정 | (추정) |
| 추론 | 58.4 | +0.56 | 추정 | (추정) |
| 코딩 | 59.7 | +0.65 | 추정 | (추정) |
| 에이전트 | 58.0 | +0.53 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.1 | +0.81 | 추정 | (추정) |
| 지시 따르기 | 60.1 | +0.67 | 실측 | [[ifbench]] 61.1%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
