---
type: Model
title: North Mini Code
creator: Cohere
license: Open
intelligence_index: 3.37419757097988
price_blended_usd_1m: 0
output_speed_tps: 275.049920003099
context_window: 256000
status: current
size_class: Small
params_b: 30
is_reasoning: true
radar:
  knowledge: { s: 49.4, z: 0.13, r: 51.9, estimated: false }  # 전문 지식
  reasoning: { s: 30.2, z: -0.25, r: 46.3, estimated: false }  # 추론
  coding: { s: 50.6, z: 0.32, r: 54.8, estimated: false }  # 코딩
  agentic: { s: 32.2, z: -0.53, r: 42.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 42.1, z: -0.48, r: 42.8, estimated: false }  # 긴문맥
  instruction: { s: 63.8, z: 0.56, r: 58.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — North Mini Code
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# North Mini Code

Cohere · Open · Small(30B) · 컨텍스트 256k · 종합지능 **3.37419757097988**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 275.049920003099 t/s · TTFT 0.612715878483605s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 51.9 | +0.13 | 실측 | [[gpqa-diamond]] 75.6566%×0.4, [[humanitys-last-exam]] 11.0751%×0.3 |
| 추론 | 46.3 | -0.25 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 75.6566%×1.0, [[humanitys-last-exam]] 11.0751%×1.0 |
| 코딩 | 54.8 | +0.32 | 실측 | [[scicode]] 38.7731%×1.0, [[terminal-bench]] 31.0606%×0.5 |
| 에이전트 | 42.1 | -0.53 | 실측 | [[gdpval]] 318.31 Elo×1.0, [[tau2-bench]] 37.4269%×1.0, [[tau3-banking]] 6.39175%×1.0, [[terminal-bench]] 31.0606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.8 | -0.48 | 실측 | [[aa-lcr]] 37.3333%×1.0 |
| 지시 따르기 | 58.3 | +0.56 | 실측 | [[ifbench]] 57.551%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
