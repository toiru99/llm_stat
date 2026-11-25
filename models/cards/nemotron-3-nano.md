---
type: Model
title: Nemotron 3 Nano
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: 0.065
output_speed_tps: 168.444235995448
context_window: 1000000
status: current
size_class: Small
params_b: 31.6
is_reasoning: true
radar:
  knowledge: { s: 49.6, z: 0.14, r: 52.0, estimated: false }  # 전문 지식
  reasoning: { s: 30.9, z: -0.21, r: 46.8, estimated: false }  # 추론
  coding: { s: 32.8, z: -0.28, r: 45.8, estimated: false }  # 코딩
  agentic: { s: 25.6, z: -0.76, r: 38.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 42.9, z: -0.45, r: 43.2, estimated: false }  # 긴문맥
  instruction: { s: 82.8, z: 1.35, r: 70.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Nemotron 3 Nano

NVIDIA · Open · Small(31.6B) · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.05 · 출력 $0.2 · 혼합 $0.065/1M · 168.444235995448 t/s · TTFT 1.25069981922443s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 52.0 | +0.14 | 실측 | [[gpqa-diamond]] 75.6566%×0.4, [[humanitys-last-exam]] 11.3994%×0.3 |
| 추론 | 46.8 | -0.21 | 실측 | [[critpt]] 0.857143%×1.0, [[gpqa-diamond]] 75.6566%×1.0, [[humanitys-last-exam]] 11.3994%×1.0 |
| 코딩 | 45.8 | -0.28 | 실측 | [[scicode]] 30.5556%×1.0, [[terminal-bench]] 13.6364%×0.5 |
| 에이전트 | 38.7 | -0.76 | 실측 | [[gdpval]] 262.01 Elo×1.0, [[tau2-bench]] 40.9357%×1.0, [[tau3-banking]] 5.97938%×1.0, [[terminal-bench]] 13.6364%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.2 | -0.45 | 실측 | [[aa-lcr]] 38%×1.0 |
| 지시 따르기 | 70.2 | +1.35 | 실측 | [[ifbench]] 71.0884%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
