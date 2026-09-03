---
type: Model
title: Claude Fable 5 (with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 62.0
price_blended_usd_1m: 7.7
output_speed_tps: 67.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 96.5, z: 2.75, r: 91.3, estimated: false }  # 전문 지식
  reasoning: { s: 93.8, z: 2.92, r: 93.8, estimated: false }  # 추론
  coding: { s: 96.3, z: 2.07, r: 81.0, estimated: false }  # 코딩
  agentic: { s: 89.6, z: 2.02, r: 80.3, estimated: false }  # 에이전트
  trust: { s: 35.1, z: 0.49, r: 57.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.3, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.79, r: 61.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5 (with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Claude Fable 5 (with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **62.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 67.0 t/s · TTFT 113.74s · 1M ctx` · 가성비 8.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 91.3 | +2.75 | 실측 | [[aa-omniscience]] 65.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 55.0%×0.3 |
| 추론 | 93.8 | +2.92 | 실측 | [[critpt]] 29.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 55.0%×1.0 |
| 코딩 | 81.0 | +2.07 | 실측 | [[scicode]] 60.0%×1.0, [[terminal-bench]] 63.0%×0.5 |
| 에이전트 | 80.3 | +2.02 | 실측 | [[gdpval]] 61.0%×1.0, [[tau2-bench]] 99.0%×1.0, [[tau3-banking]] 38.0%×1.0, [[terminal-bench]] 63.0%×1.0 |
| 신뢰성 | 57.4 | +0.49 | 실측 | [[aa-omniscience]] 36.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.4 | +1.3 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 61.8 | +0.79 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
