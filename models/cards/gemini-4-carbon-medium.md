---
type: Model
title: Gemini 4 Carbon (medium)
creator: Google
license: Proprietary
intelligence_index: 58.0
price_blended_usd_1m: 2.94
output_speed_tps: 101.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 92.6, z: 1.89, r: 78.4, estimated: true }  # 전문 지식
  reasoning: { s: 88.9, z: 1.94, r: 79.1, estimated: false }  # 추론
  coding: { s: 87.0, z: 1.67, r: 75.0, estimated: true }  # 코딩
  agentic: { s: 87.6, z: 1.83, r: 77.4, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 100.0, z: 1.45, r: 71.7, estimated: false }  # 멀티모달
  long_context: { s: 92.6, z: 1.21, r: 68.1, estimated: true }  # 긴문맥
  instruction: { s: 79.0, z: 1.1, r: 66.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Carbon (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-03
timestamp: 2026-11-03T00:00:00Z
---

# Gemini 4 Carbon (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **58.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 101.0 t/s · TTFT 29.12s · 1M ctx` · 가성비 19.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.4 | +1.89 | 추정 | (추정) |
| 추론 | 79.1 | +1.94 | 실측 | [[critpt]] 64.0%×1.0 |
| 코딩 | 75.0 | +1.67 | 추정 | (추정) |
| 에이전트 | 77.4 | +1.83 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 71.7 | +1.45 | 실측 | [[mmmu-pro]] 89.0%×1.0 |
| 긴문맥 | 68.1 | +1.21 | 추정 | (추정) |
| 지시 따르기 | 66.5 | +1.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
