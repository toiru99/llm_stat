---
type: Model
title: Claude Sonnet 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: 65.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.0, z: 1.65, r: 74.8, estimated: true }  # 전문 지식
  reasoning: { s: 66.1, z: 1.69, r: 75.4, estimated: true }  # 추론
  coding: { s: 80.4, z: 1.43, r: 71.4, estimated: true }  # 코딩
  agentic: { s: 80.6, z: 1.72, r: 75.8, estimated: false }  # 에이전트
  trust: { s: 34.7, z: 0.35, r: 55.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 95.0, z: 1.37, r: 70.5, estimated: true }  # 긴문맥
  instruction: { s: 83.7, z: 1.28, r: 69.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# Claude Sonnet 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $None/1M · 65.0 t/s · TTFT 37.38s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.8 | +1.65 | 추정 | (추정) |
| 추론 | 75.4 | +1.69 | 추정 | (추정) |
| 코딩 | 71.4 | +1.43 | 추정 | (추정) |
| 에이전트 | 75.8 | +1.72 | 실측 | [[gdpval]] 50.0%×1.0 |
| 신뢰성 | 55.3 | +0.35 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.5 | +1.37 | 추정 | (추정) |
| 지시 따르기 | 69.2 | +1.28 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
