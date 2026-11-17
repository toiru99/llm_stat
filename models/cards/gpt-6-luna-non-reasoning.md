---
type: Model
title: GPT-6 Luna (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 9.44244373619813
price_blended_usd_1m: 0.077
output_speed_tps: 90.80235507041154
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 10.3, z: -1.78, r: 23.2, estimated: false }  # 전문 지식
  reasoning: { s: 6.7, z: -1.42, r: 28.7, estimated: false }  # 추론
  coding: { s: 59.4, z: 0.67, r: 60.1, estimated: false }  # 코딩
  agentic: { s: 64.1, z: 0.68, r: 60.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.7, z: -0.39, r: 44.2, estimated: false }  # 멀티모달
  long_context: { s: 44.7, z: -0.25, r: 46.2, estimated: false }  # 긴문맥
  instruction: { s: 54.9, z: 0.05, r: 50.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-6 Luna (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **9.44244373619813**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 90.80235507041154 t/s · TTFT 1.5559082282052408s · 1M ctx` · 가성비 122.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 23.2 | -1.78 | 실측 | [[humanitys-last-exam]] 8.57275254865616%×0.3 |
| 추론 | 28.7 | -1.42 | 실측 | [[critpt]] 1.1428571428571401%×1.0, [[humanitys-last-exam]] 8.57275254865616%×1.0 |
| 코딩 | 60.1 | +0.67 | 실측 | [[scicode]] 43.0555555555556%×1.0 |
| 에이전트 | 60.1 | +0.68 | 실측 | [[gdpval]] 1051.64%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.2 | -0.39 | 실측 | [[mmmu-pro]] 62.080924855491304%×1.0 |
| 긴문맥 | 46.2 | -0.25 | 실측 | [[aa-lcr]] 39.6666666666667%×1.0 |
| 지시 따르기 | 50.8 | +0.05 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
