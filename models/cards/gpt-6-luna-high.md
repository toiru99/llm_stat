---
type: Model
title: GPT-6 Luna (high)
creator: OpenAI
license: Proprietary
intelligence_index: 32.0
price_blended_usd_1m: 0.077
output_speed_tps: 149.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.7, z: 0.94, r: 64.1, estimated: false }  # 전문 지식
  reasoning: { s: 50.1, z: 0.67, r: 60.1, estimated: false }  # 추론
  coding: { s: 71.7, z: 1.27, r: 69.0, estimated: false }  # 코딩
  agentic: { s: 59.7, z: 0.84, r: 62.6, estimated: false }  # 에이전트
  trust: { s: 14.4, z: -0.52, r: 42.1, estimated: false }  # 신뢰성
  multimodal: { s: 80.8, z: 0.52, r: 57.8, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.05, r: 65.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# GPT-6 Luna (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **32.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 149.0 t/s · TTFT 7.13s · 1M ctx` · 가성비 415.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.1 | +0.94 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 60.1 | +0.67 | 실측 | [[critpt]] 15.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 69.0 | +1.27 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 62.6 | +0.84 | 실측 | [[gdpval]] 40.0%×1.0 |
| 신뢰성 | 42.1 | -0.52 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | 57.8 | +0.52 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 65.7 | +1.05 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
