---
type: Model
title: Sonar
creator: Perplexity
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 127000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.9, z: -0.97, r: 35.4, estimated: false }  # 전문 지식
  reasoning: { s: 24.2, z: -0.93, r: 36.0, estimated: false }  # 추론
  coding: { s: 6.2, z: -1.06, r: 34.1, estimated: true }  # 코딩
  agentic: { s: 6.4, z: -0.97, r: 35.5, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 19.6, z: -1.01, r: 34.9, estimated: true }  # 긴문맥
  instruction: { s: 40.7, z: -0.53, r: 42.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Sonar
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Sonar

Perplexity · Proprietary · Unknown · 컨텍스트 127k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 127k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.4 | -0.97 | 실측 | [[gpqa-diamond]] 47.1%×0.4, [[humanitys-last-exam]] 4.9%×0.3 |
| 추론 | 36.0 | -0.93 | 실측 | [[gpqa-diamond]] 47.1%×1.0, [[humanitys-last-exam]] 4.9%×1.0 |
| 코딩 | 34.1 | -1.06 | 추정 | (추정) |
| 에이전트 | 35.5 | -0.97 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.9 | -1.01 | 추정 | (추정) |
| 지시 따르기 | 42.1 | -0.53 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
