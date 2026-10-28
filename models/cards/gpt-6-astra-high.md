---
type: Model
title: GPT-6 Astra (high)
creator: OpenAI
license: Proprietary
intelligence_index: 55.0
price_blended_usd_1m: 7.7
output_speed_tps: 63.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 93.6, z: 1.95, r: 79.3, estimated: false }  # 전문 지식
  reasoning: { s: 95.2, z: 2.23, r: 83.5, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.44, r: 71.6, estimated: false }  # 코딩
  agentic: { s: 80.4, z: 1.59, r: 73.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 97.3, z: 1.25, r: 68.8, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.13, r: 66.9, estimated: false }  # 긴문맥
  instruction: { s: 79.0, z: 1.1, r: 66.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# GPT-6 Astra (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **55.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 63.0 t/s · TTFT 43.97s · 1M ctx` · 가성비 7.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.3 | +1.95 | 실측 | [[gpqa-diamond]] 95.0%×0.4, [[humanitys-last-exam]] 53.0%×0.3 |
| 추론 | 83.5 | +2.23 | 실측 | [[critpt]] 72.0%×1.0, [[gpqa-diamond]] 95.0%×1.0, [[humanitys-last-exam]] 53.0%×1.0 |
| 코딩 | 71.6 | +1.44 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 73.9 | +1.59 | 실측 | [[gdpval]] 1537.0%×1.0, [[tau3-banking]] 40.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 68.8 | +1.25 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 66.9 | +1.13 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 66.5 | +1.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
