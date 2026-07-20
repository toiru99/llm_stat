---
type: Model
title: Claude Sonnet 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 73.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 72.3, z: 1.53, r: 73.0, estimated: true }  # 전문 지식
  reasoning: { s: 61.0, z: 1.44, r: 71.6, estimated: true }  # 추론
  coding: { s: 79.3, z: 1.39, r: 70.8, estimated: true }  # 코딩
  agentic: { s: 81.0, z: 1.74, r: 76.0, estimated: false }  # 에이전트
  trust: { s: 43.8, z: 0.76, r: 61.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.5, z: 1.36, r: 70.3, estimated: true }  # 긴문맥
  instruction: { s: 69.9, z: 0.72, r: 60.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-20
timestamp: 2026-07-20T00:00:00Z
---

# Claude Sonnet 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 73.0 t/s · TTFT 20.42s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.0 | +1.53 | 추정 | (추정) |
| 추론 | 71.6 | +1.44 | 추정 | (추정) |
| 코딩 | 70.8 | +1.39 | 추정 | (추정) |
| 에이전트 | 76.0 | +1.74 | 실측 | [[gdpval]] 51.0%×1.0 |
| 신뢰성 | 61.4 | +0.76 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.3 | +1.36 | 추정 | (추정) |
| 지시 따르기 | 60.8 | +0.72 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
