---
type: Model
title: Claude Sonnet 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 64.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.2, z: 1.09, r: 66.4, estimated: true }  # 전문 지식
  reasoning: { s: 59.0, z: 1.16, r: 67.4, estimated: true }  # 추론
  coding: { s: 73.2, z: 1.02, r: 65.4, estimated: true }  # 코딩
  agentic: { s: 59.7, z: 0.9, r: 63.6, estimated: false }  # 에이전트
  trust: { s: 31.5, z: 0.2, r: 53.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.9, z: 1.14, r: 67.0, estimated: true }  # 긴문맥
  instruction: { s: 79.7, z: 1.04, r: 65.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# Claude Sonnet 5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 64.0 t/s · TTFT 3.6s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.4 | +1.09 | 추정 | (추정) |
| 추론 | 67.4 | +1.16 | 추정 | (추정) |
| 코딩 | 65.4 | +1.02 | 추정 | (추정) |
| 에이전트 | 63.6 | +0.9 | 실측 | [[gdpval]] 40.0%×1.0 |
| 신뢰성 | 53.0 | +0.2 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.0 | +1.14 | 추정 | (추정) |
| 지시 따르기 | 65.6 | +1.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
