---
type: Model
title: Gemini 4 Argon (medium)
creator: Google
license: Proprietary
intelligence_index: 47.6040598289046
price_blended_usd_1m: 2.94
output_speed_tps: 70.5585787562992
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.7, z: 0.93, r: 64.0, estimated: false }  # 전문 지식
  reasoning: { s: 65.8, z: 1.49, r: 72.3, estimated: false }  # 추론
  coding: { s: 85.5, z: 1.54, r: 73.1, estimated: false }  # 코딩
  agentic: { s: 87.3, z: 1.47, r: 72.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 98.5, z: 1.38, r: 70.7, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 1.03, r: 65.4, estimated: false }  # 긴문맥
  instruction: { s: 74.7, z: 0.87, r: 63.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Argon (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Gemini 4 Argon (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **47.6040598289046**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 70.5585787562992 t/s · TTFT 11.5839442042515s · 1M ctx` · 가성비 16.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.0 | +0.93 | 실측 | [[humanitys-last-exam]] 49.9073215940686%×0.3 |
| 추론 | 72.3 | +1.49 | 실측 | [[critpt]] 23.1428571428571%×1.0, [[humanitys-last-exam]] 49.9073215940686%×1.0 |
| 코딩 | 73.1 | +1.54 | 실측 | [[scicode]] 58.912037037037%×1.0 |
| 에이전트 | 72.0 | +1.47 | 실측 | [[gdpval]] 1578.39%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 70.7 | +1.38 | 실측 | [[mmmu-pro]] 88.3236994219653%×1.0 |
| 긴문맥 | 65.4 | +1.03 | 실측 | [[aa-lcr]] 78.3333333333333%×1.0 |
| 지시 따르기 | 63.0 | +0.87 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
