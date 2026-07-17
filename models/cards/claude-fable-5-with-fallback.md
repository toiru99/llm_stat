---
type: Model
title: Claude Fable 5 (with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 60.0
price_blended_usd_1m: 7.7
output_speed_tps: 66.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 99.7, z: 2.86, r: 92.8, estimated: false }  # 전문 지식
  reasoning: { s: 96.5, z: 3.3, r: 99.5, estimated: false }  # 추론
  coding: { s: 98.5, z: 2.2, r: 83.0, estimated: false }  # 코딩
  agentic: { s: 94.3, z: 2.25, r: 83.8, estimated: false }  # 에이전트
  trust: { s: 51.8, z: 1.13, r: 66.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.29, r: 69.3, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.8, r: 62.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5 (with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-17
timestamp: 2026-07-17T00:00:00Z
---

# Claude Fable 5 (with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **60.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 66.0 t/s · TTFT 149.81s · 1M ctx` · 가성비 7.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 92.8 | +2.86 | 실측 | [[aa-omniscience]] 61.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 53.0%×0.3 |
| 추론 | 99.5 | +3.3 | 실측 | [[critpt]] 29.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 53.0%×1.0 |
| 코딩 | 83.0 | +2.2 | 실측 | [[scicode]] 60.0%×1.0, [[terminal-bench]] 63.0%×0.5 |
| 에이전트 | 83.8 | +2.25 | 실측 | [[gdpval]] 63.0%×1.0, [[tau2-bench]] 99.0%×1.0, [[tau3-banking]] 27.0%×1.0, [[terminal-bench]] 63.0%×1.0 |
| 신뢰성 | 66.9 | +1.13 | 실측 | [[aa-omniscience]] 45.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.3 | +1.29 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 62.0 | +0.8 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
