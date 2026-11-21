---
type: Model
title: Sonar Pro
creator: Perplexity
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 34.9, z: -0.6, r: 41.0, estimated: false }  # 전문 지식
  reasoning: { s: 31.5, z: -0.2, r: 47.0, estimated: false }  # 추론
  coding: { s: 64.0, z: 0.81, r: 62.2, estimated: true }  # 코딩
  agentic: { s: 54.4, z: 0.33, r: 54.9, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 23.6, z: -0.89, r: 36.6, estimated: true }  # 긴문맥
  instruction: { s: 31.2, z: -0.95, r: 35.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Sonar Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Sonar Pro

Perplexity · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.0 | -0.6 | 실측 | [[gpqa-diamond]] 57.77777777777779%×0.4, [[humanitys-last-exam]] 6.550000000000001%×0.3 |
| 추론 | 47.0 | -0.2 | 실측 | [[gpqa-diamond]] 57.77777777777779%×1.0, [[humanitys-last-exam]] 6.550000000000001%×1.0 |
| 코딩 | 62.2 | +0.81 | 추정 | (추정) |
| 에이전트 | 54.9 | +0.33 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.6 | -0.89 | 추정 | (추정) |
| 지시 따르기 | 35.8 | -0.95 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
