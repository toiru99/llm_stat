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
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.4, z: -0.88, r: 36.8, estimated: false }  # 전문 지식
  reasoning: { s: 21.1, z: -0.7, r: 39.5, estimated: false }  # 추론
  coding: { s: 13.7, z: -0.78, r: 38.4, estimated: true }  # 코딩
  agentic: { s: 10.4, z: -1.08, r: 33.8, estimated: true }  # 에이전트
  trust: { s: 38.8, z: 0.56, r: 58.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 9.1, z: -1.29, r: 30.7, estimated: true }  # 긴문맥
  instruction: { s: 19.3, z: -1.44, r: 28.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Saba
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# Mistral Saba

Mistral · Proprietary · Small · 컨텍스트 32k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.8 | -0.88 | 실측 | [[gpqa-diamond]] 42.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.5 | -0.7 | 실측 | [[gpqa-diamond]] 42.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 38.4 | -0.78 | 추정 | (추정) |
| 에이전트 | 33.8 | -1.08 | 추정 | (추정) |
| 신뢰성 | 58.5 | +0.56 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.7 | -1.29 | 추정 | (추정) |
| 지시 따르기 | 28.4 | -1.44 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
