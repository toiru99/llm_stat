---
type: Model
title: Agnes 2.5 Pro Beta
creator: Sapiens AI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.7, z: 1.32, r: 69.8, estimated: false }  # 전문 지식
  reasoning: { s: 62.4, z: 1.32, r: 69.8, estimated: false }  # 추론
  coding: { s: 69.0, z: 0.98, r: 64.7, estimated: false }  # 코딩
  agentic: { s: 73.0, z: 0.97, r: 64.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.3, z: 0.5, r: 57.6, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 90.3, z: 1.52, r: 72.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Agnes 2.5 Pro Beta
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Agnes 2.5 Pro Beta

Sapiens AI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.8 | +1.32 | 실측 | [[gpqa-diamond]] 90.5050505050505%×0.4, [[humanitys-last-exam]] 37.5347544022243%×0.3 |
| 추론 | 69.8 | +1.32 | 실측 | [[critpt]] 15.7142857142857%×1.0, [[gpqa-diamond]] 90.5050505050505%×1.0, [[humanitys-last-exam]] 37.5347544022243%×1.0 |
| 코딩 | 64.7 | +0.98 | 실측 | [[scicode]] 48.842592592592595%×1.0 |
| 에이전트 | 64.5 | +0.97 | 실측 | [[gdpval]] 1334.38%×1.0, [[tau3-banking]] 35.6701030927835%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.6 | +0.5 | 실측 | [[mmmu-pro]] 75.4335260115607%×1.0 |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 72.8 | +1.52 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
