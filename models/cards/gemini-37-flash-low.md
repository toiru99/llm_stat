---
type: Model
title: Gemini 3.7 Flash (low)
creator: Google
license: Proprietary
intelligence_index: 51.0
price_blended_usd_1m: 0.5775
output_speed_tps: 275.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.9, z: 1.97, r: 79.6, estimated: false }  # 전문 지식
  reasoning: { s: 57.2, z: 1.14, r: 67.1, estimated: false }  # 추론
  coding: { s: 87.1, z: 1.71, r: 75.7, estimated: false }  # 코딩
  agentic: { s: 63.0, z: 1.01, r: 65.1, estimated: false }  # 에이전트
  trust: { s: 30.9, z: 0.31, r: 54.7, estimated: false }  # 신뢰성
  multimodal: { s: 100.0, z: 1.42, r: 71.3, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.35, r: 70.3, estimated: false }  # 긴문맥
  instruction: { s: 85.8, z: 1.39, r: 70.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.7 Flash (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Gemini 3.7 Flash (low)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 275.0 t/s · TTFT 0.75s · 1M ctx` · 가성비 88.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.6 | +1.97 | 실측 | [[aa-omniscience]] 54.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 67.1 | +1.14 | 실측 | [[critpt]] 6.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 75.7 | +1.71 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 65.1 | +1.01 | 실측 | [[gdpval]] 47.0%×1.0, [[tau3-banking]] 29.0%×1.0 |
| 신뢰성 | 54.7 | +0.31 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | 71.3 | +1.42 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 70.3 | +1.35 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 70.8 | +1.39 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
