---
type: Model
title: Gemini 3.5 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 28.0
price_blended_usd_1m: 0.331
output_speed_tps: 360.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 51.2, z: 0.49, r: 57.4, estimated: false }  # 전문 지식
  reasoning: { s: 39.0, z: 0.19, r: 52.9, estimated: false }  # 추론
  coding: { s: 55.1, z: 0.8, r: 62.0, estimated: false }  # 코딩
  agentic: { s: 39.5, z: 0.08, r: 51.2, estimated: false }  # 에이전트
  trust: { s: 66.0, z: 1.96, r: 79.4, estimated: false }  # 신뢰성
  multimodal: { s: 88.9, z: 0.93, r: 63.9, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.97, r: 64.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Gemini 3.5 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **28.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.331/1M · 360.0 t/s · TTFT 6.41s · 1M ctx` · 가성비 84.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.4 | +0.49 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 52.9 | +0.19 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 62.0 | +0.8 | 실측 | [[scicode]] 41.0%×1.0 |
| 에이전트 | 51.2 | +0.08 | 실측 | [[gdpval]] 28.0%×1.0, [[tau3-banking]] 18.0%×1.0 |
| 신뢰성 | 79.4 | +1.96 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | 63.9 | +0.93 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 64.6 | +0.97 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
