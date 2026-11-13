---
type: Model
title: Gemini 4 Hydrogen (xhigh)
creator: Google
license: Proprietary
intelligence_index: 54.0
price_blended_usd_1m: 1.1025
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.5, z: 1.85, r: 77.7, estimated: true }  # 전문 지식
  reasoning: { s: 86.3, z: 2.1, r: 81.4, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.47, r: 72.0, estimated: true }  # 코딩
  agentic: { s: 84.4, z: 1.67, r: 75.1, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.13, r: 67.0, estimated: true }  # 긴문맥
  instruction: { s: 78.4, z: 1.09, r: 66.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Hydrogen (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Gemini 4 Hydrogen (xhigh)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **54.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $1.5 · 출력 $7.5 · 혼합 $1.1025/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 49.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.7 | +1.85 | 추정 | (추정) |
| 추론 | 81.4 | +2.1 | 실측 | [[critpt]] 66.0%×1.0 |
| 코딩 | 72.0 | +1.47 | 추정 | (추정) |
| 에이전트 | 75.1 | +1.67 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.0 | +1.13 | 추정 | (추정) |
| 지시 따르기 | 66.3 | +1.09 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
