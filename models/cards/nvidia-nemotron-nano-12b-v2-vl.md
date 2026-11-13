---
type: Model
title: NVIDIA Nemotron Nano 12B v2 VL
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 33.9, z: -0.63, r: 40.5, estimated: false }  # 전문 지식
  reasoning: { s: 30.4, z: -0.63, r: 40.6, estimated: false }  # 추론
  coding: { s: 6.8, z: -1.04, r: 34.4, estimated: false }  # 코딩
  agentic: { s: 6.8, z: -0.95, r: 35.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 51.4, z: -1.02, r: 34.8, estimated: false }  # 멀티모달
  long_context: { s: 46.2, z: -0.21, r: 46.9, estimated: false }  # 긴문맥
  instruction: { s: 27.8, z: -1.08, r: 33.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron Nano 12B v2 VL
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# NVIDIA Nemotron Nano 12B v2 VL

NVIDIA · Open · Unknown · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.5 | -0.63 | 실측 | [[gpqa-diamond]] 57.2%×0.4, [[humanitys-last-exam]] 5.5%×0.3 |
| 추론 | 40.6 | -0.63 | 실측 | [[gpqa-diamond]] 57.2%×1.0, [[humanitys-last-exam]] 5.5%×1.0 |
| 코딩 | 34.4 | -1.04 | 실측 | [[terminal-bench]] 4.5%×0.5 |
| 에이전트 | 35.7 | -0.95 | 실측 | [[terminal-bench]] 4.5%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 34.8 | -1.02 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 46.9 | -0.21 | 실측 | [[aa-lcr]] 41.0%×1.0 |
| 지시 따르기 | 33.8 | -1.08 | 실측 | [[ifbench]] 31.9%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
