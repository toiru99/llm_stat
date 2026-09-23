---
type: Model
title: GPT-6 Sol (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: 1.54
output_speed_tps: 114.0
context_window: 872000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.2, z: 1.63, r: 74.5, estimated: false }  # 전문 지식
  reasoning: { s: 72.4, z: 1.72, r: 75.8, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.5, r: 72.4, estimated: false }  # 코딩
  agentic: { s: 61.2, z: 0.9, r: 63.4, estimated: false }  # 에이전트
  trust: { s: 42.3, z: 0.77, r: 61.6, estimated: false }  # 신뢰성
  multimodal: { s: 90.4, z: 1.0, r: 65.0, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 83.9, z: 1.26, r: 68.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# GPT-6 Sol (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 872k · 종합지능 **40.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 114.0 t/s · TTFT 1.96s · 872k ctx` · 가성비 26.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.5 | +1.63 | 실측 | [[aa-omniscience]] 53.0%×1.0, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 75.8 | +1.72 | 실측 | [[critpt]] 25.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 72.4 | +1.5 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 63.4 | +0.9 | 실측 | [[gdpval]] 41.0%×1.0 |
| 신뢰성 | 61.6 | +0.77 | 실측 | [[aa-omniscience]] 43.0%×1.0 |
| 멀티모달 | 65.0 | +1.0 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 68.8 | +1.26 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
