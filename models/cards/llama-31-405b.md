---
type: Model
title: Llama 3.1 405B
creator: Meta
license: Open
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 33.4, z: -0.35, r: 44.8, estimated: false }  # 전문 지식
  reasoning: { s: 18.6, z: -0.79, r: 38.1, estimated: false }  # 추론
  coding: { s: 36.9, z: -0.4, r: 44.0, estimated: false }  # 코딩
  agentic: { s: 14.9, z: -0.83, r: 37.5, estimated: false }  # 에이전트
  trust: { s: 56.5, z: 1.35, r: 70.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 31.6, z: -0.51, r: 42.3, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.6, r: 41.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 405B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# Llama 3.1 405B

Meta · Open · Unknown · 컨텍스트 128k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $3.92 · 출력 $13.0 · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.8 | -0.35 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.1 | -0.79 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 44.0 | -0.4 | 실측 | [[scicode]] 30.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 37.5 | -0.83 | 실측 | [[tau2-bench]] 19.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 70.3 | +1.35 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.3 | -0.51 | 실측 | [[aa-lcr]] 24.0%×1.0 |
| 지시 따르기 | 41.0 | -0.6 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
