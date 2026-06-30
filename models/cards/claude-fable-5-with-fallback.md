---
type: Model
title: Claude Fable 5 (with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 60.0
price_blended_usd_1m: 7.7
output_speed_tps: None
context_window: 1000000
radar:
  knowledge: { s: 99.7, z: 2.19, r: 82.8, estimated: false }  # 전문 지식
  reasoning: { s: 97.4, z: 2.51, r: 87.6, estimated: false }  # 추론
  coding: { s: 100.0, z: 1.76, r: 76.4, estimated: false }  # 코딩
  agentic: { s: 96.0, z: 1.74, r: 76.1, estimated: false }  # 에이전트
  trust: { s: 51.2, z: 0.63, r: 59.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.6, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.21, r: 53.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5 (with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-30
timestamp: 2026-06-30T00:00:00Z
---

# Claude Fable 5 (with fallback)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **60.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 7.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.8 | +2.19 | 실측 | [[aa-omniscience]] 61.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 53.0%×0.3 |
| 추론 | 87.6 | +2.51 | 실측 | [[critpt]] 29.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 53.0%×1.0 |
| 코딩 | 76.4 | +1.76 | 실측 | [[scicode]] 60.0%×1.0, [[terminal-bench]] 63.0%×0.5 |
| 에이전트 | 76.1 | +1.74 | 실측 | [[gdpval]] 63.0%×1.0, [[tau2-bench]] 99.0%×1.0, [[tau3-banking]] 27.0%×1.0, [[terminal-bench]] 63.0%×1.0 |
| 신뢰성 | 59.5 | +0.63 | 실측 | [[aa-omniscience]] 45.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 53.1 | +0.21 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
