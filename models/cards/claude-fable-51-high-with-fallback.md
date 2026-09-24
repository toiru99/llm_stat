---
type: Model
title: Claude Fable 5.1 (high with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 51.0
price_blended_usd_1m: 7.175
output_speed_tps: 56.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 95.4, z: 2.54, r: 88.1, estimated: false }  # 전문 지식
  reasoning: { s: 93.2, z: 2.71, r: 90.6, estimated: false }  # 추론
  coding: { s: 86.7, z: 1.79, r: 76.9, estimated: false }  # 코딩
  agentic: { s: 83.9, z: 1.78, r: 76.6, estimated: false }  # 에이전트
  trust: { s: 29.9, z: 0.2, r: 53.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.34, r: 70.0, estimated: false }  # 긴문맥
  instruction: { s: 77.9, z: 1.01, r: 65.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (high with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# Claude Fable 5.1 (high with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 56.0 t/s · TTFT 22.54s · 1M ctx` · 가성비 7.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 88.1 | +2.54 | 실측 | [[aa-omniscience]] 65.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 56.0%×0.3 |
| 추론 | 90.6 | +2.71 | 실측 | [[critpt]] 30.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 56.0%×1.0 |
| 코딩 | 76.9 | +1.79 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 76.6 | +1.78 | 실측 | [[gdpval]] 56.0%×1.0, [[tau3-banking]] 43.0%×1.0 |
| 신뢰성 | 53.0 | +0.2 | 실측 | [[aa-omniscience]] 31.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.0 | +1.34 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 65.2 | +1.01 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
