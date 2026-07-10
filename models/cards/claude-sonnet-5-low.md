---
type: Model
title: Claude Sonnet 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 57.0
context_window: 1000000
radar:
  knowledge: { s: 56.6, z: 0.01, r: 50.2, estimated: true }  # 전문 지식
  reasoning: { s: 50.1, z: 0.05, r: 50.8, estimated: true }  # 추론
  coding: { s: 67.5, z: 0.15, r: 52.3, estimated: true }  # 코딩
  agentic: { s: 57.1, z: 0.11, r: 51.6, estimated: false }  # 에이전트
  trust: { s: 42.8, z: 0.4, r: 56.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.9, z: 0.4, r: 56.0, estimated: true }  # 긴문맥
  instruction: { s: 72.1, z: 0.1, r: 51.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Claude Sonnet 5 (low)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 57.0 t/s · TTFT 1.76s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.2 | +0.01 | 추정 | (추정) |
| 추론 | 50.8 | +0.05 | 추정 | (추정) |
| 코딩 | 52.3 | +0.15 | 추정 | (추정) |
| 에이전트 | 51.6 | +0.11 | 실측 | [[gdpval]] 36.0%×1.0 |
| 신뢰성 | 56.0 | +0.4 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.0 | +0.4 | 추정 | (추정) |
| 지시 따르기 | 51.6 | +0.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
