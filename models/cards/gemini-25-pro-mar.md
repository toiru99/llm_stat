---
type: Model
title: Gemini 2.5 Pro (Mar)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.6, z: 0.56, r: 58.3, estimated: false }  # 전문 지식
  reasoning: { s: 54.2, z: 0.53, r: 58.0, estimated: false }  # 추론
  coding: { s: 64.6, z: 0.89, r: 63.4, estimated: true }  # 코딩
  agentic: { s: 52.7, z: 0.6, r: 59.0, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.4, z: 0.82, r: 62.2, estimated: true }  # 긴문맥
  instruction: { s: 70.1, z: 0.73, r: 61.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Pro (Mar)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Gemini 2.5 Pro (Mar)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.3 | +0.56 | 실측 | [[gpqa-diamond]] 83.6%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 58.0 | +0.53 | 실측 | [[gpqa-diamond]] 83.6%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 63.4 | +0.89 | 추정 | (추정) |
| 에이전트 | 59.0 | +0.6 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.2 | +0.82 | 추정 | (추정) |
| 지시 따르기 | 61.0 | +0.73 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
