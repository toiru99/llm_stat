---
type: Model
title: GPT-6 Sol (max)
creator: OpenAI
license: Proprietary
intelligence_index: 48.0
price_blended_usd_1m: 1.54
output_speed_tps: 89.0
context_window: 872000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.1, z: 1.82, r: 77.3, estimated: false }  # 전문 지식
  reasoning: { s: 87.6, z: 2.45, r: 86.7, estimated: false }  # 추론
  coding: { s: 85.0, z: 1.73, r: 75.9, estimated: false }  # 코딩
  agentic: { s: 80.2, z: 1.63, r: 74.5, estimated: false }  # 에이전트
  trust: { s: 39.2, z: 0.63, r: 59.5, estimated: false }  # 신뢰성
  multimodal: { s: 93.2, z: 1.14, r: 67.2, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.33, r: 70.0, estimated: false }  # 긴문맥
  instruction: { s: 81.1, z: 1.14, r: 67.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# GPT-6 Sol (max)

OpenAI · Proprietary · Unknown · 컨텍스트 872k · 종합지능 **48.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 89.0 t/s · TTFT 138.06s · 872k ctx` · 가성비 31.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.3 | +1.82 | 실측 | [[aa-omniscience]] 54.0%×1.0, [[humanitys-last-exam]] 48.0%×0.3 |
| 추론 | 86.7 | +2.45 | 실측 | [[critpt]] 31.0%×1.0, [[humanitys-last-exam]] 48.0%×1.0 |
| 코딩 | 75.9 | +1.73 | 실측 | [[scicode]] 58.0%×1.0 |
| 에이전트 | 74.5 | +1.63 | 실측 | [[gdpval]] 49.0%×1.0, [[itbench]] 49.0%×1.0 |
| 신뢰성 | 59.5 | +0.63 | 실측 | [[aa-omniscience]] 40.0%×1.0 |
| 멀티모달 | 67.2 | +1.14 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 70.0 | +1.33 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 67.1 | +1.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
