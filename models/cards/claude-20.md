---
type: Model
title: Claude 2.0
creator: Anthropic
license: Proprietary
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 100000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.6, z: -0.58, r: 41.3, estimated: false }  # 전문 지식
  reasoning: { s: 28.6, z: -0.27, r: 46.0, estimated: false }  # 추론
  coding: { s: 31.7, z: -0.62, r: 40.8, estimated: false }  # 코딩
  agentic: { s: 23.9, z: -0.48, r: 42.8, estimated: true }  # 에이전트
  trust: { s: 14.4, z: -0.63, r: 40.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 34.7, z: -0.41, r: 43.8, estimated: true }  # 긴문맥
  instruction: { s: 54.1, z: 0.07, r: 51.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-18
timestamp: 2026-07-18T00:00:00Z
---

# Claude 2.0

Anthropic · Proprietary · Unknown · 컨텍스트 100k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 100k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.3 | -0.58 | 실측 | [[gpqa-diamond]] 34.0%×0.4 |
| 추론 | 46.0 | -0.27 | 실측 | [[gpqa-diamond]] 34.0%×1.0 |
| 코딩 | 40.8 | -0.62 | 실측 | [[scicode]] 19.0%×1.0 |
| 에이전트 | 42.8 | -0.48 | 추정 | (추정) |
| 신뢰성 | 40.5 | -0.63 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.8 | -0.41 | 추정 | (추정) |
| 지시 따르기 | 51.0 | +0.07 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
