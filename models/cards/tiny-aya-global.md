---
type: Model
title: Tiny Aya Global
creator: Cohere
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 0
output_speed_tps: None
context_window: 8189
status: current
size_class: Tiny
params_b: 3.35
is_reasoning: false
radar:
  knowledge: { s: 11.8, z: -1.39, r: 29.2, estimated: false }  # 전문 지식
  reasoning: { s: 10.8, z: -1.19, r: 32.2, estimated: false }  # 추론
  coding: { s: 4.4, z: -1.78, r: 23.3, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.42, r: 28.7, estimated: false }  # 에이전트
  trust: { s: 2.3, z: -1.1, r: 33.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.49, r: 27.6, estimated: false }  # 긴문맥
  instruction: { s: 11.3, z: -1.74, r: 23.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Tiny Aya Global
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-10
timestamp: 2026-08-10T00:00:00Z
---

# Tiny Aya Global

Cohere · Open · Tiny(3.35B) · 컨텍스트 8k · 종합지능 **1.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 8k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.2 | -1.39 | 실측 | [[aa-omniscience]] 6.0%×1.0, [[gpqa-diamond]] 31.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 32.2 | -1.19 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 31.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 23.3 | -1.78 | 실측 | [[scicode]] 4.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 28.7 | -1.42 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 33.5 | -1.1 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.6 | -1.49 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 23.8 | -1.74 | 실측 | [[ifbench]] 20.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
