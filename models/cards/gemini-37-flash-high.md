---
type: Model
title: Gemini 3.7 Flash (high)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.4, z: 1.74, r: 76.1, estimated: false }  # 전문 지식
  reasoning: { s: 67.3, z: 1.56, r: 73.5, estimated: false }  # 추론
  coding: { s: 82.7, z: 1.45, r: 71.7, estimated: false }  # 코딩
  agentic: { s: 71.7, z: 0.93, r: 63.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 94.7, z: 1.19, r: 67.8, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.14, r: 67.1, estimated: false }  # 긴문맥
  instruction: { s: 81.9, z: 1.17, r: 67.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.7 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Gemini 3.7 Flash (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.1 | +1.74 | 실측 | [[gpqa-diamond]] 94.5454545454545%×0.4, [[humanitys-last-exam]] 47.8683966635774%×0.3 |
| 추론 | 73.5 | +1.56 | 실측 | [[critpt]] 14.285714285714299%×1.0, [[gpqa-diamond]] 94.5454545454545%×1.0, [[humanitys-last-exam]] 47.8683966635774%×1.0 |
| 코딩 | 71.7 | +1.45 | 실측 | [[scicode]] 57.175925925925895%×1.0 |
| 에이전트 | 63.9 | +0.93 | 실측 | [[gdpval]] 1404.14%×1.0, [[tau3-banking]] 32.7835051546392%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.8 | +1.19 | 실측 | [[mmmu-pro]] 85.4913294797688%×1.0 |
| 긴문맥 | 67.1 | +1.14 | 실측 | [[aa-lcr]] 81.6666666666667%×1.0 |
| 지시 따르기 | 67.6 | +1.17 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
