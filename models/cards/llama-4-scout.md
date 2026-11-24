---
type: Model
title: Llama 4 Scout
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: 0.228
output_speed_tps: 95.990783802876
context_window: 10000000
status: current
size_class: Medium
params_b: 109
is_reasoning: false
radar:
  knowledge: { s: 33.9, z: -0.63, r: 40.6, estimated: false }  # 전문 지식
  reasoning: { s: 20.1, z: -0.75, r: 38.8, estimated: false }  # 추론
  coding: { s: 16.5, z: -0.83, r: 37.6, estimated: false }  # 코딩
  agentic: { s: 8.7, z: -1.35, r: 29.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 51.3, z: -1.03, r: 34.6, estimated: false }  # 멀티모달
  long_context: { s: 31.2, z: -0.81, r: 37.8, estimated: false }  # 긴문맥
  instruction: { s: 38.5, z: -0.5, r: 42.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 4 Scout
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Llama 4 Scout

Meta · Open · Medium(109B) · 컨텍스트 10M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.18 · 출력 $0.66 · 혼합 $0.228/1M · 95.990783802876 t/s · TTFT 1.11764672175414s · 10M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 40.6 | -0.63 | 실측 | [[gpqa-diamond]] 58.6869%×0.4, [[humanitys-last-exam]] 3.78%×0.3 |
| 추론 | 38.8 | -0.75 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 58.6869%×1.0, [[humanitys-last-exam]] 3.78%×1.0 |
| 코딩 | 37.6 | -0.83 | 실측 | [[scicode]] 21.2963%×1.0, [[terminal-bench]] 1.51515%×0.5 |
| 에이전트 | 29.7 | -1.35 | 실측 | [[gdpval]] -156.1 Elo×1.0, [[tau2-bench]] 15.4971%×1.0, [[tau3-banking]] 3.29897%×1.0, [[terminal-bench]] 1.51515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 34.6 | -1.03 | 실측 | [[mmmu-pro]] 52.948%×1.0 |
| 긴문맥 | 37.8 | -0.81 | 실측 | [[aa-lcr]] 27.7%×1.0 |
| 지시 따르기 | 42.5 | -0.5 | 실측 | [[ifbench]] 39.5238%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
