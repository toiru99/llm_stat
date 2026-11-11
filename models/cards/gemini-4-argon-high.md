---
type: Model
title: Gemini 4 Argon (high)
creator: Google
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: 2.94
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.5, z: 1.43, r: 71.4, estimated: false }  # 전문 지식
  reasoning: { s: 72.6, z: 1.44, r: 71.6, estimated: false }  # 추론
  coding: { s: 90.3, z: 1.76, r: 76.5, estimated: false }  # 코딩
  agentic: { s: 87.5, z: 1.79, r: 76.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 79.4, z: 1.14, r: 67.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Argon (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Gemini 4 Argon (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 17.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.4 | +1.43 | 실측 | [[humanitys-last-exam]] 57.1%×0.3 |
| 추론 | 71.6 | +1.44 | 실측 | [[critpt]] 52.5%×1.0, [[humanitys-last-exam]] 57.1%×1.0 |
| 코딩 | 76.5 | +1.76 | 실측 | [[scicode]] 61.8%×1.0 |
| 에이전트 | 76.8 | +1.79 | 실측 | [[gdpval]] 1633.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 79.7%×1.0 |
| 지시 따르기 | 67.2 | +1.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
