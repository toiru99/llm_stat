---
type: Model
title: GPT-5.6 Luna (max)
creator: OpenAI
license: Proprietary
intelligence_index: 51.0
price_blended_usd_1m: 0.87
output_speed_tps: 217.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.1, z: 1.68, r: 75.2, estimated: false }  # 전문 지식
  reasoning: { s: 77.1, z: 2.31, r: 84.6, estimated: false }  # 추론
  coding: { s: 88.3, z: 1.79, r: 76.8, estimated: false }  # 코딩
  agentic: { s: 80.0, z: 1.71, r: 75.7, estimated: false }  # 에이전트
  trust: { s: 10.6, z: -0.81, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: 92.8, z: 1.02, r: 65.3, estimated: false }  # 멀티모달
  long_context: { s: 97.4, z: 1.45, r: 71.8, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.21, r: 68.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-14
timestamp: 2026-07-14T00:00:00Z
---

# GPT-5.6 Luna (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.0 · 출력 $6.0 · 혼합 $0.87/1M · 217.0 t/s · TTFT 111.65s · 1M ctx` · 가성비 58.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.2 | +1.68 | 실측 | [[aa-omniscience]] 42.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 84.6 | +2.31 | 실측 | [[critpt]] 21.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 76.8 | +1.79 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 75.7 | +1.71 | 실측 | [[gdpval]] 55.0%×1.0, [[itbench]] 40.0%×1.0, [[tau3-banking]] 27.0%×1.0 |
| 신뢰성 | 37.8 | -0.81 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 65.3 | +1.02 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 71.8 | +1.45 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 68.2 | +1.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
