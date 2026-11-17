---
type: Model
title: Gemini 4 Argon (high)
creator: Google
license: Proprietary
intelligence_index: 50.4121935905389
price_blended_usd_1m: 1.47
output_speed_tps: 65.98276332005777
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.5, z: 1.42, r: 71.4, estimated: false }  # 전문 지식
  reasoning: { s: 76.3, z: 2.03, r: 80.4, estimated: false }  # 추론
  coding: { s: 90.3, z: 1.72, r: 75.8, estimated: false }  # 코딩
  agentic: { s: 89.7, z: 1.56, r: 73.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: 82.9, z: 1.22, r: 68.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Argon (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Gemini 4 Argon (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.4121935905389**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 65.98276332005777 t/s · TTFT 44.04064469095349s · 1M ctx` · 가성비 34.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.4 | +1.42 | 실측 | [[humanitys-last-exam]] 57.089898053753494%×0.3 |
| 추론 | 80.4 | +2.03 | 실측 | [[critpt]] 27.142857142857103%×1.0, [[humanitys-last-exam]] 57.089898053753494%×1.0 |
| 코딩 | 75.8 | +1.72 | 실측 | [[scicode]] 61.8055555555556%×1.0 |
| 에이전트 | 73.5 | +1.56 | 실측 | [[gdpval]] 1633.51%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 79.6666666666667%×1.0 |
| 지시 따르기 | 68.3 | +1.22 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
