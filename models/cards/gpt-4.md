---
type: Model
title: GPT-4
creator: OpenAI
license: Proprietary
intelligence_index: 1.0
price_blended_usd_1m: 33
output_speed_tps: None
context_window: 8189
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.7, z: -0.49, r: 42.6, estimated: false }  # 전문 지식
  reasoning: { s: 29.1, z: -0.29, r: 45.7, estimated: false }  # 추론
  coding: { s: 2.7, z: -1.03, r: 34.6, estimated: true }  # 코딩
  agentic: { s: 0.0, z: -1.43, r: 28.5, estimated: false }  # 에이전트
  trust: { s: 29.9, z: 0.25, r: 53.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 26.7, z: -0.69, r: 39.7, estimated: true }  # 긴문맥
  instruction: { s: 29.6, z: -0.97, r: 35.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# GPT-4

OpenAI · Proprietary · Unknown · 컨텍스트 8k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $30.0 · 출력 $60.0 · 혼합 $33/1M · None t/s · TTFT Nones · 8k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.6 | -0.49 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 35.0%×0.4 |
| 추론 | 45.7 | -0.29 | 실측 | [[gpqa-diamond]] 35.0%×1.0 |
| 코딩 | 34.6 | -1.03 | 추정 | (추정) |
| 에이전트 | 28.5 | -1.43 | 실측 | [[gdpval]] 0.0%×1.0 |
| 신뢰성 | 53.8 | +0.25 | 실측 | [[aa-omniscience]] 31.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.7 | -0.69 | 추정 | (추정) |
| 지시 따르기 | 35.5 | -0.97 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
