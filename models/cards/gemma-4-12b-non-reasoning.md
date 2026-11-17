---
type: Model
title: Gemma 4 12B (non-reasoning)
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.3, z: -0.33, r: 45.0, estimated: false }  # 전문 지식
  reasoning: { s: 24.1, z: -0.56, r: 41.6, estimated: false }  # 추론
  coding: { s: 17.2, z: -0.76, r: 38.5, estimated: false }  # 코딩
  agentic: { s: 24.7, z: -0.69, r: 39.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.5, z: -0.4, r: 44.0, estimated: false }  # 멀티모달
  long_context: { s: 39.5, z: -0.41, r: 43.8, estimated: false }  # 긴문맥
  instruction: { s: 46.4, z: -0.3, r: 45.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 12B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Gemma 4 12B (non-reasoning)

Google · Open · Small · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.0 | -0.33 | 실측 | [[gpqa-diamond]] 66.06060606060609%×0.4, [[humanitys-last-exam]] 6.34847080630213%×0.3 |
| 추론 | 41.6 | -0.56 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.06060606060609%×1.0, [[humanitys-last-exam]] 6.34847080630213%×1.0 |
| 코딩 | 38.5 | -0.76 | 실측 | [[terminal-bench]] 11.363636363636399%×0.5 |
| 에이전트 | 39.7 | -0.69 | 실측 | [[tau2-bench]] 31.8713450292398%×1.0, [[terminal-bench]] 11.363636363636399%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.0 | -0.4 | 실측 | [[mmmu-pro]] 61.965317919075105%×1.0 |
| 긴문맥 | 43.8 | -0.41 | 실측 | [[aa-lcr]] 35.0%×1.0 |
| 지시 따르기 | 45.5 | -0.3 | 실측 | [[ifbench]] 45.1700680272109%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
