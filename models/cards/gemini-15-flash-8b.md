---
type: Model
title: Gemini 1.5 Flash-8B
creator: Google
license: Proprietary
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 21.0, z: -0.95, r: 35.8, estimated: false }  # 전문 지식
  reasoning: { s: 19.3, z: -0.75, r: 38.7, estimated: false }  # 추론
  coding: { s: 38.3, z: -0.34, r: 44.9, estimated: false }  # 코딩
  agentic: { s: 18.5, z: -0.69, r: 39.6, estimated: true }  # 에이전트
  trust: { s: 22.4, z: -0.23, r: 46.5, estimated: true }  # 신뢰성
  multimodal: { s: 31.9, z: -1.91, r: 21.3, estimated: false }  # 멀티모달
  long_context: { s: 28.5, z: -0.62, r: 40.7, estimated: true }  # 긴문맥
  instruction: { s: 28.5, z: -1.01, r: 34.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Flash-8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# Gemini 1.5 Flash-8B

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.8 | -0.95 | 실측 | [[gpqa-diamond]] 36.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 38.7 | -0.75 | 실측 | [[gpqa-diamond]] 36.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 44.9 | -0.34 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 39.6 | -0.69 | 추정 | (추정) |
| 신뢰성 | 46.5 | -0.23 | 추정 | (추정) |
| 멀티모달 | 21.3 | -1.91 | 실측 | [[mmmu-pro]] 37.0%×1.0 |
| 긴문맥 | 40.7 | -0.62 | 추정 | (추정) |
| 지시 따르기 | 34.9 | -1.01 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
