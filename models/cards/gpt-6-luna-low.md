---
type: Model
title: GPT-6 Luna (low)
creator: OpenAI
license: Proprietary
intelligence_index: 21.0
price_blended_usd_1m: 0.077
output_speed_tps: 124.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.4, z: 0.56, r: 58.4, estimated: false }  # 전문 지식
  reasoning: { s: 20.5, z: -0.72, r: 39.2, estimated: false }  # 추론
  coding: { s: 66.7, z: 1.06, r: 65.9, estimated: false }  # 코딩
  agentic: { s: 37.3, z: -0.04, r: 49.4, estimated: false }  # 에이전트
  trust: { s: 14.4, z: -0.55, r: 41.7, estimated: false }  # 신뢰성
  multimodal: { s: 75.3, z: 0.22, r: 53.4, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.97, r: 64.5, estimated: false }  # 긴문맥
  instruction: { s: 64.7, z: 0.45, r: 56.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# GPT-6 Luna (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **21.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 신뢰성, 추론

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 124.0 t/s · TTFT 2.0s · 1M ctx` · 가성비 272.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.4 | +0.56 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 39.2 | -0.72 | 실측 | [[critpt]] 3.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 65.9 | +1.06 | 실측 | [[scicode]] 47.0%×1.0 |
| 에이전트 | 49.4 | -0.04 | 실측 | [[gdpval]] 25.0%×1.0 |
| 신뢰성 | 41.7 | -0.55 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | 53.4 | +0.22 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 64.5 | +0.97 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 56.7 | +0.45 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
