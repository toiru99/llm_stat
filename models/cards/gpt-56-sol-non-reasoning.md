---
type: Model
title: GPT-5.6 Sol (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 33.0
price_blended_usd_1m: 3.08
output_speed_tps: 67.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 66.8, z: 1.25, r: 68.7, estimated: false }  # 전문 지식
  reasoning: { s: 41.1, z: 0.29, r: 54.4, estimated: false }  # 추론
  coding: { s: 57.9, z: 0.91, r: 63.6, estimated: true }  # 코딩
  agentic: { s: 51.0, z: 0.52, r: 57.7, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: 79.2, z: 0.45, r: 56.7, estimated: false }  # 멀티모달
  long_context: { s: 69.7, z: 0.63, r: 59.5, estimated: false }  # 긴문맥
  instruction: { s: 60.3, z: 0.32, r: 54.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GPT-5.6 Sol (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **33.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 67.0 t/s · TTFT 0.97s · 1M ctx` · 가성비 10.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.7 | +1.25 | 실측 | [[aa-omniscience]] 49.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 54.4 | +0.29 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 63.6 | +0.91 | 추정 | (추정) |
| 에이전트 | 57.7 | +0.52 | 실측 | [[gdpval]] 40.0%×1.0, [[tau3-banking]] 20.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 56.7 | +0.45 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 59.5 | +0.63 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 54.8 | +0.32 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
