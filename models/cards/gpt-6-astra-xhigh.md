---
type: Model
title: GPT-6 Astra (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 55.0
price_blended_usd_1m: 7.7
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 95.7, z: 2.03, r: 80.4, estimated: false }  # 전문 지식
  reasoning: { s: 96.2, z: 2.26, r: 83.9, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.49, r: 72.3, estimated: false }  # 코딩
  agentic: { s: 84.2, z: 1.71, r: 75.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.24, r: 68.6, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: 77.0, z: 1.0, r: 65.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-07
timestamp: 2026-11-07T00:00:00Z
---

# GPT-6 Astra (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **55.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 7.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.4 | +2.03 | 실측 | [[gpqa-diamond]] 96.0%×0.4, [[humanitys-last-exam]] 55.0%×0.3 |
| 추론 | 83.9 | +2.26 | 실측 | [[critpt]] 71.0%×1.0, [[gpqa-diamond]] 96.0%×1.0, [[humanitys-last-exam]] 55.0%×1.0 |
| 코딩 | 72.3 | +1.49 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 75.6 | +1.71 | 실측 | [[gdpval]] 1569.0%×1.0, [[tau3-banking]] 43.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 68.6 | +1.24 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 65.1 | +1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
