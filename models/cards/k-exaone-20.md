---
type: Model
title: K-EXAONE 2.0
creator: LG AI Research
license: Open
intelligence_index: 31.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Large
params_b: 750
is_reasoning: true
radar:
  knowledge: { s: 37.1, z: -0.2, r: 47.0, estimated: false }  # 전문 지식
  reasoning: { s: 40.8, z: 0.25, r: 53.7, estimated: false }  # 추론
  coding: { s: 68.3, z: 0.81, r: 62.1, estimated: false }  # 코딩
  agentic: { s: 29.7, z: -0.29, r: 45.6, estimated: false }  # 에이전트
  trust: { s: 87.2, z: 2.54, r: 88.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 69.9, z: 0.58, r: 58.6, estimated: false }  # 긴문맥
  instruction: { s: 59.9, z: 0.22, r: 53.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K-EXAONE 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# K-EXAONE 2.0

LG AI Research · Open · Large(750B) · 컨텍스트 262k · 종합지능 **31.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.0 | -0.2 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 53.7 | +0.25 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 62.1 | +0.81 | 실측 | [[scicode]] 41.0%×1.0 |
| 에이전트 | 45.6 | -0.29 | 실측 | [[gdpval]] 24.0%×1.0, [[tau3-banking]] 12.0%×1.0 |
| 신뢰성 | 88.1 | +2.54 | 실측 | [[aa-omniscience]] 77.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.6 | +0.58 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 53.3 | +0.22 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
