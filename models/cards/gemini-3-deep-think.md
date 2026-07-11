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
  knowledge: { s: 85.6, z: 2.19, r: 82.9, estimated: true }  # 전문 지식
  reasoning: { s: 81.2, z: 2.53, r: 87.9, estimated: false }  # 추론
  coding: { s: 91.2, z: 1.91, r: 78.7, estimated: true }  # 코딩
  agentic: { s: 80.3, z: 1.72, r: 75.8, estimated: true }  # 에이전트
  trust: { s: 13.9, z: -0.66, r: 40.1, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.7, z: 1.37, r: 70.6, estimated: true }  # 긴문맥
  instruction: { s: 83.4, z: 1.28, r: 69.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Deep Think
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
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
| 전문 지식 | 82.9 | +2.19 | 추정 | (추정) |
| 추론 | 87.9 | +2.53 | 실측 | [[critpt]] 26.0%×1.0 |
| 코딩 | 78.7 | +1.91 | 추정 | (추정) |
| 에이전트 | 75.8 | +1.72 | 추정 | (추정) |
| 신뢰성 | 40.1 | -0.66 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.6 | +1.37 | 추정 | (추정) |
| 지시 따르기 | 69.1 | +1.28 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
