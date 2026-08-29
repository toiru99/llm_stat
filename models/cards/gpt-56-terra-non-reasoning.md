---
type: Model
title: GPT-5.6 Terra (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 1.74
output_speed_tps: 87.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 54.7, z: 0.7, r: 60.5, estimated: false }  # 전문 지식
  reasoning: { s: 33.7, z: -0.04, r: 49.4, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.15, r: 67.2, estimated: false }  # 코딩
  agentic: { s: 43.7, z: 0.27, r: 54.0, estimated: false }  # 에이전트
  trust: { s: 3.1, z: -0.99, r: 35.1, estimated: false }  # 신뢰성
  multimodal: { s: 74.3, z: 0.16, r: 52.4, estimated: false }  # 멀티모달
  long_context: { s: 66.3, z: 0.52, r: 57.8, estimated: false }  # 긴문맥
  instruction: { s: 58.8, z: 0.27, r: 54.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# GPT-5.6 Terra (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 87.0 t/s · TTFT 0.87s · 1M ctx` · 가성비 20.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.5 | +0.7 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 49.4 | -0.04 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 67.2 | +1.15 | 실측 | [[scicode]] 45.0%×1.0 |
| 에이전트 | 54.0 | +0.27 | 실측 | [[gdpval]] 37.0%×1.0, [[tau3-banking]] 16.0%×1.0 |
| 신뢰성 | 35.1 | -0.99 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | 52.4 | +0.16 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 57.8 | +0.52 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 54.1 | +0.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
