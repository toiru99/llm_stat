---
type: Model
title: Claude Sonnet 5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: 64.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.7, z: 1.01, r: 65.1, estimated: true }  # 전문 지식
  reasoning: { s: 56.9, z: 1.12, r: 66.9, estimated: true }  # 추론
  coding: { s: 71.5, z: 1.02, r: 65.3, estimated: true }  # 코딩
  agentic: { s: 66.2, z: 1.16, r: 67.3, estimated: false }  # 에이전트
  trust: { s: 30.1, z: 0.1, r: 51.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.2, z: 1.14, r: 67.2, estimated: true }  # 긴문맥
  instruction: { s: 81.0, z: 1.15, r: 67.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# Claude Sonnet 5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $None/1M · 64.0 t/s · TTFT 10.84s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.1 | +1.01 | 추정 | (추정) |
| 추론 | 66.9 | +1.12 | 추정 | (추정) |
| 코딩 | 65.3 | +1.02 | 추정 | (추정) |
| 에이전트 | 67.3 | +1.16 | 실측 | [[gdpval]] 45.0%×1.0 |
| 신뢰성 | 51.5 | +0.1 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.2 | +1.14 | 추정 | (추정) |
| 지시 따르기 | 67.3 | +1.15 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
