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
  knowledge: { s: 37.0, z: -0.21, r: 46.9, estimated: false }  # 전문 지식
  reasoning: { s: 33.8, z: -0.09, r: 48.6, estimated: false }  # 추론
  coding: { s: 38.3, z: -0.42, r: 43.7, estimated: false }  # 코딩
  agentic: { s: 22.7, z: -0.56, r: 41.6, estimated: true }  # 에이전트
  trust: { s: 27.4, z: -0.03, r: 49.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 38.6, z: -0.37, r: 44.5, estimated: true }  # 긴문맥
  instruction: { s: 49.3, z: -0.21, r: 46.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Sonar Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Sonar Pro

Perplexity · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.9 | -0.21 | 실측 | [[gpqa-diamond]] 58.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 48.6 | -0.09 | 실측 | [[gpqa-diamond]] 58.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 43.7 | -0.42 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 41.6 | -0.56 | 추정 | (추정) |
| 신뢰성 | 49.6 | -0.03 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.5 | -0.37 | 추정 | (추정) |
| 지시 따르기 | 46.9 | -0.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
