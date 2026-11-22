---
type: Model
title: Ling-2.6-1T
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.52
output_speed_tps: None
context_window: 262144
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 47.7, z: 0.02, r: 50.2, estimated: false }  # 전문 지식
  reasoning: { s: 28.9, z: -0.33, r: 45.1, estimated: false }  # 추론
  coding: { s: 47.1, z: 0.24, r: 53.6, estimated: false }  # 코딩
  agentic: { s: 68.8, z: 0.83, r: 62.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.0, z: -0.2, r: 47.0, estimated: false }  # 긴문맥
  instruction: { s: 62.8, z: 0.37, r: 55.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling-2.6-1T
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Ling-2.6-1T

InclusionAI · Open · Large · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 긴문맥, 추론

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.2 | +0.02 | 실측 | [[gpqa-diamond]] 75.1515151515151%×0.4, [[humanitys-last-exam]] 8.71177015755329%×0.3 |
| 추론 | 45.1 | -0.33 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 75.1515151515151%×1.0, [[humanitys-last-exam]] 8.71177015755329%×1.0 |
| 코딩 | 53.6 | +0.24 | 실측 | [[terminal-bench]] 31.060606060606098%×0.5 |
| 에이전트 | 62.4 | +0.83 | 실측 | [[tau2-bench]] 89.76608187134501%×1.0, [[terminal-bench]] 31.060606060606098%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.0 | -0.2 | 실측 | [[aa-lcr]] 41.6666666666667%×1.0 |
| 지시 따르기 | 55.6 | +0.37 | 실측 | [[ifbench]] 56.87074829931969%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
