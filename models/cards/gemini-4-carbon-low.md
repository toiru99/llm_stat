---
type: Model
title: Gemini 4 Carbon (low)
creator: Google
license: Proprietary
intelligence_index: 54.0
price_blended_usd_1m: 2.94
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 87.8, z: 1.7, r: 75.5, estimated: true }  # 전문 지식
  reasoning: { s: 90.3, z: 2.01, r: 80.2, estimated: false }  # 추론
  coding: { s: 79.4, z: 1.4, r: 71.0, estimated: true }  # 코딩
  agentic: { s: 80.5, z: 1.58, r: 73.7, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.9, z: 1.17, r: 67.6, estimated: true }  # 긴문맥
  instruction: { s: 78.0, z: 1.06, r: 65.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Carbon (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Gemini 4 Carbon (low)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **54.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 18.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.5 | +1.7 | 추정 | (추정) |
| 추론 | 80.2 | +2.01 | 실측 | [[critpt]] 65.0%×1.0 |
| 코딩 | 71.0 | +1.4 | 추정 | (추정) |
| 에이전트 | 73.7 | +1.58 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.6 | +1.17 | 추정 | (추정) |
| 지시 따르기 | 65.9 | +1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
