---
type: Model
title: Ring-2.6-1T
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: current
size_class: Large
params_b: 1000
is_reasoning: true
radar:
  knowledge: { s: 62.1, z: 0.75, r: 61.2, estimated: false }  # 전문 지식
  reasoning: { s: 42.1, z: 0.34, r: 55.1, estimated: false }  # 추론
  coding: { s: 56.3, z: 0.52, r: 57.7, estimated: false }  # 코딩
  agentic: { s: 55.6, z: 0.3, r: 54.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.65, r: 59.7, estimated: false }  # 긴문맥
  instruction: { s: 45.6, z: -0.2, r: 47.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ring-2.6-1T
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Ring-2.6-1T

InclusionAI · Open · Large(1000B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 61.2 | +0.75 | 실측 | [[gpqa-diamond]] 85.6566%×0.4, [[humanitys-last-exam]] 21.5941%×0.3 |
| 추론 | 55.1 | +0.34 | 실측 | [[critpt]] 3.71429%×1.0, [[gpqa-diamond]] 85.6566%×1.0, [[humanitys-last-exam]] 21.5941%×1.0 |
| 코딩 | 57.7 | +0.52 | 실측 | [[scicode]] 45.0231%×1.0, [[terminal-bench]] 28.7879%×0.5 |
| 에이전트 | 54.5 | +0.3 | 실측 | [[gdpval]] 752.76 Elo×1.0, [[tau2-bench]] 92.3977%×1.0, [[tau3-banking]] 17.9381%×1.0, [[terminal-bench]] 28.7879%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.7 | +0.65 | 실측 | [[aa-lcr]] 70%×1.0 |
| 지시 따르기 | 47.0 | -0.2 | 실측 | [[ifbench]] 44.5578%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
