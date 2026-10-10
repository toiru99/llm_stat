---
type: Model
title: GPT-6.1 Sol (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 51.0
price_blended_usd_1m: 1.47
output_speed_tps: 53.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 90.0, z: 2.2, r: 83.0, estimated: false }  # 전문 지식
  reasoning: { s: 93.3, z: 2.57, r: 88.6, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.53, r: 73.0, estimated: false }  # 코딩
  agentic: { s: 75.0, z: 1.37, r: 70.6, estimated: false }  # 에이전트
  trust: { s: 48.5, z: 1.0, r: 65.0, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.22, r: 68.3, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 78.8, z: 1.02, r: 65.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# GPT-6.1 Sol (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 53.0 t/s · TTFT 151.52s · 1M ctx` · 가성비 34.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 83.0 | +2.2 | 실측 | [[aa-omniscience]] 61.0%×1.0, [[humanitys-last-exam]] 53.0%×0.3 |
| 추론 | 88.6 | +2.57 | 실측 | [[critpt]] 32.0%×1.0, [[humanitys-last-exam]] 53.0%×1.0 |
| 코딩 | 73.0 | +1.53 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 70.6 | +1.37 | 실측 | [[gdpval]] 51.0%×1.0 |
| 신뢰성 | 65.0 | +1.0 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | 68.3 | +1.22 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 65.3 | +1.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
