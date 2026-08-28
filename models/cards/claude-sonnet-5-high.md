---
type: Model
title: Claude Sonnet 5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 68.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.3, z: 0.77, r: 61.6, estimated: true }  # 전문 지식
  reasoning: { s: 47.5, z: 0.66, r: 59.9, estimated: true }  # 추론
  coding: { s: 64.6, z: 0.71, r: 60.7, estimated: true }  # 코딩
  agentic: { s: 68.2, z: 1.23, r: 68.4, estimated: false }  # 에이전트
  trust: { s: 43.7, z: 0.93, r: 63.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 70.6, z: 0.65, r: 59.8, estimated: true }  # 긴문맥
  instruction: { s: 63.7, z: 0.48, r: 57.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Claude Sonnet 5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 68.0 t/s · TTFT 11.56s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.6 | +0.77 | 추정 | (추정) |
| 추론 | 59.9 | +0.66 | 추정 | (추정) |
| 코딩 | 60.7 | +0.71 | 추정 | (추정) |
| 에이전트 | 68.4 | +1.23 | 실측 | [[gdpval]] 45.0%×1.0 |
| 신뢰성 | 63.9 | +0.93 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.8 | +0.65 | 추정 | (추정) |
| 지시 따르기 | 57.2 | +0.48 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
