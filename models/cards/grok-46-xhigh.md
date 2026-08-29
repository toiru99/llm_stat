---
type: Model
title: Grok 4.6 (xhigh)
creator: SpaceXAI
license: Proprietary
intelligence_index: 60.0
price_blended_usd_1m: 1.35
output_speed_tps: 61.0
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.2, z: 1.76, r: 76.5, estimated: false }  # 전문 지식
  reasoning: { s: 80.3, z: 2.31, r: 84.7, estimated: false }  # 추론
  coding: { s: 86.7, z: 1.64, r: 74.5, estimated: false }  # 코딩
  agentic: { s: 89.9, z: 2.08, r: 81.2, estimated: false }  # 에이전트
  trust: { s: 76.3, z: 2.48, r: 87.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.6, z: 1.29, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: 76.6, z: 1.02, r: 65.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.6 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Grok 4.6 (xhigh)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **60.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 61.0 t/s · TTFT 45.74s · 500k ctx` · 가성비 44.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.5 | +1.76 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 84.7 | +2.31 | 실측 | [[critpt]] 20.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 74.5 | +1.64 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 81.2 | +2.08 | 실측 | [[gdpval]] 63.0%×1.0, [[tau3-banking]] 43.0%×1.0 |
| 신뢰성 | 87.2 | +2.48 | 실측 | [[aa-omniscience]] 76.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.4 | +1.29 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 65.3 | +1.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
