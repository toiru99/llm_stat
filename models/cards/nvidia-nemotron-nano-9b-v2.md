---
type: Model
title: NVIDIA Nemotron Nano 9B V2
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: 0.052
output_speed_tps: None
context_window: 131000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 33.4, z: -0.65, r: 40.2, estimated: false }  # 전문 지식
  reasoning: { s: 29.9, z: -0.65, r: 40.2, estimated: false }  # 추론
  coding: { s: 2.3, z: -1.19, r: 32.2, estimated: false }  # 코딩
  agentic: { s: 2.3, z: -1.1, r: 33.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 25.6, z: -0.82, r: 37.7, estimated: false }  # 긴문맥
  instruction: { s: 21.8, z: -1.33, r: 30.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron Nano 9B V2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# NVIDIA Nemotron Nano 9B V2

NVIDIA · Open · Unknown · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.04 · 출력 $0.16 · 혼합 $0.052/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.2 | -0.65 | 실측 | [[gpqa-diamond]] 57.0%×0.4, [[humanitys-last-exam]] 4.9%×0.3 |
| 추론 | 40.2 | -0.65 | 실측 | [[gpqa-diamond]] 57.0%×1.0, [[humanitys-last-exam]] 4.9%×1.0 |
| 코딩 | 32.2 | -1.19 | 실측 | [[terminal-bench]] 1.5%×0.5 |
| 에이전트 | 33.5 | -1.1 | 실측 | [[terminal-bench]] 1.5%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.7 | -0.82 | 실측 | [[aa-lcr]] 22.7%×1.0 |
| 지시 따르기 | 30.0 | -1.33 | 실측 | [[ifbench]] 27.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
