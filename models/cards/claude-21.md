---
type: Model
title: Claude 2.1
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
  knowledge: { s: 16.8, z: -1.16, r: 32.6, estimated: false }  # 전문 지식
  reasoning: { s: 15.4, z: -0.95, r: 35.8, estimated: false }  # 추론
  coding: { s: 11.4, z: -0.72, r: 39.2, estimated: true }  # 코딩
  agentic: { s: 17.4, z: -0.77, r: 38.5, estimated: true }  # 에이전트
  trust: { s: 17.3, z: -0.34, r: 44.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 13.7, z: -1.09, r: 33.6, estimated: true }  # 긴문맥
  instruction: { s: 30.1, z: -0.94, r: 35.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 2.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Claude 2.1

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.6 | -1.16 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.8 | -0.95 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.2 | -0.72 | 추정 | (추정) |
| 에이전트 | 38.5 | -0.77 | 추정 | (추정) |
| 신뢰성 | 44.9 | -0.34 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.6 | -1.09 | 추정 | (추정) |
| 지시 따르기 | 35.9 | -0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
