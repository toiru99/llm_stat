---
type: Model
title: Solar Pro 4
creator: Upstage
license: Proprietary
intelligence_index: 14.1589437644357
price_blended_usd_1m: 0.222
output_speed_tps: 73.77372736112967
context_window: 512000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.2, z: 1.07, r: 66.1, estimated: false }  # 전문 지식
  reasoning: { s: 49.5, z: 0.7, r: 60.5, estimated: false }  # 추론
  coding: { s: 67.6, z: 0.95, r: 64.2, estimated: false }  # 코딩
  agentic: { s: 55.8, z: 0.39, r: 55.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 79.7, z: 0.78, r: 61.8, estimated: false }  # 긴문맥
  instruction: { s: 84.9, z: 1.3, r: 69.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Solar Pro 4

Upstage · Proprietary · Unknown · 컨텍스트 512k · 종합지능 **14.1589437644357**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 73.77372736112967 t/s · TTFT 2.3040394283545123s · 512k ctx` · 가성비 63.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.1 | +1.07 | 실측 | [[gpqa-diamond]] 89.0909090909091%×0.4, [[humanitys-last-exam]] 29.842446709916597%×0.3 |
| 추론 | 60.5 | +0.7 | 실측 | [[critpt]] 6.28571428571429%×1.0, [[gpqa-diamond]] 89.0909090909091%×1.0, [[humanitys-last-exam]] 29.842446709916597%×1.0 |
| 코딩 | 64.2 | +0.95 | 실측 | [[scicode]] 48.032407407407405%×1.0 |
| 에이전트 | 55.8 | +0.39 | 실측 | [[gdpval]] 1105.73%×1.0, [[tau3-banking]] 23.298969072164898%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.8 | +0.78 | 실측 | [[aa-lcr]] 70.6666666666667%×1.0 |
| 지시 따르기 | 69.6 | +1.3 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
