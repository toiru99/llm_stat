---
type: Model
title: GPT-6 Luna (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 9.0
price_blended_usd_1m: 0.077
output_speed_tps: 116.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 13.3, z: -1.59, r: 26.1, estimated: false }  # 전문 지식
  reasoning: { s: 10.1, z: -1.61, r: 25.8, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.77, r: 61.5, estimated: false }  # 코딩
  agentic: { s: 56.4, z: 0.76, r: 61.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 64.4, z: -0.38, r: 44.3, estimated: false }  # 멀티모달
  long_context: { s: 44.9, z: -0.22, r: 46.7, estimated: false }  # 긴문맥
  instruction: { s: 42.4, z: -0.44, r: 43.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# GPT-6 Luna (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 116.0 t/s · TTFT 0.89s · 1M ctx` · 가성비 116.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 26.1 | -1.59 | 실측 | [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 25.8 | -1.61 | 실측 | [[critpt]] 5.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 61.5 | +0.77 | 실측 | [[scicode]] 43.0%×1.0 |
| 에이전트 | 61.5 | +0.76 | 실측 | [[gdpval]] 1052.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.3 | -0.38 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 46.7 | -0.22 | 실측 | [[aa-lcr]] 40.0%×1.0 |
| 지시 따르기 | 43.5 | -0.44 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
