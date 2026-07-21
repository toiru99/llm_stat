---
type: Model
title: Qwen3.5 2B
creator: Alibaba
license: Open
intelligence_index: 8.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 14.3, z: -1.27, r: 31.0, estimated: false }  # 전문 지식
  reasoning: { s: 14.9, z: -0.99, r: 35.2, estimated: false }  # 추론
  coding: { s: 5.4, z: -1.73, r: 24.1, estimated: false }  # 코딩
  agentic: { s: 20.5, z: -0.62, r: 40.7, estimated: false }  # 에이전트
  trust: { s: 51.8, z: 1.13, r: 67.0, estimated: false }  # 신뢰성
  multimodal: { s: 40.6, z: -1.49, r: 27.7, estimated: false }  # 멀티모달
  long_context: { s: 31.6, z: -0.51, r: 42.3, estimated: false }  # 긴문맥
  instruction: { s: 26.8, z: -1.07, r: 34.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# Qwen3.5 2B

Alibaba · Open · Unknown · 컨텍스트 262k · 종합지능 **8.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.0 | -1.27 | 실측 | [[aa-omniscience]] 5.0%×1.0, [[gpqa-diamond]] 46.0%×0.4, [[humanitys-last-exam]] 2.0%×0.3 |
| 추론 | 35.2 | -0.99 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 46.0%×1.0, [[humanitys-last-exam]] 2.0%×1.0 |
| 코딩 | 24.1 | -1.73 | 실측 | [[scicode]] 3.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 40.7 | -0.62 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 69.0%×1.0, [[tau3-banking]] 2.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 67.0 | +1.13 | 실측 | [[aa-omniscience]] 45.0%×1.0 |
| 멀티모달 | 27.7 | -1.49 | 실측 | [[mmmu-pro]] 43.0%×1.0 |
| 긴문맥 | 42.3 | -0.51 | 실측 | [[aa-lcr]] 24.0%×1.0 |
| 지시 따르기 | 34.0 | -1.07 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
