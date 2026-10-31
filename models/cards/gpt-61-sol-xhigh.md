---
type: Model
title: GPT-6.1 Sol (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 52.0
price_blended_usd_1m: 1.47
output_speed_tps: 71.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.7, z: 1.64, r: 74.6, estimated: false }  # 전문 지식
  reasoning: { s: 90.6, z: 2.03, r: 80.4, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.49, r: 72.4, estimated: false }  # 코딩
  agentic: { s: 83.3, z: 1.69, r: 75.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.19, r: 67.8, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.13, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: 79.7, z: 1.13, r: 66.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# GPT-6.1 Sol (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **52.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 71.0 t/s · TTFT 126.08s · 1M ctx` · 가성비 35.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.6 | +1.64 | 실측 | [[humanitys-last-exam]] 53.0%×0.3 |
| 추론 | 80.4 | +2.03 | 실측 | [[critpt]] 68.0%×1.0, [[humanitys-last-exam]] 53.0%×1.0 |
| 코딩 | 72.4 | +1.49 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 75.3 | +1.69 | 실측 | [[gdpval]] 1555.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.8 | +1.19 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 67.0 | +1.13 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 66.9 | +1.13 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
