---
type: Model
title: Claude Fable 5.1 (medium with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 60.0
price_blended_usd_1m: 7.175
output_speed_tps: 49.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 93.3, z: 2.64, r: 89.6, estimated: false }  # 전문 지식
  reasoning: { s: 91.6, z: 2.87, r: 93.0, estimated: false }  # 추론
  coding: { s: 88.7, z: 1.78, r: 76.7, estimated: false }  # 코딩
  agentic: { s: 82.8, z: 1.78, r: 76.7, estimated: false }  # 에이전트
  trust: { s: 29.9, z: 0.27, r: 54.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 95.2, z: 1.39, r: 70.8, estimated: false }  # 긴문맥
  instruction: { s: 77.8, z: 1.05, r: 65.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (medium with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Claude Fable 5.1 (medium with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **60.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 49.0 t/s · TTFT 7.49s · 1M ctx` · 가성비 8.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 89.6 | +2.64 | 실측 | [[aa-omniscience]] 63.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 54.0%×0.3 |
| 추론 | 93.0 | +2.87 | 실측 | [[critpt]] 29.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 54.0%×1.0 |
| 코딩 | 76.7 | +1.78 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 76.7 | +1.78 | 실측 | [[gdpval]] 58.0%×1.0, [[tau3-banking]] 41.0%×1.0 |
| 신뢰성 | 54.0 | +0.27 | 실측 | [[aa-omniscience]] 31.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.8 | +1.39 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 65.8 | +1.05 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
