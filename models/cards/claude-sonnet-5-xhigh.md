---
type: Model
title: Claude Sonnet 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 78.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 60.1, z: 0.9, r: 63.5, estimated: true }  # 전문 지식
  reasoning: { s: 52.0, z: 0.82, r: 62.3, estimated: true }  # 추론
  coding: { s: 65.5, z: 0.71, r: 60.6, estimated: true }  # 코딩
  agentic: { s: 74.6, z: 1.5, r: 72.5, estimated: false }  # 에이전트
  trust: { s: 50.7, z: 1.04, r: 65.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 74.9, z: 0.74, r: 61.1, estimated: true }  # 긴문맥
  instruction: { s: 70.7, z: 0.67, r: 60.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-16
timestamp: 2026-08-16T00:00:00Z
---

# Claude Sonnet 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 78.0 t/s · TTFT 33.41s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.5 | +0.9 | 추정 | (추정) |
| 추론 | 62.3 | +0.82 | 추정 | (추정) |
| 코딩 | 60.6 | +0.71 | 추정 | (추정) |
| 에이전트 | 72.5 | +1.5 | 실측 | [[gdpval]] 50.0%×1.0 |
| 신뢰성 | 65.6 | +1.04 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.1 | +0.74 | 추정 | (추정) |
| 지시 따르기 | 60.1 | +0.67 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
