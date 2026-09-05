---
type: Model
title: GPT-6 Astra (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 48.0
price_blended_usd_1m: 7.7
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 81.7, z: 1.97, r: 79.5, estimated: false }  # 전문 지식
  reasoning: { s: 72.1, z: 1.79, r: 76.8, estimated: false }  # 추론
  coding: { s: 79.6, z: 1.67, r: 75.0, estimated: false }  # 코딩
  agentic: { s: 76.8, z: 1.51, r: 72.6, estimated: false }  # 에이전트
  trust: { s: 34.0, z: 0.45, r: 56.8, estimated: false }  # 신뢰성
  multimodal: { s: 93.1, z: 1.13, r: 67.0, estimated: false }  # 멀티모달
  long_context: { s: 79.8, z: 0.94, r: 64.2, estimated: false }  # 긴문맥
  instruction: { s: 74.5, z: 0.92, r: 63.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GPT-6 Astra (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **48.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 6.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.5 | +1.97 | 실측 | [[aa-omniscience]] 56.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 76.8 | +1.79 | 실측 | [[critpt]] 20.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 75.0 | +1.67 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 72.6 | +1.51 | 실측 | [[gdpval]] 52.0%×1.0, [[tau3-banking]] 37.0%×1.0 |
| 신뢰성 | 56.8 | +0.45 | 실측 | [[aa-omniscience]] 35.0%×1.0 |
| 멀티모달 | 67.0 | +1.13 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 64.2 | +0.94 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 63.8 | +0.92 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
