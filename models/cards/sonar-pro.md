---
type: Model
title: Sonar Pro
creator: Perplexity
license: Proprietary
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.4, z: -0.1, r: 48.4, estimated: false }  # 전문 지식
  reasoning: { s: 35.3, z: 0.09, r: 51.3, estimated: false }  # 추론
  coding: { s: 38.3, z: -0.34, r: 45.0, estimated: false }  # 코딩
  agentic: { s: 26.2, z: -0.39, r: 44.1, estimated: true }  # 에이전트
  trust: { s: 24.0, z: -0.18, r: 47.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 59.7, z: 0.33, r: 54.9, estimated: true }  # 긴문맥
  instruction: { s: 55.8, z: 0.14, r: 52.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Sonar Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-17
timestamp: 2026-07-17T00:00:00Z
---

# Sonar Pro

Perplexity · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.4 | -0.1 | 실측 | [[gpqa-diamond]] 58.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 51.3 | +0.09 | 실측 | [[gpqa-diamond]] 58.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 45.0 | -0.34 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 44.1 | -0.39 | 추정 | (추정) |
| 신뢰성 | 47.3 | -0.18 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 54.9 | +0.33 | 추정 | (추정) |
| 지시 따르기 | 52.1 | +0.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
