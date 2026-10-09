---
type: Model
title: Gemini 2.5 Pro (May)
creator: Google
license: Proprietary
intelligence_index: 15.0
price_blended_usd_1m: 1.3375
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.4, z: 0.87, r: 63.1, estimated: false }  # 전문 지식
  reasoning: { s: 57.7, z: 0.96, r: 64.3, estimated: false }  # 추론
  coding: { s: 69.0, z: 1.1, r: 66.5, estimated: true }  # 코딩
  agentic: { s: 51.1, z: 0.46, r: 56.9, estimated: true }  # 에이전트
  trust: { s: 36.3, z: 0.44, r: 56.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.04, r: 65.6, estimated: true }  # 긴문맥
  instruction: { s: 82.3, z: 1.16, r: 67.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Pro (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# Gemini 2.5 Pro (May)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **15.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 11.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.1 | +0.87 | 실측 | [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 64.3 | +0.96 | 실측 | [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 66.5 | +1.1 | 추정 | (추정) |
| 에이전트 | 56.9 | +0.46 | 추정 | (추정) |
| 신뢰성 | 56.6 | +0.44 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.6 | +1.04 | 추정 | (추정) |
| 지시 따르기 | 67.4 | +1.16 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
