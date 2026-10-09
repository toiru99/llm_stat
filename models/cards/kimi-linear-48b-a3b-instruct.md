---
type: Model
title: Kimi Linear 48B A3B Instruct
creator: Kimi
license: Open
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 21.3, z: -0.99, r: 35.2, estimated: false }  # 전문 지식
  reasoning: { s: 18.9, z: -0.81, r: 37.9, estimated: false }  # 추론
  coding: { s: 16.7, z: -0.69, r: 39.7, estimated: false }  # 코딩
  agentic: { s: 8.3, z: -1.17, r: 32.4, estimated: false }  # 에이전트
  trust: { s: 19.2, z: -0.35, r: 44.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 31.5, z: -0.62, r: 40.7, estimated: false }  # 긴문맥
  instruction: { s: 22.5, z: -1.33, r: 30.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi Linear 48B A3B Instruct
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# Kimi Linear 48B A3B Instruct

Kimi · Open · Medium · 컨텍스트 1M · 종합지능 **7.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.2 | -0.99 | 실측 | [[gpqa-diamond]] 41.0%×0.4, [[humanitys-last-exam]] 2.0%×0.3 |
| 추론 | 37.9 | -0.81 | 실측 | [[gpqa-diamond]] 41.0%×1.0, [[humanitys-last-exam]] 2.0%×1.0 |
| 코딩 | 39.7 | -0.69 | 실측 | [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 32.4 | -1.17 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 44.7 | -0.35 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.7 | -0.62 | 실측 | [[aa-lcr]] 28.0%×1.0 |
| 지시 따르기 | 30.0 | -1.33 | 실측 | [[ifbench]] 28.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
