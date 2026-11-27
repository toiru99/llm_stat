---
type: Model
title: Step 5 Preview
creator: StepFun
license: Open
intelligence_index: 28.5161663448339
price_blended_usd_1m: 0.54
output_speed_tps: 77.031750424047
context_window: 1000000
status: current
size_class: Large
params_b: 600
is_reasoning: true
radar:
  knowledge: { s: 62.0, z: 0.74, r: 61.1, estimated: false }  # 전문 지식
  reasoning: { s: 60.2, z: 1.24, r: 68.7, estimated: false }  # 추론
  coding: { s: 85.5, z: 1.5, r: 72.5, estimated: false }  # 코딩
  agentic: { s: 87.9, z: 1.43, r: 71.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.5, z: 0.57, r: 58.5, estimated: false }  # 멀티모달
  long_context: { s: 99.6, z: 1.28, r: 69.3, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 5 Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Step 5 Preview

StepFun · Open · Large(600B) · 컨텍스트 1M · 종합지능 **28.5161663448339**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $2.7 · 혼합 $0.54/1M · 77.031750424047 t/s · TTFT 21.0393636112166s · 1M ctx` · 가성비 52.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 61.1 | +0.74 | 실측 | [[humanitys-last-exam]] 46.4782%×0.3 |
| 추론 | 68.7 | +1.24 | 실측 | [[critpt]] 20.8571%×1.0, [[humanitys-last-exam]] 46.4782%×1.0 |
| 코딩 | 72.5 | +1.5 | 실측 | [[scicode]] 58.912%×1.0 |
| 에이전트 | 71.5 | +1.43 | 실측 | [[gdpval]] 1590.99 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.5 | +0.57 | 실측 | [[mmmu-pro]] 76.3584%×1.0 |
| 긴문맥 | 69.3 | +1.28 | 실측 | [[aa-lcr]] 88.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
