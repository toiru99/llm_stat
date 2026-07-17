---
type: Model
title: Claude Sonnet 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 60.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.3, z: 0.66, r: 59.9, estimated: true }  # 전문 지식
  reasoning: { s: 45.4, z: 0.62, r: 59.2, estimated: true }  # 추론
  coding: { s: 63.6, z: 0.73, r: 60.9, estimated: true }  # 코딩
  agentic: { s: 57.1, z: 0.81, r: 62.1, estimated: false }  # 에이전트
  trust: { s: 27.1, z: -0.04, r: 49.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.4, z: 0.88, r: 63.2, estimated: true }  # 긴문맥
  instruction: { s: 72.1, z: 0.81, r: 62.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-17
timestamp: 2026-07-17T00:00:00Z
---

# Claude Sonnet 5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 60.0 t/s · TTFT 1.98s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.9 | +0.66 | 추정 | (추정) |
| 추론 | 59.2 | +0.62 | 추정 | (추정) |
| 코딩 | 60.9 | +0.73 | 추정 | (추정) |
| 에이전트 | 62.1 | +0.81 | 실측 | [[gdpval]] 36.0%×1.0 |
| 신뢰성 | 49.4 | -0.04 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.2 | +0.88 | 추정 | (추정) |
| 지시 따르기 | 62.2 | +0.81 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
