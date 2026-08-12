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
  knowledge: { s: 60.4, z: 0.94, r: 64.1, estimated: true }  # 전문 지식
  reasoning: { s: 50.8, z: 0.79, r: 61.8, estimated: true }  # 추론
  coding: { s: 66.6, z: 0.8, r: 62.0, estimated: true }  # 코딩
  agentic: { s: 74.6, z: 1.54, r: 73.1, estimated: false }  # 에이전트
  trust: { s: 50.7, z: 1.12, r: 66.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.1, z: 1.05, r: 65.8, estimated: true }  # 긴문맥
  instruction: { s: 74.9, z: 0.88, r: 63.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Claude Sonnet 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 코딩, 추론

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 70.0 t/s · TTFT 29.16s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.1 | +0.94 | 추정 | (추정) |
| 추론 | 61.8 | +0.79 | 추정 | (추정) |
| 코딩 | 62.0 | +0.8 | 추정 | (추정) |
| 에이전트 | 73.1 | +1.54 | 실측 | [[gdpval]] 50.0%×1.0 |
| 신뢰성 | 66.9 | +1.12 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.8 | +1.05 | 추정 | (추정) |
| 지시 따르기 | 63.1 | +0.88 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
