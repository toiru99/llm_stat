---
type: Model
title: Llama Nemotron Super 49B v1.5 (non-reasoning)
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
  knowledge: { s: 27.2, z: -0.95, r: 35.7, estimated: false }  # 전문 지식
  reasoning: { s: 16.2, z: -0.94, r: 35.9, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.19, r: 32.1, estimated: false }  # 코딩
  agentic: { s: 15.6, z: -1.11, r: 33.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 27.8, z: -0.92, r: 36.3, estimated: false }  # 긴문맥
  instruction: { s: 29.2, z: -0.88, r: 36.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama Nemotron Super 49B v1.5 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Llama Nemotron Super 49B v1.5 (non-reasoning)

NVIDIA · Open · Medium(49B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 35.7 | -0.95 | 실측 | [[gpqa-diamond]] 48.0808%×0.4, [[humanitys-last-exam]] 4.30955%×0.3 |
| 추론 | 35.9 | -0.94 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 48.0808%×1.0, [[humanitys-last-exam]] 4.30955%×1.0 |
| 코딩 | 32.1 | -1.19 | 실측 | [[terminal-bench]] 3.78788%×0.5 |
| 에이전트 | 33.3 | -1.11 | 실측 | [[tau2-bench]] 25.1462%×1.0, [[terminal-bench]] 3.78788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.3 | -0.92 | 실측 | [[aa-lcr]] 24.6667%×1.0 |
| 지시 따르기 | 36.8 | -0.88 | 실측 | [[ifbench]] 32.9252%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
