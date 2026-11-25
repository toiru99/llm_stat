---
type: Model
title: Nemotron Cascade 2 30B A3B
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Small
params_b: 31.6
is_reasoning: true
radar:
  knowledge: { s: 50.0, z: 0.16, r: 52.3, estimated: false }  # 전문 지식
  reasoning: { s: 30.9, z: -0.21, r: 46.9, estimated: false }  # 추론
  coding: { s: 32.2, z: -0.3, r: 45.5, estimated: false }  # 코딩
  agentic: { s: 38.5, z: -0.3, r: 45.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 44.4, z: -0.41, r: 43.9, estimated: false }  # 긴문맥
  instruction: { s: 95.9, z: 1.89, r: 78.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron Cascade 2 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Nemotron Cascade 2 30B A3B

NVIDIA · Open · Small(31.6B) · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 52.3 | +0.16 | 실측 | [[gpqa-diamond]] 75.7576%×0.4, [[humanitys-last-exam]] 12.0019%×0.3 |
| 추론 | 46.9 | -0.21 | 실측 | [[critpt]] 0.571429%×1.0, [[gpqa-diamond]] 75.7576%×1.0, [[humanitys-last-exam]] 12.0019%×1.0 |
| 코딩 | 45.5 | -0.3 | 실측 | [[terminal-bench]] 21.2121%×0.5 |
| 에이전트 | 45.5 | -0.3 | 실측 | [[gdpval]] 271.98 Elo×1.0, [[tau2-bench]] 53.2164%×1.0, [[terminal-bench]] 21.2121%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.9 | -0.41 | 실측 | [[aa-lcr]] 39.3333%×1.0 |
| 지시 따르기 | 78.3 | +1.89 | 실측 | [[ifbench]] 80.4082%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
