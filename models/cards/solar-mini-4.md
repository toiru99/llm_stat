---
type: Model
title: Solar Mini 4
creator: Upstage
license: Proprietary
intelligence_index: 24.0
price_blended_usd_1m: 0.067
output_speed_tps: 202.0
context_window: 1050000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 30.3, z: -0.57, r: 41.5, estimated: false }  # 전문 지식
  reasoning: { s: 22.4, z: -0.64, r: 40.4, estimated: false }  # 추론
  coding: { s: 68.3, z: 1.09, r: 66.4, estimated: false }  # 코딩
  agentic: { s: 43.3, z: 0.17, r: 52.6, estimated: false }  # 에이전트
  trust: { s: 63.9, z: 1.74, r: 76.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 61.6, z: 0.31, r: 54.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Mini 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# Solar Mini 4

Upstage · Proprietary · Small · 컨텍스트 1M · 종합지능 **24.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.067/1M · 202.0 t/s · TTFT 1.47s · 1M ctx` · 가성비 358.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.5 | -0.57 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[humanitys-last-exam]] 26.0%×0.3 |
| 추론 | 40.4 | -0.64 | 실측 | [[critpt]] 1.0%×1.0, [[humanitys-last-exam]] 26.0%×1.0 |
| 코딩 | 66.4 | +1.09 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 52.6 | +0.17 | 실측 | [[gdpval]] 29.0%×1.0 |
| 신뢰성 | 76.0 | +1.74 | 실측 | [[aa-omniscience]] 64.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 54.6 | +0.31 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
