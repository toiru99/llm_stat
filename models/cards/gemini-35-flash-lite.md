---
type: Model
title: Gemini 3.5 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: None
output_speed_tps: 463.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.9, z: 0.69, r: 60.3, estimated: false }  # 전문 지식
  reasoning: { s: 40.3, z: 0.34, r: 55.1, estimated: false }  # 추론
  coding: { s: 68.3, z: 0.92, r: 63.8, estimated: false }  # 코딩
  agentic: { s: 50.0, z: 0.54, r: 58.0, estimated: false }  # 에이전트
  trust: { s: 74.7, z: 2.23, r: 83.4, estimated: false }  # 신뢰성
  multimodal: { s: 92.8, z: 1.0, r: 65.0, estimated: false }  # 멀티모달
  long_context: { s: 81.6, z: 0.97, r: 64.5, estimated: false }  # 긴문맥
  instruction: { s: 80.0, z: 1.12, r: 66.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-24
timestamp: 2026-07-24T00:00:00Z
---

# Gemini 3.5 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **36.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $None/1M · 463.0 t/s · TTFT 8.88s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.3 | +0.69 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 55.1 | +0.34 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 63.8 | +0.92 | 실측 | [[scicode]] 41.0%×1.0 |
| 에이전트 | 58.0 | +0.54 | 실측 | [[gdpval]] 32.0%×1.0, [[tau3-banking]] 16.0%×1.0 |
| 신뢰성 | 83.4 | +2.23 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | 65.0 | +1.0 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 64.5 | +0.97 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 66.8 | +1.12 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
