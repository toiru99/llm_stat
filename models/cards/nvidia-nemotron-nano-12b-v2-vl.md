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
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 33.9, z: -0.65, r: 40.3, estimated: false }  # 전문 지식
  reasoning: { s: 20.3, z: -0.75, r: 38.7, estimated: false }  # 추론
  coding: { s: 6.9, z: -1.12, r: 33.1, estimated: false }  # 코딩
  agentic: { s: 14.2, z: -1.06, r: 34.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 51.2, z: -1.03, r: 34.5, estimated: false }  # 멀티모달
  long_context: { s: 46.2, z: -0.22, r: 46.7, estimated: false }  # 긴문맥
  instruction: { s: 27.8, z: -1.09, r: 33.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron Nano 12B v2 VL
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# NVIDIA Nemotron Nano 12B v2 VL

NVIDIA · Open · Small · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.3 | -0.65 | 실측 | [[gpqa-diamond]] 57.1717171717172%×0.4, [[humanitys-last-exam]] 5.514365152919369%×0.3 |
| 추론 | 38.7 | -0.75 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.1717171717172%×1.0, [[humanitys-last-exam]] 5.514365152919369%×1.0 |
| 코딩 | 33.1 | -1.12 | 실측 | [[terminal-bench]] 4.545454545454549%×0.5 |
| 에이전트 | 34.1 | -1.06 | 실측 | [[tau2-bench]] 21.3450292397661%×1.0, [[terminal-bench]] 4.545454545454549%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 34.5 | -1.03 | 실측 | [[mmmu-pro]] 52.89017341040459%×1.0 |
| 긴문맥 | 46.7 | -0.22 | 실측 | [[aa-lcr]] 41.0%×1.0 |
| 지시 따르기 | 33.6 | -1.09 | 실측 | [[ifbench]] 31.9047619047619%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
