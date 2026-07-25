---
type: Model
title: GPT-5.6 Luna (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 27.0
price_blended_usd_1m: None
output_speed_tps: 158.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 43.9, z: 0.13, r: 51.9, estimated: false }  # 전문 지식
  reasoning: { s: 25.7, z: -0.44, r: 43.5, estimated: false }  # 추론
  coding: { s: 66.7, z: 0.83, r: 62.4, estimated: false }  # 코딩
  agentic: { s: 35.0, z: -0.05, r: 49.2, estimated: false }  # 에이전트
  trust: { s: 29.9, z: 0.08, r: 51.2, estimated: false }  # 신뢰성
  multimodal: { s: 64.3, z: -0.35, r: 44.8, estimated: false }  # 멀티모달
  long_context: { s: 47.4, z: -0.06, r: 49.1, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.1, r: 48.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# GPT-5.6 Luna (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **27.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $1.0 · 출력 $6.0 · 혼합 $None/1M · 158.0 t/s · TTFT 0.68s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.9 | +0.13 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 65.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 43.5 | -0.44 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 65.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 62.4 | +0.83 | 실측 | [[scicode]] 40.0%×1.0 |
| 에이전트 | 49.2 | -0.05 | 실측 | [[gdpval]] 29.0%×1.0, [[tau3-banking]] 9.0%×1.0 |
| 신뢰성 | 51.2 | +0.08 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | 44.8 | -0.35 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 49.1 | -0.06 | 실측 | [[aa-lcr]] 36.0%×1.0 |
| 지시 따르기 | 48.5 | -0.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
