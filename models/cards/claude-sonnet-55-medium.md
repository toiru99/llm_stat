---
type: Model
title: Claude Sonnet 5.5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: 1.47
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.9, z: 0.29, r: 54.3, estimated: false }  # 전문 지식
  reasoning: { s: 48.3, z: 0.25, r: 53.8, estimated: false }  # 추론
  coding: { s: 75.7, z: 1.27, r: 69.1, estimated: false }  # 코딩
  agentic: { s: 71.2, z: 1.23, r: 68.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.0, z: 0.99, r: 64.8, estimated: false }  # 긴문맥
  instruction: { s: 50.3, z: -0.11, r: 48.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Claude Sonnet 5.5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **31.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 21.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.3 | +0.29 | 실측 | [[humanitys-last-exam]] 39.8%×0.3 |
| 추론 | 53.8 | +0.25 | 실측 | [[critpt]] 33.5%×1.0, [[humanitys-last-exam]] 39.8%×1.0 |
| 코딩 | 69.1 | +1.27 | 실측 | [[scicode]] 52.9%×1.0 |
| 에이전트 | 68.5 | +1.23 | 실측 | [[gdpval]] 1329.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.8 | +0.99 | 실측 | [[aa-lcr]] 76.3%×1.0 |
| 지시 따르기 | 48.4 | -0.11 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
