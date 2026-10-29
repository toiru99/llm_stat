---
type: Model
title: Gemma 4 E2B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 24.8, z: -1.09, r: 33.7, estimated: false }  # 전문 지식
  reasoning: { s: 22.5, z: -1.05, r: 34.3, estimated: false }  # 추론
  coding: { s: 4.5, z: -1.09, r: 33.6, estimated: false }  # 코딩
  agentic: { s: 7.1, z: -0.93, r: 36.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 41.1, z: -1.54, r: 26.9, estimated: false }  # 멀티모달
  long_context: { s: 18.0, z: -1.03, r: 34.6, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.67, r: 39.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 E2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Gemma 4 E2B

Google · Open · Unknown · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.7 | -1.09 | 실측 | [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 34.3 | -1.05 | 실측 | [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 33.6 | -1.09 | 실측 | [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 36.0 | -0.93 | 실측 | [[gdpval]] 180.0%×1.0, [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 26.9 | -1.54 | 실측 | [[mmmu-pro]] 45.0%×1.0 |
| 긴문맥 | 34.6 | -1.03 | 실측 | [[aa-lcr]] 16.0%×1.0 |
| 지시 따르기 | 39.9 | -0.67 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
