---
type: Model
title: Claude Sonnet 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 71.0
context_window: 1000000
radar:
  knowledge: { s: 73.6, z: 0.99, r: 64.8, estimated: true }  # 전문 지식
  reasoning: { s: 63.0, z: 0.85, r: 62.7, estimated: true }  # 추론
  coding: { s: 77.4, z: 0.75, r: 61.2, estimated: true }  # 코딩
  agentic: { s: 79.4, z: 1.08, r: 66.3, estimated: false }  # 에이전트
  trust: { s: 34.8, z: -0.03, r: 49.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.1, z: 0.61, r: 59.1, estimated: true }  # 긴문맥
  instruction: { s: 75.8, z: 0.32, r: 54.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# Claude Sonnet 5 (xhigh)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 71.0 t/s · TTFT 28.48s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.8 | +0.99 | 추정 | (추정) |
| 추론 | 62.7 | +0.85 | 추정 | (추정) |
| 코딩 | 61.2 | +0.75 | 추정 | (추정) |
| 에이전트 | 66.3 | +1.08 | 실측 | [[gdpval]] 50.0%×1.0 |
| 신뢰성 | 49.6 | -0.03 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.1 | +0.61 | 추정 | (추정) |
| 지시 따르기 | 54.8 | +0.32 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
