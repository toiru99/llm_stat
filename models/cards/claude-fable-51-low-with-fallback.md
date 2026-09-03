---
type: Model
title: Claude Fable 5.1 (low with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 58.0
price_blended_usd_1m: 7.175
output_speed_tps: 59.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.9, z: 2.38, r: 85.6, estimated: false }  # 전문 지식
  reasoning: { s: 87.3, z: 2.6, r: 89.0, estimated: false }  # 추론
  coding: { s: 90.3, z: 1.82, r: 77.3, estimated: false }  # 코딩
  agentic: { s: 77.2, z: 1.54, r: 73.1, estimated: false }  # 에이전트
  trust: { s: 33.0, z: 0.39, r: 55.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 95.2, z: 1.37, r: 70.5, estimated: false }  # 긴문맥
  instruction: { s: 79.0, z: 1.09, r: 66.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (low with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Claude Fable 5.1 (low with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **58.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 59.0 t/s · TTFT 6.55s · 1M ctx` · 가성비 8.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 85.6 | +2.38 | 실측 | [[aa-omniscience]] 60.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 49.0%×0.3 |
| 추론 | 89.0 | +2.6 | 실측 | [[critpt]] 28.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 49.0%×1.0 |
| 코딩 | 77.3 | +1.82 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 73.1 | +1.54 | 실측 | [[gdpval]] 54.0%×1.0, [[tau3-banking]] 39.0%×1.0 |
| 신뢰성 | 55.9 | +0.39 | 실측 | [[aa-omniscience]] 34.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.5 | +1.37 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 66.3 | +1.09 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
