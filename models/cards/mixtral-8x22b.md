---
type: Model
title: Mixtral 8x22B
creator: Mistral
license: Open
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 65400
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 18.1, z: -1.08, r: 33.8, estimated: false }  # 전문 지식
  reasoning: { s: 16.6, z: -0.89, r: 36.6, estimated: false }  # 추론
  coding: { s: 31.7, z: -0.61, r: 40.9, estimated: false }  # 코딩
  agentic: { s: 15.1, z: -0.82, r: 37.7, estimated: true }  # 에이전트
  trust: { s: 39.7, z: 0.55, r: 58.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 13.2, z: -1.04, r: 34.4, estimated: true }  # 긴문맥
  instruction: { s: 28.0, z: -1.0, r: 34.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mixtral 8x22B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-13
timestamp: 2026-07-13T00:00:00Z
---

# Mixtral 8x22B

Mistral · Open · Unknown · 컨텍스트 65k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.8 | -1.08 | 실측 | [[gpqa-diamond]] 33.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.6 | -0.89 | 실측 | [[gpqa-diamond]] 33.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 40.9 | -0.61 | 실측 | [[scicode]] 19.0%×1.0 |
| 에이전트 | 37.7 | -0.82 | 추정 | (추정) |
| 신뢰성 | 58.3 | +0.55 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.4 | -1.04 | 추정 | (추정) |
| 지시 따르기 | 34.9 | -1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
