---
type: Model
title: Ling 3.0 Tiny
creator: InclusionAI
license: Open
intelligence_index: 25.0
price_blended_usd_1m: 0
output_speed_tps: 161.0
context_window: 262000
status: current
size_class: Small
params_b: 7.9
is_reasoning: true
radar:
  knowledge: { s: 27.8, z: -0.62, r: 40.6, estimated: false }  # 전문 지식
  reasoning: { s: 29.3, z: -0.26, r: 46.1, estimated: false }  # 추론
  coding: { s: 38.7, z: -0.34, r: 44.9, estimated: false }  # 코딩
  agentic: { s: 30.9, z: -0.24, r: 46.3, estimated: false }  # 에이전트
  trust: { s: 70.1, z: 2.18, r: 82.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 71.1, z: 0.65, r: 59.8, estimated: false }  # 긴문맥
  instruction: { s: 52.3, z: -0.02, r: 49.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.0 Tiny
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Ling 3.0 Tiny

InclusionAI · Open · Small(7.9B) · 컨텍스트 262k · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 코딩, 전문 지식

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 161.0 t/s · TTFT 2.6s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.6 | -0.62 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 46.1 | -0.26 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 44.9 | -0.34 | 실측 | [[scicode]] 24.0%×1.0 |
| 에이전트 | 46.3 | -0.24 | 실측 | [[gdpval]] 14.0%×1.0, [[tau3-banking]] 21.0%×1.0 |
| 신뢰성 | 82.7 | +2.18 | 실측 | [[aa-omniscience]] 70.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.8 | +0.65 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 49.7 | -0.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
