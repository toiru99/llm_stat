---
type: Model
title: GPT-5.6 Luna (low)
creator: OpenAI
license: Proprietary
intelligence_index: 33.0
price_blended_usd_1m: None
output_speed_tps: 174.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.1, z: 1.07, r: 66.1, estimated: false }  # 전문 지식
  reasoning: { s: 44.0, z: 0.48, r: 57.2, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.24, r: 68.5, estimated: false }  # 코딩
  agentic: { s: 41.9, z: 0.21, r: 53.2, estimated: false }  # 에이전트
  trust: { s: 12.6, z: -0.73, r: 39.0, estimated: false }  # 신뢰성
  multimodal: { s: 84.3, z: 0.61, r: 59.1, estimated: false }  # 멀티모달
  long_context: { s: 77.6, z: 0.83, r: 62.5, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.77, r: 61.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-31
timestamp: 2026-07-31T00:00:00Z
---

# GPT-5.6 Luna (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **33.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $None/1M · 174.0 t/s · TTFT 1.53s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.1 | +1.07 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 57.2 | +0.48 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 68.5 | +1.24 | 실측 | [[scicode]] 46.0%×1.0 |
| 에이전트 | 53.2 | +0.21 | 실측 | [[gdpval]] 33.0%×1.0, [[tau3-banking]] 12.0%×1.0 |
| 신뢰성 | 39.0 | -0.73 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | 59.1 | +0.61 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 62.5 | +0.83 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 61.6 | +0.77 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
