---
type: Model
title: Gemini 3.5 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 11.6563462044212
price_blended_usd_1m: 0.331
output_speed_tps: 295.961142940657
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.3, z: 0.61, r: 59.1, estimated: false }  # 전문 지식
  reasoning: { s: 36.6, z: 0.07, r: 51.1, estimated: false }  # 추론
  coding: { s: 56.6, z: 0.52, r: 57.8, estimated: false }  # 코딩
  agentic: { s: 47.7, z: 0.02, r: 50.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.0, z: 0.75, r: 61.2, estimated: false }  # 멀티모달
  long_context: { s: 85.7, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Gemini 3.5 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **11.6563462044212**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.331/1M · 295.961142940657 t/s · TTFT 4.75483439487867s · 1M ctx` · 가성비 35.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 59.1 | +0.61 | 실측 | [[gpqa-diamond]] 83.8384%×0.4, [[humanitys-last-exam]] 18.8137%×0.3 |
| 추론 | 51.1 | +0.07 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 83.8384%×1.0, [[humanitys-last-exam]] 18.8137%×1.0 |
| 코딩 | 57.8 | +0.52 | 실측 | [[scicode]] 41.3194%×1.0 |
| 에이전트 | 50.3 | +0.02 | 실측 | [[gdpval]] 994.62 Elo×1.0, [[tau3-banking]] 17.5258%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.2 | +0.75 | 실측 | [[mmmu-pro]] 79.0173%×1.0 |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 76%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
