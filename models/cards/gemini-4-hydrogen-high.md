---
type: Model
title: Gemini 4 Hydrogen (high)
creator: Google
license: Proprietary
intelligence_index: 51.0
price_blended_usd_1m: 1.1025
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.4, z: 1.6, r: 74.0, estimated: true }  # 전문 지식
  reasoning: { s: 80.4, z: 1.81, r: 77.1, estimated: false }  # 추론
  coding: { s: 84.6, z: 1.56, r: 73.4, estimated: true }  # 코딩
  agentic: { s: 76.5, z: 1.4, r: 71.0, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.8, z: 1.16, r: 67.4, estimated: true }  # 긴문맥
  instruction: { s: 82.1, z: 1.25, r: 68.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Hydrogen (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Gemini 4 Hydrogen (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $1.5 · 출력 $7.5 · 혼합 $1.1025/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 46.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.0 | +1.6 | 추정 | (추정) |
| 추론 | 77.1 | +1.81 | 실측 | [[critpt]] 61.5%×1.0 |
| 코딩 | 73.4 | +1.56 | 추정 | (추정) |
| 에이전트 | 71.0 | +1.4 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.4 | +1.16 | 추정 | (추정) |
| 지시 따르기 | 68.7 | +1.25 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
