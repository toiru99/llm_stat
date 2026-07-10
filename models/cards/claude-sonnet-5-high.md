---
type: Model
title: Claude Sonnet 5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 64.0
context_window: 1000000
radar:
  knowledge: { s: 67.6, z: 0.51, r: 57.6, estimated: true }  # 전문 지식
  reasoning: { s: 59.4, z: 0.47, r: 57.0, estimated: true }  # 추론
  coding: { s: 78.2, z: 0.62, r: 59.3, estimated: true }  # 코딩
  agentic: { s: 71.4, z: 0.68, r: 60.1, estimated: false }  # 에이전트
  trust: { s: 20.2, z: -0.38, r: 44.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.7, z: 0.59, r: 58.8, estimated: true }  # 긴문맥
  instruction: { s: 75.8, z: 0.27, r: 54.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Claude Sonnet 5 (high)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 64.0 t/s · TTFT 8.34s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.6 | +0.51 | 추정 | (추정) |
| 추론 | 57.0 | +0.47 | 추정 | (추정) |
| 코딩 | 59.3 | +0.62 | 추정 | (추정) |
| 에이전트 | 60.1 | +0.68 | 실측 | [[gdpval]] 45.0%×1.0 |
| 신뢰성 | 44.3 | -0.38 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.8 | +0.59 | 추정 | (추정) |
| 지시 따르기 | 54.1 | +0.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
