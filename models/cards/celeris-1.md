---
type: Model
title: Celeris-1
creator: Celeris
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: 0.25
output_speed_tps: 1.0
context_window: 131000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.7, z: -0.69, r: 39.6, estimated: false }  # 전문 지식
  reasoning: { s: 24.9, z: -0.49, r: 42.6, estimated: false }  # 추론
  coding: { s: 35.0, z: -0.51, r: 42.3, estimated: false }  # 코딩
  agentic: { s: 7.4, z: -1.13, r: 33.0, estimated: false }  # 에이전트
  trust: { s: 5.7, z: -1.05, r: 34.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 35.5, z: -0.42, r: 43.6, estimated: false }  # 긴문맥
  instruction: { s: 31.8, z: -0.89, r: 36.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Celeris-1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Celeris-1

Celeris · Proprietary · Unknown · 컨텍스트 131k · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 추론
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $0.7 · 혼합 $0.25/1M · 1.0 t/s · TTFT 0.69s · 131k ctx` · 가성비 48.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.6 | -0.69 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 63.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 42.6 | -0.49 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 63.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 42.3 | -0.51 | 실측 | [[scicode]] 21.0%×1.0 |
| 에이전트 | 33.0 | -1.13 | 실측 | [[gdpval]] 2.0%×1.0, [[tau3-banking]] 5.0%×1.0 |
| 신뢰성 | 34.2 | -1.05 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.6 | -0.42 | 실측 | [[aa-lcr]] 27.0%×1.0 |
| 지시 따르기 | 36.7 | -0.89 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
