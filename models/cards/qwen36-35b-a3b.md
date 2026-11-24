---
type: Model
title: Qwen3.6 35B A3B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.5625
output_speed_tps: 98.5100920551508
context_window: 262144
status: current
size_class: Small
params_b: 36
is_reasoning: true
radar:
  knowledge: { s: 61.5, z: 0.72, r: 60.8, estimated: false }  # 전문 지식
  reasoning: { s: 38.6, z: 0.17, r: 52.5, estimated: false }  # 추론
  coding: { s: 50.1, z: 0.31, r: 54.6, estimated: false }  # 코딩
  agentic: { s: 56.0, z: 0.32, r: 54.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 80.7, z: 0.48, r: 57.1, estimated: false }  # 멀티모달
  long_context: { s: 80.8, z: 0.71, r: 60.6, estimated: false }  # 긴문맥
  instruction: { s: 73.4, z: 0.95, r: 64.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 35B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Qwen3.6 35B A3B

Alibaba · Open · Small(36B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 추론

## 실용 지표
`입력 $0.375 · 출력 $2.25 · 혼합 $0.5625/1M · 98.5100920551508 t/s · TTFT 3.27625328145035s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 60.8 | +0.72 | 실측 | [[gpqa-diamond]] 84.1414%×0.4, [[humanitys-last-exam]] 22.2428%×0.3 |
| 추론 | 52.5 | +0.17 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 84.1414%×1.0, [[humanitys-last-exam]] 22.2428%×1.0 |
| 코딩 | 54.6 | +0.31 | 실측 | [[scicode]] 36.5741%×1.0, [[terminal-bench]] 34.8485%×0.5 |
| 에이전트 | 54.7 | +0.32 | 실측 | [[gdpval]] 898.85 Elo×1.0, [[tau2-bench]] 95.3216%×1.0, [[tau3-banking]] 9.27835%×1.0, [[terminal-bench]] 34.8485%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.1 | +0.48 | 실측 | [[mmmu-pro]] 75.0289%×1.0 |
| 긴문맥 | 60.6 | +0.71 | 실측 | [[aa-lcr]] 71.6667%×1.0 |
| 지시 따르기 | 64.3 | +0.95 | 실측 | [[ifbench]] 64.3537%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
