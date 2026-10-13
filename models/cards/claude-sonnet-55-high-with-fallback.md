---
type: Model
title: Claude Sonnet 5.5 (high with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 47.0
price_blended_usd_1m: 1.47
output_speed_tps: 96.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.0, z: 1.59, r: 73.8, estimated: false }  # 전문 지식
  reasoning: { s: 75.4, z: 1.77, r: 76.6, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.41, r: 71.1, estimated: false }  # 코딩
  agentic: { s: 76.5, z: 1.41, r: 71.2, estimated: false }  # 에이전트
  trust: { s: 34.0, z: 0.33, r: 55.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.07, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.02, r: 65.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (high with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-13
timestamp: 2026-10-13T00:00:00Z
---

# Claude Sonnet 5.5 (high with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **47.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 96.0 t/s · TTFT 13.91s · 1M ctx` · 가성비 32.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.8 | +1.59 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 76.6 | +1.77 | 실측 | [[critpt]] 25.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 71.1 | +1.41 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 71.2 | +1.41 | 실측 | [[gdpval]] 52.0%×1.0 |
| 신뢰성 | 55.0 | +0.33 | 실측 | [[aa-omniscience]] 35.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.1 | +1.07 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 65.3 | +1.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
