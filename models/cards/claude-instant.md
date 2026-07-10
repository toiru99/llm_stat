---
type: Model
title: Claude Instant
creator: Anthropic
license: Proprietary
intelligence_index: 2.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 100000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 18.1, z: -1.08, r: 33.9, estimated: false }  # 전문 지식
  reasoning: { s: 16.6, z: -0.89, r: 36.7, estimated: false }  # 추론
  coding: { s: 20.8, z: -1.07, r: 34.0, estimated: true }  # 코딩
  agentic: { s: 12.8, z: -0.9, r: 36.4, estimated: true }  # 에이전트
  trust: { s: 26.4, z: -0.06, r: 49.1, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 11.1, z: -1.1, r: 33.5, estimated: true }  # 긴문맥
  instruction: { s: 26.7, z: -1.05, r: 34.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Instant
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Claude Instant

Anthropic · Proprietary · Unknown · 컨텍스트 100k · 종합지능 **2.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 100k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.9 | -1.08 | 실측 | [[gpqa-diamond]] 33.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.7 | -0.89 | 실측 | [[gpqa-diamond]] 33.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 34.0 | -1.07 | 추정 | (추정) |
| 에이전트 | 36.4 | -0.9 | 추정 | (추정) |
| 신뢰성 | 49.1 | -0.06 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.5 | -1.1 | 추정 | (추정) |
| 지시 따르기 | 34.2 | -1.05 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
