---
type: Model
title: Claude Sonnet 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 74.0
context_window: 1000000
radar:
  knowledge: { s: 56.3, z: 0.19, r: 52.9, estimated: true }  # 전문 지식
  reasoning: { s: 50.3, z: 0.24, r: 53.5, estimated: true }  # 추론
  coding: { s: 68.4, z: 0.35, r: 55.3, estimated: true }  # 코딩
  agentic: { s: 57.1, z: 0.19, r: 52.8, estimated: false }  # 에이전트
  trust: { s: 52.3, z: 0.55, r: 58.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.8, z: 0.45, r: 56.8, estimated: true }  # 긴문맥
  instruction: { s: 70.7, z: 0.08, r: 51.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-07
timestamp: 2026-07-07T00:00:00Z
---

# Claude Sonnet 5 (low)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 74.0 t/s · TTFT 2.17s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.9 | +0.19 | 추정 | (추정) |
| 추론 | 53.5 | +0.24 | 추정 | (추정) |
| 코딩 | 55.3 | +0.35 | 추정 | (추정) |
| 에이전트 | 52.8 | +0.19 | 실측 | [[gdpval]] 36.0%×1.0 |
| 신뢰성 | 58.2 | +0.55 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.8 | +0.45 | 추정 | (추정) |
| 지시 따르기 | 51.2 | +0.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
