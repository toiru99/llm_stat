---
type: Model
title: Claude Sonnet 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 52.0
context_window: 1000000
radar:
  knowledge: { s: 61.3, z: 0.42, r: 56.3, estimated: true }  # 전문 지식
  reasoning: { s: 56.7, z: 0.55, r: 58.2, estimated: true }  # 추론
  coding: { s: 75.1, z: 0.64, r: 59.6, estimated: true }  # 코딩
  agentic: { s: 63.5, z: 0.46, r: 56.9, estimated: false }  # 에이전트
  trust: { s: 42.5, z: 0.24, r: 53.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.43, r: 56.4, estimated: true }  # 긴문맥
  instruction: { s: 75.1, z: 0.3, r: 54.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# Claude Sonnet 5 (medium)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 52.0 t/s · TTFT 1.0s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.3 | +0.42 | 추정 | (추정) |
| 추론 | 58.2 | +0.55 | 추정 | (추정) |
| 코딩 | 59.6 | +0.64 | 추정 | (추정) |
| 에이전트 | 56.9 | +0.46 | 실측 | [[gdpval]] 40.0%×1.0 |
| 신뢰성 | 53.5 | +0.24 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.4 | +0.43 | 추정 | (추정) |
| 지시 따르기 | 54.4 | +0.3 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
