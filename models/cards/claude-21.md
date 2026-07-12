---
type: Model
title: Claude 2.1
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
  knowledge: { s: 17.4, z: -1.11, r: 33.3, estimated: false }  # 전문 지식
  reasoning: { s: 16.0, z: -0.92, r: 36.2, estimated: false }  # 추론
  coding: { s: 30.0, z: -0.68, r: 39.8, estimated: false }  # 코딩
  agentic: { s: 12.2, z: -0.93, r: 36.0, estimated: true }  # 에이전트
  trust: { s: 38.2, z: 0.48, r: 57.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 14.4, z: -1.0, r: 34.9, estimated: true }  # 긴문맥
  instruction: { s: 28.8, z: -0.97, r: 35.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 2.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-12
timestamp: 2026-07-12T00:00:00Z
---

# Claude 2.1

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.3 | -1.11 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.2 | -0.92 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.8 | -0.68 | 실측 | [[scicode]] 18.0%×1.0 |
| 에이전트 | 36.0 | -0.93 | 추정 | (추정) |
| 신뢰성 | 57.2 | +0.48 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.9 | -1.0 | 추정 | (추정) |
| 지시 따르기 | 35.5 | -0.97 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
