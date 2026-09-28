---
type: Model
title: Gemini 3 Deep Think
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.2, z: 1.54, r: 73.1, estimated: true }  # 전문 지식
  reasoning: { s: 81.2, z: 2.15, r: 82.2, estimated: false }  # 추론
  coding: { s: 84.0, z: 1.7, r: 75.4, estimated: true }  # 코딩
  agentic: { s: 82.1, z: 1.7, r: 75.6, estimated: true }  # 에이전트
  trust: { s: 38.8, z: 0.61, r: 59.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.1, z: 1.29, r: 69.4, estimated: true }  # 긴문맥
  instruction: { s: 79.3, z: 1.07, r: 66.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Deep Think
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# Gemini 3 Deep Think

Google · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.1 | +1.54 | 추정 | (추정) |
| 추론 | 82.2 | +2.15 | 실측 | [[critpt]] 26.0%×1.0 |
| 코딩 | 75.4 | +1.7 | 추정 | (추정) |
| 에이전트 | 75.6 | +1.7 | 추정 | (추정) |
| 신뢰성 | 59.2 | +0.61 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.4 | +1.29 | 추정 | (추정) |
| 지시 따르기 | 66.0 | +1.07 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
