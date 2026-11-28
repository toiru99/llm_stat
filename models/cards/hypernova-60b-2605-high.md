---
type: Model
title: HyperNova 60B 2605 (high)
creator: Multiverse Computing
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131072
status: current
size_class: Medium
params_b: 58.7
is_reasoning: true
radar:
  knowledge: { s: 51.1, z: 0.21, r: 53.2, estimated: false }  # 전문 지식
  reasoning: { s: 32.4, z: -0.14, r: 47.9, estimated: false }  # 추론
  coding: { s: 35.6, z: -0.18, r: 47.3, estimated: false }  # 코딩
  agentic: { s: 36.8, z: -0.36, r: 44.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 41.0, z: -0.51, r: 42.3, estimated: false }  # 긴문맥
  instruction: { s: 76.3, z: 1.08, r: 66.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — HyperNova 60B 2605 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# HyperNova 60B 2605 (high)

Multiverse Computing · Open · Medium(58.7B) · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 53.2 | +0.21 | 실측 | [[gpqa-diamond]] 73.3333%×0.4, [[humanitys-last-exam]] 16.6358%×0.3 |
| 추론 | 47.9 | -0.14 | 실측 | [[critpt]] 0.857143%×1.0, [[gpqa-diamond]] 73.3333%×1.0, [[humanitys-last-exam]] 16.6358%×1.0 |
| 코딩 | 47.3 | -0.18 | 실측 | [[terminal-bench]] 23.4848%×0.5 |
| 에이전트 | 44.5 | -0.36 | 실측 | [[gdpval]] 448.27 Elo×1.0, [[tau2-bench]] 63.1579%×1.0, [[tau3-banking]] 5.56701%×1.0, [[terminal-bench]] 23.4848%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.3 | -0.51 | 실측 | [[aa-lcr]] 36.3333%×1.0 |
| 지시 따르기 | 66.1 | +1.08 | 실측 | [[ifbench]] 66.4626%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
