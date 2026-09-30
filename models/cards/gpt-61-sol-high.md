---
type: Model
title: GPT-6.1 Sol (high)
creator: OpenAI
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: 1.47
output_speed_tps: 65.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 89.3, z: 2.18, r: 82.7, estimated: false }  # 전문 지식
  reasoning: { s: 88.5, z: 2.39, r: 85.8, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.57, r: 73.6, estimated: false }  # 코딩
  agentic: { s: 73.1, z: 1.34, r: 70.0, estimated: false }  # 에이전트
  trust: { s: 50.5, z: 1.14, r: 67.0, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.25, r: 68.8, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.24, r: 68.6, estimated: false }  # 긴문맥
  instruction: { s: 77.6, z: 0.98, r: 64.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# GPT-6.1 Sol (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 65.0 t/s · TTFT 57.61s · 1M ctx` · 가성비 34.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.7 | +2.18 | 실측 | [[aa-omniscience]] 61.0%×1.0, [[humanitys-last-exam]] 51.0%×0.3 |
| 추론 | 85.8 | +2.39 | 실측 | [[critpt]] 30.0%×1.0, [[humanitys-last-exam]] 51.0%×1.0 |
| 코딩 | 73.6 | +1.57 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 70.0 | +1.34 | 실측 | [[gdpval]] 49.0%×1.0 |
| 신뢰성 | 67.0 | +1.14 | 실측 | [[aa-omniscience]] 51.0%×1.0 |
| 멀티모달 | 68.8 | +1.25 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 68.6 | +1.24 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 64.7 | +0.98 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
