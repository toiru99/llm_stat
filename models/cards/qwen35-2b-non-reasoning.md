---
type: Model
title: Qwen3.5 2B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: current
size_class: Tiny
params_b: 2.3
is_reasoning: false
radar:
  knowledge: { s: 24.8, z: -1.07, r: 34.0, estimated: false }  # 전문 지식
  reasoning: { s: 14.9, z: -1.01, r: 34.9, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.19, r: 32.1, estimated: false }  # 코딩
  agentic: { s: 30.0, z: -0.6, r: 40.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 37.5, z: -1.73, r: 24.1, estimated: false }  # 멀티모달
  long_context: { s: 15.8, z: -1.29, r: 30.7, estimated: false }  # 긴문맥
  instruction: { s: 23.9, z: -1.1, r: 33.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 2B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Qwen3.5 2B (non-reasoning)

Alibaba · Open · Tiny(2.3B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 34.0 | -1.07 | 실측 | [[gpqa-diamond]] 43.8384%×0.4, [[humanitys-last-exam]] 4.95829%×0.3 |
| 추론 | 34.9 | -1.01 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 43.8384%×1.0, [[humanitys-last-exam]] 4.95829%×1.0 |
| 코딩 | 32.1 | -1.19 | 실측 | [[terminal-bench]] 3.78788%×0.5 |
| 에이전트 | 40.9 | -0.6 | 실측 | [[gdpval]] -359.71 Elo×1.0, [[tau2-bench]] 81.5789%×1.0, [[terminal-bench]] 3.78788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 24.1 | -1.73 | 실측 | [[mmmu-pro]] 42.659%×1.0 |
| 긴문맥 | 30.7 | -1.29 | 실측 | [[aa-lcr]] 14%×1.0 |
| 지시 따르기 | 33.4 | -1.1 | 실측 | [[ifbench]] 29.1156%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
