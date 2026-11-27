---
type: Model
title: Llama 3.1 Nemotron 70B
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: 70
is_reasoning: false
radar:
  knowledge: { s: 26.1, z: -1.01, r: 34.9, estimated: false }  # 전문 지식
  reasoning: { s: 15.6, z: -0.97, r: 35.4, estimated: false }  # 추론
  coding: { s: 6.9, z: -1.15, r: 32.7, estimated: false }  # 코딩
  agentic: { s: 15.1, z: -1.13, r: 33.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 9.4, z: -1.48, r: 27.8, estimated: false }  # 긴문맥
  instruction: { s: 26.2, z: -1.01, r: 34.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 Nemotron 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Llama 3.1 Nemotron 70B

NVIDIA · Open · Medium(70B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 34.9 | -1.01 | 실측 | [[gpqa-diamond]] 46.4646%×0.4, [[humanitys-last-exam]] 4.19%×0.3 |
| 추론 | 35.4 | -0.97 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 46.4646%×1.0, [[humanitys-last-exam]] 4.19%×1.0 |
| 코딩 | 32.7 | -1.15 | 실측 | [[terminal-bench]] 4.54545%×0.5 |
| 에이전트 | 33.1 | -1.13 | 실측 | [[tau2-bench]] 23.0994%×1.0, [[terminal-bench]] 4.54545%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.8 | -1.48 | 실측 | [[aa-lcr]] 8.33333%×1.0 |
| 지시 따르기 | 34.9 | -1.01 | 실측 | [[ifbench]] 30.7483%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
