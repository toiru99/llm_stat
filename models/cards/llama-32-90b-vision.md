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
params_b: 90
is_reasoning: false
radar:
  knowledge: { s: 24.1, z: -0.81, r: 37.9, estimated: false }  # 전문 지식
  reasoning: { s: 21.8, z: -0.64, r: 40.4, estimated: false }  # 추론
  coding: { s: 5.5, z: -0.96, r: 35.5, estimated: true }  # 코딩
  agentic: { s: 15.8, z: -0.83, r: 37.5, estimated: true }  # 에이전트
  trust: { s: 24.2, z: -0.03, r: 49.6, estimated: true }  # 신뢰성
  multimodal: { s: 33.3, z: -1.82, r: 22.6, estimated: false }  # 멀티모달
  long_context: { s: 14.6, z: -1.06, r: 34.2, estimated: true }  # 긴문맥
  instruction: { s: 25.2, z: -1.15, r: 32.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.2 90B (Vision)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-08
timestamp: 2026-09-08T00:00:00Z
---

# Llama 3.2 90B (Vision)

Meta · Open · Medium(90B) · 컨텍스트 128k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.9 | -0.81 | 실측 | [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.4 | -0.64 | 실측 | [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 35.5 | -0.96 | 추정 | (추정) |
| 에이전트 | 37.5 | -0.83 | 추정 | (추정) |
| 신뢰성 | 49.6 | -0.03 | 추정 | (추정) |
| 멀티모달 | 22.6 | -1.82 | 실측 | [[mmmu-pro]] 39.0%×1.0 |
| 긴문맥 | 34.2 | -1.06 | 추정 | (추정) |
| 지시 따르기 | 32.8 | -1.15 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
