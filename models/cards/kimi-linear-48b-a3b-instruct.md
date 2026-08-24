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
  knowledge: { s: 21.6, z: -0.94, r: 35.9, estimated: false }  # 전문 지식
  reasoning: { s: 19.2, z: -0.8, r: 38.0, estimated: false }  # 추론
  coding: { s: 27.8, z: -0.85, r: 37.3, estimated: false }  # 코딩
  agentic: { s: 8.3, z: -1.12, r: 33.2, estimated: false }  # 에이전트
  trust: { s: 19.1, z: -0.39, r: 44.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 32.5, z: -0.55, r: 41.8, estimated: false }  # 긴문맥
  instruction: { s: 22.5, z: -1.3, r: 30.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi Linear 48B A3B Instruct
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
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
| 전문 지식 | 35.9 | -0.94 | 실측 | [[gpqa-diamond]] 41.0%×0.4, [[humanitys-last-exam]] 2.0%×0.3 |
| 추론 | 38.0 | -0.8 | 실측 | [[gpqa-diamond]] 41.0%×1.0, [[humanitys-last-exam]] 2.0%×1.0 |
| 코딩 | 37.3 | -0.85 | 실측 | [[scicode]] 20.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 33.2 | -1.12 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 44.2 | -0.39 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 41.8 | -0.55 | 실측 | [[aa-lcr]] 27.0%×1.0 |
| 지시 따르기 | 30.5 | -1.3 | 실측 | [[ifbench]] 28.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
