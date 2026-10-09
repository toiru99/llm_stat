---
type: Model
title: Claude Haiku 5.5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 43.0
price_blended_usd_1m: 0.077
output_speed_tps: 240.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.9, z: 0.71, r: 60.6, estimated: false }  # 전문 지식
  reasoning: { s: 65.5, z: 1.31, r: 69.7, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.47, r: 72.1, estimated: false }  # 코딩
  agentic: { s: 82.4, z: 1.65, r: 74.8, estimated: false }  # 에이전트
  trust: { s: 59.8, z: 1.53, r: 72.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.25, r: 68.7, estimated: false }  # 긴문맥
  instruction: { s: 70.4, z: 0.67, r: 60.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# Claude Haiku 5.5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **43.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 240.0 t/s · TTFT 295.0s · 1M ctx` · 가성비 558.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.6 | +0.71 | 실측 | [[aa-omniscience]] 36.0%×1.0, [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 69.7 | +1.31 | 실측 | [[critpt]] 19.0%×1.0, [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 72.1 | +1.47 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 74.8 | +1.65 | 실측 | [[gdpval]] 56.0%×1.0 |
| 신뢰성 | 72.9 | +1.53 | 실측 | [[aa-omniscience]] 60.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.7 | +1.25 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 60.0 | +0.67 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
