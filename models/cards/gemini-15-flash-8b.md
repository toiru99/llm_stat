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
size_class: Small
params_b: 8
is_reasoning: false
radar:
  knowledge: { s: 21.0, z: -0.96, r: 35.6, estimated: false }  # 전문 지식
  reasoning: { s: 19.3, z: -0.76, r: 38.5, estimated: false }  # 추론
  coding: { s: 38.3, z: -0.36, r: 44.5, estimated: false }  # 코딩
  agentic: { s: 18.2, z: -0.71, r: 39.3, estimated: true }  # 에이전트
  trust: { s: 26.2, z: -0.1, r: 48.4, estimated: true }  # 신뢰성
  multimodal: { s: 31.4, z: -1.94, r: 20.9, estimated: false }  # 멀티모달
  long_context: { s: 26.1, z: -0.7, r: 39.6, estimated: true }  # 긴문맥
  instruction: { s: 29.0, z: -1.0, r: 35.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Flash-8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-05
timestamp: 2026-08-05T00:00:00Z
---

# Gemini 1.5 Flash-8B

Google · Proprietary · Small(8B) · 컨텍스트 1M · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.6 | -0.96 | 실측 | [[gpqa-diamond]] 36.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 38.5 | -0.76 | 실측 | [[gpqa-diamond]] 36.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 44.5 | -0.36 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 39.3 | -0.71 | 추정 | (추정) |
| 신뢰성 | 48.4 | -0.1 | 추정 | (추정) |
| 멀티모달 | 20.9 | -1.94 | 실측 | [[mmmu-pro]] 37.0%×1.0 |
| 긴문맥 | 39.6 | -0.7 | 추정 | (추정) |
| 지시 따르기 | 35.0 | -1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
