---
type: Model
title: GPT-6 Luna (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 29.0
price_blended_usd_1m: 0.077
output_speed_tps: 143.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.8, z: 0.85, r: 62.8, estimated: false }  # 전문 지식
  reasoning: { s: 39.7, z: 0.18, r: 52.8, estimated: false }  # 추론
  coding: { s: 73.3, z: 1.32, r: 69.9, estimated: false }  # 코딩
  agentic: { s: 53.7, z: 0.61, r: 59.1, estimated: false }  # 에이전트
  trust: { s: 13.4, z: -0.57, r: 41.4, estimated: false }  # 신뢰성
  multimodal: { s: 79.5, z: 0.45, r: 56.8, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.12, r: 66.9, estimated: false }  # 긴문맥
  instruction: { s: 76.4, z: 0.94, r: 64.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# GPT-6 Luna (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 143.0 t/s · TTFT 5.28s · 1M ctx` · 가성비 376.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.8 | +0.85 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 52.8 | +0.18 | 실측 | [[critpt]] 11.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 69.9 | +1.32 | 실측 | [[scicode]] 51.0%×1.0 |
| 에이전트 | 59.1 | +0.61 | 실측 | [[gdpval]] 36.0%×1.0 |
| 신뢰성 | 41.4 | -0.57 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 56.8 | +0.45 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 66.9 | +1.12 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 64.1 | +0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
