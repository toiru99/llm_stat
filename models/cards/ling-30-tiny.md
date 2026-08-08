---
type: Model
title: Ling 3.0 Tiny
creator: InclusionAI
license: Proprietary
intelligence_index: 25.0
price_blended_usd_1m: 0
output_speed_tps: 184.0
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 27.6, z: -0.63, r: 40.6, estimated: false }  # 전문 지식
  reasoning: { s: 29.9, z: -0.24, r: 46.4, estimated: false }  # 추론
  coding: { s: 40.0, z: -0.3, r: 45.4, estimated: false }  # 코딩
  agentic: { s: 31.0, z: -0.19, r: 47.2, estimated: false }  # 에이전트
  trust: { s: 79.1, z: 2.42, r: 86.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 71.1, z: 0.66, r: 59.9, estimated: false }  # 긴문맥
  instruction: { s: 55.5, z: 0.08, r: 51.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.0 Tiny
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# Ling 3.0 Tiny

InclusionAI · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 코딩, 전문 지식

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 184.0 t/s · TTFT 1.86s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.6 | -0.63 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 46.4 | -0.24 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 45.4 | -0.3 | 실측 | [[scicode]] 24.0%×1.0 |
| 에이전트 | 47.2 | -0.19 | 실측 | [[gdpval]] 14.0%×1.0, [[tau3-banking]] 21.0%×1.0 |
| 신뢰성 | 86.3 | +2.42 | 실측 | [[aa-omniscience]] 70.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.9 | +0.66 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 51.2 | +0.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
