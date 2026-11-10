---
type: Model
title: GPT-6.1 Sol (low)
creator: OpenAI
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 1.47
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.3, z: 0.79, r: 61.8, estimated: false }  # 전문 지식
  reasoning: { s: 72.5, z: 1.43, r: 71.5, estimated: false }  # 추론
  coding: { s: 76.2, z: 1.29, r: 69.3, estimated: false }  # 코딩
  agentic: { s: 70.8, z: 1.22, r: 68.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.9, z: 1.03, r: 65.5, estimated: false }  # 멀티모달
  long_context: { s: 94.7, z: 1.25, r: 68.7, estimated: false }  # 긴문맥
  instruction: { s: 77.6, z: 1.07, r: 66.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# GPT-6.1 Sol (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 23.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.8 | +0.79 | 실측 | [[humanitys-last-exam]] 47.4%×0.3 |
| 추론 | 71.5 | +1.43 | 실측 | [[critpt]] 62.5%×1.0, [[humanitys-last-exam]] 47.4%×1.0 |
| 코딩 | 69.3 | +1.29 | 실측 | [[scicode]] 53.2%×1.0 |
| 에이전트 | 68.3 | +1.22 | 실측 | [[gdpval]] 1322.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.5 | +1.03 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 68.7 | +1.25 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 66.0 | +1.07 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
