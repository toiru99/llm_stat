---
type: Model
title: Jamba 1.5 Large
creator: AI21 Labs
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 24.9, z: -0.76, r: 38.7, estimated: false }  # 전문 지식
  reasoning: { s: 22.5, z: -0.59, r: 41.2, estimated: false }  # 추론
  coding: { s: 26.7, z: -0.83, r: 37.5, estimated: false }  # 코딩
  agentic: { s: 10.7, z: -0.99, r: 35.1, estimated: true }  # 에이전트
  trust: { s: 21.6, z: -0.27, r: 45.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 24.2, z: -0.74, r: 38.8, estimated: true }  # 긴문맥
  instruction: { s: 34.3, z: -0.77, r: 38.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba 1.5 Large
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# Jamba 1.5 Large

AI21 Labs · Open · Unknown · 컨텍스트 256k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $2.0 · 출력 $8.0 · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.7 | -0.76 | 실측 | [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 41.2 | -0.59 | 실측 | [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 37.5 | -0.83 | 실측 | [[scicode]] 16.0%×1.0 |
| 에이전트 | 35.1 | -0.99 | 추정 | (추정) |
| 신뢰성 | 45.9 | -0.27 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.8 | -0.74 | 추정 | (추정) |
| 지시 따르기 | 38.5 | -0.77 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
