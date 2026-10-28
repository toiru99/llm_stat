---
type: Model
title: Gemma 4 12B (non-reasoning)
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0.12
output_speed_tps: 120.0
context_window: 262000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.8, z: -0.38, r: 44.3, estimated: false }  # 전문 지식
  reasoning: { s: 36.7, z: -0.41, r: 43.9, estimated: false }  # 추론
  coding: { s: 16.7, z: -0.68, r: 39.7, estimated: false }  # 코딩
  agentic: { s: 16.7, z: -0.6, r: 41.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 64.4, z: -0.38, r: 44.3, estimated: false }  # 멀티모달
  long_context: { s: 39.3, z: -0.39, r: 44.2, estimated: false }  # 긴문맥
  instruction: { s: 46.5, z: -0.26, r: 46.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 12B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Gemma 4 12B (non-reasoning)

Google · Open · Small · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.12/1M · 120.0 t/s · TTFT 2.16s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.3 | -0.38 | 실측 | [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 43.9 | -0.41 | 실측 | [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 39.7 | -0.68 | 실측 | [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 41.0 | -0.6 | 실측 | [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.3 | -0.38 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 44.2 | -0.39 | 실측 | [[aa-lcr]] 35.0%×1.0 |
| 지시 따르기 | 46.0 | -0.26 | 실측 | [[ifbench]] 45.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
