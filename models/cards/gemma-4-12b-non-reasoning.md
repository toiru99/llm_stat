---
type: Model
title: Gemma 4 12B (non-reasoning)
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: current
size_class: Small
params_b: 12
is_reasoning: false
radar:
  knowledge: { s: 40.3, z: -0.32, r: 45.3, estimated: false }  # 전문 지식
  reasoning: { s: 24.1, z: -0.55, r: 41.8, estimated: false }  # 추론
  coding: { s: 17.2, z: -0.8, r: 38.0, estimated: false }  # 코딩
  agentic: { s: 24.7, z: -0.79, r: 38.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.3, z: -0.41, r: 43.8, estimated: false }  # 멀티모달
  long_context: { s: 39.5, z: -0.56, r: 41.6, estimated: false }  # 긴문맥
  instruction: { s: 46.4, z: -0.17, r: 47.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 12B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Gemma 4 12B (non-reasoning)

Google · Open · Small(12B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 45.3 | -0.32 | 실측 | [[gpqa-diamond]] 66.0606%×0.4, [[humanitys-last-exam]] 6.34847%×0.3 |
| 추론 | 41.8 | -0.55 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 66.0606%×1.0, [[humanitys-last-exam]] 6.34847%×1.0 |
| 코딩 | 38.0 | -0.8 | 실측 | [[terminal-bench]] 11.3636%×0.5 |
| 에이전트 | 38.1 | -0.79 | 실측 | [[tau2-bench]] 31.8713%×1.0, [[terminal-bench]] 11.3636%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 43.8 | -0.41 | 실측 | [[mmmu-pro]] 61.9653%×1.0 |
| 긴문맥 | 41.6 | -0.56 | 실측 | [[aa-lcr]] 35%×1.0 |
| 지시 따르기 | 47.5 | -0.17 | 실측 | [[ifbench]] 45.1701%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
