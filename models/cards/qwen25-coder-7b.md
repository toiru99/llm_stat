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
  knowledge: { s: 19.6, z: -1.01, r: 34.8, estimated: false }  # 전문 지식
  reasoning: { s: 18.1, z: -0.82, r: 37.8, estimated: false }  # 추론
  coding: { s: 25.0, z: -0.9, r: 36.5, estimated: false }  # 코딩
  agentic: { s: 10.2, z: -1.01, r: 34.8, estimated: true }  # 에이전트
  trust: { s: 21.2, z: -0.31, r: 45.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 20.5, z: -0.84, r: 37.5, estimated: true }  # 긴문맥
  instruction: { s: 34.6, z: -0.74, r: 38.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Coder 7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-19
timestamp: 2026-07-19T00:00:00Z
---

# Qwen2.5 Coder 7B

Alibaba · Open · Unknown · 컨텍스트 131k · 종합지능 **4.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.8 | -1.01 | 실측 | [[gpqa-diamond]] 34.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 37.8 | -0.82 | 실측 | [[gpqa-diamond]] 34.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 36.5 | -0.9 | 실측 | [[scicode]] 15.0%×1.0 |
| 에이전트 | 34.8 | -1.01 | 추정 | (추정) |
| 신뢰성 | 45.4 | -0.31 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.5 | -0.84 | 추정 | (추정) |
| 지시 따르기 | 38.9 | -0.74 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
