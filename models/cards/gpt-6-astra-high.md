---
type: Model
title: GPT-6 Astra (high)
creator: OpenAI
license: Proprietary
intelligence_index: 51.0
price_blended_usd_1m: 7.7
output_speed_tps: 42.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 92.1, z: 2.29, r: 84.4, estimated: false }  # 전문 지식
  reasoning: { s: 92.0, z: 2.52, r: 87.7, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.47, r: 72.1, estimated: false }  # 코딩
  agentic: { s: 75.2, z: 1.38, r: 70.7, estimated: false }  # 에이전트
  trust: { s: 54.6, z: 1.29, r: 69.3, estimated: false }  # 신뢰성
  multimodal: { s: 97.3, z: 1.29, r: 69.4, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 76.3, z: 0.91, r: 63.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# GPT-6 Astra (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 42.0 t/s · TTFT 83.11s · 1M ctx` · 가성비 6.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 84.4 | +2.29 | 실측 | [[aa-omniscience]] 61.0%×1.0, [[gpqa-diamond]] 95.0%×0.4, [[humanitys-last-exam]] 53.0%×0.3 |
| 추론 | 87.7 | +2.52 | 실측 | [[critpt]] 29.0%×1.0, [[gpqa-diamond]] 95.0%×1.0, [[humanitys-last-exam]] 53.0%×1.0 |
| 코딩 | 72.1 | +1.47 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 70.7 | +1.38 | 실측 | [[gdpval]] 49.0%×1.0, [[tau3-banking]] 40.0%×1.0 |
| 신뢰성 | 69.3 | +1.29 | 실측 | [[aa-omniscience]] 55.0%×1.0 |
| 멀티모달 | 69.4 | +1.29 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 63.7 | +0.91 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
