---
type: Model
title: Claude Fable 5.1 (medium with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 49.0
price_blended_usd_1m: 7.175
output_speed_tps: 55.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 92.5, z: 2.4, r: 86.0, estimated: false }  # 전문 지식
  reasoning: { s: 90.3, z: 2.56, r: 88.4, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.61, r: 74.2, estimated: false }  # 코딩
  agentic: { s: 79.0, z: 1.58, r: 73.7, estimated: false }  # 에이전트
  trust: { s: 29.9, z: 0.2, r: 52.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.36, r: 70.5, estimated: false }  # 긴문맥
  instruction: { s: 77.2, z: 0.98, r: 64.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (medium with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Claude Fable 5.1 (medium with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **49.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 55.0 t/s · TTFT 8.29s · 1M ctx` · 가성비 6.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 86.0 | +2.4 | 실측 | [[aa-omniscience]] 63.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 54.0%×0.3 |
| 추론 | 88.4 | +2.56 | 실측 | [[critpt]] 29.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 54.0%×1.0 |
| 코딩 | 74.2 | +1.61 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 73.7 | +1.58 | 실측 | [[gdpval]] 52.0%×1.0, [[tau3-banking]] 41.0%×1.0 |
| 신뢰성 | 52.9 | +0.2 | 실측 | [[aa-omniscience]] 31.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.5 | +1.36 | 실측 | [[aa-lcr]] 85.0%×1.0 |
| 지시 따르기 | 64.6 | +0.98 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
