---
type: Model
title: Gemini 4 Carbon (medium)
creator: Google
license: Proprietary
intelligence_index: 58.2587824022788
price_blended_usd_1m: 2.94
output_speed_tps: 65.9807346087479
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.2, z: 1.59, r: 73.8, estimated: true }  # 전문 지식
  reasoning: { s: 73.4, z: 1.87, r: 78.0, estimated: true }  # 추론
  coding: { s: 81.4, z: 1.4, r: 71.1, estimated: true }  # 코딩
  agentic: { s: 84.2, z: 1.36, r: 70.4, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 99.7, z: 1.44, r: 71.7, estimated: false }  # 멀티모달
  long_context: { s: 91.3, z: 1.12, r: 66.8, estimated: true }  # 긴문맥
  instruction: { s: 80.5, z: 1.12, r: 66.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Carbon (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Gemini 4 Carbon (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **58.2587824022788**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 65.9807346087479 t/s · TTFT 35.5411782079875s · 1M ctx` · 가성비 19.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.8 | +1.59 | 추정 | (추정) |
| 추론 | 78.0 | +1.87 | 추정 | (추정) |
| 코딩 | 71.1 | +1.4 | 추정 | (추정) |
| 에이전트 | 70.4 | +1.36 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 71.7 | +1.44 | 실측 | [[mmmu-pro]] 89.2485549132948%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 추정 | (추정) |
| 지시 따르기 | 66.7 | +1.12 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
