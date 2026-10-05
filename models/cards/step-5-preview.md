---
type: Model
title: Step 5 Preview
creator: StepFun
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 0.505
output_speed_tps: 86.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.5, z: 1.06, r: 65.9, estimated: false }  # 전문 지식
  reasoning: { s: 70.3, z: 1.54, r: 73.0, estimated: false }  # 추론
  coding: { s: 86.7, z: 1.72, r: 75.8, estimated: false }  # 코딩
  agentic: { s: 86.5, z: 1.82, r: 77.3, estimated: false }  # 에이전트
  trust: { s: 56.7, z: 1.4, r: 71.0, estimated: false }  # 신뢰성
  multimodal: { s: 83.6, z: 0.61, r: 59.1, estimated: false }  # 멀티모달
  long_context: { s: 98.9, z: 1.43, r: 71.4, estimated: false }  # 긴문맥
  instruction: { s: 77.0, z: 0.94, r: 64.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 5 Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# Step 5 Preview

StepFun · Proprietary · Large · 컨텍스트 1M · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $2.7 · 혼합 $0.505/1M · 86.0 t/s · TTFT 3.07s · 1M ctx` · 가성비 87.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.9 | +1.06 | 실측 | [[aa-omniscience]] 42.0%×1.0, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 73.0 | +1.54 | 실측 | [[critpt]] 21.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 75.8 | +1.72 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 77.3 | +1.82 | 실측 | [[apex-agents]] 38.0%×1.0, [[gdpval]] 53.0%×1.0, [[itbench]] 56.0%×1.0 |
| 신뢰성 | 71.0 | +1.4 | 실측 | [[aa-omniscience]] 57.0%×1.0 |
| 멀티모달 | 59.1 | +0.61 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 71.4 | +1.43 | 실측 | [[aa-lcr]] 88.0%×1.0 |
| 지시 따르기 | 64.2 | +0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
