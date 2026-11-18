---
type: Model
title: GPT-6.1 Terra (low)
creator: OpenAI
license: Proprietary
intelligence_index: 29.4169280792131
price_blended_usd_1m: 0.735
output_speed_tps: 60.01599337493
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 47.5, z: 0.01, r: 50.1, estimated: false }  # 전문 지식
  reasoning: { s: 44.9, z: 0.46, r: 56.9, estimated: false }  # 추론
  coding: { s: 74.9, z: 1.18, r: 67.7, estimated: false }  # 코딩
  agentic: { s: 70.8, z: 0.9, r: 63.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.7, z: 0.98, r: 64.8, estimated: false }  # 멀티모달
  long_context: { s: 91.4, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: 59.6, z: 0.24, r: 53.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# GPT-6.1 Terra (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **29.4169280792131**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · 60.01599337493 t/s · TTFT 2.968386079522053s · 1M ctx` · 가성비 40.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.1 | +0.01 | 실측 | [[humanitys-last-exam]] 35.820203892493005%×0.3 |
| 추론 | 56.9 | +0.46 | 실측 | [[critpt]] 15.1428571428571%×1.0, [[humanitys-last-exam]] 35.820203892493005%×1.0 |
| 코딩 | 67.7 | +1.18 | 실측 | [[scicode]] 52.4305555555556%×1.0 |
| 에이전트 | 63.5 | +0.9 | 실측 | [[gdpval]] 1203.72%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.8 | +0.98 | 실측 | [[mmmu-pro]] 82.485549132948%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 53.6 | +0.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
