---
type: Model
title: Claude Haiku 5.5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 25.0
price_blended_usd_1m: 0.077
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 44.7, z: -0.12, r: 48.3, estimated: false }  # 전문 지식
  reasoning: { s: 42.3, z: -0.05, r: 49.2, estimated: false }  # 추론
  coding: { s: 69.2, z: 1.05, r: 65.7, estimated: false }  # 코딩
  agentic: { s: 68.7, z: 1.14, r: 67.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.1, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 50.2, z: -0.12, r: 48.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Claude Haiku 5.5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 324.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.3 | -0.12 | 실측 | [[humanitys-last-exam]] 33.8%×0.3 |
| 추론 | 49.2 | -0.05 | 실측 | [[critpt]] 30.5%×1.0, [[humanitys-last-exam]] 33.8%×1.0 |
| 코딩 | 65.7 | +1.05 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 67.1 | +1.14 | 실측 | [[gdpval]] 1283.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 77.3%×1.0 |
| 지시 따르기 | 48.2 | -0.12 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
