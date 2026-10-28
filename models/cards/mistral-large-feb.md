---
type: Model
title: Mistral Large (Feb)
creator: Mistral
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.8
output_speed_tps: None
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 18.8, z: -1.35, r: 29.7, estimated: false }  # 전문 지식
  reasoning: { s: 17.0, z: -1.3, r: 30.5, estimated: false }  # 추론
  coding: { s: 4.0, z: -1.11, r: 33.4, estimated: true }  # 코딩
  agentic: { s: 2.3, z: -1.09, r: 33.6, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 12.4, z: -1.19, r: 32.1, estimated: true }  # 긴문맥
  instruction: { s: 22.7, z: -1.26, r: 31.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large (Feb)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Mistral Large (Feb)

Mistral · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $4.0 · 출력 $12.0 · 혼합 $4.8/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.7 | -1.35 | 실측 | [[gpqa-diamond]] 35.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 30.5 | -1.3 | 실측 | [[gpqa-diamond]] 35.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.4 | -1.11 | 추정 | (추정) |
| 에이전트 | 33.6 | -1.09 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.1 | -1.19 | 추정 | (추정) |
| 지시 따르기 | 31.1 | -1.26 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
