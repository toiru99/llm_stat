---
type: Model
title: Qwen3.6 35B A3B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.5625
output_speed_tps: 94.30965903832426
context_window: 262144
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 55.0, z: 0.38, r: 55.8, estimated: false }  # 전문 지식
  reasoning: { s: 33.6, z: -0.09, r: 48.7, estimated: false }  # 추론
  coding: { s: 39.1, z: -0.02, r: 49.7, estimated: false }  # 코딩
  agentic: { s: 47.6, z: 0.1, r: 51.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 75.6, z: 0.22, r: 53.4, estimated: false }  # 멀티모달
  long_context: { s: 72.6, z: 0.57, r: 58.6, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.83, r: 37.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 35B A3B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Qwen3.6 35B A3B (non-reasoning)

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.375 · 출력 $2.25 · 혼합 $0.5625/1M · 94.30965903832426 t/s · TTFT 3.1364151401002562s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.8 | +0.38 | 실측 | [[gpqa-diamond]] 81.7171717171717%×0.4, [[humanitys-last-exam]] 13.9017608897127%×0.3 |
| 추론 | 48.7 | -0.09 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 81.7171717171717%×1.0, [[humanitys-last-exam]] 13.9017608897127%×1.0 |
| 코딩 | 49.7 | -0.02 | 실측 | [[terminal-bench]] 25.7575757575758%×0.5 |
| 에이전트 | 51.6 | +0.1 | 실측 | [[gdpval]] 854.29%×1.0, [[tau2-bench]] 85.0877192982456%×1.0, [[tau3-banking]] 5.36082474226804%×1.0, [[terminal-bench]] 25.7575757575758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 53.4 | +0.22 | 실측 | [[mmmu-pro]] 71.0404624277457%×1.0 |
| 긴문맥 | 58.6 | +0.57 | 실측 | [[aa-lcr]] 64.3333333333333%×1.0 |
| 지시 따르기 | 37.6 | -0.83 | 실측 | [[ifbench]] 36.190476190476204%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
