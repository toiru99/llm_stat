---
type: Model
title: GPT-6 Luna (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 9.0
price_blended_usd_1m: 0.077
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 12.4, z: -1.63, r: 25.6, estimated: false }  # 전문 지식
  reasoning: { s: 9.7, z: -1.61, r: 25.9, estimated: false }  # 추론
  coding: { s: 60.3, z: 0.77, r: 61.5, estimated: false }  # 코딩
  agentic: { s: 56.4, z: 0.75, r: 61.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.5, z: -0.4, r: 44.0, estimated: false }  # 멀티모달
  long_context: { s: 44.8, z: -0.24, r: 46.4, estimated: false }  # 긴문맥
  instruction: { s: 43.3, z: -0.41, r: 43.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# GPT-6 Luna (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 116.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 25.6 | -1.63 | 실측 | [[humanitys-last-exam]] 8.6%×0.3 |
| 추론 | 25.9 | -1.61 | 실측 | [[critpt]] 5.0%×1.0, [[humanitys-last-exam]] 8.6%×1.0 |
| 코딩 | 61.5 | +0.77 | 실측 | [[scicode]] 43.1%×1.0 |
| 에이전트 | 61.3 | +0.75 | 실측 | [[gdpval]] 1052.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.0 | -0.4 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 46.4 | -0.24 | 실측 | [[aa-lcr]] 39.7%×1.0 |
| 지시 따르기 | 43.8 | -0.41 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
