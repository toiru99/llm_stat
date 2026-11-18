---
type: Model
title: Muse Wonder Full (max)
creator: Meta
license: Proprietary
intelligence_index: 50.0772123627021
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.8, z: 1.18, r: 67.7, estimated: false }  # 전문 지식
  reasoning: { s: 81.9, z: 2.28, r: 84.3, estimated: false }  # 추론
  coding: { s: 91.6, z: 1.75, r: 76.3, estimated: false }  # 코딩
  agentic: { s: 99.6, z: 1.89, r: 78.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 79.9, z: 1.09, r: 66.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Wonder Full (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Muse Wonder Full (max)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.0772123627021**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.7 | +1.18 | 실측 | [[humanitys-last-exam]] 53.6144578313253%×0.3 |
| 추론 | 84.3 | +2.28 | 실측 | [[critpt]] 32.857142857142904%×1.0, [[humanitys-last-exam]] 53.6144578313253%×1.0 |
| 코딩 | 76.3 | +1.75 | 실측 | [[scicode]] 62.6157407407407%×1.0 |
| 에이전트 | 78.4 | +1.89 | 실측 | [[gdpval]] 1857.09%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 83.6666666666667%×1.0 |
| 지시 따르기 | 66.3 | +1.09 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
