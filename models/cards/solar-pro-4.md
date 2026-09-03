---
type: Model
title: Solar Pro 4
creator: Upstage
license: Proprietary
intelligence_index: 42.0
price_blended_usd_1m: 0.222
output_speed_tps: 83.0
context_window: 512000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 47.1, z: 0.32, r: 54.8, estimated: false }  # 전문 지식
  reasoning: { s: 52.3, z: 0.87, r: 63.0, estimated: false }  # 추론
  coding: { s: 71.0, z: 1.0, r: 65.1, estimated: false }  # 코딩
  agentic: { s: 50.8, z: 0.52, r: 57.8, estimated: false }  # 에이전트
  trust: { s: 76.3, z: 2.44, r: 86.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.08, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: 90.7, z: 1.58, r: 73.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Solar Pro 4

Upstage · Proprietary · Unknown · 컨텍스트 512k · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 83.0 t/s · TTFT 2.06s · 512k ctx` · 가성비 189.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.8 | +0.32 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 29.0%×0.3 |
| 추론 | 63.0 | +0.87 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 29.0%×1.0 |
| 코딩 | 65.1 | +1.0 | 실측 | [[scicode]] 44.0%×1.0 |
| 에이전트 | 57.8 | +0.52 | 실측 | [[gdpval]] 39.0%×1.0, [[tau3-banking]] 23.0%×1.0 |
| 신뢰성 | 86.6 | +2.44 | 실측 | [[aa-omniscience]] 76.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.1 | +1.08 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 73.6 | +1.58 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
