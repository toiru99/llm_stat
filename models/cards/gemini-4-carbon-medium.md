---
type: Model
title: Gemini 4 Carbon (medium)
creator: Google
license: Proprietary
intelligence_index: 58.0
price_blended_usd_1m: 1.47
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 87.4, z: 1.94, r: 79.1, estimated: true }  # 전문 지식
  reasoning: { s: 90.2, z: 2.29, r: 84.3, estimated: false }  # 추론
  coding: { s: 82.9, z: 1.51, r: 72.6, estimated: true }  # 코딩
  agentic: { s: 87.5, z: 1.77, r: 76.6, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 100.0, z: 1.44, r: 71.6, estimated: false }  # 멀티모달
  long_context: { s: 91.1, z: 1.14, r: 67.0, estimated: true }  # 긴문맥
  instruction: { s: 77.8, z: 1.06, r: 65.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Carbon (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Gemini 4 Carbon (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **58.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 39.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.1 | +1.94 | 추정 | (추정) |
| 추론 | 84.3 | +2.29 | 실측 | [[critpt]] 69.0%×1.0 |
| 코딩 | 72.6 | +1.51 | 추정 | (추정) |
| 에이전트 | 76.6 | +1.77 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 71.6 | +1.44 | 실측 | [[mmmu-pro]] 89.0%×1.0 |
| 긴문맥 | 67.0 | +1.14 | 추정 | (추정) |
| 지시 따르기 | 65.9 | +1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
