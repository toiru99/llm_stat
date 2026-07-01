---
type: Model
title: Claude Sonnet 5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 58.0
context_window: 1000000
radar:
  knowledge: { s: 65.4, z: 0.61, r: 59.1, estimated: true }  # 전문 지식
  reasoning: { s: 58.4, z: 0.63, r: 59.4, estimated: true }  # 추론
  coding: { s: 75.2, z: 0.65, r: 59.7, estimated: true }  # 코딩
  agentic: { s: 71.4, z: 0.77, r: 61.6, estimated: false }  # 에이전트
  trust: { s: 32.2, z: -0.11, r: 48.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.1, z: 0.46, r: 56.9, estimated: true }  # 긴문맥
  instruction: { s: 74.6, z: 0.27, r: 54.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# Claude Sonnet 5 (high)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 58.0 t/s · TTFT 20.69s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.1 | +0.61 | 추정 | (추정) |
| 추론 | 59.4 | +0.63 | 추정 | (추정) |
| 코딩 | 59.7 | +0.65 | 추정 | (추정) |
| 에이전트 | 61.6 | +0.77 | 실측 | [[gdpval]] 45.0%×1.0 |
| 신뢰성 | 48.3 | -0.11 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.9 | +0.46 | 추정 | (추정) |
| 지시 따르기 | 54.1 | +0.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
