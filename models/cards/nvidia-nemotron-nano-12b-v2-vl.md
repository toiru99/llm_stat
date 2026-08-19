---
type: Model
title: NVIDIA Nemotron Nano 12B v2 VL
creator: NVIDIA
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 0.24
output_speed_tps: 101.0
context_window: 128000
status: current
size_class: Small
params_b: 13.2
is_reasoning: false
radar:
  knowledge: { s: 27.5, z: -0.65, r: 40.2, estimated: false }  # 전문 지식
  reasoning: { s: 21.5, z: -0.68, r: 39.8, estimated: false }  # 추론
  coding: { s: 31.4, z: -0.69, r: 39.6, estimated: false }  # 코딩
  agentic: { s: 14.4, z: -0.88, r: 36.9, estimated: false }  # 에이전트
  trust: { s: 7.0, z: -0.89, r: 36.6, estimated: false }  # 신뢰성
  multimodal: { s: 54.3, z: -0.87, r: 37.0, estimated: false }  # 멀티모달
  long_context: { s: 50.6, z: 0.0, r: 50.0, estimated: false }  # 긴문맥
  instruction: { s: 28.2, z: -1.07, r: 34.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron Nano 12B v2 VL
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# NVIDIA Nemotron Nano 12B v2 VL

NVIDIA · Open · Small(13.2B) · 컨텍스트 128k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $0.2 · 출력 $0.6 · 혼합 $0.24/1M · 101.0 t/s · TTFT 5.84s · 128k ctx` · 가성비 37.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.2 | -0.65 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 57.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 39.8 | -0.68 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 39.6 | -0.69 | 실측 | [[scicode]] 26.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 36.9 | -0.88 | 실측 | [[tau2-bench]] 21.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 36.6 | -0.89 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 37.0 | -0.87 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 50.0 | +0.0 | 실측 | [[aa-lcr]] 42.0%×1.0 |
| 지시 따르기 | 34.0 | -1.07 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
