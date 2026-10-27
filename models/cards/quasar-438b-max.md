---
type: Model
title: Quasar 438B (max)
creator: Multiverse Computing
license: Proprietary
intelligence_index: 27.0
price_blended_usd_1m: 0.0619
output_speed_tps: 171.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 36.6, z: -0.3, r: 45.4, estimated: false }  # 전문 지식
  reasoning: { s: 43.5, z: 0.28, r: 54.3, estimated: false }  # 추론
  coding: { s: 68.3, z: 1.03, r: 65.4, estimated: false }  # 코딩
  agentic: { s: 60.1, z: 0.87, r: 63.1, estimated: false }  # 에이전트
  trust: { s: 79.4, z: 2.36, r: 85.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 0.98, r: 64.7, estimated: false }  # 긴문맥
  instruction: { s: 78.3, z: 1.02, r: 65.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Quasar 438B (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Quasar 438B (max)

Multiverse Computing · Proprietary · Large · 컨텍스트 1M · 종합지능 **27.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.11 · 출력 $0.33 · 혼합 $0.0619/1M · 171.0 t/s · TTFT 1.19s · 1M ctx` · 가성비 436.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.4 | -0.3 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 54.3 | +0.28 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 65.4 | +1.03 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 63.1 | +0.87 | 실측 | [[gdpval]] 1182.0%×1.0, [[tau3-banking]] 29.0%×1.0 |
| 신뢰성 | 85.4 | +2.36 | 실측 | [[aa-omniscience]] 79.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.7 | +0.98 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 65.3 | +1.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
