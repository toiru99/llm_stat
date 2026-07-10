---
type: Model
title: Claude Sonnet 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 55.0
context_window: 1000000
radar:
  knowledge: { s: 64.5, z: 0.37, r: 55.5, estimated: true }  # 전문 지식
  reasoning: { s: 51.7, z: 0.12, r: 51.8, estimated: true }  # 추론
  coding: { s: 73.9, z: 0.43, r: 56.5, estimated: true }  # 코딩
  agentic: { s: 63.5, z: 0.36, r: 55.4, estimated: false }  # 에이전트
  trust: { s: 11.0, z: -0.7, r: 39.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 0.46, r: 57.0, estimated: true }  # 긴문맥
  instruction: { s: 83.6, z: 0.64, r: 59.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Claude Sonnet 5 (medium)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 55.0 t/s · TTFT 2.26s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.5 | +0.37 | 추정 | (추정) |
| 추론 | 51.8 | +0.12 | 추정 | (추정) |
| 코딩 | 56.5 | +0.43 | 추정 | (추정) |
| 에이전트 | 55.4 | +0.36 | 실측 | [[gdpval]] 40.0%×1.0 |
| 신뢰성 | 39.5 | -0.7 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.0 | +0.46 | 추정 | (추정) |
| 지시 따르기 | 59.5 | +0.64 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
