---
type: Model
title: Gemini 4 Argon (medium)
creator: Google
license: Proprietary
intelligence_index: 47.6040598289046
price_blended_usd_1m: 1.47
output_speed_tps: 58.29148534337147
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.7, z: 0.95, r: 64.2, estimated: false }  # 전문 지식
  reasoning: { s: 65.8, z: 1.51, r: 72.6, estimated: false }  # 추론
  coding: { s: 85.5, z: 1.56, r: 73.4, estimated: false }  # 코딩
  agentic: { s: 87.3, z: 1.48, r: 72.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 98.8, z: 1.41, r: 71.1, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 1.04, r: 65.6, estimated: false }  # 긴문맥
  instruction: { s: 74.5, z: 0.87, r: 63.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Argon (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Gemini 4 Argon (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **47.6040598289046**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 58.29148534337147 t/s · TTFT 12.21696543062933s · 1M ctx` · 가성비 32.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.2 | +0.95 | 실측 | [[humanitys-last-exam]] 49.9073215940686%×0.3 |
| 추론 | 72.6 | +1.51 | 실측 | [[critpt]] 23.1428571428571%×1.0, [[humanitys-last-exam]] 49.9073215940686%×1.0 |
| 코딩 | 73.4 | +1.56 | 실측 | [[scicode]] 58.912037037037%×1.0 |
| 에이전트 | 72.2 | +1.48 | 실측 | [[gdpval]] 1578.39%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 71.1 | +1.41 | 실측 | [[mmmu-pro]] 88.3236994219653%×1.0 |
| 긴문맥 | 65.6 | +1.04 | 실측 | [[aa-lcr]] 78.3333333333333%×1.0 |
| 지시 따르기 | 63.0 | +0.87 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
