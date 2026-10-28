---
type: Model
title: Claude Haiku 5.5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: 0.077
output_speed_tps: 241.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.7, z: 0.98, r: 64.7, estimated: false }  # 전문 지식
  reasoning: { s: 64.3, z: 0.84, r: 62.6, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.44, r: 71.6, estimated: false }  # 코딩
  agentic: { s: 87.2, z: 1.83, r: 77.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.23, r: 68.4, estimated: false }  # 긴문맥
  instruction: { s: 67.0, z: 0.6, r: 59.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Claude Haiku 5.5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **36.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 241.0 t/s · TTFT 310.72s · 1M ctx` · 가성비 467.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.7 | +0.98 | 실측 | [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 62.6 | +0.84 | 실측 | [[critpt]] 41.0%×1.0, [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 71.6 | +1.44 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 77.4 | +1.83 | 실측 | [[gdpval]] 1628.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.4 | +1.23 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 59.0 | +0.6 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
