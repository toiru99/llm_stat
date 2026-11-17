---
type: Model
title: NVIDIA Nemotron Nano 9B V2 (non-reasoning)
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0645
output_speed_tps: 183.91628821261625
context_window: 131072
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.4, z: -0.71, r: 39.3, estimated: false }  # 전문 지식
  reasoning: { s: 19.3, z: -0.8, r: 38.1, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.31, r: 30.3, estimated: false }  # 코딩
  agentic: { s: 12.4, z: -1.12, r: 33.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 27.1, z: -0.78, r: 38.3, estimated: false }  # 긴문맥
  instruction: { s: 21.1, z: -1.36, r: 29.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron Nano 9B V2 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# NVIDIA Nemotron Nano 9B V2 (non-reasoning)

NVIDIA · Open · Small · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.05 · 출력 $0.195 · 혼합 $0.0645/1M · 183.91628821261625 t/s · TTFT 1.1218835787486883s · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.3 | -0.71 | 실측 | [[gpqa-diamond]] 55.656565656565704%×0.4, [[humanitys-last-exam]] 4.5875810936051895%×0.3 |
| 추론 | 38.1 | -0.8 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 55.656565656565704%×1.0, [[humanitys-last-exam]] 4.5875810936051895%×1.0 |
| 코딩 | 30.3 | -1.31 | 실측 | [[terminal-bench]] 0.757575757575758%×0.5 |
| 에이전트 | 33.2 | -1.12 | 실측 | [[tau2-bench]] 23.3918128654971%×1.0, [[terminal-bench]] 0.757575757575758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.3 | -0.78 | 실측 | [[aa-lcr]] 24.0%×1.0 |
| 지시 따르기 | 29.6 | -1.36 | 실측 | [[ifbench]] 27.142857142857103%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
