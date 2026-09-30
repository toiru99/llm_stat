---
type: Model
title: Gemini 3.5 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 22.0
price_blended_usd_1m: 0.331
output_speed_tps: 321.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 51.0, z: 0.4, r: 56.0, estimated: false }  # 전문 지식
  reasoning: { s: 38.7, z: 0.11, r: 51.7, estimated: false }  # 추론
  coding: { s: 56.7, z: 0.71, r: 60.7, estimated: false }  # 코딩
  agentic: { s: 34.8, z: -0.14, r: 48.0, estimated: false }  # 에이전트
  trust: { s: 66.0, z: 1.86, r: 77.9, estimated: false }  # 신뢰성
  multimodal: { s: 87.7, z: 0.84, r: 62.6, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 1.04, r: 65.5, estimated: false }  # 긴문맥
  instruction: { s: 78.6, z: 1.02, r: 65.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Gemini 3.5 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **22.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.331/1M · 321.0 t/s · TTFT 9.32s · 1M ctx` · 가성비 66.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.0 | +0.4 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 51.7 | +0.11 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 60.7 | +0.71 | 실측 | [[scicode]] 41.0%×1.0 |
| 에이전트 | 48.0 | -0.14 | 실측 | [[gdpval]] 23.0%×1.0, [[tau3-banking]] 18.0%×1.0 |
| 신뢰성 | 77.9 | +1.86 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | 62.6 | +0.84 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 65.5 | +1.04 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 65.4 | +1.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
