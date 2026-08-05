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
  knowledge: { s: 60.3, z: 0.89, r: 63.4, estimated: true }  # 전문 지식
  reasoning: { s: 49.9, z: 0.77, r: 61.6, estimated: true }  # 추론
  coding: { s: 64.1, z: 0.71, r: 60.6, estimated: true }  # 코딩
  agentic: { s: 73.5, z: 1.44, r: 71.6, estimated: false }  # 에이전트
  trust: { s: 42.3, z: 0.65, r: 59.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.1, z: 1.08, r: 66.2, estimated: true }  # 긴문맥
  instruction: { s: 77.2, z: 0.99, r: 64.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-05
timestamp: 2026-08-05T00:00:00Z
---

# Claude Sonnet 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 73.0 t/s · TTFT 27.52s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.4 | +0.89 | 추정 | (추정) |
| 추론 | 61.6 | +0.77 | 추정 | (추정) |
| 코딩 | 60.6 | +0.71 | 추정 | (추정) |
| 에이전트 | 71.6 | +1.44 | 실측 | [[gdpval]] 50.0%×1.0 |
| 신뢰성 | 59.7 | +0.65 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.2 | +1.08 | 추정 | (추정) |
| 지시 따르기 | 64.9 | +0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
