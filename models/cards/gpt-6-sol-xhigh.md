---
type: Model
title: GPT-6 Sol (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 1.54
output_speed_tps: 103.0
context_window: 872000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.3, z: 1.78, r: 76.7, estimated: false }  # 전문 지식
  reasoning: { s: 81.2, z: 2.15, r: 82.2, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.56, r: 73.4, estimated: false }  # 코딩
  agentic: { s: 70.1, z: 1.25, r: 68.7, estimated: false }  # 에이전트
  trust: { s: 40.2, z: 0.68, r: 60.2, estimated: false }  # 신뢰성
  multimodal: { s: 91.8, z: 1.07, r: 66.1, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.23, r: 68.5, estimated: false }  # 긴문맥
  instruction: { s: 79.4, z: 1.08, r: 66.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# GPT-6 Sol (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 872k · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 103.0 t/s · TTFT 46.52s · 872k ctx` · 가성비 28.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.7 | +1.78 | 실측 | [[aa-omniscience]] 54.0%×1.0, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 82.2 | +2.15 | 실측 | [[critpt]] 28.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 73.4 | +1.56 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 68.7 | +1.25 | 실측 | [[gdpval]] 47.0%×1.0 |
| 신뢰성 | 60.2 | +0.68 | 실측 | [[aa-omniscience]] 41.0%×1.0 |
| 멀티모달 | 66.1 | +1.07 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 68.5 | +1.23 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 66.1 | +1.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
