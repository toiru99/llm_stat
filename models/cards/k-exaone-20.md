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
  knowledge: { s: 37.9, z: -0.14, r: 47.9, estimated: false }  # 전문 지식
  reasoning: { s: 40.8, z: 0.32, r: 54.8, estimated: false }  # 추론
  coding: { s: 68.3, z: 0.87, r: 63.0, estimated: false }  # 코딩
  agentic: { s: 29.9, z: -0.27, r: 46.0, estimated: false }  # 에이전트
  trust: { s: 77.3, z: 2.53, r: 87.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 69.9, z: 0.63, r: 59.4, estimated: false }  # 긴문맥
  instruction: { s: 60.8, z: 0.36, r: 55.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K-EXAONE 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
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
| 전문 지식 | 47.9 | -0.14 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 54.8 | +0.32 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 63.0 | +0.87 | 실측 | [[scicode]] 41.0%×1.0 |
| 에이전트 | 46.0 | -0.27 | 실측 | [[gdpval]] 24.0%×1.0, [[tau3-banking]] 12.0%×1.0 |
| 신뢰성 | 87.9 | +2.53 | 실측 | [[aa-omniscience]] 77.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.4 | +0.63 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 55.3 | +0.36 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
