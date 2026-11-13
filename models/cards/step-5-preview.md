---
type: Model
title: Step 5 Preview
creator: StepFun
license: Open
intelligence_index: 29.0
price_blended_usd_1m: 0.54
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.0, z: 0.72, r: 60.8, estimated: false }  # 전문 지식
  reasoning: { s: 52.3, z: 0.44, r: 56.5, estimated: false }  # 추론
  coding: { s: 85.5, z: 1.59, r: 73.9, estimated: false }  # 코딩
  agentic: { s: 88.2, z: 1.8, r: 77.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.4, z: 0.55, r: 58.3, estimated: false }  # 멀티모달
  long_context: { s: 99.5, z: 1.39, r: 70.8, estimated: false }  # 긴문맥
  instruction: { s: 61.1, z: 0.35, r: 55.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 5 Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Step 5 Preview

StepFun · Open · Large · 컨텍스트 1M · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $1.0 · 출력 $2.7 · 혼합 $0.54/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 53.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.8 | +0.72 | 실측 | [[humanitys-last-exam]] 46.5%×0.3 |
| 추론 | 56.5 | +0.44 | 실측 | [[critpt]] 32.5%×1.0, [[humanitys-last-exam]] 46.5%×1.0 |
| 코딩 | 73.9 | +1.59 | 실측 | [[scicode]] 58.9%×1.0 |
| 에이전트 | 77.0 | +1.8 | 실측 | [[apex-agents]] 38.0%×1.0, [[gdpval]] 1592.0%×1.0, [[itbench]] 55.6%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.3 | +0.55 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 70.8 | +1.39 | 실측 | [[aa-lcr]] 88.3%×1.0 |
| 지시 따르기 | 55.2 | +0.35 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
