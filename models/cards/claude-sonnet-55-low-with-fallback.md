---
type: Model
title: Claude Sonnet 5.5 (low with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: 1.54
output_speed_tps: 91.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.3, z: 1.09, r: 66.4, estimated: false }  # 전문 지식
  reasoning: { s: 46.4, z: 0.45, r: 56.7, estimated: false }  # 추론
  coding: { s: 70.0, z: 1.15, r: 67.2, estimated: false }  # 코딩
  agentic: { s: 50.7, z: 0.46, r: 56.8, estimated: false }  # 에이전트
  trust: { s: 49.5, z: 1.07, r: 66.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 75.0, z: 0.86, r: 62.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (low with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# Claude Sonnet 5.5 (low with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **36.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 91.0 t/s · TTFT 1.31s · 1M ctx` · 가성비 23.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.4 | +1.09 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 56.7 | +0.45 | 실측 | [[critpt]] 11.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 67.2 | +1.15 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 56.8 | +0.46 | 실측 | [[gdpval]] 34.0%×1.0 |
| 신뢰성 | 66.0 | +1.07 | 실측 | [[aa-omniscience]] 50.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 62.9 | +0.86 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
