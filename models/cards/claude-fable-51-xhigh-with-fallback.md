---
type: Model
title: Claude Fable 5.1 (xhigh with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: 7.175
output_speed_tps: 59.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 97.7, z: 2.55, r: 88.3, estimated: false }  # 전문 지식
  reasoning: { s: 96.7, z: 2.74, r: 91.0, estimated: false }  # 추론
  coding: { s: 90.0, z: 1.84, r: 77.6, estimated: false }  # 코딩
  agentic: { s: 90.6, z: 1.99, r: 79.8, estimated: false }  # 에이전트
  trust: { s: 27.8, z: 0.06, r: 50.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 80.9, z: 1.1, r: 66.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (xhigh with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# Claude Fable 5.1 (xhigh with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 59.0 t/s · TTFT 102.13s · 1M ctx` · 가성비 7.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 88.3 | +2.55 | 실측 | [[aa-omniscience]] 66.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 59.0%×0.3 |
| 추론 | 91.0 | +2.74 | 실측 | [[critpt]] 31.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 59.0%×1.0 |
| 코딩 | 77.6 | +1.84 | 실측 | [[scicode]] 61.0%×1.0 |
| 에이전트 | 79.8 | +1.99 | 실측 | [[gdpval]] 61.0%×1.0, [[tau3-banking]] 46.0%×1.0 |
| 신뢰성 | 50.8 | +0.06 | 실측 | [[aa-omniscience]] 29.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 66.6 | +1.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
