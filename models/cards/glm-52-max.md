---
type: Model
title: GLM-5.2 (max)
creator: Z AI
license: Open
intelligence_index: 51.0
price_blended_usd_1m: 0.8602
output_speed_tps: 148.0
context_window: 1000000
status: current
size_class: Large
params_b: 753
is_reasoning: true
radar:
  knowledge: { s: 58.9, z: 0.82, r: 62.3, estimated: false }  # 전문 지식
  reasoning: { s: 78.2, z: 2.17, r: 82.6, estimated: false }  # 추론
  coding: { s: 81.3, z: 1.41, r: 71.1, estimated: false }  # 코딩
  agentic: { s: 77.2, z: 1.66, r: 74.8, estimated: false }  # 에이전트
  trust: { s: 81.6, z: 2.42, r: 86.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.4, z: 1.29, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.35, r: 70.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.2 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# GLM-5.2 (max)

Z AI · Open · Large(753B) · 컨텍스트 1M · 종합지능 **51.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $1.35 · 출력 $4.29 · 혼합 $0.8602/1M · 148.0 t/s · TTFT 1.48s · 1M ctx` · 가성비 59.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.3 | +0.82 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 82.6 | +2.17 | 실측 | [[critpt]] 21.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 71.1 | +1.41 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 51.0%×0.5 |
| 에이전트 | 74.8 | +1.66 | 실측 | [[apex-agents]] 34.0%×1.0, [[gdpval]] 50.0%×1.0, [[itbench]] 43.0%×1.0, [[tau2-bench]] 99.0%×1.0, [[tau3-banking]] 27.0%×1.0, [[terminal-bench]] 51.0%×1.0 |
| 신뢰성 | 86.3 | +2.42 | 실측 | [[aa-omniscience]] 72.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.4 | +1.29 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 70.2 | +1.35 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
