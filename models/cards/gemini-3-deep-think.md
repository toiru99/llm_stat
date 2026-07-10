---
type: Model
title: Gemini 3 Deep Think
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
radar:
  knowledge: { s: 86.7, z: 1.35, r: 70.3, estimated: true }  # 전문 지식
  reasoning: { s: 81.2, z: 1.45, r: 71.8, estimated: false }  # 추론
  coding: { s: 89.8, z: 1.13, r: 67.0, estimated: true }  # 코딩
  agentic: { s: 81.6, z: 1.08, r: 66.2, estimated: true }  # 에이전트
  trust: { s: 24.2, z: -0.24, r: 46.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 97.0, z: 0.86, r: 62.9, estimated: true }  # 긴문맥
  instruction: { s: 82.8, z: 0.6, r: 59.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Deep Think
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Gemini 3 Deep Think

Google · Proprietary · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.3 | +1.35 | 추정 | (추정) |
| 추론 | 71.8 | +1.45 | 실측 | [[critpt]] 26.0%×1.0 |
| 코딩 | 67.0 | +1.13 | 추정 | (추정) |
| 에이전트 | 66.2 | +1.08 | 추정 | (추정) |
| 신뢰성 | 46.4 | -0.24 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.9 | +0.86 | 추정 | (추정) |
| 지시 따르기 | 59.0 | +0.6 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
