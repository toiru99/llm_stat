---
type: Model
title: Mistral Small (Feb)
creator: Mistral
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 33000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 15.6, z: -1.49, r: 27.7, estimated: false }  # 전문 지식
  reasoning: { s: 14.3, z: -1.4, r: 29.0, estimated: false }  # 추론
  coding: { s: 1.7, z: -1.19, r: 32.1, estimated: true }  # 코딩
  agentic: { s: 0.2, z: -1.17, r: 32.5, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 2.1, z: -1.52, r: 27.2, estimated: true }  # 긴문맥
  instruction: { s: 19.2, z: -1.43, r: 28.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small (Feb)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Mistral Small (Feb)

Mistral · Proprietary · Unknown · 컨텍스트 33k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 33k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 27.7 | -1.49 | 실측 | [[gpqa-diamond]] 30.2%×0.4, [[humanitys-last-exam]] 4.1%×0.3 |
| 추론 | 29.0 | -1.4 | 실측 | [[gpqa-diamond]] 30.2%×1.0, [[humanitys-last-exam]] 4.1%×1.0 |
| 코딩 | 32.1 | -1.19 | 추정 | (추정) |
| 에이전트 | 32.5 | -1.17 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.2 | -1.52 | 추정 | (추정) |
| 지시 따르기 | 28.5 | -1.43 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
