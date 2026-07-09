---
type: Model
title: Claude Sonnet 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 79.0
context_window: 1000000
radar:
  knowledge: { s: 77.0, z: 1.16, r: 67.4, estimated: true }  # 전문 지식
  reasoning: { s: 65.3, z: 0.96, r: 64.4, estimated: true }  # 추론
  coding: { s: 81.2, z: 0.92, r: 63.7, estimated: true }  # 코딩
  agentic: { s: 81.0, z: 1.12, r: 66.7, estimated: false }  # 에이전트
  trust: { s: 31.0, z: -0.11, r: 48.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.7, z: 0.78, r: 61.7, estimated: true }  # 긴문맥
  instruction: { s: 81.4, z: 0.58, r: 58.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-09
timestamp: 2026-07-09T00:00:00Z
---

# Claude Sonnet 5 (xhigh)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 79.0 t/s · TTFT 32.59s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.4 | +1.16 | 추정 | (추정) |
| 추론 | 64.4 | +0.96 | 추정 | (추정) |
| 코딩 | 63.7 | +0.92 | 추정 | (추정) |
| 에이전트 | 66.7 | +1.12 | 실측 | [[gdpval]] 51.0%×1.0 |
| 신뢰성 | 48.4 | -0.11 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.7 | +0.78 | 추정 | (추정) |
| 지시 따르기 | 58.7 | +0.58 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
