---
type: Model
title: Qwen3.5 0.8B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Tiny
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 11.5, z: -1.71, r: 24.3, estimated: false }  # 전문 지식
  reasoning: { s: 10.7, z: -1.59, r: 26.1, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.27, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 9.7, z: -0.86, r: 37.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 14.9, z: -2.86, r: 7.1, estimated: false }  # 멀티모달
  long_context: { s: 9.0, z: -1.32, r: 30.2, estimated: false }  # 긴문맥
  instruction: { s: 13.3, z: -1.7, r: 24.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 0.8B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Qwen3.5 0.8B (non-reasoning)

Alibaba · Open · Tiny · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 24.3 | -1.71 | 실측 | [[gpqa-diamond]] 23.6%×0.4, [[humanitys-last-exam]] 5.1%×0.3 |
| 추론 | 26.1 | -1.59 | 실측 | [[gpqa-diamond]] 23.6%×1.0, [[humanitys-last-exam]] 5.1%×1.0 |
| 코딩 | 31.0 | -1.27 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 37.2 | -0.86 | 실측 | [[gdpval]] 363.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 7.1 | -2.86 | 실측 | [[mmmu-pro]] 26.0%×1.0 |
| 긴문맥 | 30.2 | -1.32 | 실측 | [[aa-lcr]] 8.0%×1.0 |
| 지시 따르기 | 24.5 | -1.7 | 실측 | [[ifbench]] 21.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
