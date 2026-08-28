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
  knowledge: { s: 61.2, z: 1.02, r: 65.3, estimated: false }  # 전문 지식
  reasoning: { s: 61.2, z: 1.35, r: 70.3, estimated: false }  # 추론
  coding: { s: 73.6, z: 1.09, r: 66.3, estimated: true }  # 코딩
  agentic: { s: 57.5, z: 0.81, r: 62.1, estimated: true }  # 에이전트
  trust: { s: 55.7, z: 1.49, r: 72.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.7, z: 1.21, r: 68.1, estimated: true }  # 긴문맥
  instruction: { s: 84.2, z: 1.34, r: 70.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Sonar Reasoning
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Sonar Reasoning

Perplexity · Proprietary · Unknown · 컨텍스트 127k · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 127k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.3 | +1.02 | 실측 | [[gpqa-diamond]] 62.0%×0.4 |
| 추론 | 70.3 | +1.35 | 실측 | [[gpqa-diamond]] 62.0%×1.0 |
| 코딩 | 66.3 | +1.09 | 추정 | (추정) |
| 에이전트 | 62.1 | +0.81 | 추정 | (추정) |
| 신뢰성 | 72.4 | +1.49 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.1 | +1.21 | 추정 | (추정) |
| 지시 따르기 | 70.2 | +1.34 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
