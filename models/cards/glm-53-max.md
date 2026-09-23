---
type: Model
title: GLM-5.3 (max)
creator: Z AI
license: Open
intelligence_index: 45.0
price_blended_usd_1m: 0.902
output_speed_tps: 57.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.3, z: 1.07, r: 66.0, estimated: false }  # 전문 지식
  reasoning: { s: 74.4, z: 1.81, r: 77.2, estimated: false }  # 추론
  coding: { s: 86.7, z: 1.78, r: 76.8, estimated: false }  # 코딩
  agentic: { s: 91.6, z: 2.06, r: 80.9, estimated: false }  # 에이전트
  trust: { s: 70.1, z: 2.07, r: 81.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.19, r: 67.9, estimated: false }  # 긴문맥
  instruction: { s: 76.9, z: 0.96, r: 64.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.3 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# GLM-5.3 (max)

Z AI · Open · Large · 컨텍스트 1M · 종합지능 **45.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.902/1M · 57.0 t/s · TTFT 3.28s · 1M ctx` · 가성비 49.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.0 | +1.07 | 실측 | [[aa-omniscience]] 34.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 77.2 | +1.81 | 실측 | [[critpt]] 19.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 76.8 | +1.78 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 80.9 | +2.06 | 실측 | [[gdpval]] 57.0%×1.0, [[tau3-banking]] 50.0%×1.0 |
| 신뢰성 | 81.0 | +2.07 | 실측 | [[aa-omniscience]] 70.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.9 | +1.19 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 64.5 | +0.96 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
