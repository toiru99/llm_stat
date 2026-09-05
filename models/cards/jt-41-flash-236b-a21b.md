---
type: Model
title: JT-4.1 Flash 236B A21B
creator: China Mobile
license: Proprietary
intelligence_index: 32.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Large
params_b: 236
is_reasoning: false
radar:
  knowledge: { s: 46.8, z: 0.28, r: 54.2, estimated: false }  # 전문 지식
  reasoning: { s: 38.8, z: 0.18, r: 52.7, estimated: false }  # 추론
  coding: { s: 51.1, z: 0.67, r: 60.1, estimated: true }  # 코딩
  agentic: { s: 55.6, z: 0.69, r: 60.4, estimated: false }  # 에이전트
  trust: { s: 55.7, z: 1.48, r: 72.2, estimated: false }  # 신뢰성
  multimodal: { s: 68.1, z: -0.1, r: 48.4, estimated: false }  # 멀티모달
  long_context: { s: 79.8, z: 0.94, r: 64.2, estimated: false }  # 긴문맥
  instruction: { s: 74.1, z: 0.9, r: 63.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — JT-4.1 Flash 236B A21B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# JT-4.1 Flash 236B A21B

China Mobile · Proprietary · Large(236B) · 컨텍스트 256k · 종합지능 **32.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.2 | +0.28 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 52.7 | +0.18 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 60.1 | +0.67 | 추정 | (추정) |
| 에이전트 | 60.4 | +0.69 | 실측 | [[gdpval]] 35.0%×1.0 |
| 신뢰성 | 72.2 | +1.48 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | 48.4 | -0.1 | 실측 | [[mmmu-pro]] 64.0%×1.0 |
| 긴문맥 | 64.2 | +0.94 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 63.5 | +0.9 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
