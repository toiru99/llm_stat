---
type: Model
title: Grok 4.6 (medium)
creator: SpaceXAI
license: Proprietary
intelligence_index: 59.0
price_blended_usd_1m: 1.35
output_speed_tps: 56.0
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 72.6, z: 1.57, r: 73.6, estimated: false }  # 전문 지식
  reasoning: { s: 75.3, z: 2.0, r: 80.0, estimated: false }  # 추론
  coding: { s: 88.7, z: 1.75, r: 76.2, estimated: false }  # 코딩
  agentic: { s: 87.9, z: 1.96, r: 79.4, estimated: false }  # 에이전트
  trust: { s: 76.3, z: 2.44, r: 86.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 73.7, z: 0.87, r: 63.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.6 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Grok 4.6 (medium)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **59.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 56.0 t/s · TTFT 19.45s · 500k ctx` · 가성비 43.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.6 | +1.57 | 실측 | [[aa-omniscience]] 42.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 80.0 | +2.0 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 76.2 | +1.75 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 79.4 | +1.96 | 실측 | [[gdpval]] 62.0%×1.0, [[tau3-banking]] 44.0%×1.0 |
| 신뢰성 | 86.6 | +2.44 | 실측 | [[aa-omniscience]] 76.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 63.0 | +0.87 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
