---
type: Model
title: Claude Sonnet 5.5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 25.649704549789
price_blended_usd_1m: 1.47
output_speed_tps: 134.19981433168354
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.0, z: 0.05, r: 50.7, estimated: false }  # 전문 지식
  reasoning: { s: 40.0, z: 0.23, r: 53.5, estimated: false }  # 추론
  coding: { s: 69.3, z: 1.01, r: 65.1, estimated: false }  # 코딩
  agentic: { s: 69.9, z: 0.88, r: 63.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.7, z: 0.96, r: 64.4, estimated: false }  # 긴문맥
  instruction: { s: 61.2, z: 0.32, r: 54.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude Sonnet 5.5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **25.649704549789**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 134.19981433168354 t/s · TTFT 2.5008879128652004s · 1M ctx` · 가성비 17.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.7 | +0.05 | 실측 | [[humanitys-last-exam]] 36.2372567191844%×0.3 |
| 추론 | 53.5 | +0.23 | 실측 | [[critpt]] 11.4285714285714%×1.0, [[humanitys-last-exam]] 36.2372567191844%×1.0 |
| 코딩 | 65.1 | +1.01 | 실측 | [[scicode]] 49.0740740740741%×1.0 |
| 에이전트 | 63.1 | +0.88 | 실측 | [[gdpval]] 1182.47%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.4 | +0.96 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 54.7 | +0.32 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
