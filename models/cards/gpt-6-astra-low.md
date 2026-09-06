---
type: Model
title: GPT-6 Astra (low)
creator: OpenAI
license: Proprietary
intelligence_index: 49.0
price_blended_usd_1m: 7.7
output_speed_tps: 61.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 90.0, z: 2.36, r: 85.5, estimated: false }  # 전문 지식
  reasoning: { s: 86.8, z: 2.49, r: 87.4, estimated: false }  # 추론
  coding: { s: 81.6, z: 1.73, r: 75.9, estimated: false }  # 코딩
  agentic: { s: 67.3, z: 1.14, r: 67.1, estimated: false }  # 에이전트
  trust: { s: 52.6, z: 1.33, r: 69.9, estimated: false }  # 신뢰성
  multimodal: { s: 97.2, z: 1.34, r: 70.1, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.26, r: 68.8, estimated: false }  # 긴문맥
  instruction: { s: 80.2, z: 1.15, r: 67.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# GPT-6 Astra (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **49.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 61.0 t/s · TTFT 2.49s · 1M ctx` · 가성비 6.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 85.5 | +2.36 | 실측 | [[aa-omniscience]] 60.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 49.0%×0.3 |
| 추론 | 87.4 | +2.49 | 실측 | [[critpt]] 26.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 49.0%×1.0 |
| 코딩 | 75.9 | +1.73 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 67.1 | +1.14 | 실측 | [[gdpval]] 46.0%×1.0, [[tau3-banking]] 32.0%×1.0 |
| 신뢰성 | 69.9 | +1.33 | 실측 | [[aa-omniscience]] 53.0%×1.0 |
| 멀티모달 | 70.1 | +1.34 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 68.8 | +1.26 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 67.2 | +1.15 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
