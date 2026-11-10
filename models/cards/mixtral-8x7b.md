---
type: Model
title: Mixtral 8x7B
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.475
output_speed_tps: None
context_window: 33000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 14.9, z: -1.55, r: 26.8, estimated: false }  # 전문 지식
  reasoning: { s: 13.7, z: -1.44, r: 28.3, estimated: false }  # 추론
  coding: { s: 0.7, z: -1.24, r: 31.4, estimated: true }  # 코딩
  agentic: { s: 0.2, z: -1.17, r: 32.4, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 2.9, z: -1.5, r: 27.5, estimated: true }  # 긴문맥
  instruction: { s: 18.7, z: -1.47, r: 28.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mixtral 8x7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Mixtral 8x7B

Mistral · Open · Medium · 컨텍스트 33k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $0.45 · 출력 $0.7 · 혼합 $0.475/1M · None t/s · TTFT Nones · 33k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 26.8 | -1.55 | 실측 | [[gpqa-diamond]] 29.2%×0.4, [[humanitys-last-exam]] 4.7%×0.3 |
| 추론 | 28.3 | -1.44 | 실측 | [[gpqa-diamond]] 29.2%×1.0, [[humanitys-last-exam]] 4.7%×1.0 |
| 코딩 | 31.4 | -1.24 | 추정 | (추정) |
| 에이전트 | 32.4 | -1.17 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.5 | -1.5 | 추정 | (추정) |
| 지시 따르기 | 28.0 | -1.47 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
