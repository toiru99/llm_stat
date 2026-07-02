---
type: Model
title: Claude Sonnet 5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 74.0
context_window: 1000000
radar:
  knowledge: { s: 65.4, z: 0.61, r: 59.2, estimated: true }  # 전문 지식
  reasoning: { s: 58.4, z: 0.63, r: 59.4, estimated: true }  # 추론
  coding: { s: 75.2, z: 0.65, r: 59.7, estimated: true }  # 코딩
  agentic: { s: 71.4, z: 0.8, r: 62.0, estimated: false }  # 에이전트
  trust: { s: 39.8, z: 0.14, r: 52.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.3, z: 0.51, r: 57.7, estimated: true }  # 긴문맥
  instruction: { s: 74.9, z: 0.27, r: 54.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-02
timestamp: 2026-07-02T00:00:00Z
---

# Claude Sonnet 5 (high)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 74.0 t/s · TTFT 13.11s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.2 | +0.61 | 추정 | (추정) |
| 추론 | 59.4 | +0.63 | 추정 | (추정) |
| 코딩 | 59.7 | +0.65 | 추정 | (추정) |
| 에이전트 | 62.0 | +0.8 | 실측 | [[gdpval]] 45.0%×1.0 |
| 신뢰성 | 52.2 | +0.14 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.7 | +0.51 | 추정 | (추정) |
| 지시 따르기 | 54.0 | +0.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
