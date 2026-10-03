---
type: Model
title: Llama 3.2 90B (Vision)
creator: Meta
license: Open
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 24.1, z: -0.85, r: 37.2, estimated: false }  # 전문 지식
  reasoning: { s: 21.7, z: -0.67, r: 39.9, estimated: false }  # 추론
  coding: { s: 6.8, z: -1.02, r: 34.8, estimated: true }  # 코딩
  agentic: { s: 13.9, z: -0.95, r: 35.8, estimated: true }  # 에이전트
  trust: { s: 34.9, z: 0.39, r: 55.8, estimated: true }  # 신뢰성
  multimodal: { s: 32.9, z: -1.92, r: 21.2, estimated: false }  # 멀티모달
  long_context: { s: 16.2, z: -1.07, r: 33.9, estimated: true }  # 긴문맥
  instruction: { s: 25.4, z: -1.2, r: 32.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.2 90B (Vision)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# Llama 3.2 90B (Vision)

Meta · Open · Medium · 컨텍스트 128k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.2 | -0.85 | 실측 | [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.9 | -0.67 | 실측 | [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 34.8 | -1.02 | 추정 | (추정) |
| 에이전트 | 35.8 | -0.95 | 추정 | (추정) |
| 신뢰성 | 55.8 | +0.39 | 추정 | (추정) |
| 멀티모달 | 21.2 | -1.92 | 실측 | [[mmmu-pro]] 39.0%×1.0 |
| 긴문맥 | 33.9 | -1.07 | 추정 | (추정) |
| 지시 따르기 | 32.0 | -1.2 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
