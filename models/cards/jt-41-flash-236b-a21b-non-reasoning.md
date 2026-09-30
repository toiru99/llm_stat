---
type: Model
title: JT-4.1 Flash 236B A21B (non-reasoning)
creator: China Mobile
license: Proprietary
intelligence_index: 27.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 46.6, z: 0.2, r: 53.0, estimated: false }  # 전문 지식
  reasoning: { s: 38.5, z: 0.1, r: 51.6, estimated: false }  # 추론
  coding: { s: 57.6, z: 0.75, r: 61.2, estimated: true }  # 코딩
  agentic: { s: 46.3, z: 0.3, r: 54.6, estimated: false }  # 에이전트
  trust: { s: 55.7, z: 1.38, r: 70.6, estimated: false }  # 신뢰성
  multimodal: { s: 67.1, z: -0.19, r: 47.2, estimated: false }  # 멀티모달
  long_context: { s: 79.8, z: 0.87, r: 63.0, estimated: false }  # 긴문맥
  instruction: { s: 74.4, z: 0.85, r: 62.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — JT-4.1 Flash 236B A21B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# JT-4.1 Flash 236B A21B (non-reasoning)

China Mobile · Proprietary · Large · 컨텍스트 256k · 종합지능 **27.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.0 | +0.2 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 51.6 | +0.1 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 61.2 | +0.75 | 추정 | (추정) |
| 에이전트 | 54.6 | +0.3 | 실측 | [[gdpval]] 31.0%×1.0 |
| 신뢰성 | 70.6 | +1.38 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | 47.2 | -0.19 | 실측 | [[mmmu-pro]] 64.0%×1.0 |
| 긴문맥 | 63.0 | +0.87 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 62.7 | +0.85 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
