---
type: Model
title: Gemini 4 Argon (high)
creator: Google
license: Proprietary
intelligence_index: 50.4121935905389
price_blended_usd_1m: 1.47
output_speed_tps: 66.22072540597874
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.5, z: 1.41, r: 71.1, estimated: false }  # 전문 지식
  reasoning: { s: 76.3, z: 2.01, r: 80.1, estimated: false }  # 추론
  coding: { s: 90.3, z: 1.71, r: 75.6, estimated: false }  # 코딩
  agentic: { s: 89.7, z: 1.55, r: 73.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 1.08, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: 82.9, z: 1.21, r: 68.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Argon (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Gemini 4 Argon (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.4121935905389**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 66.22072540597874 t/s · TTFT 47.96003800616881s · 1M ctx` · 가성비 34.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.1 | +1.41 | 실측 | [[humanitys-last-exam]] 57.089898053753494%×0.3 |
| 추론 | 80.1 | +2.01 | 실측 | [[critpt]] 27.142857142857103%×1.0, [[humanitys-last-exam]] 57.089898053753494%×1.0 |
| 코딩 | 75.6 | +1.71 | 실측 | [[scicode]] 61.8055555555556%×1.0 |
| 에이전트 | 73.3 | +1.55 | 실측 | [[gdpval]] 1633.51%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.1 | +1.08 | 실측 | [[aa-lcr]] 79.6666666666667%×1.0 |
| 지시 따르기 | 68.2 | +1.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
