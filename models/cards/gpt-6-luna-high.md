---
type: Model
title: GPT-6 Luna (high)
creator: OpenAI
license: Proprietary
intelligence_index: 32.0
price_blended_usd_1m: 0.077
output_speed_tps: 124.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.7, z: 0.9, r: 63.5, estimated: false }  # 전문 지식
  reasoning: { s: 50.1, z: 0.63, r: 59.5, estimated: false }  # 추론
  coding: { s: 71.7, z: 1.23, r: 68.4, estimated: false }  # 코딩
  agentic: { s: 59.7, z: 0.82, r: 62.3, estimated: false }  # 에이전트
  trust: { s: 14.4, z: -0.55, r: 41.7, estimated: false }  # 신뢰성
  multimodal: { s: 80.8, z: 0.5, r: 57.5, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.14, r: 67.1, estimated: false }  # 긴문맥
  instruction: { s: 75.7, z: 0.9, r: 63.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# GPT-6 Luna (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **32.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 124.0 t/s · TTFT 15.18s · 1M ctx` · 가성비 415.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.5 | +0.9 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 59.5 | +0.63 | 실측 | [[critpt]] 15.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 68.4 | +1.23 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 62.3 | +0.82 | 실측 | [[gdpval]] 40.0%×1.0 |
| 신뢰성 | 41.7 | -0.55 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | 57.5 | +0.5 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 67.1 | +1.14 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 63.5 | +0.9 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
