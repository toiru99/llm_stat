---
type: Model
title: Llama 3.3 Nemotron Super 49B (non-reasoning)
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: 49
is_reasoning: false
radar:
  knowledge: { s: 29.3, z: -0.85, r: 37.3, estimated: false }  # 전문 지식
  reasoning: { s: 17.4, z: -0.88, r: 36.8, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.66, r: 25.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 13.5, z: -1.35, r: 29.7, estimated: false }  # 긴문맥
  instruction: { s: 38.4, z: -0.5, r: 42.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.3 Nemotron Super 49B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Llama 3.3 Nemotron Super 49B (non-reasoning)

NVIDIA · Open · Medium(49B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 37.3 | -0.85 | 실측 | [[gpqa-diamond]] 51.7172%×0.4, [[humanitys-last-exam]] 3.81%×0.3 |
| 추론 | 36.8 | -0.88 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 51.7172%×1.0, [[humanitys-last-exam]] 3.81%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 25.1 | -1.66 | 실측 | [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.7 | -1.35 | 실측 | [[aa-lcr]] 12%×1.0 |
| 지시 따르기 | 42.5 | -0.5 | 실측 | [[ifbench]] 39.4558%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
