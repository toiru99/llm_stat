---
type: Model
title: Step 5 Preview
creator: StepFun
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 0.505
output_speed_tps: 79.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.5, z: 1.13, r: 66.9, estimated: false }  # 전문 지식
  reasoning: { s: 70.3, z: 1.63, r: 74.5, estimated: false }  # 추론
  coding: { s: 86.7, z: 1.79, r: 76.8, estimated: false }  # 코딩
  agentic: { s: 79.1, z: 1.59, r: 73.8, estimated: false }  # 에이전트
  trust: { s: 56.7, z: 1.45, r: 71.8, estimated: false }  # 신뢰성
  multimodal: { s: 83.6, z: 0.66, r: 59.9, estimated: false }  # 멀티모달
  long_context: { s: 98.9, z: 1.47, r: 72.1, estimated: false }  # 긴문맥
  instruction: { s: 76.3, z: 0.94, r: 64.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 5 Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# Step 5 Preview

StepFun · Proprietary · Large · 컨텍스트 1M · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $2.7 · 혼합 $0.505/1M · 79.0 t/s · TTFT 3.0s · 1M ctx` · 가성비 87.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.9 | +1.13 | 실측 | [[aa-omniscience]] 42.0%×1.0, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 74.5 | +1.63 | 실측 | [[critpt]] 21.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 76.8 | +1.79 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 73.8 | +1.59 | 실측 | [[gdpval]] 53.0%×1.0 |
| 신뢰성 | 71.8 | +1.45 | 실측 | [[aa-omniscience]] 57.0%×1.0 |
| 멀티모달 | 59.9 | +0.66 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 72.1 | +1.47 | 실측 | [[aa-lcr]] 88.0%×1.0 |
| 지시 따르기 | 64.1 | +0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
