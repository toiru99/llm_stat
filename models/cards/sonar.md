---
type: Model
title: Sonar
creator: Perplexity
license: Proprietary
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 127000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.5, z: -0.64, r: 40.3, estimated: false }  # 전문 지식
  reasoning: { s: 25.0, z: -0.49, r: 42.7, estimated: false }  # 추론
  coding: { s: 13.0, z: -0.67, r: 40.0, estimated: true }  # 코딩
  agentic: { s: 26.8, z: -0.41, r: 43.9, estimated: true }  # 에이전트
  trust: { s: 26.4, z: 0.09, r: 51.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 38.9, z: -0.31, r: 45.3, estimated: true }  # 긴문맥
  instruction: { s: 41.6, z: -0.46, r: 43.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Sonar
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Sonar

Perplexity · Proprietary · Unknown · 컨텍스트 127k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 127k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.3 | -0.64 | 실측 | [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 42.7 | -0.49 | 실측 | [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 40.0 | -0.67 | 추정 | (추정) |
| 에이전트 | 43.9 | -0.41 | 추정 | (추정) |
| 신뢰성 | 51.3 | +0.09 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.3 | -0.31 | 추정 | (추정) |
| 지시 따르기 | 43.1 | -0.46 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
