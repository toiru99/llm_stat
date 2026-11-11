---
type: Model
title: Muse Ember (max)
creator: Meta
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: 0.0728
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 55.7, z: 0.42, r: 56.4, estimated: true }  # 전문 지식
  reasoning: { s: 51.0, z: 0.38, r: 55.8, estimated: false }  # 추론
  coding: { s: 43.1, z: 0.18, r: 52.7, estimated: true }  # 코딩
  agentic: { s: 34.5, z: -0.01, r: 49.8, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 70.2, z: 0.51, r: 57.7, estimated: true }  # 긴문맥
  instruction: { s: 66.8, z: 0.6, r: 59.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Ember (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Muse Ember (max)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **36.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.0728/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 494.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.4 | +0.42 | 추정 | (추정) |
| 추론 | 55.8 | +0.38 | 실측 | [[critpt]] 39.0%×1.0 |
| 코딩 | 52.7 | +0.18 | 추정 | (추정) |
| 에이전트 | 49.8 | -0.01 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.7 | +0.51 | 추정 | (추정) |
| 지시 따르기 | 59.1 | +0.6 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
