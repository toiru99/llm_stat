---
type: Model
title: GPT-6 Luna (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 30.0
price_blended_usd_1m: 0.077
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.8, z: 0.79, r: 61.9, estimated: false }  # 전문 지식
  reasoning: { s: 39.7, z: 0.14, r: 52.1, estimated: false }  # 추론
  coding: { s: 73.3, z: 1.25, r: 68.7, estimated: false }  # 코딩
  agentic: { s: 55.9, z: 0.64, r: 59.6, estimated: false }  # 에이전트
  trust: { s: 13.4, z: -0.62, r: 40.7, estimated: false }  # 신뢰성
  multimodal: { s: 86.3, z: 0.74, r: 61.1, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.08, r: 66.2, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.14, r: 67.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# GPT-6 Luna (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 389.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.9 | +0.79 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 52.1 | +0.14 | 실측 | [[critpt]] 11.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 68.7 | +1.25 | 실측 | [[scicode]] 51.0%×1.0 |
| 에이전트 | 59.6 | +0.64 | 실측 | [[gdpval]] 38.0%×1.0 |
| 신뢰성 | 40.7 | -0.62 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 61.1 | +0.74 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 66.2 | +1.08 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 67.1 | +1.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
