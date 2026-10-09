---
type: Model
title: GPT-6 Astra (max)
creator: OpenAI
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: 7.7
output_speed_tps: 47.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 94.7, z: 2.42, r: 86.2, estimated: false }  # 전문 지식
  reasoning: { s: 96.7, z: 2.73, r: 90.9, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.53, r: 73.0, estimated: false }  # 코딩
  agentic: { s: 81.4, z: 1.62, r: 74.2, estimated: false }  # 에이전트
  trust: { s: 48.5, z: 1.0, r: 65.0, estimated: false }  # 신뢰성
  multimodal: { s: 98.6, z: 1.36, r: 70.4, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.18, r: 67.7, estimated: false }  # 긴문맥
  instruction: { s: 79.0, z: 1.03, r: 65.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# GPT-6 Astra (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 47.0 t/s · TTFT 383.62s · 1M ctx` · 가성비 6.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 86.2 | +2.42 | 실측 | [[aa-omniscience]] 63.0%×1.0, [[gpqa-diamond]] 96.0%×0.4, [[humanitys-last-exam]] 55.0%×0.3 |
| 추론 | 90.9 | +2.73 | 실측 | [[critpt]] 32.0%×1.0, [[gpqa-diamond]] 96.0%×1.0, [[humanitys-last-exam]] 55.0%×1.0 |
| 코딩 | 73.0 | +1.53 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 74.2 | +1.62 | 실측 | [[gdpval]] 52.0%×1.0, [[itbench]] 49.0%×1.0, [[tau3-banking]] 41.0%×1.0 |
| 신뢰성 | 65.0 | +1.0 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | 70.4 | +1.36 | 실측 | [[mmmu-pro]] 87.0%×1.0 |
| 긴문맥 | 67.7 | +1.18 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 65.4 | +1.03 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
