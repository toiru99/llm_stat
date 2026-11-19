---
type: Model
title: Gemma 4 E2B (non-reasoning)
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 22.4, z: -1.2, r: 32.0, estimated: false }  # 전문 지식
  reasoning: { s: 13.5, z: -1.09, r: 33.7, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.24, r: 31.4, estimated: false }  # 코딩
  agentic: { s: 12.9, z: -1.1, r: 33.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 36.4, z: -1.79, r: 23.2, estimated: false }  # 멀티모달
  long_context: { s: 18.4, z: -1.04, r: 34.3, estimated: false }  # 긴문맥
  instruction: { s: 30.2, z: -0.99, r: 35.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 E2B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Gemma 4 E2B (non-reasoning)

Google · Open · Small · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.0 | -1.2 | 실측 | [[gpqa-diamond]] 40.5050505050505%×0.4, [[humanitys-last-exam]] 4.72659870250232%×0.3 |
| 추론 | 33.7 | -1.09 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 40.5050505050505%×1.0, [[humanitys-last-exam]] 4.72659870250232%×1.0 |
| 코딩 | 31.4 | -1.24 | 실측 | [[terminal-bench]] 2.27272727272727%×0.5 |
| 에이전트 | 33.4 | -1.1 | 실측 | [[tau2-bench]] 22.2222222222222%×1.0, [[terminal-bench]] 2.27272727272727%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 23.2 | -1.79 | 실측 | [[mmmu-pro]] 41.7919075144509%×1.0 |
| 긴문맥 | 34.3 | -1.04 | 실측 | [[aa-lcr]] 16.3333333333333%×1.0 |
| 지시 따르기 | 35.1 | -0.99 | 실측 | [[ifbench]] 33.605442176870696%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
