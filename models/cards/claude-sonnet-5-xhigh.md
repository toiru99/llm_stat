---
type: Model
title: Claude Sonnet 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 67.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.5, z: 1.03, r: 65.4, estimated: true }  # 전문 지식
  reasoning: { s: 54.1, z: 0.96, r: 64.4, estimated: true }  # 추론
  coding: { s: 68.5, z: 0.9, r: 63.5, estimated: true }  # 코딩
  agentic: { s: 73.5, z: 1.4, r: 71.0, estimated: false }  # 에이전트
  trust: { s: 56.3, z: 1.5, r: 72.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.1, z: 1.22, r: 68.2, estimated: true }  # 긴문맥
  instruction: { s: 83.7, z: 1.28, r: 69.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Claude Sonnet 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 추론, 코딩

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 67.0 t/s · TTFT 20.56s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.4 | +1.03 | 추정 | (추정) |
| 추론 | 64.4 | +0.96 | 추정 | (추정) |
| 코딩 | 63.5 | +0.9 | 추정 | (추정) |
| 에이전트 | 71.0 | +1.4 | 실측 | [[gdpval]] 50.0%×1.0 |
| 신뢰성 | 72.4 | +1.5 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.2 | +1.22 | 추정 | (추정) |
| 지시 따르기 | 69.2 | +1.28 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
