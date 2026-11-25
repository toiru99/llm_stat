---
type: Model
title: Qwen3.5 4B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: current
size_class: Small
params_b: 4.7
is_reasoning: false
radar:
  knowledge: { s: 44.6, z: -0.1, r: 48.4, estimated: false }  # 전문 지식
  reasoning: { s: 26.8, z: -0.41, r: 43.8, estimated: false }  # 추론
  coding: { s: 17.2, z: -0.8, r: 38.0, estimated: false }  # 코딩
  agentic: { s: 37.9, z: -0.32, r: 45.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.5, z: -0.41, r: 43.9, estimated: false }  # 멀티모달
  long_context: { s: 39.1, z: -0.57, r: 41.5, estimated: false }  # 긴문맥
  instruction: { s: 29.7, z: -0.86, r: 37.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 4B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Qwen3.5 4B (non-reasoning)

Alibaba · Open · Small(4.7B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 48.4 | -0.1 | 실측 | [[gpqa-diamond]] 71.2121%×0.4, [[humanitys-last-exam]] 7.97034%×0.3 |
| 추론 | 43.8 | -0.41 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 71.2121%×1.0, [[humanitys-last-exam]] 7.97034%×1.0 |
| 코딩 | 38.0 | -0.8 | 실측 | [[terminal-bench]] 11.3636%×0.5 |
| 에이전트 | 45.2 | -0.32 | 실측 | [[tau2-bench]] 87.7193%×1.0, [[tau3-banking]] 4.3299%×1.0, [[terminal-bench]] 11.3636%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 43.9 | -0.41 | 실측 | [[mmmu-pro]] 62.0809%×1.0 |
| 긴문맥 | 41.5 | -0.57 | 실측 | [[aa-lcr]] 34.6667%×1.0 |
| 지시 따르기 | 37.1 | -0.86 | 실측 | [[ifbench]] 33.2653%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
