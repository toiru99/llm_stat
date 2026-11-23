---
type: Model
title: Gemini 3.7 Flash (low)
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
  knowledge: { s: 73.0, z: 1.24, r: 68.6, estimated: false }  # 전문 지식
  reasoning: { s: 51.8, z: 0.8, r: 62.0, estimated: false }  # 추론
  coding: { s: 80.2, z: 1.36, r: 70.4, estimated: false }  # 코딩
  agentic: { s: 66.8, z: 0.76, r: 61.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.8, z: 1.15, r: 67.2, estimated: false }  # 멀티모달
  long_context: { s: 88.7, z: 1.04, r: 65.6, estimated: false }  # 긴문맥
  instruction: { s: 82.6, z: 1.2, r: 68.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.7 Flash (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Gemini 3.7 Flash (low)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.6 | +1.24 | 실측 | [[gpqa-diamond]] 90.1010101010101%×0.4, [[humanitys-last-exam]] 35.1251158480074%×0.3 |
| 추론 | 62.0 | +0.8 | 실측 | [[critpt]] 5.71428571428571%×1.0, [[gpqa-diamond]] 90.1010101010101%×1.0, [[humanitys-last-exam]] 35.1251158480074%×1.0 |
| 코딩 | 70.4 | +1.36 | 실측 | [[scicode]] 55.671296296296305%×1.0 |
| 에이전트 | 61.3 | +0.76 | 실측 | [[gdpval]] 1327.54%×1.0, [[tau3-banking]] 29.4845360824742%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.2 | +1.15 | 실측 | [[mmmu-pro]] 84.8554913294798%×1.0 |
| 긴문맥 | 65.6 | +1.04 | 실측 | [[aa-lcr]] 78.6666666666667%×1.0 |
| 지시 따르기 | 68.0 | +1.2 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
