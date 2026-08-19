---
type: Model
title: GLM-5.2 (max)
creator: Z AI
license: Open
intelligence_index: 53.0
price_blended_usd_1m: 0.902
output_speed_tps: 105.0
context_window: 1000000
status: current
size_class: Large
params_b: 753
is_reasoning: true
radar:
  knowledge: { s: 56.1, z: 0.71, r: 60.6, estimated: false }  # 전문 지식
  reasoning: { s: 77.5, z: 2.06, r: 80.8, estimated: false }  # 추론
  coding: { s: 81.3, z: 1.35, r: 70.2, estimated: false }  # 코딩
  agentic: { s: 78.1, z: 1.62, r: 74.2, estimated: false }  # 에이전트
  trust: { s: 83.7, z: 2.48, r: 87.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.28, r: 69.1, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.28, r: 69.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.2 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# GLM-5.2 (max)

Z AI · Open · Large(753B) · 컨텍스트 1M · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.902/1M · 105.0 t/s · TTFT 1.75s · 1M ctx` · 가성비 58.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.6 | +0.71 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 80.8 | +2.06 | 실측 | [[critpt]] 21.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 70.2 | +1.35 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 51.0%×0.5 |
| 에이전트 | 74.2 | +1.62 | 실측 | [[apex-agents]] 34.0%×1.0, [[gdpval]] 50.0%×1.0, [[itbench]] 43.0%×1.0, [[tau2-bench]] 99.0%×1.0, [[tau3-banking]] 35.0%×1.0, [[terminal-bench]] 51.0%×1.0 |
| 신뢰성 | 87.2 | +2.48 | 실측 | [[aa-omniscience]] 74.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.1 | +1.28 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 69.2 | +1.28 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
