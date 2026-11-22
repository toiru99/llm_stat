---
type: Model
title: Nemotron 3 Ultra
creator: NVIDIA
license: Open
intelligence_index: 11.7592726308177
price_blended_usd_1m: 0.417
output_speed_tps: 218.1223002902265
context_window: 262144
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.8, z: 0.94, r: 64.1, estimated: false }  # 전문 지식
  reasoning: { s: 45.0, z: 0.46, r: 57.0, estimated: false }  # 추론
  coding: { s: 55.0, z: 0.51, r: 57.6, estimated: false }  # 코딩
  agentic: { s: 57.3, z: 0.43, r: 56.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 97.2, z: 1.81, r: 77.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Ultra
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Nemotron 3 Ultra

NVIDIA · Open · Large · 컨텍스트 262k · 종합지능 **11.7592726308177**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.55 · 출력 $2.3 · 혼합 $0.417/1M · 218.1223002902265 t/s · TTFT 1.367927229059055s · 262k ctx` · 가성비 28.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.1 | +0.94 | 실측 | [[gpqa-diamond]] 86.6666666666667%×0.4, [[humanitys-last-exam]] 28.405931417979602%×0.3 |
| 추론 | 57.0 | +0.46 | 실측 | [[critpt]] 3.14285714285714%×1.0, [[gpqa-diamond]] 86.6666666666667%×1.0, [[humanitys-last-exam]] 28.405931417979602%×1.0 |
| 코딩 | 57.6 | +0.51 | 실측 | [[scicode]] 40.2777777777778%×1.0, [[terminal-bench]] 36.363636363636395%×0.5 |
| 에이전트 | 56.4 | +0.43 | 실측 | [[gdpval]] 1019.96%×1.0, [[tau2-bench]] 83.3333333333333%×1.0, [[tau3-banking]] 14.2268041237113%×1.0, [[terminal-bench]] 36.363636363636395%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 79.3333333333333%×1.0 |
| 지시 따르기 | 77.2 | +1.81 | 실측 | [[ifbench]] 81.3605442176871%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
