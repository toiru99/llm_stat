---
type: Model
title: Qwen2.5 Coder 7B
creator: Alibaba
license: Open
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 19.3, z: -1.05, r: 34.2, estimated: false }  # 전문 지식
  reasoning: { s: 17.8, z: -0.87, r: 36.9, estimated: false }  # 추론
  coding: { s: 25.0, z: -0.97, r: 35.4, estimated: false }  # 코딩
  agentic: { s: 10.2, z: -1.04, r: 34.4, estimated: true }  # 에이전트
  trust: { s: 17.9, z: -0.46, r: 43.1, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 17.8, z: -0.99, r: 35.1, estimated: true }  # 긴문맥
  instruction: { s: 29.9, z: -1.0, r: 35.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Coder 7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Qwen2.5 Coder 7B

Alibaba · Open · Unknown · 컨텍스트 131k · 종합지능 **4.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.2 | -1.05 | 실측 | [[gpqa-diamond]] 34.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.9 | -0.87 | 실측 | [[gpqa-diamond]] 34.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 35.4 | -0.97 | 실측 | [[scicode]] 15.0%×1.0 |
| 에이전트 | 34.4 | -1.04 | 추정 | (추정) |
| 신뢰성 | 43.1 | -0.46 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.1 | -0.99 | 추정 | (추정) |
| 지시 따르기 | 35.0 | -1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
