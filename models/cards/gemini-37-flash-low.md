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
  knowledge: { s: 73.0, z: 1.24, r: 68.7, estimated: false }  # 전문 지식
  reasoning: { s: 69.6, z: 1.28, r: 69.3, estimated: false }  # 추론
  coding: { s: 80.3, z: 1.42, r: 71.3, estimated: false }  # 코딩
  agentic: { s: 64.2, z: 0.99, r: 64.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 94.6, z: 1.17, r: 67.5, estimated: false }  # 멀티모달
  long_context: { s: 88.7, z: 1.06, r: 66.0, estimated: false }  # 긴문맥
  instruction: { s: 79.8, z: 1.15, r: 67.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.7 Flash (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Gemini 3.7 Flash (low)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.7 | +1.24 | 실측 | [[gpqa-diamond]] 90.1%×0.4, [[humanitys-last-exam]] 35.1%×0.3 |
| 추론 | 69.3 | +1.28 | 실측 | [[gpqa-diamond]] 90.1%×1.0, [[humanitys-last-exam]] 35.1%×1.0 |
| 코딩 | 71.3 | +1.42 | 실측 | [[scicode]] 55.7%×1.0 |
| 에이전트 | 64.8 | +0.99 | 실측 | [[gdpval]] 1327.0%×1.0, [[tau3-banking]] 29.5%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.5 | +1.17 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 66.0 | +1.06 | 실측 | [[aa-lcr]] 78.7%×1.0 |
| 지시 따르기 | 67.2 | +1.15 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
