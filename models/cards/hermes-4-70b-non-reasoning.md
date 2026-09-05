---
type: Model
title: Hermes 4 70B (Non-reasoning)
creator: Nous Research
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 0.157
output_speed_tps: 84.0
context_window: 128000
status: current
size_class: Medium
params_b: 70.6
is_reasoning: false
radar:
  knowledge: { s: 28.3, z: -0.61, r: 40.9, estimated: false }  # 전문 지식
  reasoning: { s: 16.8, z: -0.88, r: 36.8, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.12, r: 33.2, estimated: false }  # 코딩
  agentic: { s: 11.1, z: -1.01, r: 34.9, estimated: false }  # 에이전트
  trust: { s: 15.5, z: -0.42, r: 43.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 5.6, z: -1.34, r: 29.9, estimated: false }  # 긴문맥
  instruction: { s: 23.9, z: -1.2, r: 32.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hermes 4 70B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Hermes 4 70B (Non-reasoning)

Nous Research · Open · Medium(70.6B) · 컨텍스트 128k · 종합지능 **1.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.13 · 출력 $0.4 · 혼합 $0.157/1M · 84.0 t/s · TTFT 1.43s · 128k ctx` · 가성비 6.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.9 | -0.61 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 49.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.8 | -0.88 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 49.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.2 | -1.12 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 34.9 | -1.01 | 실측 | [[tau2-bench]] 22.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 43.6 | -0.42 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.9 | -1.34 | 실측 | [[aa-lcr]] 5.0%×1.0 |
| 지시 따르기 | 32.0 | -1.2 | 실측 | [[ifbench]] 29.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
