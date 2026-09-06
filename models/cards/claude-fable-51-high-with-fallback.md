---
type: Model
title: Claude Fable 5.1 (high with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 52.0
price_blended_usd_1m: 7.175
output_speed_tps: 56.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 96.0, z: 2.65, r: 89.8, estimated: false }  # 전문 지식
  reasoning: { s: 94.3, z: 2.85, r: 92.8, estimated: false }  # 추론
  coding: { s: 91.8, z: 2.08, r: 81.2, estimated: false }  # 코딩
  agentic: { s: 87.4, z: 1.91, r: 78.7, estimated: false }  # 에이전트
  trust: { s: 29.9, z: 0.25, r: 53.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.39, r: 70.9, estimated: false }  # 긴문맥
  instruction: { s: 78.1, z: 1.06, r: 65.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (high with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Claude Fable 5.1 (high with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **52.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 56.0 t/s · TTFT 23.85s · 1M ctx` · 가성비 7.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 89.8 | +2.65 | 실측 | [[aa-omniscience]] 65.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 56.0%×0.3 |
| 추론 | 92.8 | +2.85 | 실측 | [[critpt]] 30.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 56.0%×1.0 |
| 코딩 | 81.2 | +2.08 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 78.7 | +1.91 | 실측 | [[gdpval]] 58.0%×1.0, [[tau3-banking]] 43.0%×1.0 |
| 신뢰성 | 53.8 | +0.25 | 실측 | [[aa-omniscience]] 31.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.9 | +1.39 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 65.9 | +1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
