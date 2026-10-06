---
type: Model
title: Claude Sonnet 5.5 (xhigh with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 52.0
price_blended_usd_1m: 1.54
output_speed_tps: 106.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.7, z: 1.72, r: 75.8, estimated: false }  # 전문 지식
  reasoning: { s: 89.3, z: 2.4, r: 86.0, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.6, r: 74.1, estimated: false }  # 코딩
  agentic: { s: 91.2, z: 2.0, r: 80.0, estimated: false }  # 에이전트
  trust: { s: 36.1, z: 0.44, r: 56.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.16, r: 67.3, estimated: false }  # 긴문맥
  instruction: { s: 75.4, z: 0.88, r: 63.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (xhigh with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# Claude Sonnet 5.5 (xhigh with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **52.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 106.0 t/s · TTFT 35.86s · 1M ctx` · 가성비 33.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.8 | +1.72 | 실측 | [[aa-omniscience]] 53.0%×1.0, [[humanitys-last-exam]] 50.0%×0.3 |
| 추론 | 86.0 | +2.4 | 실측 | [[critpt]] 31.0%×1.0, [[humanitys-last-exam]] 50.0%×1.0 |
| 코딩 | 74.1 | +1.6 | 실측 | [[scicode]] 57.0%×1.0 |
| 에이전트 | 80.0 | +2.0 | 실측 | [[gdpval]] 62.0%×1.0 |
| 신뢰성 | 56.6 | +0.44 | 실측 | [[aa-omniscience]] 37.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.3 | +1.16 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 63.1 | +0.88 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
