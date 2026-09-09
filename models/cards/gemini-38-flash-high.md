---
type: Model
title: Gemini 3.8 Flash (high)
creator: Google
license: Proprietary
intelligence_index: 41.0
price_blended_usd_1m: 0.5775
output_speed_tps: 273.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.8, z: 2.17, r: 82.5, estimated: false }  # 전문 지식
  reasoning: { s: 78.7, z: 2.1, r: 81.5, estimated: false }  # 추론
  coding: { s: 87.8, z: 1.89, r: 78.4, estimated: false }  # 코딩
  agentic: { s: 82.2, z: 1.71, r: 75.6, estimated: false }  # 에이전트
  trust: { s: 44.3, z: 0.92, r: 63.8, estimated: false }  # 신뢰성
  multimodal: { s: 98.6, z: 1.41, r: 71.1, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.29, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: 76.9, z: 1.01, r: 65.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.8 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-09
timestamp: 2026-09-09T00:00:00Z
---

# Gemini 3.8 Flash (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **41.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 273.0 t/s · TTFT 14.26s · 1M ctx` · 가성비 71.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.5 | +2.17 | 실측 | [[aa-omniscience]] 55.0%×1.0, [[gpqa-diamond]] 95.0%×0.4, [[humanitys-last-exam]] 48.0%×0.3 |
| 추론 | 81.5 | +2.1 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 95.0%×1.0, [[humanitys-last-exam]] 48.0%×1.0 |
| 코딩 | 78.4 | +1.89 | 실측 | [[scicode]] 57.0%×1.0 |
| 에이전트 | 75.6 | +1.71 | 실측 | [[gdpval]] 48.0%×1.0, [[tau3-banking]] 45.0%×1.0 |
| 신뢰성 | 63.8 | +0.92 | 실측 | [[aa-omniscience]] 45.0%×1.0 |
| 멀티모달 | 71.1 | +1.41 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 69.4 | +1.29 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 65.1 | +1.01 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
