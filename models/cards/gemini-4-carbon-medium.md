---
type: Model
title: Gemini 4 Carbon (medium)
creator: Google
license: Proprietary
intelligence_index: 58.2587824022788
price_blended_usd_1m: 1.47
output_speed_tps: 57.16968113151898
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.2, z: 1.6, r: 74.1, estimated: true }  # 전문 지식
  reasoning: { s: 73.4, z: 1.88, r: 78.3, estimated: true }  # 추론
  coding: { s: 81.4, z: 1.42, r: 71.3, estimated: true }  # 코딩
  agentic: { s: 86.2, z: 1.44, r: 71.6, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 100.0, z: 1.47, r: 72.0, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.12, r: 66.8, estimated: true }  # 긴문맥
  instruction: { s: 79.9, z: 1.1, r: 66.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Carbon (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Gemini 4 Carbon (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **58.2587824022788**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 57.16968113151898 t/s · TTFT 23.858935302427s · 1M ctx` · 가성비 39.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.1 | +1.6 | 추정 | (추정) |
| 추론 | 78.3 | +1.88 | 추정 | (추정) |
| 코딩 | 71.3 | +1.42 | 추정 | (추정) |
| 에이전트 | 71.6 | +1.44 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 72.0 | +1.47 | 실측 | [[mmmu-pro]] 89.2485549132948%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 추정 | (추정) |
| 지시 따르기 | 66.4 | +1.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
