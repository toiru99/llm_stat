---
type: Model
title: GPT-6 Sol (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 1.54
output_speed_tps: 70.0
context_window: 872000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.3, z: 1.72, r: 75.7, estimated: false }  # 전문 지식
  reasoning: { s: 81.2, z: 2.06, r: 80.8, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.52, r: 72.7, estimated: false }  # 코딩
  agentic: { s: 70.1, z: 1.22, r: 68.3, estimated: false }  # 에이전트
  trust: { s: 40.2, z: 0.65, r: 59.8, estimated: false }  # 신뢰성
  multimodal: { s: 91.8, z: 1.05, r: 65.7, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 82.5, z: 1.19, r: 67.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# GPT-6 Sol (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 872k · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 70.0 t/s · TTFT 50.61s · 872k ctx` · 가성비 28.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.7 | +1.72 | 실측 | [[aa-omniscience]] 54.0%×1.0, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 80.8 | +2.06 | 실측 | [[critpt]] 28.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 72.7 | +1.52 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 68.3 | +1.22 | 실측 | [[gdpval]] 47.0%×1.0 |
| 신뢰성 | 59.8 | +0.65 | 실측 | [[aa-omniscience]] 41.0%×1.0 |
| 멀티모달 | 65.7 | +1.05 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 67.8 | +1.19 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
