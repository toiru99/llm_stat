---
type: Model
title: Claude Fable 5 (with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: 7.7
output_speed_tps: 70.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 96.2, z: 2.66, r: 90.0, estimated: false }  # 전문 지식
  reasoning: { s: 93.4, z: 2.81, r: 92.1, estimated: false }  # 추론
  coding: { s: 95.8, z: 2.24, r: 83.5, estimated: false }  # 코딩
  agentic: { s: 89.8, z: 2.0, r: 80.0, estimated: false }  # 에이전트
  trust: { s: 35.1, z: 0.5, r: 57.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.32, r: 69.9, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.81, r: 62.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5 (with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Claude Fable 5 (with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 70.0 t/s · TTFT 111.43s · 1M ctx` · 가성비 6.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 90.0 | +2.66 | 실측 | [[aa-omniscience]] 65.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 55.0%×0.3 |
| 추론 | 92.1 | +2.81 | 실측 | [[critpt]] 29.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 55.0%×1.0 |
| 코딩 | 83.5 | +2.24 | 실측 | [[scicode]] 61.0%×1.0, [[terminal-bench]] 63.0%×0.5 |
| 에이전트 | 80.0 | +2.0 | 실측 | [[gdpval]] 57.0%×1.0, [[tau2-bench]] 99.0%×1.0, [[tau3-banking]] 38.0%×1.0, [[terminal-bench]] 63.0%×1.0 |
| 신뢰성 | 57.5 | +0.5 | 실측 | [[aa-omniscience]] 36.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.9 | +1.32 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 62.1 | +0.81 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
