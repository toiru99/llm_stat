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
  knowledge: { s: 24.2, z: -0.8, r: 38.0, estimated: false }  # 전문 지식
  reasoning: { s: 21.9, z: -0.63, r: 40.5, estimated: false }  # 추론
  coding: { s: 40.0, z: -0.29, r: 45.6, estimated: false }  # 코딩
  agentic: { s: 19.7, z: -0.65, r: 40.3, estimated: true }  # 에이전트
  trust: { s: 23.9, z: -0.2, r: 47.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 18.9, z: -0.9, r: 36.4, estimated: true }  # 긴문맥
  instruction: { s: 29.3, z: -0.98, r: 35.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Saba
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
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
| 전문 지식 | 38.0 | -0.8 | 실측 | [[gpqa-diamond]] 42.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.5 | -0.63 | 실측 | [[gpqa-diamond]] 42.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 45.6 | -0.29 | 실측 | [[scicode]] 24.0%×1.0 |
| 에이전트 | 40.3 | -0.65 | 추정 | (추정) |
| 신뢰성 | 47.0 | -0.2 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.4 | -0.9 | 추정 | (추정) |
| 지시 따르기 | 35.3 | -0.98 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
