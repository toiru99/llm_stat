---
type: Model
title: Hermes 4 405B
creator: Nous Research
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 1.2
output_speed_tps: 40.0
context_window: 128000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.5, z: 0.23, r: 53.4, estimated: false }  # 전문 지식
  reasoning: { s: 30.0, z: -0.27, r: 45.9, estimated: false }  # 추론
  coding: { s: 16.7, z: -0.64, r: 40.4, estimated: false }  # 코딩
  agentic: { s: 19.4, z: -0.71, r: 39.4, estimated: false }  # 에이전트
  trust: { s: 3.1, z: -1.05, r: 34.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 24.7, z: -0.79, r: 38.2, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -1.0, r: 35.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hermes 4 405B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Hermes 4 405B

Nous Research · Open · Large · 컨텍스트 128k · 종합지능 **7.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $1.0 · 출력 $3.0 · 혼합 $1.2/1M · 40.0 t/s · TTFT 2.46s · 128k ctx` · 가성비 5.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.4 | +0.23 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 45.9 | -0.27 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 40.4 | -0.64 | 실측 | [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 39.4 | -0.71 | 실측 | [[tau2-bench]] 22.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 34.2 | -1.05 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.2 | -0.79 | 실측 | [[aa-lcr]] 22.0%×1.0 |
| 지시 따르기 | 35.0 | -1.0 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
