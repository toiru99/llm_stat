---
type: Model
title: Claude 3 Sonnet
creator: Anthropic
license: Proprietary
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 22.2, z: -0.9, r: 36.4, estimated: false }  # 전문 지식
  reasoning: { s: 20.0, z: -0.72, r: 39.2, estimated: false }  # 추론
  coding: { s: 4.1, z: -0.98, r: 35.3, estimated: true }  # 코딩
  agentic: { s: 19.8, z: -0.68, r: 39.8, estimated: true }  # 에이전트
  trust: { s: 16.7, z: -0.37, r: 44.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 10.4, z: -1.19, r: 32.2, estimated: true }  # 긴문맥
  instruction: { s: 27.8, z: -1.04, r: 34.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3 Sonnet
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Claude 3 Sonnet

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.4 | -0.9 | 실측 | [[gpqa-diamond]] 40.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.2 | -0.72 | 실측 | [[gpqa-diamond]] 40.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 35.3 | -0.98 | 추정 | (추정) |
| 에이전트 | 39.8 | -0.68 | 추정 | (추정) |
| 신뢰성 | 44.5 | -0.37 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.2 | -1.19 | 추정 | (추정) |
| 지시 따르기 | 34.4 | -1.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
