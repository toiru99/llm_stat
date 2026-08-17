---
type: Model
title: Command A
creator: Cohere
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 3.25
output_speed_tps: 58.0
context_window: 256000
status: current
size_class: Medium
params_b: 111
is_reasoning: false
radar:
  knowledge: { s: 26.7, z: -0.69, r: 39.6, estimated: false }  # 전문 지식
  reasoning: { s: 18.7, z: -0.81, r: 37.8, estimated: false }  # 추론
  coding: { s: 31.6, z: -0.68, r: 39.8, estimated: false }  # 코딩
  agentic: { s: 8.3, z: -1.11, r: 33.3, estimated: false }  # 에이전트
  trust: { s: 24.4, z: -0.12, r: 48.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 24.1, z: -0.79, r: 38.1, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.83, r: 37.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Command A
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-17
timestamp: 2026-08-17T00:00:00Z
---

# Command A

Cohere · Open · Medium(111B) · 컨텍스트 256k · 종합지능 **7.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $2.5 · 출력 $10.0 · 혼합 $3.25/1M · 58.0 t/s · TTFT 1.61s · 256k ctx` · 가성비 2.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.6 | -0.69 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 53.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.8 | -0.81 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 53.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.8 | -0.68 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 33.3 | -1.11 | 실측 | [[tau2-bench]] 15.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 48.2 | -0.12 | 실측 | [[aa-omniscience]] 23.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.1 | -0.79 | 실측 | [[aa-lcr]] 20.0%×1.0 |
| 지시 따르기 | 37.5 | -0.83 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
