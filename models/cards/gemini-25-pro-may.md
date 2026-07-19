---
type: Model
title: Gemini 2.5 Pro (May)
creator: Google
license: Proprietary
intelligence_index: 22.0
price_blended_usd_1m: 1.34
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 60.5, z: 0.96, r: 64.4, estimated: false }  # 전문 지식
  reasoning: { s: 56.3, z: 1.19, r: 67.9, estimated: false }  # 추론
  coding: { s: 70.0, z: 1.0, r: 65.0, estimated: false }  # 코딩
  agentic: { s: 65.4, z: 1.13, r: 67.0, estimated: true }  # 에이전트
  trust: { s: 55.3, z: 1.3, r: 69.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 79.2, z: 0.9, r: 63.6, estimated: true }  # 긴문맥
  instruction: { s: 70.7, z: 0.76, r: 61.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Pro (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-19
timestamp: 2026-07-19T00:00:00Z
---

# Gemini 2.5 Pro (May)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **22.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.34/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 16.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.4 | +0.96 | 실측 | [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 67.9 | +1.19 | 실측 | [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 65.0 | +1.0 | 실측 | [[scicode]] 42.0%×1.0 |
| 에이전트 | 67.0 | +1.13 | 추정 | (추정) |
| 신뢰성 | 69.5 | +1.3 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.6 | +0.9 | 추정 | (추정) |
| 지시 따르기 | 61.3 | +0.76 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
