---
type: Model
title: Ling 3.0 Tiny
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0
output_speed_tps: None
context_window: 262000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.8, z: -0.01, r: 49.8, estimated: false }  # 전문 지식
  reasoning: { s: 42.4, z: -0.05, r: 49.3, estimated: false }  # 추론
  coding: { s: 28.5, z: -0.31, r: 45.3, estimated: false }  # 코딩
  agentic: { s: 35.4, z: 0.01, r: 50.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 68.0, z: 0.44, r: 56.6, estimated: false }  # 긴문맥
  instruction: { s: 61.9, z: 0.38, r: 55.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.0 Tiny
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Ling 3.0 Tiny

InclusionAI · Open · Small · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.8 | -0.01 | 실측 | [[gpqa-diamond]] 73.4%×0.4, [[humanitys-last-exam]] 9.3%×0.3 |
| 추론 | 49.3 | -0.05 | 실측 | [[gpqa-diamond]] 73.4%×1.0, [[humanitys-last-exam]] 9.3%×1.0 |
| 코딩 | 45.3 | -0.31 | 실측 | [[scicode]] 24.2%×1.0 |
| 에이전트 | 50.2 | +0.01 | 실측 | [[gdpval]] 568.0%×1.0, [[tau3-banking]] 20.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.6 | +0.44 | 실측 | [[aa-lcr]] 60.3%×1.0 |
| 지시 따르기 | 55.7 | +0.38 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
