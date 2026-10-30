---
type: Model
title: Muse Wonder Full (max)
creator: Meta
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.3, z: 1.72, r: 75.7, estimated: false }  # 전문 지식
  reasoning: { s: 81.0, z: 1.59, r: 73.9, estimated: false }  # 추론
  coding: { s: 93.3, z: 1.89, r: 78.3, estimated: false }  # 코딩
  agentic: { s: 99.5, z: 2.25, r: 83.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.26, r: 69.0, estimated: false }  # 긴문맥
  instruction: { s: 82.3, z: 1.24, r: 68.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Wonder Full (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# Muse Wonder Full (max)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.7 | +1.72 | 실측 | [[humanitys-last-exam]] 54.0%×0.3 |
| 추론 | 73.9 | +1.59 | 실측 | [[critpt]] 53.0%×1.0, [[humanitys-last-exam]] 54.0%×1.0 |
| 코딩 | 78.3 | +1.89 | 실측 | [[scicode]] 63.0%×1.0 |
| 에이전트 | 83.7 | +2.25 | 실측 | [[gdpval]] 1857.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.0 | +1.26 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 68.5 | +1.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
