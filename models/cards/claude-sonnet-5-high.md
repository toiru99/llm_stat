---
type: Model
title: Claude Sonnet 5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 63.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.7, z: 0.69, r: 60.4, estimated: true }  # 전문 지식
  reasoning: { s: 49.7, z: 0.74, r: 61.1, estimated: true }  # 추론
  coding: { s: 65.7, z: 0.79, r: 61.8, estimated: true }  # 코딩
  agentic: { s: 66.2, z: 1.11, r: 66.7, estimated: false }  # 에이전트
  trust: { s: 61.2, z: 1.73, r: 75.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 77.5, z: 0.83, r: 62.5, estimated: true }  # 긴문맥
  instruction: { s: 84.2, z: 1.31, r: 69.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Claude Sonnet 5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 63.0 t/s · TTFT 7.29s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.4 | +0.69 | 추정 | (추정) |
| 추론 | 61.1 | +0.74 | 추정 | (추정) |
| 코딩 | 61.8 | +0.79 | 추정 | (추정) |
| 에이전트 | 66.7 | +1.11 | 실측 | [[gdpval]] 45.0%×1.0 |
| 신뢰성 | 75.9 | +1.73 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.5 | +0.83 | 추정 | (추정) |
| 지시 따르기 | 69.6 | +1.31 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
