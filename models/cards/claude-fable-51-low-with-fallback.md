---
type: Model
title: Claude Fable 5.1 (low with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 47.0
price_blended_usd_1m: 7.175
output_speed_tps: 59.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.1, z: 2.2, r: 83.0, estimated: false }  # 전문 지식
  reasoning: { s: 86.1, z: 2.37, r: 85.6, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.68, r: 75.1, estimated: false }  # 코딩
  agentic: { s: 73.3, z: 1.37, r: 70.6, estimated: false }  # 에이전트
  trust: { s: 33.0, z: 0.34, r: 55.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.27, r: 69.0, estimated: false }  # 긴문맥
  instruction: { s: 78.0, z: 1.02, r: 65.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (low with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Claude Fable 5.1 (low with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **47.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 59.0 t/s · TTFT 7.34s · 1M ctx` · 가성비 6.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 83.0 | +2.2 | 실측 | [[aa-omniscience]] 60.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 49.0%×0.3 |
| 추론 | 85.6 | +2.37 | 실측 | [[critpt]] 28.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 49.0%×1.0 |
| 코딩 | 75.1 | +1.68 | 실측 | [[scicode]] 57.0%×1.0 |
| 에이전트 | 70.6 | +1.37 | 실측 | [[gdpval]] 47.0%×1.0, [[tau3-banking]] 39.0%×1.0 |
| 신뢰성 | 55.1 | +0.34 | 실측 | [[aa-omniscience]] 34.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.0 | +1.27 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 65.3 | +1.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
