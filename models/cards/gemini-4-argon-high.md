---
type: Model
title: Gemini 4 Argon (high)
creator: Google
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: 2.94
output_speed_tps: 82.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 93.3, z: 1.93, r: 78.9, estimated: false }  # 전문 지식
  reasoning: { s: 83.5, z: 1.7, r: 75.5, estimated: false }  # 추론
  coding: { s: 91.7, z: 1.82, r: 77.4, estimated: false }  # 코딩
  agentic: { s: 87.4, z: 1.83, r: 77.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.13, r: 66.9, estimated: false }  # 긴문맥
  instruction: { s: 82.0, z: 1.23, r: 68.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Argon (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Gemini 4 Argon (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 82.0 t/s · TTFT 46.64s · 1M ctx` · 가성비 17.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.9 | +1.93 | 실측 | [[humanitys-last-exam]] 57.0%×0.3 |
| 추론 | 75.5 | +1.7 | 실측 | [[critpt]] 53.0%×1.0, [[humanitys-last-exam]] 57.0%×1.0 |
| 코딩 | 77.4 | +1.82 | 실측 | [[scicode]] 62.0%×1.0 |
| 에이전트 | 77.4 | +1.83 | 실측 | [[gdpval]] 1631.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.9 | +1.13 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 68.4 | +1.23 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
