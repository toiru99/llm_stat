---
type: Model
title: GPT-6 Astra (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 51.5548393864113
price_blended_usd_1m: 7.7
output_speed_tps: 45.66844273693559
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.9, z: 1.87, r: 78.1, estimated: false }  # 전문 지식
  reasoning: { s: 83.2, z: 2.37, r: 85.5, estimated: false }  # 추론
  coding: { s: 77.7, z: 1.29, r: 69.4, estimated: false }  # 코딩
  agentic: { s: 76.4, z: 1.1, r: 66.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 94.4, z: 1.18, r: 67.8, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: 82.5, z: 1.21, r: 68.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-6 Astra (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.5548393864113**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 45.66844273693559 t/s · TTFT 6.098423933835417s · 1M ctx` · 가성비 6.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.1 | +1.87 | 실측 | [[gpqa-diamond]] 93.9393939393939%×0.4, [[humanitys-last-exam]] 52.73401297497679%×0.3 |
| 추론 | 85.5 | +2.37 | 실측 | [[critpt]] 29.1428571428571%×1.0, [[gpqa-diamond]] 93.9393939393939%×1.0, [[humanitys-last-exam]] 52.73401297497679%×1.0 |
| 코딩 | 69.4 | +1.29 | 실측 | [[scicode]] 54.1666666666667%×1.0 |
| 에이전트 | 66.6 | +1.1 | 실측 | [[gdpval]] 1501.45%×1.0, [[tau3-banking]] 35.4639175257732%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.8 | +1.18 | 실측 | [[mmmu-pro]] 85.08670520231209%×1.0 |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 79.6666666666667%×1.0 |
| 지시 따르기 | 68.1 | +1.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
