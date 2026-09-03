---
type: Model
title: GPT-5.6 Terra (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 1.74
output_speed_tps: 78.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 53.5, z: 0.64, r: 59.5, estimated: false }  # 전문 지식
  reasoning: { s: 33.3, z: -0.07, r: 48.9, estimated: false }  # 추론
  coding: { s: 72.6, z: 1.07, r: 66.1, estimated: false }  # 코딩
  agentic: { s: 42.6, z: 0.2, r: 53.0, estimated: false }  # 에이전트
  trust: { s: 3.1, z: -1.02, r: 34.7, estimated: false }  # 신뢰성
  multimodal: { s: 73.2, z: 0.14, r: 52.0, estimated: false }  # 멀티모달
  long_context: { s: 66.3, z: 0.49, r: 57.3, estimated: false }  # 긴문맥
  instruction: { s: 65.6, z: 0.53, r: 57.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# GPT-5.6 Terra (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 78.0 t/s · TTFT 0.78s · 1M ctx` · 가성비 20.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.5 | +0.64 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 48.9 | -0.07 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 66.1 | +1.07 | 실측 | [[scicode]] 45.0%×1.0 |
| 에이전트 | 53.0 | +0.2 | 실측 | [[gdpval]] 37.0%×1.0, [[tau3-banking]] 16.0%×1.0 |
| 신뢰성 | 34.7 | -1.02 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | 52.0 | +0.14 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 57.3 | +0.49 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 57.9 | +0.53 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
