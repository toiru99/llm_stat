---
type: Model
title: Gemini 4 Carbon (high)
creator: Google
license: Proprietary
intelligence_index: 60.025738829526
price_blended_usd_1m: 2.94
output_speed_tps: 62.5663439139668
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.9, z: 1.43, r: 71.4, estimated: true }  # 전문 지식
  reasoning: { s: 67.8, z: 1.59, r: 73.8, estimated: true }  # 추론
  coding: { s: 79.0, z: 1.32, r: 69.8, estimated: true }  # 코딩
  agentic: { s: 94.1, z: 1.7, r: 75.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 78.7, z: 1.04, r: 65.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Carbon (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Gemini 4 Carbon (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **60.025738829526**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 62.5663439139668 t/s · TTFT 68.7708094381835s · 1M ctx` · 가성비 20.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.4 | +1.43 | 추정 | (추정) |
| 추론 | 73.8 | +1.59 | 추정 | (추정) |
| 코딩 | 69.8 | +1.32 | 추정 | (추정) |
| 에이전트 | 75.5 | +1.7 | 실측 | [[gdpval]] 1732.68%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 79.3333333333333%×1.0 |
| 지시 따르기 | 65.5 | +1.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
