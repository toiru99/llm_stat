---
type: Model
title: Ling-3.0-flash-VL
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.3, z: 0.71, r: 60.6, estimated: false }  # 전문 지식
  reasoning: { s: 61.5, z: 0.72, r: 60.8, estimated: false }  # 추론
  coding: { s: 62.2, z: 0.82, r: 62.4, estimated: false }  # 코딩
  agentic: { s: 64.8, z: 1.04, r: 65.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.5, z: 0.76, r: 61.4, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 1.07, r: 66.0, estimated: false }  # 긴문맥
  instruction: { s: 82.0, z: 1.24, r: 68.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling-3.0-flash-VL
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Ling-3.0-flash-VL

InclusionAI · Open · Medium · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.6 | +0.71 | 실측 | [[gpqa-diamond]] 86.2%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 60.8 | +0.72 | 실측 | [[gpqa-diamond]] 86.2%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 62.4 | +0.82 | 실측 | [[scicode]] 44.2%×1.0 |
| 에이전트 | 65.6 | +1.04 | 실측 | [[gdpval]] 1169.0%×1.0, [[tau3-banking]] 34.4%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.4 | +0.76 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 66.0 | +1.07 | 실측 | [[aa-lcr]] 78.3%×1.0 |
| 지시 따르기 | 68.5 | +1.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
