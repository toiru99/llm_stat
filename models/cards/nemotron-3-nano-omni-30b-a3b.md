---
type: Model
title: Nemotron 3 Nano Omni 30B A3B
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Small
params_b: 30
is_reasoning: true
radar:
  knowledge: { s: 26.7, z: -0.98, r: 35.4, estimated: false }  # 전문 지식
  reasoning: { s: 16.0, z: -0.95, r: 35.7, estimated: false }  # 추론
  coding: { s: 12.6, z: -0.96, r: 35.6, estimated: false }  # 코딩
  agentic: { s: 28.8, z: -0.64, r: 40.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 51.6, z: -1.01, r: 34.8, estimated: false }  # 멀티모달
  long_context: { s: 44.7, z: -0.4, r: 44.0, estimated: false }  # 긴문맥
  instruction: { s: 71.7, z: 0.89, r: 63.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano Omni 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Nemotron 3 Nano Omni 30B A3B

NVIDIA · Open · Small(30B) · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 35.4 | -0.98 | 실측 | [[gpqa-diamond]] 46.8687%×0.4, [[humanitys-last-exam]] 4.81928%×0.3 |
| 추론 | 35.7 | -0.95 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 46.8687%×1.0, [[humanitys-last-exam]] 4.81928%×1.0 |
| 코딩 | 35.6 | -0.96 | 실측 | [[terminal-bench]] 8.33333%×0.5 |
| 에이전트 | 40.3 | -0.64 | 실측 | [[gdpval]] 236.61 Elo×1.0, [[tau2-bench]] 45.3216%×1.0, [[terminal-bench]] 8.33333%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 34.8 | -1.01 | 실측 | [[mmmu-pro]] 53.1792%×1.0 |
| 긴문맥 | 44.0 | -0.4 | 실측 | [[aa-lcr]] 39.6667%×1.0 |
| 지시 따르기 | 63.3 | +0.89 | 실측 | [[ifbench]] 63.1973%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
