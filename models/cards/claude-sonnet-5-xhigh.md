---
type: Model
title: Claude Sonnet 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 70.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.4, z: 1.33, r: 69.9, estimated: true }  # 전문 지식
  reasoning: { s: 56.6, z: 1.12, r: 66.8, estimated: true }  # 추론
  coding: { s: 75.5, z: 1.17, r: 67.5, estimated: true }  # 코딩
  agentic: { s: 75.8, z: 1.53, r: 72.9, estimated: false }  # 에이전트
  trust: { s: 47.4, z: 1.1, r: 66.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.5, z: 1.17, r: 67.6, estimated: true }  # 긴문맥
  instruction: { s: 67.9, z: 0.66, r: 59.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Claude Sonnet 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 70.0 t/s · TTFT 34.65s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.9 | +1.33 | 추정 | (추정) |
| 추론 | 66.8 | +1.12 | 추정 | (추정) |
| 코딩 | 67.5 | +1.17 | 추정 | (추정) |
| 에이전트 | 72.9 | +1.53 | 실측 | [[gdpval]] 50.0%×1.0 |
| 신뢰성 | 66.5 | +1.1 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.6 | +1.17 | 추정 | (추정) |
| 지시 따르기 | 59.8 | +0.66 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
