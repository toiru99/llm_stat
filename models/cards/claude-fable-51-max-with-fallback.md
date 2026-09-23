---
type: Model
title: Claude Fable 5.1 (max with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: 7.175
output_speed_tps: 65.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 98.9, z: 2.7, r: 90.5, estimated: false }  # 전문 지식
  reasoning: { s: 96.0, z: 2.83, r: 92.4, estimated: false }  # 추론
  coding: { s: 93.3, z: 2.02, r: 80.2, estimated: false }  # 코딩
  agentic: { s: 92.3, z: 2.09, r: 81.4, estimated: false }  # 에이전트
  trust: { s: 25.8, z: 0.0, r: 50.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.36, r: 70.5, estimated: false }  # 긴문맥
  instruction: { s: 82.3, z: 1.19, r: 67.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (max with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Claude Fable 5.1 (max with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 65.0 t/s · TTFT 298.45s · 1M ctx` · 가성비 7.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 90.5 | +2.7 | 실측 | [[aa-omniscience]] 67.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 59.0%×0.3 |
| 추론 | 92.4 | +2.83 | 실측 | [[critpt]] 30.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 59.0%×1.0 |
| 코딩 | 80.2 | +2.02 | 실측 | [[scicode]] 63.0%×1.0 |
| 에이전트 | 81.4 | +2.09 | 실측 | [[gdpval]] 62.0%×1.0, [[tau3-banking]] 47.0%×1.0 |
| 신뢰성 | 50.0 | +0.0 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.5 | +1.36 | 실측 | [[aa-lcr]] 85.0%×1.0 |
| 지시 따르기 | 67.8 | +1.19 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
