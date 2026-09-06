---
type: Model
title: Gemini 1.0 Pro
creator: Google
license: Proprietary
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 14.2, z: -1.29, r: 30.7, estimated: false }  # 전문 지식
  reasoning: { s: 13.1, z: -1.06, r: 34.1, estimated: false }  # 추론
  coding: { s: 0.7, z: -1.1, r: 33.5, estimated: true }  # 코딩
  agentic: { s: 10.7, z: -1.03, r: 34.6, estimated: true }  # 에이전트
  trust: { s: 14.0, z: -0.5, r: 42.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 7.8, z: -1.27, r: 31.0, estimated: true }  # 긴문맥
  instruction: { s: 29.6, z: -0.97, r: 35.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.0 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Gemini 1.0 Pro

Google · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.7 | -1.29 | 실측 | [[gpqa-diamond]] 28.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 34.1 | -1.06 | 실측 | [[gpqa-diamond]] 28.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.5 | -1.1 | 추정 | (추정) |
| 에이전트 | 34.6 | -1.03 | 추정 | (추정) |
| 신뢰성 | 42.6 | -0.5 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.0 | -1.27 | 추정 | (추정) |
| 지시 따르기 | 35.5 | -0.97 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
