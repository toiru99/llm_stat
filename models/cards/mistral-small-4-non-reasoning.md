---
type: Model
title: Mistral Small 4 (non-reasoning)
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1005
output_speed_tps: None
context_window: 256000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.8, z: -0.68, r: 39.8, estimated: false }  # 전문 지식
  reasoning: { s: 29.2, z: -0.69, r: 39.7, estimated: false }  # 추론
  coding: { s: 16.1, z: -0.72, r: 39.1, estimated: false }  # 코딩
  agentic: { s: 16.1, z: -0.63, r: 40.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 41.9, z: -1.49, r: 27.6, estimated: false }  # 멀티모달
  long_context: { s: 31.9, z: -0.63, r: 40.5, estimated: false }  # 긴문맥
  instruction: { s: 29.1, z: -1.02, r: 34.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 4 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Mistral Small 4 (non-reasoning)

Mistral · Open · Medium · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1005/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.8 | -0.68 | 실측 | [[gpqa-diamond]] 57.1%×0.4, [[humanitys-last-exam]] 3.8%×0.3 |
| 추론 | 39.7 | -0.69 | 실측 | [[gpqa-diamond]] 57.1%×1.0, [[humanitys-last-exam]] 3.8%×1.0 |
| 코딩 | 39.1 | -0.72 | 실측 | [[terminal-bench]] 10.6%×0.5 |
| 에이전트 | 40.5 | -0.63 | 실측 | [[terminal-bench]] 10.6%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 27.6 | -1.49 | 실측 | [[mmmu-pro]] 46.0%×1.0 |
| 긴문맥 | 40.5 | -0.63 | 실측 | [[aa-lcr]] 28.3%×1.0 |
| 지시 따르기 | 34.7 | -1.02 | 실측 | [[ifbench]] 32.8%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
