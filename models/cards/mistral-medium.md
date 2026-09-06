---
type: Model
title: Mistral Medium
creator: Mistral
license: Proprietary
intelligence_index: 1.0
price_blended_usd_1m: 2.1
output_speed_tps: 137.0
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 18.8, z: -1.06, r: 34.0, estimated: false }  # 전문 지식
  reasoning: { s: 17.1, z: -0.86, r: 37.1, estimated: false }  # 추론
  coding: { s: 1.2, z: -1.08, r: 33.8, estimated: true }  # 코딩
  agentic: { s: 5.1, z: -1.24, r: 31.4, estimated: true }  # 에이전트
  trust: { s: 30.7, z: 0.29, r: 54.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 4.3, z: -1.38, r: 29.3, estimated: true }  # 긴문맥
  instruction: { s: 31.5, z: -0.89, r: 36.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Medium
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Mistral Medium

Mistral · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $1.5 · 출력 $7.5 · 혼합 $2.1/1M · 137.0 t/s · TTFT 2.23s · 32k ctx` · 가성비 0.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.0 | -1.06 | 실측 | [[gpqa-diamond]] 35.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.1 | -0.86 | 실측 | [[gpqa-diamond]] 35.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.8 | -1.08 | 추정 | (추정) |
| 에이전트 | 31.4 | -1.24 | 추정 | (추정) |
| 신뢰성 | 54.4 | +0.29 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.3 | -1.38 | 추정 | (추정) |
| 지시 따르기 | 36.7 | -0.89 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
