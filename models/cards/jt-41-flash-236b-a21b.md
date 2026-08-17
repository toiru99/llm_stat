---
type: Model
title: JT-4.1 Flash 236B A21B
creator: China Mobile
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Large
params_b: 236
is_reasoning: false
radar:
  knowledge: { s: 47.5, z: 0.3, r: 54.5, estimated: false }  # 전문 지식
  reasoning: { s: 39.9, z: 0.22, r: 53.4, estimated: false }  # 추론
  coding: { s: 63.3, z: 0.62, r: 59.3, estimated: false }  # 코딩
  agentic: { s: 56.7, z: 0.79, r: 61.9, estimated: false }  # 에이전트
  trust: { s: 62.8, z: 1.58, r: 73.7, estimated: false }  # 신뢰성
  multimodal: { s: 70.0, z: -0.11, r: 48.3, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 1.03, r: 65.4, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.72, r: 60.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — JT-4.1 Flash 236B A21B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-17
timestamp: 2026-08-17T00:00:00Z
---

# JT-4.1 Flash 236B A21B

China Mobile · Proprietary · Large(236B) · 컨텍스트 256k · 종합지능 **40.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.5 | +0.3 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 53.4 | +0.22 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 59.3 | +0.62 | 실측 | [[scicode]] 38.0%×1.0 |
| 에이전트 | 61.9 | +0.79 | 실측 | [[gdpval]] 38.0%×1.0 |
| 신뢰성 | 73.7 | +1.58 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | 48.3 | -0.11 | 실측 | [[mmmu-pro]] 64.0%×1.0 |
| 긴문맥 | 65.4 | +1.03 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 60.7 | +0.72 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
