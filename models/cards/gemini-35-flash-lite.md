---
type: Model
title: Gemini 3.5 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 11.6563462044212
price_blended_usd_1m: 0.331
output_speed_tps: 321.7739894402696
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.3, z: 0.59, r: 58.9, estimated: false }  # 전문 지식
  reasoning: { s: 36.6, z: 0.06, r: 50.9, estimated: false }  # 추론
  coding: { s: 56.6, z: 0.57, r: 58.6, estimated: false }  # 코딩
  agentic: { s: 47.7, z: 0.11, r: 51.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.3, z: 0.77, r: 61.5, estimated: false }  # 멀티모달
  long_context: { s: 85.7, z: 0.96, r: 64.4, estimated: false }  # 긴문맥
  instruction: { s: 75.0, z: 0.89, r: 63.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Gemini 3.5 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **11.6563462044212**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.331/1M · 321.7739894402696 t/s · TTFT 4.757010698587042s · 1M ctx` · 가성비 35.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.9 | +0.59 | 실측 | [[gpqa-diamond]] 83.8383838383838%×0.4, [[humanitys-last-exam]] 18.813716404077798%×0.3 |
| 추론 | 50.9 | +0.06 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 83.8383838383838%×1.0, [[humanitys-last-exam]] 18.813716404077798%×1.0 |
| 코딩 | 58.6 | +0.57 | 실측 | [[scicode]] 41.3194444444444%×1.0 |
| 에이전트 | 51.6 | +0.11 | 실측 | [[gdpval]] 994.42%×1.0, [[tau3-banking]] 17.5257731958763%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.5 | +0.77 | 실측 | [[mmmu-pro]] 79.0173410404624%×1.0 |
| 긴문맥 | 64.4 | +0.96 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 63.4 | +0.89 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
