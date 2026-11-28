---
type: Model
title: Quasar 438B (max)
creator: Multiverse Computing
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.2, z: 0.27, r: 54.0, estimated: false }  # 전문 지식
  reasoning: { s: 41.3, z: 0.3, r: 54.6, estimated: false }  # 추론
  coding: { s: 67.8, z: 0.9, r: 63.5, estimated: false }  # 코딩
  agentic: { s: 62.9, z: 0.55, r: 58.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.1, z: 0.87, r: 63.0, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Quasar 438B (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Quasar 438B (max)

Multiverse Computing · Proprietary · Large · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 54.0 | +0.27 | 실측 | [[gpqa-diamond]] 73.2323%×0.4, [[humanitys-last-exam]] 18.6747%×0.3 |
| 추론 | 54.6 | +0.3 | 실측 | [[critpt]] 9.42857%×1.0, [[gpqa-diamond]] 73.2323%×1.0, [[humanitys-last-exam]] 18.6747%×1.0 |
| 코딩 | 63.5 | +0.9 | 실측 | [[scicode]] 48.1481%×1.0 |
| 에이전트 | 58.3 | +0.55 | 실측 | [[gdpval]] 1189.28 Elo×1.0, [[tau3-banking]] 28.6598%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.0 | +0.87 | 실측 | [[aa-lcr]] 76.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
