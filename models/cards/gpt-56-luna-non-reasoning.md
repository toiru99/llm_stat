---
type: Model
title: GPT-5.6 Luna (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 27.0
price_blended_usd_1m: 0.174
output_speed_tps: 108.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 43.4, z: 0.14, r: 52.0, estimated: false }  # 전문 지식
  reasoning: { s: 25.3, z: -0.47, r: 43.0, estimated: false }  # 추론
  coding: { s: 66.7, z: 0.8, r: 62.0, estimated: false }  # 코딩
  agentic: { s: 31.8, z: -0.2, r: 47.0, estimated: false }  # 에이전트
  trust: { s: 23.7, z: -0.01, r: 49.8, estimated: false }  # 신뢰성
  multimodal: { s: 64.3, z: -0.33, r: 45.1, estimated: false }  # 멀티모달
  long_context: { s: 47.0, z: -0.07, r: 48.9, estimated: false }  # 긴문맥
  instruction: { s: 50.4, z: -0.08, r: 48.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# GPT-5.6 Luna (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **27.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 108.0 t/s · TTFT 0.83s · 1M ctx` · 가성비 155.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.0 | +0.14 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 65.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 43.0 | -0.47 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 65.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 62.0 | +0.8 | 실측 | [[scicode]] 40.0%×1.0 |
| 에이전트 | 47.0 | -0.2 | 실측 | [[gdpval]] 29.0%×1.0, [[tau3-banking]] 10.0%×1.0 |
| 신뢰성 | 49.8 | -0.01 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | 45.1 | -0.33 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 48.9 | -0.07 | 실측 | [[aa-lcr]] 39.0%×1.0 |
| 지시 따르기 | 48.8 | -0.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
