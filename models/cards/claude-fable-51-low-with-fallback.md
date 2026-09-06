---
type: Model
title: Claude Fable 5.1 (low with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 48.0
price_blended_usd_1m: 7.175
output_speed_tps: 55.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.6, z: 2.3, r: 84.5, estimated: false }  # 전문 지식
  reasoning: { s: 87.0, z: 2.5, r: 87.5, estimated: false }  # 추론
  coding: { s: 87.8, z: 1.94, r: 79.1, estimated: false }  # 코딩
  agentic: { s: 77.2, z: 1.52, r: 72.8, estimated: false }  # 에이전트
  trust: { s: 33.0, z: 0.4, r: 56.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.32, r: 69.9, estimated: false }  # 긴문맥
  instruction: { s: 77.1, z: 1.02, r: 65.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (low with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Claude Fable 5.1 (low with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **48.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 55.0 t/s · TTFT 7.12s · 1M ctx` · 가성비 6.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 84.5 | +2.3 | 실측 | [[aa-omniscience]] 60.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 49.0%×0.3 |
| 추론 | 87.5 | +2.5 | 실측 | [[critpt]] 28.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 49.0%×1.0 |
| 코딩 | 79.1 | +1.94 | 실측 | [[scicode]] 57.0%×1.0 |
| 에이전트 | 72.8 | +1.52 | 실측 | [[gdpval]] 50.0%×1.0, [[tau3-banking]] 39.0%×1.0 |
| 신뢰성 | 56.0 | +0.4 | 실측 | [[aa-omniscience]] 34.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.9 | +1.32 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 65.2 | +1.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
