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
  knowledge: { s: 80.1, z: 1.89, r: 78.4, estimated: true }  # 전문 지식
  reasoning: { s: 81.2, z: 2.22, r: 83.3, estimated: false }  # 추론
  coding: { s: 83.7, z: 1.75, r: 76.2, estimated: true }  # 코딩
  agentic: { s: 83.0, z: 1.73, r: 76.0, estimated: true }  # 에이전트
  trust: { s: 23.7, z: -0.05, r: 49.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.1, z: 1.2, r: 68.0, estimated: true }  # 긴문맥
  instruction: { s: 79.4, z: 1.11, r: 66.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Deep Think
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-09
timestamp: 2026-09-09T00:00:00Z
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
| 전문 지식 | 78.4 | +1.89 | 추정 | (추정) |
| 추론 | 83.3 | +2.22 | 실측 | [[critpt]] 26.0%×1.0 |
| 코딩 | 76.2 | +1.75 | 추정 | (추정) |
| 에이전트 | 76.0 | +1.73 | 추정 | (추정) |
| 신뢰성 | 49.2 | -0.05 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.0 | +1.2 | 추정 | (추정) |
| 지시 따르기 | 66.7 | +1.11 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
