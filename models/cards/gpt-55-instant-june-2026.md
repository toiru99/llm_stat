---
type: Model
title: GPT-5.5 Instant (June 2026)
creator: OpenAI
license: Proprietary
intelligence_index: 26.0
price_blended_usd_1m: 4.35
output_speed_tps: 118.0
context_window: 400000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.9, z: 0.99, r: 64.8, estimated: false }  # 전문 지식
  reasoning: { s: 38.5, z: 0.09, r: 51.3, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.38, r: 70.7, estimated: false }  # 코딩
  agentic: { s: 11.8, z: -1.03, r: 34.5, estimated: false }  # 에이전트
  trust: { s: 25.8, z: -0.03, r: 49.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.82, r: 62.3, estimated: false }  # 긴문맥
  instruction: { s: 68.4, z: 0.59, r: 58.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 Instant (June 2026)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# GPT-5.5 Instant (June 2026)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **26.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 118.0 t/s · TTFT 0.96s · 400k ctx` · 가성비 6.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.8 | +0.99 | 실측 | [[aa-omniscience]] 44.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 51.3 | +0.09 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 70.7 | +1.38 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 34.5 | -1.03 | 실측 | [[gdpval]] 0.0%×1.0, [[tau3-banking]] 12.0%×1.0 |
| 신뢰성 | 49.5 | -0.03 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.3 | +0.82 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 58.8 | +0.59 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
