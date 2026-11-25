---
type: Model
title: Qwen3.5 0.8B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: current
size_class: Tiny
params_b: 0.9
is_reasoning: false
radar:
  knowledge: { s: 11.5, z: -1.71, r: 24.3, estimated: false }  # 전문 지식
  reasoning: { s: 7.2, z: -1.39, r: 29.1, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 22.5, z: -0.87, r: 37.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 14.9, z: -2.89, r: 6.7, estimated: false }  # 멀티모달
  long_context: { s: 9.0, z: -1.49, r: 27.6, estimated: false }  # 긴문맥
  instruction: { s: 13.3, z: -1.55, r: 26.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 0.8B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Qwen3.5 0.8B (non-reasoning)

Alibaba · Open · Tiny(0.9B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 24.3 | -1.71 | 실측 | [[gpqa-diamond]] 23.6364%×0.4, [[humanitys-last-exam]] 5.09731%×0.3 |
| 추론 | 29.1 | -1.39 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 23.6364%×1.0, [[humanitys-last-exam]] 5.09731%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 37.0 | -0.87 | 실측 | [[gdpval]] -362.95 Elo×1.0, [[tau2-bench]] 65.2047%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 6.7 | -2.89 | 실측 | [[mmmu-pro]] 25.6647%×1.0 |
| 긴문맥 | 27.6 | -1.49 | 실측 | [[aa-lcr]] 8%×1.0 |
| 지시 따르기 | 26.8 | -1.55 | 실측 | [[ifbench]] 21.5646%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
