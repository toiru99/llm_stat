---
type: Model
title: Celeris-1
creator: Celeris
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.124
output_speed_tps: None
context_window: 131000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.3, z: -0.45, r: 43.3, estimated: false }  # 전문 지식
  reasoning: { s: 35.5, z: -0.45, r: 43.3, estimated: false }  # 추론
  coding: { s: 24.5, z: -0.43, r: 43.5, estimated: false }  # 코딩
  agentic: { s: 11.9, z: -0.77, r: 38.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 42.8, z: -0.3, r: 45.6, estimated: false }  # 긴문맥
  instruction: { s: 42.4, z: -0.45, r: 43.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Celeris-1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Celeris-1

Celeris · Proprietary · Unknown · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $0.7 · 혼합 $0.124/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.3 | -0.45 | 실측 | [[gpqa-diamond]] 63.1%×0.4, [[humanitys-last-exam]] 6.8%×0.3 |
| 추론 | 43.3 | -0.45 | 실측 | [[gpqa-diamond]] 63.1%×1.0, [[humanitys-last-exam]] 6.8%×1.0 |
| 코딩 | 43.5 | -0.43 | 실측 | [[scicode]] 21.6%×1.0 |
| 에이전트 | 38.5 | -0.77 | 실측 | [[gdpval]] 309.0%×1.0, [[tau3-banking]] 3.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.6 | -0.3 | 실측 | [[aa-lcr]] 38.0%×1.0 |
| 지시 따르기 | 43.3 | -0.45 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
