---
type: Model
title: GPT-6 Luna (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 18.0
price_blended_usd_1m: 0.077
output_speed_tps: 141.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.8, z: -0.09, r: 48.6, estimated: false }  # 전문 지식
  reasoning: { s: 8.2, z: -1.29, r: 30.6, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.86, r: 62.9, estimated: false }  # 코딩
  agentic: { s: 40.3, z: 0.09, r: 51.4, estimated: false }  # 에이전트
  trust: { s: 19.6, z: -0.28, r: 45.7, estimated: false }  # 신뢰성
  multimodal: { s: 52.1, z: -0.92, r: 36.2, estimated: false }  # 멀티모달
  long_context: { s: 44.9, z: -0.17, r: 47.4, estimated: false }  # 긴문맥
  instruction: { s: 43.2, z: -0.44, r: 43.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# GPT-6 Luna (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 141.0 t/s · TTFT 0.71s · 1M ctx` · 가성비 233.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.6 | -0.09 | 실측 | [[aa-omniscience]] 32.0%×1.0, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 30.6 | -1.29 | 실측 | [[critpt]] 1.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 62.9 | +0.86 | 실측 | [[scicode]] 43.0%×1.0 |
| 에이전트 | 51.4 | +0.09 | 실측 | [[gdpval]] 27.0%×1.0 |
| 신뢰성 | 45.7 | -0.28 | 실측 | [[aa-omniscience]] 21.0%×1.0 |
| 멀티모달 | 36.2 | -0.92 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 47.4 | -0.17 | 실측 | [[aa-lcr]] 40.0%×1.0 |
| 지시 따르기 | 43.5 | -0.44 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
