---
type: Model
title: Claude Sonnet 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 59.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.8, z: 0.3, r: 54.6, estimated: true }  # 전문 지식
  reasoning: { s: 42.1, z: 0.36, r: 55.4, estimated: true }  # 추론
  coding: { s: 56.4, z: 0.39, r: 55.9, estimated: true }  # 코딩
  agentic: { s: 52.9, z: 0.6, r: 59.0, estimated: false }  # 에이전트
  trust: { s: 30.5, z: 0.28, r: 54.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 68.4, z: 0.56, r: 58.3, estimated: true }  # 긴문맥
  instruction: { s: 60.8, z: 0.33, r: 54.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Claude Sonnet 5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 59.0 t/s · TTFT 1.68s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.6 | +0.3 | 추정 | (추정) |
| 추론 | 55.4 | +0.36 | 추정 | (추정) |
| 코딩 | 55.9 | +0.39 | 추정 | (추정) |
| 에이전트 | 59.0 | +0.6 | 실측 | [[gdpval]] 36.0%×1.0 |
| 신뢰성 | 54.2 | +0.28 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.3 | +0.56 | 추정 | (추정) |
| 지시 따르기 | 54.9 | +0.33 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
