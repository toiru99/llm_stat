---
type: Model
title: Claude 3 Sonnet
creator: Anthropic
license: Proprietary
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 22.5, z: -0.9, r: 36.5, estimated: false }  # 전문 지식
  reasoning: { s: 20.4, z: -0.75, r: 38.8, estimated: false }  # 추론
  coding: { s: 38.3, z: -0.43, r: 43.6, estimated: false }  # 코딩
  agentic: { s: 12.4, z: -0.96, r: 35.7, estimated: true }  # 에이전트
  trust: { s: 22.5, z: -0.27, r: 46.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 15.3, z: -1.07, r: 34.0, estimated: true }  # 긴문맥
  instruction: { s: 27.3, z: -1.1, r: 33.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3 Sonnet
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Claude 3 Sonnet

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.5 | -0.9 | 실측 | [[gpqa-diamond]] 40.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.8 | -0.75 | 실측 | [[gpqa-diamond]] 40.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 43.6 | -0.43 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 35.7 | -0.96 | 추정 | (추정) |
| 신뢰성 | 46.0 | -0.27 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.0 | -1.07 | 추정 | (추정) |
| 지시 따르기 | 33.4 | -1.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
