---
type: Model
title: GPT-6 Astra (high)
creator: OpenAI
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: 7.7
output_speed_tps: 63.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 92.6, z: 2.49, r: 87.4, estimated: false }  # 전문 지식
  reasoning: { s: 93.0, z: 2.79, r: 91.9, estimated: false }  # 추론
  coding: { s: 83.7, z: 1.8, r: 77.0, estimated: false }  # 코딩
  agentic: { s: 79.7, z: 1.62, r: 74.3, estimated: false }  # 에이전트
  trust: { s: 54.6, z: 1.42, r: 71.3, estimated: false }  # 신뢰성
  multimodal: { s: 98.6, z: 1.41, r: 71.1, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.26, r: 68.8, estimated: false }  # 긴문맥
  instruction: { s: 78.1, z: 1.06, r: 65.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# GPT-6 Astra (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 63.0 t/s · TTFT 94.97s · 1M ctx` · 가성비 6.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 87.4 | +2.49 | 실측 | [[aa-omniscience]] 61.0%×1.0, [[gpqa-diamond]] 95.0%×0.4, [[humanitys-last-exam]] 53.0%×0.3 |
| 추론 | 91.9 | +2.79 | 실측 | [[critpt]] 29.0%×1.0, [[gpqa-diamond]] 95.0%×1.0, [[humanitys-last-exam]] 53.0%×1.0 |
| 코딩 | 77.0 | +1.8 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 74.3 | +1.62 | 실측 | [[gdpval]] 52.0%×1.0, [[tau3-banking]] 40.0%×1.0 |
| 신뢰성 | 71.3 | +1.42 | 실측 | [[aa-omniscience]] 55.0%×1.0 |
| 멀티모달 | 71.1 | +1.41 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 68.8 | +1.26 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 65.9 | +1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
