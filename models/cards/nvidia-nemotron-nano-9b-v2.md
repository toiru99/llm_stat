---
type: Model
title: NVIDIA Nemotron Nano 9B V2
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: 0.052
output_speed_tps: 215.86575718038458
context_window: 131072
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 33.4, z: -0.67, r: 39.9, estimated: false }  # 전문 지식
  reasoning: { s: 19.9, z: -0.77, r: 38.4, estimated: false }  # 추론
  coding: { s: 2.3, z: -1.28, r: 30.8, estimated: false }  # 코딩
  agentic: { s: 12.2, z: -1.13, r: 33.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 25.6, z: -0.83, r: 37.5, estimated: false }  # 긴문맥
  instruction: { s: 21.8, z: -1.34, r: 29.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron Nano 9B V2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# NVIDIA Nemotron Nano 9B V2

NVIDIA · Open · Small · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.04 · 출력 $0.16 · 혼합 $0.052/1M · 215.86575718038458 t/s · TTFT 0.74132338279937s · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.9 | -0.67 | 실측 | [[gpqa-diamond]] 56.969696969697004%×0.4, [[humanitys-last-exam]] 4.86561631139944%×0.3 |
| 추론 | 38.4 | -0.77 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 56.969696969697004%×1.0, [[humanitys-last-exam]] 4.86561631139944%×1.0 |
| 코딩 | 30.8 | -1.28 | 실측 | [[terminal-bench]] 1.51515151515152%×0.5 |
| 에이전트 | 33.1 | -1.13 | 실측 | [[tau2-bench]] 21.9298245614035%×1.0, [[terminal-bench]] 1.51515151515152%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.5 | -0.83 | 실측 | [[aa-lcr]] 22.6666666666667%×1.0 |
| 지시 따르기 | 29.9 | -1.34 | 실측 | [[ifbench]] 27.6190476190476%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
