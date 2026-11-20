---
type: Model
title: Claude Fable 5.2 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 56.4083157101519
price_blended_usd_1m: 5.74
output_speed_tps: 110.343877279033
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.1, z: 1.73, r: 75.9, estimated: false }  # 전문 지식
  reasoning: { s: 84.8, z: 2.42, r: 86.4, estimated: false }  # 추론
  coding: { s: 86.9, z: 1.59, r: 73.8, estimated: false }  # 코딩
  agentic: { s: 87.9, z: 1.49, r: 72.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: 81.9, z: 1.17, r: 67.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.2 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Claude Fable 5.2 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **56.4083157101519**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $8.0 · 출력 $40.0 · 혼합 $5.74/1M · 110.343877279033 t/s · TTFT 11.2095364387953s · 1M ctx` · 가성비 9.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.9 | +1.73 | 실측 | [[humanitys-last-exam]] 61.9091751621872%×0.3 |
| 추론 | 86.4 | +2.42 | 실측 | [[critpt]] 30.8571428571429%×1.0, [[humanitys-last-exam]] 61.9091751621872%×1.0 |
| 코딩 | 73.8 | +1.59 | 실측 | [[scicode]] 59.7222222222222%×1.0 |
| 에이전트 | 72.3 | +1.49 | 실측 | [[gdpval]] 1591.13%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 67.6 | +1.17 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
