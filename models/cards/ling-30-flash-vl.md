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
  knowledge: { s: 62.7, z: 0.76, r: 61.4, estimated: false }  # 전문 지식
  reasoning: { s: 58.4, z: 0.75, r: 61.3, estimated: false }  # 추론
  coding: { s: 61.3, z: 0.79, r: 61.9, estimated: false }  # 코딩
  agentic: { s: 64.8, z: 1.02, r: 65.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.5, z: 0.76, r: 61.4, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 81.5, z: 1.24, r: 68.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling-3.0-flash-VL
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Ling-3.0-flash-VL

InclusionAI · Open · Medium · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.4 | +0.76 | 실측 | [[gpqa-diamond]] 86.2%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 61.3 | +0.75 | 실측 | [[gpqa-diamond]] 86.2%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 61.9 | +0.79 | 실측 | [[scicode]] 44.2%×1.0 |
| 에이전트 | 65.3 | +1.02 | 실측 | [[gdpval]] 1169.0%×1.0, [[tau3-banking]] 34.4%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.4 | +0.76 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 78.3%×1.0 |
| 지시 따르기 | 68.6 | +1.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
