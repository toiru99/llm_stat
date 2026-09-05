---
type: Model
title: DiffusionGemma 26B A4B
creator: Google
license: Open
intelligence_index: 8.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Small
params_b: 25.2
is_reasoning: true
radar:
  knowledge: { s: 33.6, z: -0.35, r: 44.7, estimated: false }  # 전문 지식
  reasoning: { s: 27.8, z: -0.35, r: 44.8, estimated: false }  # 추론
  coding: { s: 8.5, z: -0.83, r: 37.6, estimated: true }  # 코딩
  agentic: { s: 0.0, z: -1.43, r: 28.5, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.81, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: 72.2, z: 0.1, r: 51.5, estimated: false }  # 멀티모달
  long_context: { s: 22.5, z: -0.82, r: 37.7, estimated: false }  # 긴문맥
  instruction: { s: 66.2, z: 0.57, r: 58.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DiffusionGemma 26B A4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# DiffusionGemma 26B A4B

Google · Open · Small(25.2B) · 컨텍스트 256k · 종합지능 **8.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 멀티모달
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.7 | -0.35 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 44.8 | -0.35 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 37.6 | -0.83 | 추정 | (추정) |
| 에이전트 | 28.5 | -1.43 | 실측 | [[gdpval]] 0.0%×1.0 |
| 신뢰성 | 37.8 | -0.81 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 51.5 | +0.1 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 37.7 | -0.82 | 실측 | [[aa-lcr]] 20.0%×1.0 |
| 지시 따르기 | 58.6 | +0.57 | 실측 | [[ifbench]] 59.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
