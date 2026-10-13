---
type: Model
title: Claude Sonnet 5.5 (max with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 56.0
price_blended_usd_1m: 1.47
output_speed_tps: 135.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.8, z: 1.86, r: 77.8, estimated: false }  # 전문 지식
  reasoning: { s: 92.0, z: 2.53, r: 87.9, estimated: false }  # 추론
  coding: { s: 90.0, z: 1.8, r: 77.1, estimated: false }  # 코딩
  agentic: { s: 98.5, z: 2.25, r: 83.7, estimated: false }  # 에이전트
  trust: { s: 52.6, z: 1.19, r: 67.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.24, r: 68.7, estimated: false }  # 긴문맥
  instruction: { s: 76.9, z: 0.94, r: 64.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (max with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-13
timestamp: 2026-10-13T00:00:00Z
---

# Claude Sonnet 5.5 (max with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **56.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 135.0 t/s · TTFT 453.43s · 1M ctx` · 가성비 38.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.8 | +1.86 | 실측 | [[aa-omniscience]] 54.0%×1.0, [[humanitys-last-exam]] 55.0%×0.3 |
| 추론 | 87.9 | +2.53 | 실측 | [[critpt]] 31.0%×1.0, [[humanitys-last-exam]] 55.0%×1.0 |
| 코딩 | 77.1 | +1.8 | 실측 | [[scicode]] 61.0%×1.0 |
| 에이전트 | 83.7 | +2.25 | 실측 | [[gdpval]] 67.0%×1.0 |
| 신뢰성 | 67.8 | +1.19 | 실측 | [[aa-omniscience]] 53.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.7 | +1.24 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 64.0 | +0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
