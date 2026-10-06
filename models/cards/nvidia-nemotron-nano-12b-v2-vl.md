---
type: Model
title: NVIDIA Nemotron Nano 12B v2 VL
creator: NVIDIA
license: Open
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 27.5, z: -0.7, r: 39.6, estimated: false }  # 전문 지식
  reasoning: { s: 21.0, z: -0.7, r: 39.4, estimated: false }  # 추론
  coding: { s: 7.6, z: -0.99, r: 35.2, estimated: false }  # 코딩
  agentic: { s: 14.4, z: -0.93, r: 36.0, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.94, r: 35.8, estimated: false }  # 신뢰성
  multimodal: { s: 52.1, z: -0.97, r: 35.5, estimated: false }  # 멀티모달
  long_context: { s: 46.1, z: -0.17, r: 47.5, estimated: false }  # 긴문맥
  instruction: { s: 28.2, z: -1.09, r: 33.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron Nano 12B v2 VL
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# NVIDIA Nemotron Nano 12B v2 VL

NVIDIA · Open · Unknown · 컨텍스트 128k · 종합지능 **7.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.6 | -0.7 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 57.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 39.4 | -0.7 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 35.2 | -0.99 | 실측 | [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 36.0 | -0.93 | 실측 | [[tau2-bench]] 21.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 35.8 | -0.94 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 35.5 | -0.97 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 47.5 | -0.17 | 실측 | [[aa-lcr]] 41.0%×1.0 |
| 지시 따르기 | 33.7 | -1.09 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
