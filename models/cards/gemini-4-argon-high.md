---
type: Model
title: Gemini 4 Argon (high)
creator: Google
license: Proprietary
intelligence_index: 50.4121935905389
price_blended_usd_1m: 2.94
output_speed_tps: 82.7876742679338
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.5, z: 1.45, r: 71.7, estimated: false }  # 전문 지식
  reasoning: { s: 76.3, z: 2.04, r: 80.6, estimated: false }  # 추론
  coding: { s: 90.3, z: 1.66, r: 74.9, estimated: false }  # 코딩
  agentic: { s: 89.8, z: 1.5, r: 72.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 0.98, r: 64.7, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Argon (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Gemini 4 Argon (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.4121935905389**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 82.7876742679338 t/s · TTFT 35.9259206706453s · 1M ctx` · 가성비 17.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 71.7 | +1.45 | 실측 | [[humanitys-last-exam]] 57.0899%×0.3 |
| 추론 | 80.6 | +2.04 | 실측 | [[critpt]] 27.1429%×1.0, [[humanitys-last-exam]] 57.0899%×1.0 |
| 코딩 | 74.9 | +1.66 | 실측 | [[scicode]] 61.8056%×1.0 |
| 에이전트 | 72.6 | +1.5 | 실측 | [[gdpval]] 1634.15 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.7 | +0.98 | 실측 | [[aa-lcr]] 79.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
