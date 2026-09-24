---
type: Model
title: Mistral Medium
creator: Mistral
license: Proprietary
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 18.8, z: -1.08, r: 33.8, estimated: false }  # 전문 지식
  reasoning: { s: 17.0, z: -0.87, r: 36.9, estimated: false }  # 추론
  coding: { s: 0.7, z: -1.19, r: 32.2, estimated: true }  # 코딩
  agentic: { s: 2.5, z: -1.35, r: 29.7, estimated: true }  # 에이전트
  trust: { s: 23.5, z: -0.1, r: 48.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 6.1, z: -1.36, r: 29.7, estimated: true }  # 긴문맥
  instruction: { s: 28.7, z: -1.03, r: 34.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Medium
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# Mistral Medium

Mistral · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.8 | -1.08 | 실측 | [[gpqa-diamond]] 35.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.9 | -0.87 | 실측 | [[gpqa-diamond]] 35.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 32.2 | -1.19 | 추정 | (추정) |
| 에이전트 | 29.7 | -1.35 | 추정 | (추정) |
| 신뢰성 | 48.5 | -0.1 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.7 | -1.36 | 추정 | (추정) |
| 지시 따르기 | 34.6 | -1.03 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
