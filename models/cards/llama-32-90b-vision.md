---
type: Model
title: Llama 3.2 90B (Vision)
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 24.5, z: -1.1, r: 33.5, estimated: false }  # 전문 지식
  reasoning: { s: 22.1, z: -1.05, r: 34.3, estimated: false }  # 추론
  coding: { s: 5.1, z: -1.08, r: 33.8, estimated: true }  # 코딩
  agentic: { s: 5.1, z: -1.0, r: 35.0, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 32.4, z: -1.97, r: 20.5, estimated: false }  # 멀티모달
  long_context: { s: 14.5, z: -1.15, r: 32.8, estimated: true }  # 긴문맥
  instruction: { s: 27.2, z: -1.09, r: 33.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.2 90B (Vision)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Llama 3.2 90B (Vision)

Meta · Open · Medium · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.5 | -1.1 | 실측 | [[gpqa-diamond]] 43.2%×0.4, [[humanitys-last-exam]] 4.5%×0.3 |
| 추론 | 34.3 | -1.05 | 실측 | [[gpqa-diamond]] 43.2%×1.0, [[humanitys-last-exam]] 4.5%×1.0 |
| 코딩 | 33.8 | -1.08 | 추정 | (추정) |
| 에이전트 | 35.0 | -1.0 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 20.5 | -1.97 | 실측 | [[mmmu-pro]] 39.0%×1.0 |
| 긴문맥 | 32.8 | -1.15 | 추정 | (추정) |
| 지시 따르기 | 33.6 | -1.09 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
