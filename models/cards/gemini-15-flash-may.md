---
type: Model
title: Gemini 1.5 Flash (May)
creator: Google
license: Proprietary
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 16.8, z: -1.2, r: 32.0, estimated: false }  # 전문 지식
  reasoning: { s: 15.3, z: -0.97, r: 35.4, estimated: false }  # 추론
  coding: { s: 10.2, z: -0.91, r: 36.3, estimated: true }  # 코딩
  agentic: { s: 16.7, z: -0.86, r: 37.1, estimated: true }  # 에이전트
  trust: { s: 19.4, z: -0.34, r: 44.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 13.8, z: -1.15, r: 32.7, estimated: true }  # 긴문맥
  instruction: { s: 29.1, z: -1.06, r: 34.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Flash (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Gemini 1.5 Flash (May)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.0 | -1.2 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.4 | -0.97 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.3 | -0.91 | 추정 | (추정) |
| 에이전트 | 37.1 | -0.86 | 추정 | (추정) |
| 신뢰성 | 44.9 | -0.34 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.7 | -1.15 | 추정 | (추정) |
| 지시 따르기 | 34.1 | -1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
