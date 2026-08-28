---
type: Model
title: Gemini 3.5 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 37.0
price_blended_usd_1m: 0.331
output_speed_tps: 346.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.6, z: 0.59, r: 58.9, estimated: false }  # 전문 지식
  reasoning: { s: 40.1, z: 0.29, r: 54.3, estimated: false }  # 추론
  coding: { s: 68.3, z: 0.87, r: 63.0, estimated: false }  # 코딩
  agentic: { s: 41.9, z: 0.2, r: 53.0, estimated: false }  # 에이전트
  trust: { s: 66.0, z: 1.98, r: 79.7, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 1.0, r: 65.0, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 90.3, z: 1.6, r: 74.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Gemini 3.5 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **37.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.331/1M · 346.0 t/s · TTFT 9.11s · 1M ctx` · 가성비 111.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.9 | +0.59 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 54.3 | +0.29 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 63.0 | +0.87 | 실측 | [[scicode]] 41.0%×1.0 |
| 에이전트 | 53.0 | +0.2 | 실측 | [[gdpval]] 32.0%×1.0, [[tau3-banking]] 18.0%×1.0 |
| 신뢰성 | 79.7 | +1.98 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | 65.0 | +1.0 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 74.0 | +1.6 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
