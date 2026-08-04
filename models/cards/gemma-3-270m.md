---
type: Model
title: Gemma 3 270M
creator: Google
license: Open
intelligence_index: 2.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: current
size_class: Tiny
params_b: 0.268
is_reasoning: false
radar:
  knowledge: { s: 4.4, z: -1.74, r: 23.9, estimated: false }  # 전문 지식
  reasoning: { s: 6.7, z: -1.4, r: 29.0, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.96, r: 20.6, estimated: false }  # 코딩
  agentic: { s: 4.5, z: -1.24, r: 31.4, estimated: false }  # 에이전트
  trust: { s: 77.0, z: 2.26, r: 84.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.47, r: 28.0, estimated: false }  # 긴문맥
  instruction: { s: 0.0, z: -2.19, r: 17.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3 270M
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-04
timestamp: 2026-08-04T00:00:00Z
---

# Gemma 3 270M

Google · Open · Tiny(0.268B) · 컨텍스트 32k · 종합지능 **2.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 23.9 | -1.74 | 실측 | [[aa-omniscience]] 1.0%×1.0, [[gpqa-diamond]] 22.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 29.0 | -1.4 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 22.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 20.6 | -1.96 | 실측 | [[scicode]] 0.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 31.4 | -1.24 | 실측 | [[tau2-bench]] 9.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 84.0 | +2.26 | 실측 | [[aa-omniscience]] 68.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.0 | -1.47 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 17.1 | -2.19 | 실측 | [[ifbench]] 12.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
