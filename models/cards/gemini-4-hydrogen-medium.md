---
type: Model
title: Gemini 4 Hydrogen (medium)
creator: Google
license: Proprietary
intelligence_index: 41.0
price_blended_usd_1m: 1.1025
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.0, z: 1.68, r: 75.1, estimated: true }  # 전문 지식
  reasoning: { s: 79.7, z: 1.78, r: 76.6, estimated: false }  # 추론
  coding: { s: 83.5, z: 1.53, r: 72.9, estimated: true }  # 코딩
  agentic: { s: 73.6, z: 1.3, r: 69.6, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.1, z: 1.14, r: 67.0, estimated: true }  # 긴문맥
  instruction: { s: 81.1, z: 1.2, r: 68.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Hydrogen (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Gemini 4 Hydrogen (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **41.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $1.5 · 출력 $7.5 · 혼합 $1.1025/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 37.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.1 | +1.68 | 추정 | (추정) |
| 추론 | 76.6 | +1.78 | 실측 | [[critpt]] 61.0%×1.0 |
| 코딩 | 72.9 | +1.53 | 추정 | (추정) |
| 에이전트 | 69.6 | +1.3 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.0 | +1.14 | 추정 | (추정) |
| 지시 따르기 | 68.1 | +1.2 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
