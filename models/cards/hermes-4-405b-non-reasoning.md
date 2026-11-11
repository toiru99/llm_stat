---
type: Model
title: Hermes 4 405B (non-reasoning)
creator: Nous Research
license: Open
intelligence_index: None
price_blended_usd_1m: 1.2
output_speed_tps: None
context_window: 128000
status: current
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.7, z: -0.78, r: 38.3, estimated: false }  # 전문 지식
  reasoning: { s: 27.4, z: -0.77, r: 38.4, estimated: false }  # 추론
  coding: { s: 14.9, z: -0.76, r: 38.5, estimated: false }  # 코딩
  agentic: { s: 14.9, z: -0.68, r: 39.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 24.8, z: -0.85, r: 37.3, estimated: false }  # 긴문맥
  instruction: { s: 31.9, z: -0.9, r: 36.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hermes 4 405B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Hermes 4 405B (non-reasoning)

Nous Research · Open · Large · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $1.0 · 출력 $3.0 · 혼합 $1.2/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.3 | -0.78 | 실측 | [[gpqa-diamond]] 53.6%×0.4, [[humanitys-last-exam]] 4.2%×0.3 |
| 추론 | 38.4 | -0.77 | 실측 | [[gpqa-diamond]] 53.6%×1.0, [[humanitys-last-exam]] 4.2%×1.0 |
| 코딩 | 38.5 | -0.76 | 실측 | [[terminal-bench]] 9.8%×0.5 |
| 에이전트 | 39.9 | -0.68 | 실측 | [[terminal-bench]] 9.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.3 | -0.85 | 실측 | [[aa-lcr]] 22.0%×1.0 |
| 지시 따르기 | 36.5 | -0.9 | 실측 | [[ifbench]] 34.8%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
