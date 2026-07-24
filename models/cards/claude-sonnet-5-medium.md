---
type: Model
title: Claude Sonnet 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: 64.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.3, z: 1.04, r: 65.6, estimated: true }  # 전문 지식
  reasoning: { s: 55.7, z: 1.14, r: 67.2, estimated: true }  # 추론
  coding: { s: 73.5, z: 1.14, r: 67.1, estimated: true }  # 코딩
  agentic: { s: 64.5, z: 1.1, r: 66.5, estimated: false }  # 에이전트
  trust: { s: 41.6, z: 0.66, r: 59.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.8, z: 1.09, r: 66.4, estimated: true }  # 긴문맥
  instruction: { s: 73.7, z: 0.86, r: 62.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-24
timestamp: 2026-07-24T00:00:00Z
---

# Claude Sonnet 5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $None/1M · 64.0 t/s · TTFT 2.23s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.6 | +1.04 | 추정 | (추정) |
| 추론 | 67.2 | +1.14 | 추정 | (추정) |
| 코딩 | 67.1 | +1.14 | 추정 | (추정) |
| 에이전트 | 66.5 | +1.1 | 실측 | [[gdpval]] 40.0%×1.0 |
| 신뢰성 | 59.9 | +0.66 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.4 | +1.09 | 추정 | (추정) |
| 지시 따르기 | 62.9 | +0.86 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
