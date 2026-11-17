---
type: Model
title: Gemini 4 Carbon (high)
creator: Google
license: Proprietary
intelligence_index: 60.025738829526
price_blended_usd_1m: 1.47
output_speed_tps: 64.16923817146365
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.9, z: 1.44, r: 71.7, estimated: true }  # 전문 지식
  reasoning: { s: 67.8, z: 1.61, r: 74.1, estimated: true }  # 추론
  coding: { s: 79.0, z: 1.34, r: 70.1, estimated: true }  # 코딩
  agentic: { s: 94.1, z: 1.72, r: 75.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.07, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: 78.3, z: 1.03, r: 65.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Carbon (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Gemini 4 Carbon (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **60.025738829526**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 64.16923817146365 t/s · TTFT 72.55862590109267s · 1M ctx` · 가성비 40.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.7 | +1.44 | 추정 | (추정) |
| 추론 | 74.1 | +1.61 | 추정 | (추정) |
| 코딩 | 70.1 | +1.34 | 추정 | (추정) |
| 에이전트 | 75.7 | +1.72 | 실측 | [[gdpval]] 1732.68%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.1 | +1.07 | 실측 | [[aa-lcr]] 79.3333333333333%×1.0 |
| 지시 따르기 | 65.5 | +1.03 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
