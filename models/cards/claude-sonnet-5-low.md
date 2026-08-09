---
type: Model
title: Claude Sonnet 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 63.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.6, z: 0.37, r: 55.6, estimated: true }  # 전문 지식
  reasoning: { s: 45.1, z: 0.51, r: 57.6, estimated: true }  # 추론
  coding: { s: 61.3, z: 0.58, r: 58.7, estimated: true }  # 코딩
  agentic: { s: 53.7, z: 0.72, r: 60.7, estimated: false }  # 에이전트
  trust: { s: 45.3, z: 0.87, r: 63.1, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 81.4, z: 0.98, r: 64.6, estimated: true }  # 긴문맥
  instruction: { s: 78.3, z: 1.02, r: 65.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-09
timestamp: 2026-08-09T00:00:00Z
---

# Claude Sonnet 5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 63.0 t/s · TTFT 2.32s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.6 | +0.37 | 추정 | (추정) |
| 추론 | 57.6 | +0.51 | 추정 | (추정) |
| 코딩 | 58.7 | +0.58 | 추정 | (추정) |
| 에이전트 | 60.7 | +0.72 | 실측 | [[gdpval]] 36.0%×1.0 |
| 신뢰성 | 63.1 | +0.87 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.6 | +0.98 | 추정 | (추정) |
| 지시 따르기 | 65.3 | +1.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
