---
type: Model
title: North Mini Code
creator: Cohere
license: Open
intelligence_index: 3.42470262148493
price_blended_usd_1m: 0
output_speed_tps: 201.193180286541
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.4, z: 0.1, r: 51.5, estimated: false }  # 전문 지식
  reasoning: { s: 30.2, z: -0.26, r: 46.0, estimated: false }  # 추론
  coding: { s: 50.6, z: 0.36, r: 55.4, estimated: false }  # 코딩
  agentic: { s: 32.2, z: -0.44, r: 43.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 42.1, z: -0.34, r: 44.9, estimated: false }  # 긴문맥
  instruction: { s: 63.8, z: 0.42, r: 56.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — North Mini Code
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# North Mini Code

Cohere · Open · Small · 컨텍스트 256k · 종합지능 **3.42470262148493**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 201.193180286541 t/s · TTFT 0.648936846619278s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.5 | +0.1 | 실측 | [[gpqa-diamond]] 75.6565656565657%×0.4, [[humanitys-last-exam]] 11.0750695088044%×0.3 |
| 추론 | 46.0 | -0.26 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 75.6565656565657%×1.0, [[humanitys-last-exam]] 11.0750695088044%×1.0 |
| 코딩 | 55.4 | +0.36 | 실측 | [[scicode]] 38.7731481481481%×1.0, [[terminal-bench]] 31.060606060606098%×0.5 |
| 에이전트 | 43.4 | -0.44 | 실측 | [[gdpval]] 318.29%×1.0, [[tau2-bench]] 37.4269005847953%×1.0, [[tau3-banking]] 6.39175257731959%×1.0, [[terminal-bench]] 31.060606060606098%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.9 | -0.34 | 실측 | [[aa-lcr]] 37.3333333333333%×1.0 |
| 지시 따르기 | 56.2 | +0.42 | 실측 | [[ifbench]] 57.5510204081633%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
