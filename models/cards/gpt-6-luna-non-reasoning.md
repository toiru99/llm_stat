---
type: Model
title: GPT-6 Luna (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 18.0
price_blended_usd_1m: 0.077
output_speed_tps: 121.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.8, z: -0.15, r: 47.7, estimated: false }  # 전문 지식
  reasoning: { s: 8.2, z: -1.31, r: 30.3, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.75, r: 61.2, estimated: false }  # 코딩
  agentic: { s: 56.3, z: 0.74, r: 61.1, estimated: false }  # 에이전트
  trust: { s: 19.6, z: -0.35, r: 44.8, estimated: false }  # 신뢰성
  multimodal: { s: 64.4, z: -0.39, r: 44.2, estimated: false }  # 멀티모달
  long_context: { s: 44.9, z: -0.24, r: 46.4, estimated: false }  # 긴문맥
  instruction: { s: 48.7, z: -0.25, r: 46.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# GPT-6 Luna (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 121.0 t/s · TTFT 0.91s · 1M ctx` · 가성비 233.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.7 | -0.15 | 실측 | [[aa-omniscience]] 32.0%×1.0, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 30.3 | -1.31 | 실측 | [[critpt]] 1.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 61.2 | +0.75 | 실측 | [[scicode]] 43.0%×1.0 |
| 에이전트 | 61.1 | +0.74 | 실측 | [[gdpval]] 1052.0%×1.0 |
| 신뢰성 | 44.8 | -0.35 | 실측 | [[aa-omniscience]] 21.0%×1.0 |
| 멀티모달 | 44.2 | -0.39 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 46.4 | -0.24 | 실측 | [[aa-lcr]] 40.0%×1.0 |
| 지시 따르기 | 46.3 | -0.25 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
