---
type: Model
title: GPT-5.5 Instant (June 2026)
creator: OpenAI
license: Proprietary
intelligence_index: 29.0
price_blended_usd_1m: 4.35
output_speed_tps: None
context_window: 400000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 68.4, z: 1.36, r: 70.4, estimated: false }  # 전문 지식
  reasoning: { s: 40.1, z: 0.35, r: 55.3, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.51, r: 72.7, estimated: false }  # 코딩
  agentic: { s: 26.9, z: -0.36, r: 44.6, estimated: false }  # 에이전트
  trust: { s: 30.6, z: 0.12, r: 51.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 69.9, z: 0.72, r: 60.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 Instant (June 2026)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# GPT-5.5 Instant (June 2026)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · None t/s · TTFT Nones · 400k ctx` · 가성비 6.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.4 | +1.36 | 실측 | [[aa-omniscience]] 44.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 55.3 | +0.35 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 72.7 | +1.51 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 44.6 | -0.36 | 실측 | [[gdpval]] 11.0%×1.0, [[tau3-banking]] 12.0%×1.0 |
| 신뢰성 | 51.9 | +0.12 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 60.8 | +0.72 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
