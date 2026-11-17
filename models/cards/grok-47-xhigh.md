---
type: Model
title: Grok 4.7 (xhigh)
creator: SpaceXAI
license: Proprietary
intelligence_index: 35.4850117067196
price_blended_usd_1m: 1.35
output_speed_tps: 70.21422964566305
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.5, z: 0.5, r: 57.5, estimated: false }  # 전문 지식
  reasoning: { s: 53.5, z: 0.9, r: 63.5, estimated: false }  # 추론
  coding: { s: 83.0, z: 1.47, r: 72.1, estimated: false }  # 코딩
  agentic: { s: 93.4, z: 1.69, r: 75.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 0.98, r: 64.8, estimated: false }  # 긴문맥
  instruction: { s: 65.2, z: 0.48, r: 57.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.7 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Grok 4.7 (xhigh)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **35.4850117067196**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 70.21422964566305 t/s · TTFT 49.90220408689523s · 500k ctx` · 가성비 26.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.5 | +0.5 | 실측 | [[humanitys-last-exam]] 43.1417979610751%×0.3 |
| 추론 | 63.5 | +0.9 | 실측 | [[critpt]] 17.714285714285698%×1.0, [[humanitys-last-exam]] 43.1417979610751%×1.0 |
| 코딩 | 72.1 | +1.47 | 실측 | [[scicode]] 57.4074074074074%×1.0 |
| 에이전트 | 75.4 | +1.69 | 실측 | [[gdpval]] 1716.83%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.8 | +0.98 | 실측 | [[aa-lcr]] 76.6666666666667%×1.0 |
| 지시 따르기 | 57.2 | +0.48 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
