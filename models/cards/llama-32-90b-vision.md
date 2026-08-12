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
  knowledge: { s: 24.8, z: -0.77, r: 38.5, estimated: false }  # 전문 지식
  reasoning: { s: 22.4, z: -0.62, r: 40.7, estimated: false }  # 추론
  coding: { s: 40.0, z: -0.31, r: 45.4, estimated: false }  # 코딩
  agentic: { s: 24.3, z: -0.46, r: 43.0, estimated: true }  # 에이전트
  trust: { s: 22.4, z: -0.17, r: 47.4, estimated: true }  # 신뢰성
  multimodal: { s: 34.3, z: -1.81, r: 22.8, estimated: false }  # 멀티모달
  long_context: { s: 22.4, z: -0.82, r: 37.7, estimated: true }  # 긴문맥
  instruction: { s: 32.4, z: -0.87, r: 36.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.2 90B (Vision)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Llama 3.2 90B (Vision)

Meta · Open · Medium(90B) · 컨텍스트 128k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.5 | -0.77 | 실측 | [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.7 | -0.62 | 실측 | [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 45.4 | -0.31 | 실측 | [[scicode]] 24.0%×1.0 |
| 에이전트 | 43.0 | -0.46 | 추정 | (추정) |
| 신뢰성 | 47.4 | -0.17 | 추정 | (추정) |
| 멀티모달 | 22.8 | -1.81 | 실측 | [[mmmu-pro]] 39.0%×1.0 |
| 긴문맥 | 37.7 | -0.82 | 추정 | (추정) |
| 지시 따르기 | 36.9 | -0.87 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
