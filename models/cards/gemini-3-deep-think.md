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
  knowledge: { s: 82.1, z: 2.08, r: 81.2, estimated: true }  # 전문 지식
  reasoning: { s: 81.2, z: 2.35, r: 85.2, estimated: false }  # 추론
  coding: { s: 88.3, z: 1.76, r: 76.4, estimated: true }  # 코딩
  agentic: { s: 77.1, z: 1.56, r: 73.3, estimated: true }  # 에이전트
  trust: { s: 18.4, z: -0.28, r: 45.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.3, z: 1.3, r: 69.5, estimated: true }  # 긴문맥
  instruction: { s: 82.5, z: 1.25, r: 68.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Deep Think
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
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
| 전문 지식 | 81.2 | +2.08 | 추정 | (추정) |
| 추론 | 85.2 | +2.35 | 실측 | [[critpt]] 26.0%×1.0 |
| 코딩 | 76.4 | +1.76 | 추정 | (추정) |
| 에이전트 | 73.3 | +1.56 | 추정 | (추정) |
| 신뢰성 | 45.7 | -0.28 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.5 | +1.3 | 추정 | (추정) |
| 지시 따르기 | 68.7 | +1.25 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
