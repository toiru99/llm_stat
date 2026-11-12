---
type: Model
title: Qwen3.5 122B A10B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.68
output_speed_tps: None
context_window: 262000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 56.8, z: 0.48, r: 57.2, estimated: false }  # 전문 지식
  reasoning: { s: 52.2, z: 0.45, r: 56.7, estimated: false }  # 추론
  coding: { s: 44.8, z: 0.24, r: 53.6, estimated: false }  # 코딩
  agentic: { s: 34.3, z: -0.02, r: 49.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.3, z: 0.15, r: 52.2, estimated: false }  # 멀티모달
  long_context: { s: 69.1, z: 0.48, r: 57.2, estimated: false }  # 긴문맥
  instruction: { s: 54.4, z: 0.07, r: 51.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 122B A10B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Qwen3.5 122B A10B (non-reasoning)

Alibaba · Open · Medium · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $0.4 · 출력 $3.2 · 혼합 $0.68/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.2 | +0.48 | 실측 | [[gpqa-diamond]] 82.7%×0.4, [[humanitys-last-exam]] 15.9%×0.3 |
| 추론 | 56.7 | +0.45 | 실측 | [[gpqa-diamond]] 82.7%×1.0, [[humanitys-last-exam]] 15.9%×1.0 |
| 코딩 | 53.6 | +0.24 | 실측 | [[terminal-bench]] 29.5%×0.5 |
| 에이전트 | 49.8 | -0.02 | 실측 | [[gdpval]] 716.0%×1.0, [[tau3-banking]] 10.3%×1.0, [[terminal-bench]] 29.5%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.2 | +0.15 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 57.2 | +0.48 | 실측 | [[aa-lcr]] 61.3%×1.0 |
| 지시 따르기 | 51.0 | +0.07 | 실측 | [[ifbench]] 50.8%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
