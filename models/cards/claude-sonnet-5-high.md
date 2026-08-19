---
type: Model
title: Claude Sonnet 5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 62.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.9, z: 0.98, r: 64.7, estimated: true }  # 전문 지식
  reasoning: { s: 58.4, z: 1.12, r: 66.8, estimated: true }  # 추론
  coding: { s: 71.6, z: 0.95, r: 64.3, estimated: true }  # 코딩
  agentic: { s: 67.2, z: 1.19, r: 67.8, estimated: false }  # 에이전트
  trust: { s: 61.6, z: 1.51, r: 72.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.8, z: 1.07, r: 66.0, estimated: true }  # 긴문맥
  instruction: { s: 83.9, z: 1.2, r: 68.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# Claude Sonnet 5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 62.0 t/s · TTFT 11.8s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.7 | +0.98 | 추정 | (추정) |
| 추론 | 66.8 | +1.12 | 추정 | (추정) |
| 코딩 | 64.3 | +0.95 | 추정 | (추정) |
| 에이전트 | 67.8 | +1.19 | 실측 | [[gdpval]] 45.0%×1.0 |
| 신뢰성 | 72.6 | +1.51 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.0 | +1.07 | 추정 | (추정) |
| 지시 따르기 | 68.0 | +1.2 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
