---
type: Model
title: Llama 3.1 405B
creator: Meta
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 3.13
output_speed_tps: 68.0
context_window: 128000
status: current
size_class: Large
params_b: 405
is_reasoning: false
radar:
  knowledge: { s: 33.4, z: -0.34, r: 44.9, estimated: false }  # 전문 지식
  reasoning: { s: 18.6, z: -0.79, r: 38.2, estimated: false }  # 추론
  coding: { s: 36.9, z: -0.39, r: 44.1, estimated: false }  # 코딩
  agentic: { s: 14.9, z: -0.83, r: 37.6, estimated: false }  # 에이전트
  trust: { s: 56.5, z: 1.36, r: 70.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 31.6, z: -0.5, r: 42.5, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.58, r: 41.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 405B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-15
timestamp: 2026-07-15T00:00:00Z
---

# Llama 3.1 405B

Meta · Open · Large(405B) · 컨텍스트 128k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $2.75 · 출력 $6.5 · 혼합 $3.13/1M · 68.0 t/s · TTFT 2.46s · 128k ctx` · 가성비 2.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.9 | -0.34 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.2 | -0.79 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 44.1 | -0.39 | 실측 | [[scicode]] 30.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 37.6 | -0.83 | 실측 | [[tau2-bench]] 19.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 70.3 | +1.36 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.5 | -0.5 | 실측 | [[aa-lcr]] 24.0%×1.0 |
| 지시 따르기 | 41.2 | -0.58 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
