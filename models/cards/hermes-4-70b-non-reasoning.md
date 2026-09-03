---
type: Model
title: Hermes 4 70B (Non-reasoning)
creator: Nous Research
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.157
output_speed_tps: 78.0
context_window: 128000
status: current
size_class: Medium
params_b: 70.6
is_reasoning: false
radar:
  knowledge: { s: 28.4, z: -0.6, r: 41.0, estimated: false }  # 전문 지식
  reasoning: { s: 17.0, z: -0.88, r: 36.8, estimated: false }  # 추론
  coding: { s: 30.1, z: -0.71, r: 39.3, estimated: false }  # 코딩
  agentic: { s: 11.1, z: -1.02, r: 34.7, estimated: false }  # 에이전트
  trust: { s: 15.5, z: -0.43, r: 43.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 3.6, z: -1.42, r: 28.7, estimated: false }  # 긴문맥
  instruction: { s: 23.9, z: -1.21, r: 31.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hermes 4 70B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Hermes 4 70B (Non-reasoning)

Nous Research · Open · Medium(70.6B) · 컨텍스트 128k · 종합지능 **7.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.13 · 출력 $0.4 · 혼합 $0.157/1M · 78.0 t/s · TTFT 1.44s · 128k ctx` · 가성비 44.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.0 | -0.6 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 49.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.8 | -0.88 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 49.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.3 | -0.71 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 34.7 | -1.02 | 실측 | [[tau2-bench]] 22.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 43.5 | -0.43 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.7 | -1.42 | 실측 | [[aa-lcr]] 3.0%×1.0 |
| 지시 따르기 | 31.8 | -1.21 | 실측 | [[ifbench]] 29.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
