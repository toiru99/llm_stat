---
type: Model
title: NVIDIA Nemotron Nano 9B V2 (non-reasoning)
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: 0.077
output_speed_tps: 133.299385013283
context_window: 131072
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.4, z: -0.72, r: 39.2, estimated: false }  # 전문 지식
  reasoning: { s: 19.3, z: -0.8, r: 37.9, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.32, r: 30.2, estimated: false }  # 코딩
  agentic: { s: 12.4, z: -1.13, r: 33.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 27.1, z: -0.79, r: 38.2, estimated: false }  # 긴문맥
  instruction: { s: 21.1, z: -1.37, r: 29.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron Nano 9B V2 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# NVIDIA Nemotron Nano 9B V2 (non-reasoning)

NVIDIA · Open · Small · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.06 · 출력 $0.23 · 혼합 $0.077/1M · 133.299385013283 t/s · TTFT 7.44144043195799s · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.2 | -0.72 | 실측 | [[gpqa-diamond]] 55.656565656565704%×0.4, [[humanitys-last-exam]] 4.5875810936051895%×0.3 |
| 추론 | 37.9 | -0.8 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 55.656565656565704%×1.0, [[humanitys-last-exam]] 4.5875810936051895%×1.0 |
| 코딩 | 30.2 | -1.32 | 실측 | [[terminal-bench]] 0.757575757575758%×0.5 |
| 에이전트 | 33.1 | -1.13 | 실측 | [[tau2-bench]] 23.3918128654971%×1.0, [[terminal-bench]] 0.757575757575758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.2 | -0.79 | 실측 | [[aa-lcr]] 24.0%×1.0 |
| 지시 따르기 | 29.4 | -1.37 | 실측 | [[ifbench]] 27.142857142857103%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
