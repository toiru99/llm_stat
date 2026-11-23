---
type: Model
title: Quasar 438B (max)
creator: Multiverse Computing
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.2, z: 0.24, r: 53.5, estimated: false }  # 전문 지식
  reasoning: { s: 41.3, z: 0.28, r: 54.2, estimated: false }  # 추론
  coding: { s: 67.8, z: 0.94, r: 64.1, estimated: false }  # 코딩
  agentic: { s: 62.9, z: 0.62, r: 59.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.1, z: 0.96, r: 64.4, estimated: false }  # 긴문맥
  instruction: { s: 64.2, z: 0.43, r: 56.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Quasar 438B (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Quasar 438B (max)

Multiverse Computing · Proprietary · Large · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.5 | +0.24 | 실측 | [[gpqa-diamond]] 73.23232323232321%×0.4, [[humanitys-last-exam]] 18.6746987951807%×0.3 |
| 추론 | 54.2 | +0.28 | 실측 | [[critpt]] 9.42857142857143%×1.0, [[gpqa-diamond]] 73.23232323232321%×1.0, [[humanitys-last-exam]] 18.6746987951807%×1.0 |
| 코딩 | 64.1 | +0.94 | 실측 | [[scicode]] 48.1481481481481%×1.0 |
| 에이전트 | 59.3 | +0.62 | 실측 | [[gdpval]] 1189.39%×1.0, [[tau3-banking]] 28.659793814432998%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.4 | +0.96 | 실측 | [[aa-lcr]] 76.3333333333333%×1.0 |
| 지시 따르기 | 56.5 | +0.43 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
