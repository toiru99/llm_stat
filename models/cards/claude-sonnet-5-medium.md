---
type: Model
title: Claude Sonnet 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: 62.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.1, z: 0.7, r: 60.6, estimated: true }  # 전문 지식
  reasoning: { s: 50.0, z: 0.79, r: 61.8, estimated: true }  # 추론
  coding: { s: 64.4, z: 0.73, r: 61.0, estimated: true }  # 코딩
  agentic: { s: 58.8, z: 0.87, r: 63.0, estimated: false }  # 에이전트
  trust: { s: 37.5, z: 0.44, r: 56.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.87, r: 63.0, estimated: true }  # 긴문맥
  instruction: { s: 78.0, z: 1.03, r: 65.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# Claude Sonnet 5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $None/1M · 62.0 t/s · TTFT 2.12s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.6 | +0.7 | 추정 | (추정) |
| 추론 | 61.8 | +0.79 | 추정 | (추정) |
| 코딩 | 61.0 | +0.73 | 추정 | (추정) |
| 에이전트 | 63.0 | +0.87 | 실측 | [[gdpval]] 40.0%×1.0 |
| 신뢰성 | 56.6 | +0.44 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.0 | +0.87 | 추정 | (추정) |
| 지시 따르기 | 65.5 | +1.03 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
