---
type: Model
title: Qwen3.5 9B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1415
output_speed_tps: 78.55214686687668
context_window: 262144
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.9, z: 0.38, r: 55.7, estimated: false }  # 전문 지식
  reasoning: { s: 33.9, z: -0.07, r: 48.9, estimated: false }  # 추론
  coding: { s: 37.0, z: -0.09, r: 48.6, estimated: false }  # 코딩
  agentic: { s: 43.6, z: -0.04, r: 49.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 73.2, z: 0.1, r: 51.5, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.76, r: 61.4, estimated: false }  # 긴문맥
  instruction: { s: 76.7, z: 0.96, r: 64.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 9B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Qwen3.5 9B

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.135 · 출력 $0.2 · 혼합 $0.1415/1M · 78.55214686687668 t/s · TTFT 5.367850479398517s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.7 | +0.38 | 실측 | [[gpqa-diamond]] 80.60606060606061%×0.4, [[humanitys-last-exam]] 14.921223354958299%×0.3 |
| 추론 | 48.9 | -0.07 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 80.60606060606061%×1.0, [[humanitys-last-exam]] 14.921223354958299%×1.0 |
| 코딩 | 48.6 | -0.09 | 실측 | [[scicode]] 29.5138888888889%×1.0, [[terminal-bench]] 24.2424242424242%×0.5 |
| 에이전트 | 49.5 | -0.04 | 실측 | [[gdpval]] 426.25%×1.0, [[tau2-bench]] 86.8421052631579%×1.0, [[tau3-banking]] 7.01030927835052%×1.0, [[terminal-bench]] 24.2424242424242%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.5 | +0.1 | 실측 | [[mmmu-pro]] 69.2485549132948%×1.0 |
| 긴문맥 | 61.4 | +0.76 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 64.4 | +0.96 | 실측 | [[ifbench]] 66.734693877551%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
