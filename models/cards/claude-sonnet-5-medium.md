---
type: Model
title: Claude Sonnet 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 69.0
context_window: 1000000
radar:
  knowledge: { s: 61.3, z: 0.42, r: 56.4, estimated: true }  # 전문 지식
  reasoning: { s: 56.7, z: 0.54, r: 58.2, estimated: true }  # 추론
  coding: { s: 75.1, z: 0.64, r: 59.6, estimated: true }  # 코딩
  agentic: { s: 63.5, z: 0.49, r: 57.3, estimated: false }  # 에이전트
  trust: { s: 44.0, z: 0.29, r: 54.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 81.7, z: 0.38, r: 55.7, estimated: true }  # 긴문맥
  instruction: { s: 68.5, z: -0.0, r: 49.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-02
timestamp: 2026-07-02T00:00:00Z
---

# Claude Sonnet 5 (medium)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 69.0 t/s · TTFT 2.25s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.4 | +0.42 | 추정 | (추정) |
| 추론 | 58.2 | +0.54 | 추정 | (추정) |
| 코딩 | 59.6 | +0.64 | 추정 | (추정) |
| 에이전트 | 57.3 | +0.49 | 실측 | [[gdpval]] 40.0%×1.0 |
| 신뢰성 | 54.3 | +0.29 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.7 | +0.38 | 추정 | (추정) |
| 지시 따르기 | 49.9 | +-0.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
