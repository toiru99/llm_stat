---
type: Model
title: Olmo 3.1 32B Think
creator: Allen Institute for AI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 65500
status: current
size_class: Small
params_b: 32.2
is_reasoning: true
radar:
  knowledge: { s: 35.6, z: -0.54, r: 41.9, estimated: false }  # 전문 지식
  reasoning: { s: 21.4, z: -0.69, r: 39.7, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.66, r: 25.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 75.6, z: 1.05, r: 65.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Olmo 3.1 32B Think
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Olmo 3.1 32B Think

Allen Institute for AI · Open · Small(32.2B) · 컨텍스트 65k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 41.9 | -0.54 | 실측 | [[gpqa-diamond]] 59.0909%×0.4, [[humanitys-last-exam]] 6.25579%×0.3 |
| 추론 | 39.7 | -0.69 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 59.0909%×1.0, [[humanitys-last-exam]] 6.25579%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 25.1 | -1.66 | 실측 | [[tau2-bench]] 0%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 65.7 | +1.05 | 실측 | [[ifbench]] 65.9864%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
