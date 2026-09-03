---
type: Model
title: Gemini 3.7 Flash (high)
creator: Google
license: Proprietary
intelligence_index: 56.0
price_blended_usd_1m: 0.5775
output_speed_tps: 287.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.1, z: 2.24, r: 83.6, estimated: false }  # 전문 지식
  reasoning: { s: 74.9, z: 1.99, r: 79.8, estimated: false }  # 추론
  coding: { s: 91.9, z: 1.89, r: 78.3, estimated: false }  # 코딩
  agentic: { s: 69.2, z: 1.23, r: 68.5, estimated: false }  # 에이전트
  trust: { s: 34.0, z: 0.44, r: 56.6, estimated: false }  # 신뢰성
  multimodal: { s: 98.6, z: 1.39, r: 70.8, estimated: false }  # 멀티모달
  long_context: { s: 96.4, z: 1.41, r: 71.1, estimated: false }  # 긴문맥
  instruction: { s: 83.8, z: 1.29, r: 69.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.7 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Gemini 3.7 Flash (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **56.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 287.0 t/s · TTFT 12.01s · 1M ctx` · 가성비 97.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 83.6 | +2.24 | 실측 | [[aa-omniscience]] 55.0%×1.0, [[gpqa-diamond]] 95.0%×0.4, [[humanitys-last-exam]] 48.0%×0.3 |
| 추론 | 79.8 | +1.99 | 실측 | [[critpt]] 14.0%×1.0, [[gpqa-diamond]] 95.0%×1.0, [[humanitys-last-exam]] 48.0%×1.0 |
| 코딩 | 78.3 | +1.89 | 실측 | [[scicode]] 57.0%×1.0 |
| 에이전트 | 68.5 | +1.23 | 실측 | [[gdpval]] 51.0%×1.0, [[tau3-banking]] 33.0%×1.0 |
| 신뢰성 | 56.6 | +0.44 | 실측 | [[aa-omniscience]] 35.0%×1.0 |
| 멀티모달 | 70.8 | +1.39 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 71.1 | +1.41 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 69.3 | +1.29 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
