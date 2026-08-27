---
type: Model
title: GPT-5.6 Sol (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 42.0
price_blended_usd_1m: 3.08
output_speed_tps: 73.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 68.4, z: 1.28, r: 69.3, estimated: false }  # 전문 지식
  reasoning: { s: 42.1, z: 0.3, r: 54.6, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.2, r: 68.1, estimated: false }  # 코딩
  agentic: { s: 52.4, z: 0.58, r: 58.7, estimated: false }  # 에이전트
  trust: { s: 5.8, z: -0.97, r: 35.5, estimated: false }  # 신뢰성
  multimodal: { s: 81.4, z: 0.42, r: 56.3, estimated: false }  # 멀티모달
  long_context: { s: 68.7, z: 0.53, r: 58.0, estimated: false }  # 긴문맥
  instruction: { s: 58.9, z: 0.18, r: 52.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# GPT-5.6 Sol (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 73.0 t/s · TTFT 1.41s · 1M ctx` · 가성비 13.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.3 | +1.28 | 실측 | [[aa-omniscience]] 49.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 54.6 | +0.3 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 68.1 | +1.2 | 실측 | [[scicode]] 47.0%×1.0 |
| 에이전트 | 58.7 | +0.58 | 실측 | [[gdpval]] 44.0%×1.0, [[tau3-banking]] 20.0%×1.0 |
| 신뢰성 | 35.5 | -0.97 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 56.3 | +0.42 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 58.0 | +0.53 | 실측 | [[aa-lcr]] 57.0%×1.0 |
| 지시 따르기 | 52.7 | +0.18 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
