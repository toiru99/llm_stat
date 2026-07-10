---
type: Model
title: Claude Sonnet 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 67.0
context_window: 1000000
radar:
  knowledge: { s: 77.5, z: 0.94, r: 64.1, estimated: true }  # 전문 지식
  reasoning: { s: 72.0, z: 1.04, r: 65.6, estimated: true }  # 추론
  coding: { s: 86.8, z: 1.0, r: 65.0, estimated: true }  # 코딩
  agentic: { s: 81.0, z: 1.06, r: 65.8, estimated: false }  # 에이전트
  trust: { s: 35.0, z: 0.13, r: 52.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 95.7, z: 0.81, r: 62.1, estimated: true }  # 긴문맥
  instruction: { s: 84.8, z: 0.69, r: 60.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Claude Sonnet 5 (xhigh)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 67.0 t/s · TTFT 20.32s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.1 | +0.94 | 추정 | (추정) |
| 추론 | 65.6 | +1.04 | 추정 | (추정) |
| 코딩 | 65.0 | +1.0 | 추정 | (추정) |
| 에이전트 | 65.8 | +1.06 | 실측 | [[gdpval]] 51.0%×1.0 |
| 신뢰성 | 52.0 | +0.13 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.1 | +0.81 | 추정 | (추정) |
| 지시 따르기 | 60.4 | +0.69 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
