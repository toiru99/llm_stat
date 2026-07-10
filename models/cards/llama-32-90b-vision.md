---
type: Model
title: Llama 3.2 90B (Vision)
creator: Meta
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 1.38
output_speed_tps: 57.0
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 25.7, z: -0.71, r: 39.4, estimated: false }  # 전문 지식
  reasoning: { s: 23.5, z: -0.52, r: 42.2, estimated: false }  # 추론
  coding: { s: 40.0, z: -0.25, r: 46.3, estimated: false }  # 코딩
  agentic: { s: 20.1, z: -0.62, r: 40.7, estimated: true }  # 에이전트
  trust: { s: 34.6, z: 0.33, r: 55.0, estimated: true }  # 신뢰성
  multimodal: { s: 34.8, z: -1.75, r: 23.8, estimated: false }  # 멀티모달
  long_context: { s: 11.1, z: -1.1, r: 33.5, estimated: true }  # 긴문맥
  instruction: { s: 25.6, z: -1.09, r: 33.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.2 90B (Vision)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Llama 3.2 90B (Vision)

Meta · Open · Unknown · 컨텍스트 128k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $1.38 · 출력 $1.38 · 혼합 $1.38/1M · 57.0 t/s · TTFT 1.18s · 128k ctx` · 가성비 4.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.4 | -0.71 | 실측 | [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 42.2 | -0.52 | 실측 | [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 46.3 | -0.25 | 실측 | [[scicode]] 24.0%×1.0 |
| 에이전트 | 40.7 | -0.62 | 추정 | (추정) |
| 신뢰성 | 55.0 | +0.33 | 추정 | (추정) |
| 멀티모달 | 23.8 | -1.75 | 실측 | [[mmmu-pro]] 39.0%×1.0 |
| 긴문맥 | 33.5 | -1.1 | 추정 | (추정) |
| 지시 따르기 | 33.6 | -1.09 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
