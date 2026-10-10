---
type: Model
title: Solar Mini 4
creator: Upstage
license: Proprietary
intelligence_index: 24.0
price_blended_usd_1m: 0.067
output_speed_tps: 74.0
context_window: 1050000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 30.3, z: -0.57, r: 41.4, estimated: false }  # 전문 지식
  reasoning: { s: 22.4, z: -0.65, r: 40.3, estimated: false }  # 추론
  coding: { s: 68.3, z: 1.08, r: 66.1, estimated: false }  # 코딩
  agentic: { s: 42.6, z: 0.14, r: 52.0, estimated: false }  # 에이전트
  trust: { s: 63.9, z: 1.72, r: 75.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.25, r: 68.7, estimated: false }  # 긴문맥
  instruction: { s: 61.4, z: 0.29, r: 54.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Mini 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Solar Mini 4

Upstage · Proprietary · Small · 컨텍스트 1M · 종합지능 **24.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.067/1M · 74.0 t/s · TTFT 1.91s · 1M ctx` · 가성비 358.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.4 | -0.57 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[humanitys-last-exam]] 26.0%×0.3 |
| 추론 | 40.3 | -0.65 | 실측 | [[critpt]] 1.0%×1.0, [[humanitys-last-exam]] 26.0%×1.0 |
| 코딩 | 66.1 | +1.08 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 52.0 | +0.14 | 실측 | [[gdpval]] 29.0%×1.0 |
| 신뢰성 | 75.8 | +1.72 | 실측 | [[aa-omniscience]] 64.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.7 | +1.25 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 54.4 | +0.29 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
