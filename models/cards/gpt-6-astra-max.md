---
type: Model
title: GPT-6 Astra (max)
creator: OpenAI
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: 7.7
output_speed_tps: 62.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 95.3, z: 2.62, r: 89.3, estimated: false }  # 전문 지식
  reasoning: { s: 97.7, z: 3.01, r: 95.2, estimated: false }  # 추론
  coding: { s: 85.7, z: 1.82, r: 77.3, estimated: false }  # 코딩
  agentic: { s: 83.1, z: 1.74, r: 76.1, estimated: false }  # 에이전트
  trust: { s: 48.5, z: 1.12, r: 66.7, estimated: false }  # 신뢰성
  multimodal: { s: 100.0, z: 1.48, r: 72.2, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.29, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: 78.0, z: 1.05, r: 65.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-08
timestamp: 2026-09-08T00:00:00Z
---

# GPT-6 Astra (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 62.0 t/s · TTFT 322.48s · 1M ctx` · 가성비 6.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 89.3 | +2.62 | 실측 | [[aa-omniscience]] 63.0%×1.0, [[gpqa-diamond]] 96.0%×0.4, [[humanitys-last-exam]] 55.0%×0.3 |
| 추론 | 95.2 | +3.01 | 실측 | [[critpt]] 32.0%×1.0, [[gpqa-diamond]] 96.0%×1.0, [[humanitys-last-exam]] 55.0%×1.0 |
| 코딩 | 77.3 | +1.82 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 76.1 | +1.74 | 실측 | [[gdpval]] 54.0%×1.0, [[tau3-banking]] 41.0%×1.0 |
| 신뢰성 | 66.7 | +1.12 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | 72.2 | +1.48 | 실측 | [[mmmu-pro]] 87.0%×1.0 |
| 긴문맥 | 69.4 | +1.29 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 65.8 | +1.05 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
