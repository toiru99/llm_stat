---
type: Model
title: Claude Sonnet 5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 69.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.9, z: 0.98, r: 64.8, estimated: true }  # 전문 지식
  reasoning: { s: 58.4, z: 1.13, r: 67.0, estimated: true }  # 추론
  coding: { s: 70.7, z: 0.92, r: 63.8, estimated: true }  # 코딩
  agentic: { s: 67.2, z: 1.2, r: 68.1, estimated: false }  # 에이전트
  trust: { s: 61.6, z: 1.53, r: 72.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.0, z: 1.11, r: 66.6, estimated: true }  # 긴문맥
  instruction: { s: 83.9, z: 1.21, r: 68.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-15
timestamp: 2026-08-15T00:00:00Z
---

# Claude Sonnet 5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 69.0 t/s · TTFT 8.29s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.8 | +0.98 | 추정 | (추정) |
| 추론 | 67.0 | +1.13 | 추정 | (추정) |
| 코딩 | 63.8 | +0.92 | 추정 | (추정) |
| 에이전트 | 68.1 | +1.2 | 실측 | [[gdpval]] 45.0%×1.0 |
| 신뢰성 | 72.9 | +1.53 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.6 | +1.11 | 추정 | (추정) |
| 지시 따르기 | 68.2 | +1.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
