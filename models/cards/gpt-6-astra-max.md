---
type: Model
title: GPT-6 Astra (max)
creator: OpenAI
license: Proprietary
intelligence_index: 57.0
price_blended_usd_1m: 7.7
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 95.1, z: 2.02, r: 80.3, estimated: false }  # 전문 지식
  reasoning: { s: 95.5, z: 2.25, r: 83.7, estimated: false }  # 추론
  coding: { s: 82.7, z: 1.51, r: 72.6, estimated: false }  # 코딩
  agentic: { s: 83.9, z: 1.7, r: 75.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 97.3, z: 1.3, r: 69.6, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 78.1, z: 1.07, r: 66.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# GPT-6 Astra (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **57.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 7.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.3 | +2.02 | 실측 | [[gpqa-diamond]] 96.1%×0.4, [[humanitys-last-exam]] 54.7%×0.3 |
| 추론 | 83.7 | +2.25 | 실측 | [[critpt]] 70.5%×1.0, [[gpqa-diamond]] 96.1%×1.0, [[humanitys-last-exam]] 54.7%×1.0 |
| 코딩 | 72.6 | +1.51 | 실측 | [[scicode]] 56.5%×1.0 |
| 에이전트 | 75.4 | +1.7 | 실측 | [[gdpval]] 1584.0%×1.0, [[itbench]] 48.6%×1.0, [[tau3-banking]] 41.4%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 69.6 | +1.3 | 실측 | [[mmmu-pro]] 87.0%×1.0 |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 80.7%×1.0 |
| 지시 따르기 | 66.1 | +1.07 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
