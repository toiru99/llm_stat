---
type: Model
title: Llama Nemotron Super 49B v1.5
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: 49
is_reasoning: true
radar:
  knowledge: { s: 46.7, z: -0.01, r: 49.9, estimated: false }  # 전문 지식
  reasoning: { s: 27.9, z: -0.36, r: 44.6, estimated: false }  # 추론
  coding: { s: 8.0, z: -1.11, r: 33.3, estimated: false }  # 코딩
  agentic: { s: 18.2, z: -1.02, r: 34.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: 35.0, z: -0.64, r: 40.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama Nemotron Super 49B v1.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Llama Nemotron Super 49B v1.5

NVIDIA · Open · Medium(49B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 49.9 | -0.01 | 실측 | [[gpqa-diamond]] 74.8485%×0.4, [[humanitys-last-exam]] 7.32159%×0.3 |
| 추론 | 44.6 | -0.36 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 74.8485%×1.0, [[humanitys-last-exam]] 7.32159%×1.0 |
| 코딩 | 33.3 | -1.11 | 실측 | [[terminal-bench]] 5.30303%×0.5 |
| 에이전트 | 34.7 | -1.02 | 실측 | [[tau2-bench]] 28.0702%×1.0, [[terminal-bench]] 5.30303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | 40.3 | -0.64 | 실측 | [[ifbench]] 37.0068%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
