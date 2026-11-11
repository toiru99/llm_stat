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
  knowledge: { s: 55.4, z: 0.41, r: 56.1, estimated: true }  # 전문 지식
  reasoning: { s: 51.0, z: 0.38, r: 55.8, estimated: false }  # 추론
  coding: { s: 45.3, z: 0.25, r: 53.8, estimated: true }  # 코딩
  agentic: { s: 35.4, z: 0.02, r: 50.3, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 71.0, z: 0.54, r: 58.1, estimated: true }  # 긴문맥
  instruction: { s: 60.5, z: 0.33, r: 55.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Tencent Hy4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Tencent Hy4

Tencent · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.83 · 출력 $2.5 · 혼합 $0.4463/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 78.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.1 | +0.41 | 추정 | (추정) |
| 추론 | 55.8 | +0.38 | 실측 | [[critpt]] 39.0%×1.0 |
| 코딩 | 53.8 | +0.25 | 추정 | (추정) |
| 에이전트 | 50.3 | +0.02 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.1 | +0.54 | 추정 | (추정) |
| 지시 따르기 | 55.0 | +0.33 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
