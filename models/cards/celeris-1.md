---
type: Model
title: Celeris-1
creator: Celeris
license: Proprietary
intelligence_index: 6.0
price_blended_usd_1m: 0.25
output_speed_tps: 1.0
context_window: 131000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 25.9, z: -0.77, r: 38.5, estimated: false }  # 전문 지식
  reasoning: { s: 23.9, z: -0.57, r: 41.4, estimated: false }  # 추론
  coding: { s: 25.0, z: -0.39, r: 44.2, estimated: false }  # 코딩
  agentic: { s: 3.9, z: -1.33, r: 30.0, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -1.0, r: 35.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 42.7, z: -0.27, r: 46.0, estimated: false }  # 긴문맥
  instruction: { s: 29.3, z: -1.03, r: 34.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Celeris-1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# Celeris-1

Celeris · Proprietary · Unknown · 컨텍스트 131k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $0.7 · 혼합 $0.25/1M · 1.0 t/s · TTFT 0.56s · 131k ctx` · 가성비 24.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.5 | -0.77 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 63.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 41.4 | -0.57 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 63.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 44.2 | -0.39 | 실측 | [[scicode]] 22.0%×1.0 |
| 에이전트 | 30.0 | -1.33 | 실측 | [[gdpval]] 0.0%×1.0, [[tau3-banking]] 4.0%×1.0 |
| 신뢰성 | 35.0 | -1.0 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 46.0 | -0.27 | 실측 | [[aa-lcr]] 38.0%×1.0 |
| 지시 따르기 | 34.6 | -1.03 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
