---
type: Model
title: HyperNova 60B 2605
creator: Multiverse Computing
license: Open
intelligence_index: 18.0
price_blended_usd_1m: None
output_speed_tps: 379.0
context_window: 131000
status: current
size_class: Medium
params_b: 58.7
is_reasoning: true
radar:
  knowledge: { s: 35.1, z: -0.28, r: 45.8, estimated: false }  # 전문 지식
  reasoning: { s: 35.0, z: 0.03, r: 50.5, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.06, r: 50.9, estimated: false }  # 코딩
  agentic: { s: 31.4, z: -0.19, r: 47.1, estimated: false }  # 에이전트
  trust: { s: 19.5, z: -0.4, r: 43.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 42.1, z: -0.22, r: 46.8, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.95, r: 64.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — HyperNova 60B 2605
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# HyperNova 60B 2605

Multiverse Computing · Open · Medium(58.7B) · 컨텍스트 131k · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.04 · 출력 $0.14 · 혼합 $None/1M · 379.0 t/s · TTFT 0.68s · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.8 | -0.28 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 50.5 | +0.03 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 50.9 | +0.06 | 실측 | [[scicode]] 33.0%×1.0, [[terminal-bench]] 23.0%×0.5 |
| 에이전트 | 47.1 | -0.19 | 실측 | [[gdpval]] 8.0%×1.0, [[tau2-bench]] 63.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 23.0%×1.0 |
| 신뢰성 | 43.9 | -0.4 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 46.8 | -0.22 | 실측 | [[aa-lcr]] 32.0%×1.0 |
| 지시 따르기 | 64.2 | +0.95 | 실측 | [[ifbench]] 66.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
