---
type: Model
title: GPT-6.1 Sol (low)
creator: OpenAI
license: Proprietary
intelligence_index: 42.0
price_blended_usd_1m: 1.47
output_speed_tps: 47.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.4, z: 1.98, r: 79.8, estimated: false }  # 전문 지식
  reasoning: { s: 77.4, z: 1.85, r: 77.8, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.36, r: 70.4, estimated: false }  # 코딩
  agentic: { s: 58.8, z: 0.75, r: 61.3, estimated: false }  # 에이전트
  trust: { s: 47.4, z: 0.96, r: 64.3, estimated: false }  # 신뢰성
  multimodal: { s: 93.2, z: 1.08, r: 66.3, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.28, r: 69.2, estimated: false }  # 긴문맥
  instruction: { s: 83.9, z: 1.23, r: 68.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# GPT-6.1 Sol (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 47.0 t/s · TTFT 2.8s · 1M ctx` · 가성비 28.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.8 | +1.98 | 실측 | [[aa-omniscience]] 59.0%×1.0, [[humanitys-last-exam]] 47.0%×0.3 |
| 추론 | 77.8 | +1.85 | 실측 | [[critpt]] 25.0%×1.0, [[humanitys-last-exam]] 47.0%×1.0 |
| 코딩 | 70.4 | +1.36 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 61.3 | +0.75 | 실측 | [[gdpval]] 40.0%×1.0 |
| 신뢰성 | 64.3 | +0.96 | 실측 | [[aa-omniscience]] 48.0%×1.0 |
| 멀티모달 | 66.3 | +1.08 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 69.2 | +1.28 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 68.4 | +1.23 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
