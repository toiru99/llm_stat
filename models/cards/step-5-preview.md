---
type: Model
title: Step 5 Preview
creator: StepFun
license: Open
intelligence_index: 29.0
price_blended_usd_1m: 0.54
output_speed_tps: 179.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.0, z: 1.12, r: 66.8, estimated: false }  # 전문 지식
  reasoning: { s: 60.4, z: 0.66, r: 59.9, estimated: false }  # 추론
  coding: { s: 86.7, z: 1.66, r: 74.8, estimated: false }  # 코딩
  agentic: { s: 88.6, z: 1.87, r: 78.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 83.6, z: 0.57, r: 58.6, estimated: false }  # 멀티모달
  long_context: { s: 98.9, z: 1.4, r: 70.9, estimated: false }  # 긴문맥
  instruction: { s: 63.7, z: 0.46, r: 56.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 5 Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Step 5 Preview

StepFun · Open · Large · 컨텍스트 1M · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $1.0 · 출력 $2.7 · 혼합 $0.54/1M · 179.0 t/s · TTFT 0.89s · 1M ctx` · 가성비 53.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.8 | +1.12 | 실측 | [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 59.9 | +0.66 | 실측 | [[critpt]] 33.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 74.8 | +1.66 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 78.0 | +1.87 | 실측 | [[apex-agents]] 38.0%×1.0, [[gdpval]] 1594.0%×1.0, [[itbench]] 56.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.6 | +0.57 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 70.9 | +1.4 | 실측 | [[aa-lcr]] 88.0%×1.0 |
| 지시 따르기 | 56.9 | +0.46 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
