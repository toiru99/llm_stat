---
type: Model
title: NVIDIA Nemotron Nano 12B v2 VL (non-reasoning)
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: 0.24
output_speed_tps: 124.159388113031
context_window: 128000
status: current
size_class: Small
params_b: 13.2
is_reasoning: false
radar:
  knowledge: { s: 24.4, z: -1.09, r: 33.7, estimated: false }  # 전문 지식
  reasoning: { s: 14.6, z: -1.02, r: 34.7, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 9.7, z: -1.32, r: 30.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 40.0, z: -1.6, r: 26.0, estimated: false }  # 멀티모달
  long_context: { s: 23.3, z: -1.05, r: 34.2, estimated: false }  # 긴문맥
  instruction: { s: 19.3, z: -1.29, r: 30.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron Nano 12B v2 VL (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# NVIDIA Nemotron Nano 12B v2 VL (non-reasoning)

NVIDIA · Open · Small(13.2B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 긴문맥
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $0.6 · 혼합 $0.24/1M · 124.159388113031 t/s · TTFT 1.50115208482528s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 33.7 | -1.09 | 실측 | [[gpqa-diamond]] 43.9394%×0.4, [[humanitys-last-exam]] 4.26321%×0.3 |
| 추론 | 34.7 | -1.02 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 43.9394%×1.0, [[humanitys-last-exam]] 4.26321%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 30.2 | -1.32 | 실측 | [[tau2-bench]] 19.2982%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 26.0 | -1.6 | 실측 | [[mmmu-pro]] 44.5087%×1.0 |
| 긴문맥 | 34.2 | -1.05 | 실측 | [[aa-lcr]] 20.6667%×1.0 |
| 지시 따르기 | 30.6 | -1.29 | 실측 | [[ifbench]] 25.8503%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
