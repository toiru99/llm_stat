---
type: Model
title: JT-4.1 Flash 236B A21B
creator: China Mobile
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 70.5, z: 0.93, r: 64.0, estimated: false }  # 전문 지식
  reasoning: { s: 70.5, z: 1.12, r: 66.9, estimated: false }  # 추론
  coding: { s: 75.2, z: 1.26, r: 68.9, estimated: false }  # 코딩
  agentic: { s: 71.5, z: 1.27, r: 69.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 1.07, r: 66.0, estimated: false }  # 긴문맥
  instruction: { s: 70.5, z: 0.74, r: 61.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — JT-4.1 Flash 236B A21B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# JT-4.1 Flash 236B A21B

China Mobile · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.0 | +0.93 | 실측 | [[humanitys-last-exam]] 43.6%×0.3 |
| 추론 | 66.9 | +1.12 | 실측 | [[humanitys-last-exam]] 43.6%×1.0 |
| 코딩 | 68.9 | +1.26 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 69.1 | +1.27 | 실측 | [[gdpval]] 1335.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.0 | +1.07 | 실측 | [[aa-lcr]] 78.3%×1.0 |
| 지시 따르기 | 61.2 | +0.74 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
