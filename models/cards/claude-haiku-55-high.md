---
type: Model
title: Claude Haiku 5.5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 29.874315467743
price_blended_usd_1m: 0.077
output_speed_tps: 225.39387155157502
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.4, z: 0.11, r: 51.7, estimated: false }  # 전문 지식
  reasoning: { s: 50.7, z: 0.76, r: 61.4, estimated: false }  # 추론
  coding: { s: 68.8, z: 0.99, r: 64.8, estimated: false }  # 코딩
  agentic: { s: 80.5, z: 1.24, r: 68.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.2, z: 1.01, r: 65.1, estimated: false }  # 긴문맥
  instruction: { s: 59.5, z: 0.25, r: 53.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude Haiku 5.5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **29.874315467743**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 225.39387155157502 t/s · TTFT 18.533632610576284s · 1M ctx` · 가성비 388.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.7 | +0.11 | 실측 | [[humanitys-last-exam]] 37.25671918443%×0.3 |
| 추론 | 61.4 | +0.76 | 실측 | [[critpt]] 18.5714285714286%×1.0, [[humanitys-last-exam]] 37.25671918443%×1.0 |
| 코딩 | 64.8 | +0.99 | 실측 | [[scicode]] 48.7268518518519%×1.0 |
| 에이전트 | 68.7 | +1.24 | 실측 | [[gdpval]] 1423.86%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.1 | +1.01 | 실측 | [[aa-lcr]] 77.3333333333333%×1.0 |
| 지시 따르기 | 53.7 | +0.25 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
