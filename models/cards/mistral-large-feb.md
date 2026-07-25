---
type: Model
title: Mistral Large (Feb)
creator: Mistral
license: Proprietary
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 18.7, z: -1.06, r: 34.1, estimated: false }  # 전문 지식
  reasoning: { s: 16.8, z: -0.88, r: 36.8, estimated: false }  # 추론
  coding: { s: 35.0, z: -0.5, r: 42.6, estimated: false }  # 코딩
  agentic: { s: 16.2, z: -0.78, r: 38.3, estimated: true }  # 에이전트
  trust: { s: 40.9, z: 0.6, r: 59.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 16.3, z: -0.98, r: 35.3, estimated: true }  # 긴문맥
  instruction: { s: 29.1, z: -0.99, r: 35.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large (Feb)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# Mistral Large (Feb)

Mistral · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $4.0 · 출력 $12.0 · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.1 | -1.06 | 실측 | [[gpqa-diamond]] 35.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 36.8 | -0.88 | 실측 | [[gpqa-diamond]] 35.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 42.6 | -0.5 | 실측 | [[scicode]] 21.0%×1.0 |
| 에이전트 | 38.3 | -0.78 | 추정 | (추정) |
| 신뢰성 | 59.0 | +0.6 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.3 | -0.98 | 추정 | (추정) |
| 지시 따르기 | 35.1 | -0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
