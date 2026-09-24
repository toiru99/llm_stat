---
type: Model
title: GPT-6 Astra (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: 7.7
output_speed_tps: 45.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 91.8, z: 2.37, r: 85.6, estimated: false }  # 전문 지식
  reasoning: { s: 91.7, z: 2.64, r: 89.5, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.5, r: 72.5, estimated: false }  # 코딩
  agentic: { s: 70.1, z: 1.25, r: 68.7, estimated: false }  # 에이전트
  trust: { s: 52.6, z: 1.26, r: 68.9, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.28, r: 69.2, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.2, r: 68.0, estimated: false }  # 긴문맥
  instruction: { s: 79.1, z: 1.06, r: 65.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# GPT-6 Astra (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 45.0 t/s · TTFT 6.08s · 1M ctx` · 가성비 6.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 85.6 | +2.37 | 실측 | [[aa-omniscience]] 61.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 53.0%×0.3 |
| 추론 | 89.5 | +2.64 | 실측 | [[critpt]] 29.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 53.0%×1.0 |
| 코딩 | 72.5 | +1.5 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 68.7 | +1.25 | 실측 | [[gdpval]] 48.0%×1.0, [[tau3-banking]] 35.0%×1.0 |
| 신뢰성 | 68.9 | +1.26 | 실측 | [[aa-omniscience]] 53.0%×1.0 |
| 멀티모달 | 69.2 | +1.28 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 68.0 | +1.2 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 65.9 | +1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
