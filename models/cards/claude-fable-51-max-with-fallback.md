---
type: Model
title: Claude Fable 5.1 (max with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: 7.175
output_speed_tps: 70.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 98.9, z: 2.62, r: 89.4, estimated: false }  # 전문 지식
  reasoning: { s: 96.0, z: 2.73, r: 91.0, estimated: false }  # 추론
  coding: { s: 93.3, z: 1.97, r: 79.6, estimated: false }  # 코딩
  agentic: { s: 91.3, z: 2.03, r: 80.5, estimated: false }  # 에이전트
  trust: { s: 25.8, z: -0.02, r: 49.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.34, r: 70.2, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.21, r: 68.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (max with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Claude Fable 5.1 (max with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 70.0 t/s · TTFT 276.36s · 1M ctx` · 가성비 7.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 89.4 | +2.62 | 실측 | [[aa-omniscience]] 67.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 59.0%×0.3 |
| 추론 | 91.0 | +2.73 | 실측 | [[critpt]] 30.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 59.0%×1.0 |
| 코딩 | 79.6 | +1.97 | 실측 | [[scicode]] 63.0%×1.0 |
| 에이전트 | 80.5 | +2.03 | 실측 | [[gdpval]] 62.0%×1.0, [[itbench]] 50.0%×1.0, [[tau3-banking]] 47.0%×1.0 |
| 신뢰성 | 49.7 | -0.02 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.2 | +1.34 | 실측 | [[aa-lcr]] 85.0%×1.0 |
| 지시 따르기 | 68.1 | +1.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
