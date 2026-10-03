---
type: Model
title: NVIDIA Nemotron Nano 12B v2 VL (non-reasoning)
creator: NVIDIA
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0.24
output_speed_tps: 194.0
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 20.7, z: -1.01, r: 34.9, estimated: false }  # 전문 지식
  reasoning: { s: 14.8, z: -0.98, r: 35.2, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.25, r: 31.3, estimated: false }  # 코딩
  agentic: { s: 9.6, z: -1.12, r: 33.3, estimated: false }  # 에이전트
  trust: { s: 2.1, z: -1.13, r: 33.0, estimated: false }  # 신뢰성
  multimodal: { s: 41.1, z: -1.51, r: 27.3, estimated: false }  # 멀티모달
  long_context: { s: 23.6, z: -0.85, r: 37.3, estimated: false }  # 긴문맥
  instruction: { s: 19.7, z: -1.44, r: 28.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron Nano 12B v2 VL (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# NVIDIA Nemotron Nano 12B v2 VL (non-reasoning)

NVIDIA · Open · Small · 컨텍스트 128k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 추론
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $0.6 · 혼합 $0.24/1M · 194.0 t/s · TTFT 1.1s · 128k ctx` · 가성비 25.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.9 | -1.01 | 실측 | [[aa-omniscience]] 12.0%×1.0, [[gpqa-diamond]] 44.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.2 | -0.98 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 44.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 31.3 | -1.25 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 33.3 | -1.12 | 실측 | [[tau2-bench]] 19.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 33.0 | -1.13 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | 27.3 | -1.51 | 실측 | [[mmmu-pro]] 45.0%×1.0 |
| 긴문맥 | 37.3 | -0.85 | 실측 | [[aa-lcr]] 21.0%×1.0 |
| 지시 따르기 | 28.4 | -1.44 | 실측 | [[ifbench]] 26.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
