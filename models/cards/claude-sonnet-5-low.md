---
type: Model
title: Claude Sonnet 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 68.0
context_window: 1000000
radar:
  knowledge: { s: 50.4, z: -0.06, r: 49.2, estimated: true }  # 전문 지식
  reasoning: { s: 51.4, z: 0.3, r: 54.5, estimated: true }  # 추론
  coding: { s: 67.4, z: 0.32, r: 54.7, estimated: true }  # 코딩
  agentic: { s: 57.1, z: 0.2, r: 53.0, estimated: false }  # 에이전트
  trust: { s: 39.9, z: 0.21, r: 53.1, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.0, z: 0.58, r: 58.6, estimated: true }  # 긴문맥
  instruction: { s: 82.0, z: 0.61, r: 59.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-08
timestamp: 2026-07-08T00:00:00Z
---

# Claude Sonnet 5 (low)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 68.0 t/s · TTFT 1.9s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.2 | -0.06 | 추정 | (추정) |
| 추론 | 54.5 | +0.3 | 추정 | (추정) |
| 코딩 | 54.7 | +0.32 | 추정 | (추정) |
| 에이전트 | 53.0 | +0.2 | 실측 | [[gdpval]] 36.0%×1.0 |
| 신뢰성 | 53.1 | +0.21 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.6 | +0.58 | 추정 | (추정) |
| 지시 따르기 | 59.1 | +0.61 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
