---
type: Model
title: NVIDIA Nemotron Nano 9B V2
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: 0.077
output_speed_tps: 144.363953958361
context_window: 131072
status: current
size_class: Small
params_b: 9
is_reasoning: true
radar:
  knowledge: { s: 33.4, z: -0.65, r: 40.2, estimated: false }  # 전문 지식
  reasoning: { s: 19.9, z: -0.76, r: 38.6, estimated: false }  # 추론
  coding: { s: 2.3, z: -1.31, r: 30.4, estimated: false }  # 코딩
  agentic: { s: 12.2, z: -1.23, r: 31.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 25.6, z: -0.98, r: 35.2, estimated: false }  # 긴문맥
  instruction: { s: 21.8, z: -1.19, r: 32.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron Nano 9B V2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# NVIDIA Nemotron Nano 9B V2

NVIDIA · Open · Small(9B) · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.06 · 출력 $0.23 · 혼합 $0.077/1M · 144.363953958361 t/s · TTFT 1.52644196504583s · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 40.2 | -0.65 | 실측 | [[gpqa-diamond]] 56.9697%×0.4, [[humanitys-last-exam]] 4.86562%×0.3 |
| 추론 | 38.6 | -0.76 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 56.9697%×1.0, [[humanitys-last-exam]] 4.86562%×1.0 |
| 코딩 | 30.4 | -1.31 | 실측 | [[terminal-bench]] 1.51515%×0.5 |
| 에이전트 | 31.5 | -1.23 | 실측 | [[tau2-bench]] 21.9298%×1.0, [[terminal-bench]] 1.51515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.2 | -0.98 | 실측 | [[aa-lcr]] 22.6667%×1.0 |
| 지시 따르기 | 32.1 | -1.19 | 실측 | [[ifbench]] 27.619%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
