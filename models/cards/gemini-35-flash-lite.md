---
type: Model
title: Gemini 3.5 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: None
output_speed_tps: 370.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.9, z: 0.64, r: 59.6, estimated: false }  # 전문 지식
  reasoning: { s: 40.3, z: 0.29, r: 54.3, estimated: false }  # 추론
  coding: { s: 68.3, z: 0.89, r: 63.3, estimated: false }  # 코딩
  agentic: { s: 47.1, z: 0.41, r: 56.2, estimated: false }  # 에이전트
  trust: { s: 74.7, z: 2.21, r: 83.2, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 0.95, r: 64.3, estimated: false }  # 멀티모달
  long_context: { s: 81.6, z: 0.95, r: 64.2, estimated: false }  # 긴문맥
  instruction: { s: 80.0, z: 1.11, r: 66.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# Gemini 3.5 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **36.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $None/1M · 370.0 t/s · TTFT 7.96s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.6 | +0.64 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 54.3 | +0.29 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 63.3 | +0.89 | 실측 | [[scicode]] 41.0%×1.0 |
| 에이전트 | 56.2 | +0.41 | 실측 | [[gdpval]] 32.0%×1.0, [[tau3-banking]] 16.0%×1.0 |
| 신뢰성 | 83.2 | +2.21 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | 64.3 | +0.95 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 64.2 | +0.95 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 66.7 | +1.11 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
