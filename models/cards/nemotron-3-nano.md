---
type: Model
title: Nemotron 3 Nano
creator: NVIDIA
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.065
output_speed_tps: 281.0
context_window: 1000000
status: current
size_class: Small
params_b: 31.6
is_reasoning: true
radar:
  knowledge: { s: 36.2, z: -0.24, r: 46.5, estimated: false }  # 전문 지식
  reasoning: { s: 33.1, z: -0.11, r: 48.4, estimated: false }  # 추론
  coding: { s: 40.4, z: -0.32, r: 45.2, estimated: false }  # 코딩
  agentic: { s: 18.6, z: -0.71, r: 39.4, estimated: false }  # 에이전트
  trust: { s: 17.4, z: -0.43, r: 43.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 44.6, z: -0.17, r: 47.4, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.18, r: 67.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-15
timestamp: 2026-08-15T00:00:00Z
---

# Nemotron 3 Nano

NVIDIA · Open · Small(31.6B) · 컨텍스트 1M · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.05 · 출력 $0.2 · 혼합 $0.065/1M · 281.0 t/s · TTFT 1.11s · 1M ctx` · 가성비 230.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.5 | -0.24 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 48.4 | -0.11 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 45.2 | -0.32 | 실측 | [[scicode]] 30.0%×1.0, [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 39.4 | -0.71 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 41.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 43.6 | -0.43 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.4 | -0.17 | 실측 | [[aa-lcr]] 37.0%×1.0 |
| 지시 따르기 | 67.6 | +1.18 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
