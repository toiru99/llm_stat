---
type: Model
title: Claude Sonnet 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 65.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.6, z: 1.14, r: 67.1, estimated: true }  # 전문 지식
  reasoning: { s: 59.5, z: 1.22, r: 68.3, estimated: true }  # 추론
  coding: { s: 73.2, z: 1.07, r: 66.1, estimated: true }  # 코딩
  agentic: { s: 59.7, z: 0.95, r: 64.2, estimated: false }  # 에이전트
  trust: { s: 32.0, z: 0.27, r: 54.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.7, z: 1.13, r: 67.0, estimated: true }  # 긴문맥
  instruction: { s: 79.7, z: 1.07, r: 66.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Claude Sonnet 5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 65.0 t/s · TTFT 3.97s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.1 | +1.14 | 추정 | (추정) |
| 추론 | 68.3 | +1.22 | 추정 | (추정) |
| 코딩 | 66.1 | +1.07 | 추정 | (추정) |
| 에이전트 | 64.2 | +0.95 | 실측 | [[gdpval]] 40.0%×1.0 |
| 신뢰성 | 54.0 | +0.27 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.0 | +1.13 | 추정 | (추정) |
| 지시 따르기 | 66.1 | +1.07 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
