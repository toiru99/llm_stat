---
type: Model
title: Gemini 4 Carbon (high)
creator: Google
license: Proprietary
intelligence_index: 60.0
price_blended_usd_1m: 2.94
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 93.7, z: 1.96, r: 79.4, estimated: true }  # 전문 지식
  reasoning: { s: 95.8, z: 2.26, r: 84.0, estimated: false }  # 추론
  coding: { s: 88.2, z: 1.69, r: 75.4, estimated: true }  # 코딩
  agentic: { s: 92.9, z: 2.0, r: 80.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.4, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 78.5, z: 1.09, r: 66.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Carbon (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Gemini 4 Carbon (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **60.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 20.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.4 | +1.96 | 추정 | (추정) |
| 추론 | 84.0 | +2.26 | 실측 | [[critpt]] 69.0%×1.0 |
| 코딩 | 75.4 | +1.69 | 추정 | (추정) |
| 에이전트 | 80.0 | +2.0 | 실측 | [[gdpval]] 1733.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 79.3%×1.0 |
| 지시 따르기 | 66.3 | +1.09 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
