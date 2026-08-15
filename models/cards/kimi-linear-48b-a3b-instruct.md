---
type: Model
title: Kimi Linear 48B A3B Instruct
creator: Kimi
license: Open
intelligence_index: 8.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Medium
params_b: 49.1
is_reasoning: false
radar:
  knowledge: { s: 21.6, z: -0.93, r: 36.1, estimated: false }  # 전문 지식
  reasoning: { s: 19.2, z: -0.79, r: 38.1, estimated: false }  # 추론
  coding: { s: 27.8, z: -0.84, r: 37.4, estimated: false }  # 코딩
  agentic: { s: 8.3, z: -1.11, r: 33.3, estimated: false }  # 에이전트
  trust: { s: 20.5, z: -0.29, r: 45.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 32.5, z: -0.54, r: 41.9, estimated: false }  # 긴문맥
  instruction: { s: 22.5, z: -1.29, r: 30.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi Linear 48B A3B Instruct
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-15
timestamp: 2026-08-15T00:00:00Z
---

# Kimi Linear 48B A3B Instruct

Kimi · Open · Medium(49.1B) · 컨텍스트 1M · 종합지능 **8.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.1 | -0.93 | 실측 | [[gpqa-diamond]] 41.0%×0.4, [[humanitys-last-exam]] 2.0%×0.3 |
| 추론 | 38.1 | -0.79 | 실측 | [[gpqa-diamond]] 41.0%×1.0, [[humanitys-last-exam]] 2.0%×1.0 |
| 코딩 | 37.4 | -0.84 | 실측 | [[scicode]] 20.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 33.3 | -1.11 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 45.6 | -0.29 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 41.9 | -0.54 | 실측 | [[aa-lcr]] 27.0%×1.0 |
| 지시 따르기 | 30.7 | -1.29 | 실측 | [[ifbench]] 28.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
