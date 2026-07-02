---
type: Model
title: Claude Sonnet 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 67.0
context_window: 1000000
radar:
  knowledge: { s: 50.8, z: -0.06, r: 49.1, estimated: true }  # 전문 지식
  reasoning: { s: 51.4, z: 0.29, r: 54.3, estimated: true }  # 추론
  coding: { s: 68.1, z: 0.34, r: 55.0, estimated: true }  # 코딩
  agentic: { s: 55.6, z: 0.18, r: 52.6, estimated: false }  # 에이전트
  trust: { s: 30.2, z: -0.18, r: 47.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.9, z: 0.57, r: 58.5, estimated: true }  # 긴문맥
  instruction: { s: 86.7, z: 0.77, r: 61.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-02
timestamp: 2026-07-02T00:00:00Z
---

# Claude Sonnet 5 (low)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 67.0 t/s · TTFT 1.73s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.1 | -0.06 | 추정 | (추정) |
| 추론 | 54.3 | +0.29 | 추정 | (추정) |
| 코딩 | 55.0 | +0.34 | 추정 | (추정) |
| 에이전트 | 52.6 | +0.18 | 실측 | [[gdpval]] 35.0%×1.0 |
| 신뢰성 | 47.3 | -0.18 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.5 | +0.57 | 추정 | (추정) |
| 지시 따르기 | 61.6 | +0.77 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
