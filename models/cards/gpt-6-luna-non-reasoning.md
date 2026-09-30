---
type: Model
title: GPT-6 Luna (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 18.0
price_blended_usd_1m: 0.077
output_speed_tps: 139.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.8, z: -0.12, r: 48.3, estimated: false }  # 전문 지식
  reasoning: { s: 8.2, z: -1.28, r: 30.8, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.83, r: 62.4, estimated: false }  # 코딩
  agentic: { s: 40.3, z: 0.08, r: 51.1, estimated: false }  # 에이전트
  trust: { s: 19.6, z: -0.31, r: 45.3, estimated: false }  # 신뢰성
  multimodal: { s: 52.1, z: -0.94, r: 35.9, estimated: false }  # 멀티모달
  long_context: { s: 44.9, z: -0.2, r: 47.1, estimated: false }  # 긴문맥
  instruction: { s: 45.5, z: -0.35, r: 44.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# GPT-6 Luna (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 139.0 t/s · TTFT 0.78s · 1M ctx` · 가성비 233.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.3 | -0.12 | 실측 | [[aa-omniscience]] 32.0%×1.0, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 30.8 | -1.28 | 실측 | [[critpt]] 1.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 62.4 | +0.83 | 실측 | [[scicode]] 43.0%×1.0 |
| 에이전트 | 51.1 | +0.08 | 실측 | [[gdpval]] 27.0%×1.0 |
| 신뢰성 | 45.3 | -0.31 | 실측 | [[aa-omniscience]] 21.0%×1.0 |
| 멀티모달 | 35.9 | -0.94 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 47.1 | -0.2 | 실측 | [[aa-lcr]] 40.0%×1.0 |
| 지시 따르기 | 44.8 | -0.35 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
