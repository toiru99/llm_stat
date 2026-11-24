---
type: Model
title: Ling 3.1 Flash 1019
creator: InclusionAI
license: Open
intelligence_index: 29.570119369837
price_blended_usd_1m: 0.192
output_speed_tps: None
context_window: 1048576
status: current
size_class: Large
params_b: 560
is_reasoning: true
radar:
  knowledge: { s: 57.9, z: 0.54, r: 58.1, estimated: false }  # 전문 지식
  reasoning: { s: 65.4, z: 1.5, r: 72.5, estimated: false }  # 추론
  coding: { s: 82.1, z: 1.38, r: 70.8, estimated: false }  # 코딩
  agentic: { s: 90.8, z: 1.54, r: 73.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.9, z: 1.07, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.1 Flash 1019
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Ling 3.1 Flash 1019

InclusionAI · Open · Large(560B) · 컨텍스트 1M · 종합지능 **29.570119369837**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.192/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 154.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 58.1 | +0.54 | 실측 | [[humanitys-last-exam]] 43.4662%×0.3 |
| 추론 | 72.5 | +1.5 | 실측 | [[critpt]] 26%×1.0, [[humanitys-last-exam]] 43.4662%×1.0 |
| 코딩 | 70.8 | +1.38 | 실측 | [[scicode]] 56.8287%×1.0 |
| 에이전트 | 73.1 | +1.54 | 실측 | [[gdpval]] 1658.34 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.1 | +1.07 | 실측 | [[aa-lcr]] 82.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
