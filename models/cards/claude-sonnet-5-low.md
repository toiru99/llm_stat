---
type: Model
title: Claude Sonnet 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: 63.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 45.6, z: 0.21, r: 53.2, estimated: true }  # 전문 지식
  reasoning: { s: 37.7, z: 0.17, r: 52.5, estimated: true }  # 추론
  coding: { s: 60.6, z: 0.57, r: 58.6, estimated: true }  # 코딩
  agentic: { s: 52.9, z: 0.64, r: 59.6, estimated: false }  # 에이전트
  trust: { s: 44.1, z: 0.75, r: 61.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 71.6, z: 0.66, r: 59.9, estimated: true }  # 긴문맥
  instruction: { s: 73.2, z: 0.83, r: 62.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# Claude Sonnet 5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $None/1M · 63.0 t/s · TTFT 1.66s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.2 | +0.21 | 추정 | (추정) |
| 추론 | 52.5 | +0.17 | 추정 | (추정) |
| 코딩 | 58.6 | +0.57 | 추정 | (추정) |
| 에이전트 | 59.6 | +0.64 | 실측 | [[gdpval]] 36.0%×1.0 |
| 신뢰성 | 61.3 | +0.75 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.9 | +0.66 | 추정 | (추정) |
| 지시 따르기 | 62.5 | +0.83 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
