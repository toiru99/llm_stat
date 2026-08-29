---
type: Model
title: Claude Sonnet 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 64.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 55.7, z: 0.75, r: 61.2, estimated: true }  # 전문 지식
  reasoning: { s: 53.0, z: 0.94, r: 64.1, estimated: true }  # 추론
  coding: { s: 69.4, z: 0.91, r: 63.7, estimated: true }  # 코딩
  agentic: { s: 54.5, z: 0.69, r: 60.4, estimated: false }  # 에이전트
  trust: { s: 37.1, z: 0.62, r: 59.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 79.3, z: 0.92, r: 63.8, estimated: true }  # 긴문맥
  instruction: { s: 79.5, z: 1.14, r: 67.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Claude Sonnet 5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 64.0 t/s · TTFT 2.44s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.2 | +0.75 | 추정 | (추정) |
| 추론 | 64.1 | +0.94 | 추정 | (추정) |
| 코딩 | 63.7 | +0.91 | 추정 | (추정) |
| 에이전트 | 60.4 | +0.69 | 실측 | [[gdpval]] 36.0%×1.0 |
| 신뢰성 | 59.3 | +0.62 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.8 | +0.92 | 추정 | (추정) |
| 지시 따르기 | 67.1 | +1.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
