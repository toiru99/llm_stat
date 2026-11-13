---
type: Model
title: Muse Wonder (high)
creator: Meta
license: Proprietary
intelligence_index: 41.0
price_blended_usd_1m: 2.94
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.5, z: 1.08, r: 66.1, estimated: true }  # 전문 지식
  reasoning: { s: 66.7, z: 1.14, r: 67.1, estimated: false }  # 추론
  coding: { s: 67.0, z: 0.97, r: 64.6, estimated: true }  # 코딩
  agentic: { s: 51.1, z: 0.54, r: 58.2, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.2, z: 1.1, r: 66.5, estimated: false }  # 멀티모달
  long_context: { s: 84.9, z: 0.95, r: 64.3, estimated: true }  # 긴문맥
  instruction: { s: 85.1, z: 1.38, r: 70.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Wonder (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Muse Wonder (high)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **41.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 13.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.1 | +1.08 | 추정 | (추정) |
| 추론 | 67.1 | +1.14 | 실측 | [[critpt]] 51.0%×1.0 |
| 코딩 | 64.6 | +0.97 | 추정 | (추정) |
| 에이전트 | 58.2 | +0.54 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.5 | +1.1 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 64.3 | +0.95 | 추정 | (추정) |
| 지시 따르기 | 70.6 | +1.38 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
