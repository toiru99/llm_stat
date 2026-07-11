---
type: Model
title: Claude Sonnet 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 55.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.2, z: 1.21, r: 68.1, estimated: true }  # 전문 지식
  reasoning: { s: 59.8, z: 1.4, r: 70.9, estimated: true }  # 추론
  coding: { s: 73.2, z: 1.15, r: 67.3, estimated: true }  # 코딩
  agentic: { s: 63.5, z: 1.06, r: 65.9, estimated: false }  # 에이전트
  trust: { s: 33.2, z: 0.25, r: 53.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.9, z: 1.2, r: 68.0, estimated: true }  # 긴문맥
  instruction: { s: 73.8, z: 0.88, r: 63.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# Claude Sonnet 5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 55.0 t/s · TTFT 2.4s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.1 | +1.21 | 추정 | (추정) |
| 추론 | 70.9 | +1.4 | 추정 | (추정) |
| 코딩 | 67.3 | +1.15 | 추정 | (추정) |
| 에이전트 | 65.9 | +1.06 | 실측 | [[gdpval]] 40.0%×1.0 |
| 신뢰성 | 53.7 | +0.25 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.0 | +1.2 | 추정 | (추정) |
| 지시 따르기 | 63.2 | +0.88 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
