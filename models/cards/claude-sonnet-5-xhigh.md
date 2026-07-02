---
type: Model
title: Claude Sonnet 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 76.0
context_window: 1000000
radar:
  knowledge: { s: 77.0, z: 1.15, r: 67.2, estimated: true }  # 전문 지식
  reasoning: { s: 66.4, z: 1.01, r: 65.1, estimated: true }  # 추론
  coding: { s: 80.4, z: 0.88, r: 63.2, estimated: true }  # 코딩
  agentic: { s: 79.4, z: 1.11, r: 66.7, estimated: false }  # 에이전트
  trust: { s: 31.0, z: -0.15, r: 47.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.7, z: 0.78, r: 61.7, estimated: true }  # 긴문맥
  instruction: { s: 81.4, z: 0.55, r: 58.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-02
timestamp: 2026-07-02T00:00:00Z
---

# Claude Sonnet 5 (xhigh)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 76.0 t/s · TTFT 27.2s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.2 | +1.15 | 추정 | (추정) |
| 추론 | 65.1 | +1.01 | 추정 | (추정) |
| 코딩 | 63.2 | +0.88 | 추정 | (추정) |
| 에이전트 | 66.7 | +1.11 | 실측 | [[gdpval]] 50.0%×1.0 |
| 신뢰성 | 47.7 | -0.15 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.7 | +0.78 | 추정 | (추정) |
| 지시 따르기 | 58.2 | +0.55 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
