---
type: Model
title: Claude 2.0
creator: Anthropic
license: Proprietary
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 100000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.6, z: -0.58, r: 41.3, estimated: false }  # 전문 지식
  reasoning: { s: 28.6, z: -0.31, r: 45.4, estimated: false }  # 추론
  coding: { s: 31.7, z: -0.65, r: 40.3, estimated: false }  # 코딩
  agentic: { s: 23.7, z: -0.48, r: 42.8, estimated: true }  # 에이전트
  trust: { s: 14.7, z: -0.53, r: 42.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 36.4, z: -0.39, r: 44.1, estimated: true }  # 긴문맥
  instruction: { s: 66.2, z: 0.52, r: 57.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# Claude 2.0

Anthropic · Proprietary · Unknown · 컨텍스트 100k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 100k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.3 | -0.58 | 실측 | [[gpqa-diamond]] 34.0%×0.4 |
| 추론 | 45.4 | -0.31 | 실측 | [[gpqa-diamond]] 34.0%×1.0 |
| 코딩 | 40.3 | -0.65 | 실측 | [[scicode]] 19.0%×1.0 |
| 에이전트 | 42.8 | -0.48 | 추정 | (추정) |
| 신뢰성 | 42.0 | -0.53 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.1 | -0.39 | 추정 | (추정) |
| 지시 따르기 | 57.8 | +0.52 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
