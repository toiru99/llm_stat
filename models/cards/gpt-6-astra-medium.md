---
type: Model
title: GPT-6 Astra (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 52.0
price_blended_usd_1m: 7.7
output_speed_tps: 79.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 92.4, z: 2.48, r: 87.2, estimated: false }  # 전문 지식
  reasoning: { s: 92.7, z: 2.77, r: 91.6, estimated: false }  # 추론
  coding: { s: 81.6, z: 1.74, r: 76.1, estimated: false }  # 코딩
  agentic: { s: 73.3, z: 1.37, r: 70.6, estimated: false }  # 에이전트
  trust: { s: 52.6, z: 1.33, r: 70.0, estimated: false }  # 신뢰성
  multimodal: { s: 97.2, z: 1.34, r: 70.1, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.25, r: 68.8, estimated: false }  # 긴문맥
  instruction: { s: 76.6, z: 1.01, r: 65.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GPT-6 Astra (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **52.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 79.0 t/s · TTFT 24.55s · 1M ctx` · 가성비 6.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 87.2 | +2.48 | 실측 | [[aa-omniscience]] 61.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 53.0%×0.3 |
| 추론 | 91.6 | +2.77 | 실측 | [[critpt]] 29.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 53.0%×1.0 |
| 코딩 | 76.1 | +1.74 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 70.6 | +1.37 | 실측 | [[gdpval]] 50.0%×1.0, [[tau3-banking]] 35.0%×1.0 |
| 신뢰성 | 70.0 | +1.33 | 실측 | [[aa-omniscience]] 53.0%×1.0 |
| 멀티모달 | 70.1 | +1.34 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 68.8 | +1.25 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 65.1 | +1.01 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
