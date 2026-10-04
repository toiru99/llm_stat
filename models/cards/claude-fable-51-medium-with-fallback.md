---
type: Model
title: Claude Fable 5.1 (medium with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 49.0
price_blended_usd_1m: 7.175
output_speed_tps: 54.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 92.5, z: 2.31, r: 84.6, estimated: false }  # 전문 지식
  reasoning: { s: 90.3, z: 2.44, r: 86.6, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.55, r: 73.2, estimated: false }  # 코딩
  agentic: { s: 79.0, z: 1.53, r: 73.0, estimated: false }  # 에이전트
  trust: { s: 29.9, z: 0.16, r: 52.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.33, r: 69.9, estimated: false }  # 긴문맥
  instruction: { s: 76.6, z: 0.93, r: 63.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (medium with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# Claude Fable 5.1 (medium with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **49.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 54.0 t/s · TTFT 9.11s · 1M ctx` · 가성비 6.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 84.6 | +2.31 | 실측 | [[aa-omniscience]] 63.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 54.0%×0.3 |
| 추론 | 86.6 | +2.44 | 실측 | [[critpt]] 29.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 54.0%×1.0 |
| 코딩 | 73.2 | +1.55 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 73.0 | +1.53 | 실측 | [[gdpval]] 52.0%×1.0, [[tau3-banking]] 41.0%×1.0 |
| 신뢰성 | 52.4 | +0.16 | 실측 | [[aa-omniscience]] 31.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.9 | +1.33 | 실측 | [[aa-lcr]] 85.0%×1.0 |
| 지시 따르기 | 63.9 | +0.93 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
