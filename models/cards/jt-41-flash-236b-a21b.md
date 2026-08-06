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
  knowledge: { s: 47.7, z: 0.29, r: 54.4, estimated: false }  # 전문 지식
  reasoning: { s: 39.4, z: 0.23, r: 53.5, estimated: false }  # 추론
  coding: { s: 63.3, z: 0.66, r: 59.9, estimated: false }  # 코딩
  agentic: { s: 61.3, z: 1.02, r: 65.3, estimated: false }  # 에이전트
  trust: { s: 64.4, z: 1.63, r: 74.5, estimated: false }  # 신뢰성
  multimodal: { s: 70.0, z: -0.09, r: 48.7, estimated: false }  # 멀티모달
  long_context: { s: 77.6, z: 0.82, r: 62.4, estimated: false }  # 긴문맥
  instruction: { s: 79.0, z: 1.06, r: 65.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — JT-4.1 Flash 236B A21B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# JT-4.1 Flash 236B A21B

China Mobile · Proprietary · Large(236B) · 컨텍스트 256k · 종합지능 **39.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.4 | +0.29 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 53.5 | +0.23 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 59.9 | +0.66 | 실측 | [[scicode]] 38.0%×1.0 |
| 에이전트 | 65.3 | +1.02 | 실측 | [[gdpval]] 38.0%×1.0, [[tau3-banking]] 28.0%×1.0 |
| 신뢰성 | 74.5 | +1.63 | 실측 | [[aa-omniscience]] 57.0%×1.0 |
| 멀티모달 | 48.7 | -0.09 | 실측 | [[mmmu-pro]] 64.0%×1.0 |
| 긴문맥 | 62.4 | +0.82 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 65.9 | +1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
