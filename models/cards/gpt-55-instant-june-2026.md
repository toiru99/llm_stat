---
type: Model
title: GPT-5.5 Instant (June 2026)
creator: OpenAI
license: Proprietary
intelligence_index: 29.0
price_blended_usd_1m: 4.35
output_speed_tps: 164.0
context_window: 400000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.9, z: 1.21, r: 68.1, estimated: false }  # 전문 지식
  reasoning: { s: 40.3, z: 0.27, r: 54.1, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.43, r: 71.4, estimated: false }  # 코딩
  agentic: { s: 20.0, z: -0.63, r: 40.6, estimated: false }  # 에이전트
  trust: { s: 29.1, z: 0.13, r: 51.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.7, z: 0.95, r: 64.3, estimated: false }  # 긴문맥
  instruction: { s: 68.7, z: 0.62, r: 59.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 Instant (June 2026)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# GPT-5.5 Instant (June 2026)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 164.0 t/s · TTFT 1.08s · 400k ctx` · 가성비 6.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.1 | +1.21 | 실측 | [[aa-omniscience]] 44.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 54.1 | +0.27 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 71.4 | +1.43 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 40.6 | -0.63 | 실측 | [[gdpval]] 11.0%×1.0, [[tau3-banking]] 12.0%×1.0 |
| 신뢰성 | 51.9 | +0.13 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.3 | +0.95 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 59.3 | +0.62 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
