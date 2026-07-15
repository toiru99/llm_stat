---
type: Model
title: GPT-5.6 Sol (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 41.0
price_blended_usd_1m: 4.35
output_speed_tps: 35.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 70.5, z: 1.46, r: 71.9, estimated: false }  # 전문 지식
  reasoning: { s: 42.2, z: 0.46, r: 56.9, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.37, r: 70.5, estimated: false }  # 코딩
  agentic: { s: 59.2, z: 0.9, r: 63.5, estimated: false }  # 에이전트
  trust: { s: 9.4, z: -0.87, r: 37.0, estimated: false }  # 신뢰성
  multimodal: { s: 82.6, z: 0.53, r: 58.0, estimated: false }  # 멀티모달
  long_context: { s: 72.4, z: 0.71, r: 60.6, estimated: false }  # 긴문맥
  instruction: { s: 67.6, z: 0.63, r: 59.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-15
timestamp: 2026-07-15T00:00:00Z
---

# GPT-5.6 Sol (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **41.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 35.0 t/s · TTFT 1.68s · 1M ctx` · 가성비 9.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.9 | +1.46 | 실측 | [[aa-omniscience]] 48.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 56.9 | +0.46 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 70.5 | +1.37 | 실측 | [[scicode]] 47.0%×1.0 |
| 에이전트 | 63.5 | +0.9 | 실측 | [[gdpval]] 44.0%×1.0, [[tau3-banking]] 16.0%×1.0 |
| 신뢰성 | 37.0 | -0.87 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 58.0 | +0.53 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 60.6 | +0.71 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 59.5 | +0.63 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
