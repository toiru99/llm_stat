---
type: Model
title: Gemini 3 Deep Think
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.4, z: 2.0, r: 80.0, estimated: true }  # 전문 지식
  reasoning: { s: 81.2, z: 2.3, r: 84.4, estimated: false }  # 추론
  coding: { s: 90.4, z: 1.79, r: 76.8, estimated: true }  # 코딩
  agentic: { s: 75.7, z: 1.59, r: 73.8, estimated: true }  # 에이전트
  trust: { s: 34.2, z: 0.36, r: 55.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.32, r: 69.8, estimated: true }  # 긴문맥
  instruction: { s: 77.5, z: 0.98, r: 64.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Deep Think
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-09
timestamp: 2026-08-09T00:00:00Z
---

# Gemini 3 Deep Think

Google · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.0 | +2.0 | 추정 | (추정) |
| 추론 | 84.4 | +2.3 | 실측 | [[critpt]] 26.0%×1.0 |
| 코딩 | 76.8 | +1.79 | 추정 | (추정) |
| 에이전트 | 73.8 | +1.59 | 추정 | (추정) |
| 신뢰성 | 55.4 | +0.36 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.8 | +1.32 | 추정 | (추정) |
| 지시 따르기 | 64.8 | +0.98 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
