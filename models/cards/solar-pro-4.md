---
type: Model
title: Solar Pro 4
creator: Upstage
license: Proprietary
intelligence_index: 33.0
price_blended_usd_1m: 0.222
output_speed_tps: 72.0
context_window: 512000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.8, z: 0.28, r: 54.3, estimated: false }  # 전문 지식
  reasoning: { s: 51.9, z: 0.81, r: 62.2, estimated: false }  # 추론
  coding: { s: 63.3, z: 1.1, r: 66.4, estimated: false }  # 코딩
  agentic: { s: 49.9, z: 0.47, r: 57.1, estimated: false }  # 에이전트
  trust: { s: 76.3, z: 2.45, r: 86.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 1.05, r: 65.7, estimated: false }  # 긴문맥
  instruction: { s: 90.7, z: 1.6, r: 73.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Solar Pro 4

Upstage · Proprietary · Unknown · 컨텍스트 512k · 종합지능 **33.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 72.0 t/s · TTFT 1.96s · 512k ctx` · 가성비 148.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.3 | +0.28 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 29.0%×0.3 |
| 추론 | 62.2 | +0.81 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 29.0%×1.0 |
| 코딩 | 66.4 | +1.1 | 실측 | [[scicode]] 45.0%×1.0 |
| 에이전트 | 57.1 | +0.47 | 실측 | [[gdpval]] 35.0%×1.0, [[tau3-banking]] 23.0%×1.0 |
| 신뢰성 | 86.8 | +2.45 | 실측 | [[aa-omniscience]] 76.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.7 | +1.05 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 73.9 | +1.6 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
