---
type: Model
title: Claude Sonnet 5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 32.0
price_blended_usd_1m: 1.54
output_speed_tps: 68.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 55.9, z: 0.67, r: 60.1, estimated: false }  # 전문 지식
  reasoning: { s: 52.6, z: 0.79, r: 61.9, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.5, r: 72.4, estimated: false }  # 코딩
  agentic: { s: 55.2, z: 0.67, r: 60.0, estimated: false }  # 에이전트
  trust: { s: 33.0, z: 0.34, r: 55.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.09, r: 66.4, estimated: false }  # 긴문맥
  instruction: { s: 79.8, z: 1.08, r: 66.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Claude Sonnet 5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **32.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 68.0 t/s · TTFT 10.07s · 1M ctx` · 가성비 20.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.1 | +0.67 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 61.9 | +0.79 | 실측 | [[critpt]] 15.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 72.4 | +1.5 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 60.0 | +0.67 | 실측 | [[gdpval]] 37.0%×1.0 |
| 신뢰성 | 55.1 | +0.34 | 실측 | [[aa-omniscience]] 34.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.4 | +1.09 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 66.3 | +1.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
