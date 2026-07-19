---
type: Model
title: Sonar
creator: Perplexity
license: Proprietary
intelligence_index: 10.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 127000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.1, z: -0.51, r: 42.4, estimated: false }  # 전문 지식
  reasoning: { s: 27.8, z: -0.31, r: 45.4, estimated: false }  # 추론
  coding: { s: 38.3, z: -0.34, r: 45.0, estimated: false }  # 코딩
  agentic: { s: 31.1, z: -0.2, r: 47.0, estimated: true }  # 에이전트
  trust: { s: 24.3, z: -0.16, r: 47.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 45.1, z: -0.11, r: 48.4, estimated: true }  # 긴문맥
  instruction: { s: 50.2, z: -0.09, r: 48.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Sonar
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-19
timestamp: 2026-07-19T00:00:00Z
---

# Sonar

Perplexity · Proprietary · Unknown · 컨텍스트 127k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 127k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.4 | -0.51 | 실측 | [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 45.4 | -0.31 | 실측 | [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 45.0 | -0.34 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 47.0 | -0.2 | 추정 | (추정) |
| 신뢰성 | 47.6 | -0.16 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 48.4 | -0.11 | 추정 | (추정) |
| 지시 따르기 | 48.6 | -0.09 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
