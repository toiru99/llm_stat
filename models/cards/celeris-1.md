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
  knowledge: { s: 26.0, z: -0.71, r: 39.3, estimated: false }  # 전문 지식
  reasoning: { s: 24.7, z: -0.5, r: 42.4, estimated: false }  # 추론
  coding: { s: 35.0, z: -0.51, r: 42.3, estimated: false }  # 코딩
  agentic: { s: 5.4, z: -1.22, r: 31.8, estimated: false }  # 에이전트
  trust: { s: 5.8, z: -0.94, r: 36.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 44.6, z: -0.15, r: 47.8, estimated: false }  # 긴문맥
  instruction: { s: 40.0, z: -0.56, r: 41.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Celeris-1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Celeris-1

Celeris · Proprietary · Unknown · 컨텍스트 131k · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 추론
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $0.7 · 혼합 $0.25/1M · 1.0 t/s · TTFT 0.65s · 131k ctx` · 가성비 48.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.3 | -0.71 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 63.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 42.4 | -0.5 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 63.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 42.3 | -0.51 | 실측 | [[scicode]] 21.0%×1.0 |
| 에이전트 | 31.8 | -1.22 | 실측 | [[gdpval]] 2.0%×1.0, [[tau3-banking]] 4.0%×1.0 |
| 신뢰성 | 36.0 | -0.94 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.8 | -0.15 | 실측 | [[aa-lcr]] 37.0%×1.0 |
| 지시 따르기 | 41.6 | -0.56 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
