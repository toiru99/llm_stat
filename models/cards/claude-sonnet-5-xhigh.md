---
type: Model
title: Claude Sonnet 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 71.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.9, z: 0.92, r: 63.7, estimated: false }  # 전문 지식
  reasoning: { s: 65.5, z: 1.46, r: 72.0, estimated: false }  # 추론
  coding: { s: 81.6, z: 1.68, r: 75.2, estimated: false }  # 코딩
  agentic: { s: 73.0, z: 1.35, r: 70.3, estimated: false }  # 에이전트
  trust: { s: 40.2, z: 0.73, r: 60.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.15, r: 67.3, estimated: false }  # 긴문맥
  instruction: { s: 64.2, z: 0.48, r: 57.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-08
timestamp: 2026-09-08T00:00:00Z
---

# Claude Sonnet 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 71.0 t/s · TTFT 24.25s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.7 | +0.92 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 72.0 | +1.46 | 실측 | [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 75.2 | +1.68 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 70.3 | +1.35 | 실측 | [[gdpval]] 46.0%×1.0 |
| 신뢰성 | 60.9 | +0.73 | 실측 | [[aa-omniscience]] 41.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.3 | +1.15 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 57.2 | +0.48 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
