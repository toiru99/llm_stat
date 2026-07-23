---
type: Model
title: Claude Sonnet 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: 61.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.2, z: 0.46, r: 56.9, estimated: true }  # 전문 지식
  reasoning: { s: 44.4, z: 0.56, r: 58.4, estimated: true }  # 추론
  coding: { s: 60.8, z: 0.61, r: 59.1, estimated: true }  # 코딩
  agentic: { s: 58.1, z: 0.84, r: 62.7, estimated: false }  # 에이전트
  trust: { s: 37.9, z: 0.5, r: 57.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 76.8, z: 0.83, r: 62.4, estimated: true }  # 긴문맥
  instruction: { s: 66.5, z: 0.57, r: 58.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# Claude Sonnet 5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 신뢰성, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $None/1M · 61.0 t/s · TTFT 1.93s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.9 | +0.46 | 추정 | (추정) |
| 추론 | 58.4 | +0.56 | 추정 | (추정) |
| 코딩 | 59.1 | +0.61 | 추정 | (추정) |
| 에이전트 | 62.7 | +0.84 | 실측 | [[gdpval]] 36.0%×1.0 |
| 신뢰성 | 57.6 | +0.5 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.4 | +0.83 | 추정 | (추정) |
| 지시 따르기 | 58.5 | +0.57 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
