---
type: Model
title: Qwen2.5 Coder 7B
creator: Alibaba
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 18.9, z: -1.06, r: 34.1, estimated: false }  # 전문 지식
  reasoning: { s: 17.4, z: -0.85, r: 37.3, estimated: false }  # 추론
  coding: { s: 1.9, z: -1.06, r: 34.2, estimated: true }  # 코딩
  agentic: { s: 4.1, z: -1.28, r: 30.8, estimated: true }  # 에이전트
  trust: { s: 25.6, z: 0.05, r: 50.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 3.8, z: -1.39, r: 29.1, estimated: true }  # 긴문맥
  instruction: { s: 29.7, z: -0.96, r: 35.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Coder 7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Qwen2.5 Coder 7B

Alibaba · Open · Unknown · 컨텍스트 131k · 종합지능 **1.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.1 | -1.06 | 실측 | [[gpqa-diamond]] 34.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 37.3 | -0.85 | 실측 | [[gpqa-diamond]] 34.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 34.2 | -1.06 | 추정 | (추정) |
| 에이전트 | 30.8 | -1.28 | 추정 | (추정) |
| 신뢰성 | 50.8 | +0.05 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.1 | -1.39 | 추정 | (추정) |
| 지시 따르기 | 35.7 | -0.96 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
