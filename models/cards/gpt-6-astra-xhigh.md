---
type: Model
title: GPT-6 Astra (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 54.0
price_blended_usd_1m: 7.7
output_speed_tps: 81.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 94.4, z: 2.58, r: 88.7, estimated: false }  # 전문 지식
  reasoning: { s: 96.7, z: 2.97, r: 94.5, estimated: false }  # 추론
  coding: { s: 85.7, z: 1.88, r: 78.3, estimated: false }  # 코딩
  agentic: { s: 83.4, z: 1.76, r: 76.4, estimated: false }  # 에이전트
  trust: { s: 51.5, z: 1.28, r: 69.2, estimated: false }  # 신뢰성
  multimodal: { s: 98.6, z: 1.41, r: 71.1, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.25, r: 68.8, estimated: false }  # 긴문맥
  instruction: { s: 75.6, z: 0.96, r: 64.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GPT-6 Astra (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **54.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 81.0 t/s · TTFT 309.53s · 1M ctx` · 가성비 7.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 88.7 | +2.58 | 실측 | [[aa-omniscience]] 62.0%×1.0, [[gpqa-diamond]] 96.0%×0.4, [[humanitys-last-exam]] 55.0%×0.3 |
| 추론 | 94.5 | +2.97 | 실측 | [[critpt]] 31.0%×1.0, [[gpqa-diamond]] 96.0%×1.0, [[humanitys-last-exam]] 55.0%×1.0 |
| 코딩 | 78.3 | +1.88 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 76.4 | +1.76 | 실측 | [[gdpval]] 53.0%×1.0, [[tau3-banking]] 43.0%×1.0 |
| 신뢰성 | 69.2 | +1.28 | 실측 | [[aa-omniscience]] 52.0%×1.0 |
| 멀티모달 | 71.1 | +1.41 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 68.8 | +1.25 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 64.5 | +0.96 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
