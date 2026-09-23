---
type: Model
title: Gemini 3.5 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 22.0
price_blended_usd_1m: 0.331
output_speed_tps: 376.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 51.0, z: 0.44, r: 56.6, estimated: false }  # 전문 지식
  reasoning: { s: 38.7, z: 0.14, r: 52.1, estimated: false }  # 추론
  coding: { s: 56.7, z: 0.75, r: 61.2, estimated: false }  # 코딩
  agentic: { s: 34.8, z: -0.12, r: 48.3, estimated: false }  # 에이전트
  trust: { s: 66.0, z: 1.87, r: 78.1, estimated: false }  # 신뢰성
  multimodal: { s: 87.7, z: 0.87, r: 63.0, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 1.06, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 79.8, z: 1.09, r: 66.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Gemini 3.5 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **22.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.331/1M · 376.0 t/s · TTFT 8.36s · 1M ctx` · 가성비 66.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.6 | +0.44 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 52.1 | +0.14 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 61.2 | +0.75 | 실측 | [[scicode]] 41.0%×1.0 |
| 에이전트 | 48.3 | -0.12 | 실측 | [[gdpval]] 23.0%×1.0, [[tau3-banking]] 18.0%×1.0 |
| 신뢰성 | 78.1 | +1.87 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | 63.0 | +0.87 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 65.8 | +1.06 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 66.3 | +1.09 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
