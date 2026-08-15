---
type: Model
title: Gemini 3.5 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 37.0
price_blended_usd_1m: 0.331
output_speed_tps: 371.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.1, z: 0.52, r: 57.8, estimated: false }  # 전문 지식
  reasoning: { s: 40.1, z: 0.23, r: 53.5, estimated: false }  # 추론
  coding: { s: 68.3, z: 0.82, r: 62.4, estimated: false }  # 코딩
  agentic: { s: 41.5, z: 0.19, r: 52.9, estimated: false }  # 에이전트
  trust: { s: 74.4, z: 2.09, r: 81.4, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 0.92, r: 63.8, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 88.8, z: 1.41, r: 71.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-15
timestamp: 2026-08-15T00:00:00Z
---

# Gemini 3.5 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **37.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.331/1M · 371.0 t/s · TTFT 10.09s · 1M ctx` · 가성비 111.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.8 | +0.52 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 53.5 | +0.23 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 62.4 | +0.82 | 실측 | [[scicode]] 41.0%×1.0 |
| 에이전트 | 52.9 | +0.19 | 실측 | [[gdpval]] 32.0%×1.0, [[tau3-banking]] 18.0%×1.0 |
| 신뢰성 | 81.4 | +2.09 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | 63.8 | +0.92 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 71.1 | +1.41 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
