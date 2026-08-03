---
type: Model
title: Claude Sonnet 5 (low)
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
  knowledge: { s: 47.6, z: 0.3, r: 54.4, estimated: true }  # 전문 지식
  reasoning: { s: 38.2, z: 0.18, r: 52.8, estimated: true }  # 추론
  coding: { s: 59.2, z: 0.51, r: 57.6, estimated: true }  # 코딩
  agentic: { s: 52.9, z: 0.64, r: 59.6, estimated: false }  # 에이전트
  trust: { s: 41.4, z: 0.63, r: 59.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 70.4, z: 0.62, r: 59.3, estimated: true }  # 긴문맥
  instruction: { s: 64.7, z: 0.48, r: 57.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# Claude Sonnet 5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $None/1M · 64.0 t/s · TTFT 1.48s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.4 | +0.3 | 추정 | (추정) |
| 추론 | 52.8 | +0.18 | 추정 | (추정) |
| 코딩 | 57.6 | +0.51 | 추정 | (추정) |
| 에이전트 | 59.6 | +0.64 | 실측 | [[gdpval]] 36.0%×1.0 |
| 신뢰성 | 59.5 | +0.63 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.3 | +0.62 | 추정 | (추정) |
| 지시 따르기 | 57.2 | +0.48 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
