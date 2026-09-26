---
type: Model
title: Claude 2.0
creator: Anthropic
license: Proprietary
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 100000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.9, z: -0.65, r: 40.2, estimated: false }  # 전문 지식
  reasoning: { s: 27.9, z: -0.36, r: 44.6, estimated: false }  # 추론
  coding: { s: 27.3, z: -0.27, r: 46.0, estimated: true }  # 코딩
  agentic: { s: 40.0, z: 0.09, r: 51.3, estimated: true }  # 에이전트
  trust: { s: 40.4, z: 0.69, r: 60.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.0, z: -0.11, r: 48.3, estimated: true }  # 긴문맥
  instruction: { s: 54.7, z: 0.05, r: 50.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Claude 2.0

Anthropic · Proprietary · Unknown · 컨텍스트 100k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 100k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.2 | -0.65 | 실측 | [[gpqa-diamond]] 34.0%×0.4 |
| 추론 | 44.6 | -0.36 | 실측 | [[gpqa-diamond]] 34.0%×1.0 |
| 코딩 | 46.0 | -0.27 | 추정 | (추정) |
| 에이전트 | 51.3 | +0.09 | 추정 | (추정) |
| 신뢰성 | 60.3 | +0.69 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 48.3 | -0.11 | 추정 | (추정) |
| 지시 따르기 | 50.8 | +0.05 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
