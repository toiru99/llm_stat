---
type: Model
title: Hermes 4 405B (Non-reasoning)
creator: Nous Research
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 1.2
output_speed_tps: 41.0
context_window: 128000
status: current
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 35.7, z: -0.31, r: 45.4, estimated: false }  # 전문 지식
  reasoning: { s: 18.7, z: -0.8, r: 38.0, estimated: false }  # 추론
  coding: { s: 15.2, z: -0.71, r: 39.3, estimated: false }  # 코딩
  agentic: { s: 21.2, z: -0.66, r: 40.1, estimated: false }  # 에이전트
  trust: { s: 18.6, z: -0.36, r: 44.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 24.7, z: -0.81, r: 37.8, estimated: false }  # 긴문맥
  instruction: { s: 32.4, z: -0.89, r: 36.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hermes 4 405B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Hermes 4 405B (Non-reasoning)

Nous Research · Open · Large · 컨텍스트 128k · 종합지능 **7.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 신뢰성
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $1.0 · 출력 $3.0 · 혼합 $1.2/1M · 41.0 t/s · TTFT 2.37s · 128k ctx` · 가성비 5.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.4 | -0.31 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 54.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.0 | -0.8 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 54.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.3 | -0.71 | 실측 | [[terminal-bench]] 10.0%×0.5 |
| 에이전트 | 40.1 | -0.66 | 실측 | [[tau2-bench]] 27.0%×1.0, [[terminal-bench]] 10.0%×1.0 |
| 신뢰성 | 44.6 | -0.36 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.8 | -0.81 | 실측 | [[aa-lcr]] 22.0%×1.0 |
| 지시 따르기 | 36.6 | -0.89 | 실측 | [[ifbench]] 35.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
