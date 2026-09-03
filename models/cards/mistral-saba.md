---
type: Model
title: Mistral Saba
creator: Mistral
license: Proprietary
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: past
size_class: Small
params_b: 24
is_reasoning: false
radar:
  knowledge: { s: 23.7, z: -0.83, r: 37.5, estimated: false }  # 전문 지식
  reasoning: { s: 21.4, z: -0.66, r: 40.1, estimated: false }  # 추론
  coding: { s: 38.7, z: -0.35, r: 44.7, estimated: false }  # 코딩
  agentic: { s: 15.0, z: -0.87, r: 36.9, estimated: true }  # 에이전트
  trust: { s: 22.8, z: -0.09, r: 48.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 12.8, z: -1.14, r: 32.9, estimated: true }  # 긴문맥
  instruction: { s: 23.3, z: -1.24, r: 31.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Saba
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Mistral Saba

Mistral · Proprietary · Small(24B) · 컨텍스트 32k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.5 | -0.83 | 실측 | [[gpqa-diamond]] 42.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.1 | -0.66 | 실측 | [[gpqa-diamond]] 42.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 44.7 | -0.35 | 실측 | [[scicode]] 24.0%×1.0 |
| 에이전트 | 36.9 | -0.87 | 추정 | (추정) |
| 신뢰성 | 48.7 | -0.09 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.9 | -1.14 | 추정 | (추정) |
| 지시 따르기 | 31.4 | -1.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
