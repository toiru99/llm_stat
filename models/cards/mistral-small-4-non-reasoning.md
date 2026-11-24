---
type: Model
title: Mistral Small 4 (non-reasoning)
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1005
output_speed_tps: 122.910233694262
context_window: 256000
status: current
size_class: Medium
params_b: 119
is_reasoning: false
radar:
  knowledge: { s: 32.8, z: -0.68, r: 39.8, estimated: false }  # 전문 지식
  reasoning: { s: 19.7, z: -0.77, r: 38.5, estimated: false }  # 추론
  coding: { s: 16.1, z: -0.84, r: 37.4, estimated: false }  # 코딩
  agentic: { s: 17.3, z: -1.05, r: 34.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 42.6, z: -1.47, r: 28.0, estimated: false }  # 멀티모달
  long_context: { s: 32.0, z: -0.79, r: 38.1, estimated: false }  # 긴문맥
  instruction: { s: 29.0, z: -0.89, r: 36.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 4 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Mistral Small 4 (non-reasoning)

Mistral · Open · Medium(119B) · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1005/1M · 122.910233694262 t/s · TTFT 1.60681861873593s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 39.8 | -0.68 | 실측 | [[gpqa-diamond]] 57.0707%×0.4, [[humanitys-last-exam]] 3.79981%×0.3 |
| 추론 | 38.5 | -0.77 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 57.0707%×1.0, [[humanitys-last-exam]] 3.79981%×1.0 |
| 코딩 | 37.4 | -0.84 | 실측 | [[terminal-bench]] 10.6061%×0.5 |
| 에이전트 | 34.3 | -1.05 | 실측 | [[tau2-bench]] 18.4211%×1.0, [[terminal-bench]] 10.6061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 28.0 | -1.47 | 실측 | [[mmmu-pro]] 46.474%×1.0 |
| 긴문맥 | 38.1 | -0.79 | 실측 | [[aa-lcr]] 28.3333%×1.0 |
| 지시 따르기 | 36.7 | -0.89 | 실측 | [[ifbench]] 32.7891%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
