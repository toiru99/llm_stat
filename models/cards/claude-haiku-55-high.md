---
type: Model
title: Claude Haiku 5.5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: 0.077
output_speed_tps: 185.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.0, z: 0.5, r: 57.5, estimated: false }  # 전문 지식
  reasoning: { s: 58.8, z: 0.98, r: 64.6, estimated: false }  # 추론
  coding: { s: 70.0, z: 1.08, r: 66.3, estimated: false }  # 코딩
  agentic: { s: 76.3, z: 1.43, r: 71.5, estimated: false }  # 에이전트
  trust: { s: 54.6, z: 1.24, r: 68.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.01, r: 65.2, estimated: false }  # 긴문맥
  instruction: { s: 72.9, z: 0.79, r: 61.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Claude Haiku 5.5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 185.0 t/s · TTFT 25.73s · 1M ctx` · 가성비 493.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.5 | +0.5 | 실측 | [[aa-omniscience]] 35.0%×1.0, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 64.6 | +0.98 | 실측 | [[critpt]] 19.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 66.3 | +1.08 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 71.5 | +1.43 | 실측 | [[gdpval]] 1425.0%×1.0 |
| 신뢰성 | 68.6 | +1.24 | 실측 | [[aa-omniscience]] 55.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.2 | +1.01 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 61.8 | +0.79 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
