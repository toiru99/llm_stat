---
type: Model
title: Mistral Large (Feb)
creator: Mistral
license: Proprietary
intelligence_index: 4.0
price_blended_usd_1m: 4.8
output_speed_tps: None
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 19.0, z: -1.06, r: 34.0, estimated: false }  # 전문 지식
  reasoning: { s: 17.3, z: -0.86, r: 37.0, estimated: false }  # 추론
  coding: { s: 33.9, z: -0.55, r: 41.7, estimated: false }  # 코딩
  agentic: { s: 16.8, z: -0.8, r: 38.0, estimated: true }  # 에이전트
  trust: { s: 9.3, z: -0.73, r: 39.1, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 16.9, z: -1.02, r: 34.8, estimated: true }  # 긴문맥
  instruction: { s: 35.6, z: -0.72, r: 39.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large (Feb)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Mistral Large (Feb)

Mistral · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $4.0 · 출력 $12.0 · 혼합 $4.8/1M · None t/s · TTFT Nones · 32k ctx` · 가성비 0.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.0 | -1.06 | 실측 | [[gpqa-diamond]] 35.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.0 | -0.86 | 실측 | [[gpqa-diamond]] 35.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 41.7 | -0.55 | 실측 | [[scicode]] 21.0%×1.0 |
| 에이전트 | 38.0 | -0.8 | 추정 | (추정) |
| 신뢰성 | 39.1 | -0.73 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.8 | -1.02 | 추정 | (추정) |
| 지시 따르기 | 39.1 | -0.72 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
