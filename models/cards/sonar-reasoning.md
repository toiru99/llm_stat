---
type: Model
title: Sonar Reasoning
creator: Perplexity
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 127000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.9, z: 1.02, r: 65.3, estimated: false }  # 전문 지식
  reasoning: { s: 61.9, z: 1.47, r: 72.1, estimated: false }  # 추론
  coding: { s: 73.3, z: 1.13, r: 66.9, estimated: true }  # 코딩
  agentic: { s: 64.7, z: 1.1, r: 66.5, estimated: true }  # 에이전트
  trust: { s: 41.4, z: 0.67, r: 60.1, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.8, z: 1.09, r: 66.4, estimated: true }  # 긴문맥
  instruction: { s: 72.1, z: 0.8, r: 62.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Sonar Reasoning
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# Sonar Reasoning

Perplexity · Proprietary · Unknown · 컨텍스트 127k · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 127k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.3 | +1.02 | 실측 | [[gpqa-diamond]] 62.0%×0.4 |
| 추론 | 72.1 | +1.47 | 실측 | [[gpqa-diamond]] 62.0%×1.0 |
| 코딩 | 66.9 | +1.13 | 추정 | (추정) |
| 에이전트 | 66.5 | +1.1 | 추정 | (추정) |
| 신뢰성 | 60.1 | +0.67 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.4 | +1.09 | 추정 | (추정) |
| 지시 따르기 | 62.0 | +0.8 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
