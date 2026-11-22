---
type: Model
title: Apodex 1.1
creator: Apodex
license: Proprietary
intelligence_index: 13.6712884627289
price_blended_usd_1m: 0.381
output_speed_tps: None
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.9, z: 1.09, r: 66.3, estimated: false }  # 전문 지식
  reasoning: { s: 48.8, z: 0.65, r: 59.8, estimated: false }  # 추론
  coding: { s: 63.4, z: 0.79, r: 61.9, estimated: false }  # 코딩
  agentic: { s: 59.6, z: 0.51, r: 57.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.3, z: 0.76, r: 61.4, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 87.9, z: 1.42, r: 71.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Apodex 1.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Apodex 1.1

Apodex · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **13.6712884627289**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $3.0 · 혼합 $0.381/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 35.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.3 | +1.09 | 실측 | [[gpqa-diamond]] 86.3636363636364%×0.4, [[humanitys-last-exam]] 34.059314179796104%×0.3 |
| 추론 | 59.8 | +0.65 | 실측 | [[critpt]] 4.57142857142857%×1.0, [[gpqa-diamond]] 86.3636363636364%×1.0, [[humanitys-last-exam]] 34.059314179796104%×1.0 |
| 코딩 | 61.9 | +0.79 | 실측 | [[scicode]] 45.4861111111111%×1.0 |
| 에이전트 | 57.6 | +0.51 | 실측 | [[gdpval]] 1194.79%×1.0, [[tau3-banking]] 25.1546391752577%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.4 | +0.76 | 실측 | [[mmmu-pro]] 79.1907514450867%×1.0 |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 79.3333333333333%×1.0 |
| 지시 따르기 | 71.3 | +1.42 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
