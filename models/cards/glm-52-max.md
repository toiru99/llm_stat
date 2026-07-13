---
type: Model
title: GLM-5.2 (max)
creator: Z AI
license: Open
intelligence_index: 51.0
price_blended_usd_1m: 0.9
output_speed_tps: 206.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.9, z: 0.9, r: 63.5, estimated: false }  # 전문 지식
  reasoning: { s: 78.2, z: 2.37, r: 85.5, estimated: false }  # 추론
  coding: { s: 81.3, z: 1.5, r: 72.5, estimated: false }  # 코딩
  agentic: { s: 81.4, z: 1.76, r: 76.4, estimated: false }  # 에이전트
  trust: { s: 83.5, z: 2.61, r: 89.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.4, z: 1.34, r: 70.0, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.38, r: 70.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.2 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-13
timestamp: 2026-07-13T00:00:00Z
---

# GLM-5.2 (max)

Z AI · Open · Unknown · 컨텍스트 1M · 종합지능 **51.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.9/1M · 206.0 t/s · TTFT 1.43s · 1M ctx` · 가성비 56.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.5 | +0.9 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 85.5 | +2.37 | 실측 | [[critpt]] 21.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 72.5 | +1.5 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 51.0%×0.5 |
| 에이전트 | 76.4 | +1.76 | 실측 | [[apex-agents]] 34.0%×1.0, [[gdpval]] 51.0%×1.0, [[itbench]] 43.0%×1.0, [[tau2-bench]] 99.0%×1.0, [[tau3-banking]] 27.0%×1.0, [[terminal-bench]] 51.0%×1.0 |
| 신뢰성 | 89.1 | +2.61 | 실측 | [[aa-omniscience]] 72.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.0 | +1.34 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 70.7 | +1.38 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
