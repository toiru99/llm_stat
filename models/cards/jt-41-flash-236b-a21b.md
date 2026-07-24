---
type: Model
title: JT-4.1 Flash 236B A21B
creator: China Mobile
license: Proprietary
intelligence_index: 39.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Large
params_b: 236
is_reasoning: false
radar:
  knowledge: { s: 47.7, z: 0.34, r: 55.0, estimated: false }  # 전문 지식
  reasoning: { s: 39.4, z: 0.29, r: 54.4, estimated: false }  # 추론
  coding: { s: 63.3, z: 0.71, r: 60.6, estimated: false }  # 코딩
  agentic: { s: 73.1, z: 1.43, r: 71.4, estimated: false }  # 에이전트
  trust: { s: 64.4, z: 1.74, r: 76.1, estimated: false }  # 신뢰성
  multimodal: { s: 71.0, z: -0.04, r: 49.4, estimated: false }  # 멀티모달
  long_context: { s: 77.6, z: 0.85, r: 62.7, estimated: false }  # 긴문맥
  instruction: { s: 73.0, z: 0.83, r: 62.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — JT-4.1 Flash 236B A21B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-24
timestamp: 2026-07-24T00:00:00Z
---

# JT-4.1 Flash 236B A21B

China Mobile · Proprietary · Large(236B) · 컨텍스트 256k · 종합지능 **39.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.0 | +0.34 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 54.4 | +0.29 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 60.6 | +0.71 | 실측 | [[scicode]] 38.0%×1.0 |
| 에이전트 | 71.4 | +1.43 | 실측 | [[gdpval]] 38.0%×1.0, [[tau3-banking]] 28.0%×1.0 |
| 신뢰성 | 76.1 | +1.74 | 실측 | [[aa-omniscience]] 57.0%×1.0 |
| 멀티모달 | 49.4 | -0.04 | 실측 | [[mmmu-pro]] 64.0%×1.0 |
| 긴문맥 | 62.7 | +0.85 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 62.5 | +0.83 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
