---
type: Model
title: Claude Sonnet 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 71.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.1, z: 1.16, r: 67.4, estimated: true }  # 전문 지식
  reasoning: { s: 51.9, z: 0.86, r: 62.9, estimated: true }  # 추론
  coding: { s: 72.7, z: 1.05, r: 65.8, estimated: true }  # 코딩
  agentic: { s: 73.5, z: 1.51, r: 72.6, estimated: false }  # 에이전트
  trust: { s: 47.4, z: 0.85, r: 62.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.7, z: 1.15, r: 67.3, estimated: true }  # 긴문맥
  instruction: { s: 61.4, z: 0.33, r: 55.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Claude Sonnet 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 71.0 t/s · TTFT 50.22s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.4 | +1.16 | 추정 | (추정) |
| 추론 | 62.9 | +0.86 | 추정 | (추정) |
| 코딩 | 65.8 | +1.05 | 추정 | (추정) |
| 에이전트 | 72.6 | +1.51 | 실측 | [[gdpval]] 50.0%×1.0 |
| 신뢰성 | 62.8 | +0.85 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.3 | +1.15 | 추정 | (추정) |
| 지시 따르기 | 55.0 | +0.33 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
