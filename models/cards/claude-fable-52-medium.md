---
type: Model
title: Claude Fable 5.2 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 56.4083157101519
price_blended_usd_1m: 5.74
output_speed_tps: 105.37658332877221
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.1, z: 1.74, r: 76.1, estimated: false }  # 전문 지식
  reasoning: { s: 84.8, z: 2.45, r: 86.7, estimated: false }  # 추론
  coding: { s: 86.9, z: 1.6, r: 74.1, estimated: false }  # 코딩
  agentic: { s: 87.9, z: 1.5, r: 72.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.1, r: 66.4, estimated: false }  # 긴문맥
  instruction: { s: 81.9, z: 1.18, r: 67.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.2 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude Fable 5.2 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **56.4083157101519**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $8.0 · 출력 $40.0 · 혼합 $5.74/1M · 105.37658332877221 t/s · TTFT 9.393313504187661s · 1M ctx` · 가성비 9.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.1 | +1.74 | 실측 | [[humanitys-last-exam]] 61.9091751621872%×0.3 |
| 추론 | 86.7 | +2.45 | 실측 | [[critpt]] 30.8571428571429%×1.0, [[humanitys-last-exam]] 61.9091751621872%×1.0 |
| 코딩 | 74.1 | +1.6 | 실측 | [[scicode]] 59.7222222222222%×1.0 |
| 에이전트 | 72.5 | +1.5 | 실측 | [[gdpval]] 1591.13%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.4 | +1.1 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 67.7 | +1.18 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
