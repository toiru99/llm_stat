---
type: Model
title: Gemini 1.5 Flash-8B
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1050000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 20.1, z: -1.29, r: 30.6, estimated: false }  # 전문 지식
  reasoning: { s: 18.4, z: -1.23, r: 31.5, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.2, r: 31.9, estimated: true }  # 코딩
  agentic: { s: 0.8, z: -1.15, r: 32.8, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 30.1, z: -2.09, r: 18.7, estimated: false }  # 멀티모달
  long_context: { s: 1.0, z: -1.54, r: 27.0, estimated: true }  # 긴문맥
  instruction: { s: 31.5, z: -0.89, r: 36.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Flash-8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Gemini 1.5 Flash-8B

Google · Proprietary · Small · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.6 | -1.29 | 실측 | [[gpqa-diamond]] 36.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 31.5 | -1.23 | 실측 | [[gpqa-diamond]] 36.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 31.9 | -1.2 | 추정 | (추정) |
| 에이전트 | 32.8 | -1.15 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 18.7 | -2.09 | 실측 | [[mmmu-pro]] 37.0%×1.0 |
| 긴문맥 | 27.0 | -1.54 | 추정 | (추정) |
| 지시 따르기 | 36.7 | -0.89 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
