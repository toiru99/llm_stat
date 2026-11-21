---
type: Model
title: Muse Glimmer (high)
creator: Meta
license: Open
intelligence_index: 6.34128724913462
price_blended_usd_1m: 0.228
output_speed_tps: 87.16751403779756
context_window: 131072
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.0, z: 0.66, r: 59.9, estimated: false }  # 전문 지식
  reasoning: { s: 40.3, z: 0.23, r: 53.5, estimated: false }  # 추론
  coding: { s: 62.5, z: 0.76, r: 61.4, estimated: false }  # 코딩
  agentic: { s: 49.1, z: 0.14, r: 52.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.8, z: 0.43, r: 56.4, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.2, r: 68.0, estimated: false }  # 긴문맥
  instruction: { s: 83.4, z: 1.23, r: 68.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Glimmer (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Muse Glimmer (high)

Meta · Open · Small · 컨텍스트 131k · 종합지능 **6.34128724913462**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.32499999999999996 · 출력 $1.35 · 혼합 $0.228/1M · 87.16751403779756 t/s · TTFT 1.58154898789658s · 131k ctx` · 가성비 27.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.9 | +0.66 | 실측 | [[gpqa-diamond]] 83.5353535353535%×0.4, [[humanitys-last-exam]] 21.9647822057461%×0.3 |
| 추론 | 53.5 | +0.23 | 실측 | [[critpt]] 2.57142857142857%×1.0, [[gpqa-diamond]] 83.5353535353535%×1.0, [[humanitys-last-exam]] 21.9647822057461%×1.0 |
| 코딩 | 61.4 | +0.76 | 실측 | [[scicode]] 44.907407407407405%×1.0 |
| 에이전트 | 52.2 | +0.14 | 실측 | [[gdpval]] 791.7%×1.0, [[tau3-banking]] 23.5051546391753%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.4 | +0.43 | 실측 | [[mmmu-pro]] 74.3352601156069%×1.0 |
| 긴문맥 | 68.0 | +1.2 | 실측 | [[aa-lcr]] 83.3333333333333%×1.0 |
| 지시 따르기 | 68.5 | +1.23 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
