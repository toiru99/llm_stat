---
type: Model
title: DiffusionGemma 26B A4B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 45.0, z: -0.19, r: 47.1, estimated: false }  # 전문 지식
  reasoning: { s: 41.5, z: -0.19, r: 47.1, estimated: false }  # 추론
  coding: { s: 16.4, z: -0.69, r: 39.6, estimated: true }  # 코딩
  agentic: { s: 17.6, z: -0.57, r: 41.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 71.2, z: -0.04, r: 49.4, estimated: false }  # 멀티모달
  long_context: { s: 22.5, z: -0.89, r: 36.6, estimated: false }  # 긴문맥
  instruction: { s: 66.2, z: 0.56, r: 58.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DiffusionGemma 26B A4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# DiffusionGemma 26B A4B

Google · Open · Small · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 멀티모달
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.1 | -0.19 | 실측 | [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 47.1 | -0.19 | 실측 | [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 39.6 | -0.69 | 추정 | (추정) |
| 에이전트 | 41.5 | -0.57 | 실측 | [[gdpval]] 329.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 49.4 | -0.04 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 36.6 | -0.89 | 실측 | [[aa-lcr]] 20.0%×1.0 |
| 지시 따르기 | 58.4 | +0.56 | 실측 | [[ifbench]] 59.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
