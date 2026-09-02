---
type: Model
title: Claude Sonnet 5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 61.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.3, z: 1.04, r: 65.7, estimated: true }  # 전문 지식
  reasoning: { s: 59.4, z: 1.25, r: 68.7, estimated: true }  # 추론
  coding: { s: 71.3, z: 1.04, r: 65.6, estimated: true }  # 코딩
  agentic: { s: 66.2, z: 1.13, r: 67.0, estimated: false }  # 에이전트
  trust: { s: 39.8, z: 0.74, r: 61.1, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.5, z: 1.06, r: 65.9, estimated: true }  # 긴문맥
  instruction: { s: 69.7, z: 0.71, r: 60.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Claude Sonnet 5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 61.0 t/s · TTFT 8.27s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.7 | +1.04 | 추정 | (추정) |
| 추론 | 68.7 | +1.25 | 추정 | (추정) |
| 코딩 | 65.6 | +1.04 | 추정 | (추정) |
| 에이전트 | 67.0 | +1.13 | 실측 | [[gdpval]] 45.0%×1.0 |
| 신뢰성 | 61.1 | +0.74 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.9 | +1.06 | 추정 | (추정) |
| 지시 따르기 | 60.7 | +0.71 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
