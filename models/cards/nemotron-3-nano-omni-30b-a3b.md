---
type: Model
title: Nemotron 3 Nano Omni 30B A3B
creator: NVIDIA
license: Open
intelligence_index: 10.0
price_blended_usd_1m: 0.285
output_speed_tps: 267.0
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 24.5, z: -0.81, r: 37.8, estimated: false }  # 전문 지식
  reasoning: { s: 16.6, z: -0.89, r: 36.6, estimated: false }  # 추론
  coding: { s: 12.1, z: -0.79, r: 38.1, estimated: false }  # 코딩
  agentic: { s: 19.2, z: -0.71, r: 39.3, estimated: false }  # 에이전트
  trust: { s: 12.4, z: -0.62, r: 40.7, estimated: false }  # 신뢰성
  multimodal: { s: 52.1, z: -0.92, r: 36.2, estimated: false }  # 멀티모달
  long_context: { s: 44.9, z: -0.17, r: 47.4, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.76, r: 61.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano Omni 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Nemotron 3 Nano Omni 30B A3B

NVIDIA · Open · Small · 컨텍스트 256k · 종합지능 **10.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.09 · 혼합 $0.285/1M · 267.0 t/s · TTFT 0.48s · 256k ctx` · 가성비 35.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.8 | -0.81 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.6 | -0.89 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 38.1 | -0.79 | 실측 | [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 39.3 | -0.71 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 45.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 40.7 | -0.62 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | 36.2 | -0.92 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 47.4 | -0.17 | 실측 | [[aa-lcr]] 40.0%×1.0 |
| 지시 따르기 | 61.4 | +0.76 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
