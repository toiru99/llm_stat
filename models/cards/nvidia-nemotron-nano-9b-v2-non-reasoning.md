---
type: Model
title: NVIDIA Nemotron Nano 9B V2 (non-reasoning)
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: 0.077
output_speed_tps: 153.229217882733
context_window: 131072
status: current
size_class: Small
params_b: 9
is_reasoning: false
radar:
  knowledge: { s: 32.4, z: -0.7, r: 39.5, estimated: false }  # 전문 지식
  reasoning: { s: 19.3, z: -0.79, r: 38.2, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.35, r: 29.8, estimated: false }  # 코딩
  agentic: { s: 12.4, z: -1.22, r: 31.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 27.1, z: -0.94, r: 35.9, estimated: false }  # 긴문맥
  instruction: { s: 21.1, z: -1.22, r: 31.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron Nano 9B V2 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# NVIDIA Nemotron Nano 9B V2 (non-reasoning)

NVIDIA · Open · Small(9B) · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $0.06 · 출력 $0.23 · 혼합 $0.077/1M · 153.229217882733 t/s · TTFT 1.55093035323321s · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 39.5 | -0.7 | 실측 | [[gpqa-diamond]] 55.6566%×0.4, [[humanitys-last-exam]] 4.58758%×0.3 |
| 추론 | 38.2 | -0.79 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 55.6566%×1.0, [[humanitys-last-exam]] 4.58758%×1.0 |
| 코딩 | 29.8 | -1.35 | 실측 | [[terminal-bench]] 0.757576%×0.5 |
| 에이전트 | 31.6 | -1.22 | 실측 | [[tau2-bench]] 23.3918%×1.0, [[terminal-bench]] 0.757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.9 | -0.94 | 실측 | [[aa-lcr]] 24%×1.0 |
| 지시 따르기 | 31.7 | -1.22 | 실측 | [[ifbench]] 27.1429%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
