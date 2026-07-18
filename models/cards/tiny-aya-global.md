---
type: Model
title: Tiny Aya Global
creator: Cohere
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 0.0
output_speed_tps: None
context_window: 8189
status: current
size_class: Tiny
params_b: 3.35
is_reasoning: false
radar:
  knowledge: { s: 12.1, z: -1.37, r: 29.4, estimated: false }  # 전문 지식
  reasoning: { s: 10.9, z: -1.2, r: 32.1, estimated: false }  # 추론
  coding: { s: 4.4, z: -1.76, r: 23.5, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.41, r: 28.9, estimated: false }  # 에이전트
  trust: { s: 3.5, z: -1.14, r: 32.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.44, r: 28.3, estimated: false }  # 긴문맥
  instruction: { s: 11.3, z: -1.7, r: 24.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Tiny Aya Global
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-18
timestamp: 2026-07-18T00:00:00Z
---

# Tiny Aya Global

Cohere · Open · Tiny(3.35B) · 컨텍스트 8k · 종합지능 **1.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0.0/1M · None t/s · TTFT Nones · 8k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.4 | -1.37 | 실측 | [[aa-omniscience]] 6.0%×1.0, [[gpqa-diamond]] 31.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 32.1 | -1.2 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 31.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 23.5 | -1.76 | 실측 | [[scicode]] 4.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 28.9 | -1.41 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 32.9 | -1.14 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.3 | -1.44 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 24.5 | -1.7 | 실측 | [[ifbench]] 20.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
