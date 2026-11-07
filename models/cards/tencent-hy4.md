---
type: Model
title: Tencent Hy4
creator: Tencent
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 0.4463
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.4, z: 0.39, r: 55.8, estimated: true }  # 전문 지식
  reasoning: { s: 54.2, z: 0.38, r: 55.7, estimated: false }  # 추론
  coding: { s: 42.4, z: 0.17, r: 52.6, estimated: true }  # 코딩
  agentic: { s: 35.5, z: 0.04, r: 50.6, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 71.7, z: 0.58, r: 58.6, estimated: true }  # 긴문맥
  instruction: { s: 67.0, z: 0.59, r: 58.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Tencent Hy4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-07
timestamp: 2026-11-07T00:00:00Z
---

# Tencent Hy4

Tencent · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.83 · 출력 $2.5 · 혼합 $0.4463/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 78.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.8 | +0.39 | 추정 | (추정) |
| 추론 | 55.7 | +0.38 | 실측 | [[critpt]] 39.0%×1.0 |
| 코딩 | 52.6 | +0.17 | 추정 | (추정) |
| 에이전트 | 50.6 | +0.04 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.6 | +0.58 | 추정 | (추정) |
| 지시 따르기 | 58.8 | +0.59 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
