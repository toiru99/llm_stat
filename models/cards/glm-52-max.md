---
type: Model
title: GLM-5.2 (max)
creator: Z AI
license: Open
intelligence_index: 53.0
price_blended_usd_1m: 0.8602
output_speed_tps: 130.0
context_window: 1000000
status: current
size_class: Large
params_b: 753
is_reasoning: true
radar:
  knowledge: { s: 56.3, z: 0.75, r: 61.2, estimated: false }  # 전문 지식
  reasoning: { s: 77.9, z: 2.13, r: 82.0, estimated: false }  # 추론
  coding: { s: 81.3, z: 1.41, r: 71.2, estimated: false }  # 코딩
  agentic: { s: 78.1, z: 1.68, r: 75.3, estimated: false }  # 에이전트
  trust: { s: 83.7, z: 2.63, r: 89.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.32, r: 69.8, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.33, r: 70.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.2 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-10
timestamp: 2026-08-10T00:00:00Z
---

# GLM-5.2 (max)

Z AI · Open · Large(753B) · 컨텍스트 1M · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $1.35 · 출력 $4.29 · 혼합 $0.8602/1M · 130.0 t/s · TTFT 1.4s · 1M ctx` · 가성비 61.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.2 | +0.75 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 82.0 | +2.13 | 실측 | [[critpt]] 21.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 71.2 | +1.41 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 51.0%×0.5 |
| 에이전트 | 75.3 | +1.68 | 실측 | [[apex-agents]] 34.0%×1.0, [[gdpval]] 50.0%×1.0, [[itbench]] 43.0%×1.0, [[tau2-bench]] 99.0%×1.0, [[tau3-banking]] 35.0%×1.0, [[terminal-bench]] 51.0%×1.0 |
| 신뢰성 | 89.5 | +2.63 | 실측 | [[aa-omniscience]] 74.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.8 | +1.32 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 70.0 | +1.33 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
