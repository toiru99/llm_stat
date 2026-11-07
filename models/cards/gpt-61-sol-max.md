---
type: Model
title: GPT-6.1 Sol (max)
creator: OpenAI
license: Proprietary
intelligence_index: 55.0
price_blended_usd_1m: 1.47
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.7, z: 1.63, r: 74.4, estimated: false }  # 전문 지식
  reasoning: { s: 91.9, z: 2.07, r: 81.0, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.37, r: 70.6, estimated: false }  # 코딩
  agentic: { s: 86.2, z: 1.78, r: 76.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.24, r: 68.6, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.22, r: 68.4, estimated: false }  # 긴문맥
  instruction: { s: 80.6, z: 1.15, r: 67.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-07
timestamp: 2026-11-07T00:00:00Z
---

# GPT-6.1 Sol (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **55.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 37.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.4 | +1.63 | 실측 | [[humanitys-last-exam]] 53.0%×0.3 |
| 추론 | 81.0 | +2.07 | 실측 | [[critpt]] 70.0%×1.0, [[humanitys-last-exam]] 53.0%×1.0 |
| 코딩 | 70.6 | +1.37 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 76.7 | +1.78 | 실측 | [[gdpval]] 1609.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 68.6 | +1.24 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 68.4 | +1.22 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 67.3 | +1.15 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
