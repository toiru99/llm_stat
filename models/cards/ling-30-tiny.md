---
type: Model
title: Ling 3.0 Tiny
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0
output_speed_tps: 56.0
context_window: 262000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 47.6, z: -0.08, r: 48.8, estimated: false }  # 전문 지식
  reasoning: { s: 43.3, z: -0.11, r: 48.4, estimated: false }  # 추론
  coding: { s: 28.3, z: -0.29, r: 45.6, estimated: false }  # 코딩
  agentic: { s: 35.8, z: 0.05, r: 50.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 67.4, z: 0.46, r: 56.8, estimated: false }  # 긴문맥
  instruction: { s: 62.3, z: 0.4, r: 56.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.0 Tiny
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Ling 3.0 Tiny

InclusionAI · Open · Small · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 56.0 t/s · TTFT 3.09s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.8 | -0.08 | 실측 | [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 48.4 | -0.11 | 실측 | [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 45.6 | -0.29 | 실측 | [[scicode]] 24.0%×1.0 |
| 에이전트 | 50.8 | +0.05 | 실측 | [[gdpval]] 568.0%×1.0, [[tau3-banking]] 21.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.8 | +0.46 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 56.0 | +0.4 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
