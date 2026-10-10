---
type: Model
title: Ling 3.1 Flash
creator: InclusionAI
license: Proprietary
intelligence_index: 41.0
price_blended_usd_1m: 0.192
output_speed_tps: 214.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 47.9, z: 0.24, r: 53.7, estimated: false }  # 전문 지식
  reasoning: { s: 59.8, z: 1.05, r: 65.8, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.42, r: 71.2, estimated: false }  # 코딩
  agentic: { s: 82.4, z: 1.65, r: 74.8, estimated: false }  # 에이전트
  trust: { s: 61.9, z: 1.62, r: 74.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.25, r: 68.7, estimated: false }  # 긴문맥
  instruction: { s: 78.1, z: 0.99, r: 64.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.1 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Ling 3.1 Flash

InclusionAI · Proprietary · Large · 컨텍스트 1M · 종합지능 **41.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.192/1M · 214.0 t/s · TTFT 1.76s · 1M ctx` · 가성비 213.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.7 | +0.24 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 65.8 | +1.05 | 실측 | [[critpt]] 18.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 71.2 | +1.42 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 74.8 | +1.65 | 실측 | [[gdpval]] 56.0%×1.0 |
| 신뢰성 | 74.3 | +1.62 | 실측 | [[aa-omniscience]] 62.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.7 | +1.25 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 64.8 | +0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
