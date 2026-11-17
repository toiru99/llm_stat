---
type: Model
title: Step 5 Preview
creator: StepFun
license: Open
intelligence_index: 28.5283090216016
price_blended_usd_1m: 0.54
output_speed_tps: 130.0884745058369
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.0, z: 0.72, r: 60.8, estimated: false }  # 전문 지식
  reasoning: { s: 60.2, z: 1.23, r: 68.5, estimated: false }  # 추론
  coding: { s: 85.5, z: 1.56, r: 73.4, estimated: false }  # 코딩
  agentic: { s: 87.9, z: 1.5, r: 72.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.8, z: 0.59, r: 58.8, estimated: false }  # 멀티모달
  long_context: { s: 99.6, z: 1.38, r: 70.6, estimated: false }  # 긴문맥
  instruction: { s: 68.1, z: 0.6, r: 59.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 5 Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Step 5 Preview

StepFun · Open · Large · 컨텍스트 1M · 종합지능 **28.5283090216016**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $2.7 · 혼합 $0.54/1M · 130.0884745058369 t/s · TTFT 0.8736641965866813s · 1M ctx` · 가성비 52.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.8 | +0.72 | 실측 | [[humanitys-last-exam]] 46.4782205746061%×0.3 |
| 추론 | 68.5 | +1.23 | 실측 | [[critpt]] 20.8571428571429%×1.0, [[humanitys-last-exam]] 46.4782205746061%×1.0 |
| 코딩 | 73.4 | +1.56 | 실측 | [[scicode]] 58.912037037037%×1.0 |
| 에이전트 | 72.5 | +1.5 | 실측 | [[gdpval]] 1590.7%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.8 | +0.59 | 실측 | [[mmmu-pro]] 76.35838150289021%×1.0 |
| 긴문맥 | 70.6 | +1.38 | 실측 | [[aa-lcr]] 88.3333333333333%×1.0 |
| 지시 따르기 | 59.0 | +0.6 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
