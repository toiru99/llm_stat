---
type: Model
title: GPT-5.6 Terra (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: None
output_speed_tps: 105.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 55.9, z: 0.69, r: 60.4, estimated: false }  # 전문 지식
  reasoning: { s: 34.3, z: -0.0, r: 50.0, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.18, r: 67.6, estimated: false }  # 코딩
  agentic: { s: 46.9, z: 0.41, r: 56.1, estimated: false }  # 에이전트
  trust: { s: 5.7, z: -1.05, r: 34.2, estimated: false }  # 신뢰성
  multimodal: { s: 74.3, z: 0.13, r: 52.0, estimated: false }  # 멀티모달
  long_context: { s: 65.8, z: 0.49, r: 57.3, estimated: false }  # 긴문맥
  instruction: { s: 66.7, z: 0.56, r: 58.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# GPT-5.6 Terra (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $None/1M · 105.0 t/s · TTFT 0.78s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.4 | +0.69 | 실측 | [[aa-omniscience]] 36.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 50.0 | +-0.0 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 67.6 | +1.18 | 실측 | [[scicode]] 45.0%×1.0 |
| 에이전트 | 56.1 | +0.41 | 실측 | [[gdpval]] 37.0%×1.0, [[tau3-banking]] 13.0%×1.0 |
| 신뢰성 | 34.2 | -1.05 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | 52.0 | +0.13 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 57.3 | +0.49 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 58.4 | +0.56 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
