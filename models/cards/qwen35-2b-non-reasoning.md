---
type: Model
title: Qwen3.5 2B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Tiny
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 16.6, z: -1.2, r: 32.0, estimated: false }  # 전문 지식
  reasoning: { s: 15.4, z: -0.96, r: 35.6, estimated: false }  # 추론
  coding: { s: 6.1, z: -1.04, r: 34.4, estimated: false }  # 코딩
  agentic: { s: 29.6, z: -0.35, r: 44.7, estimated: false }  # 에이전트
  trust: { s: 0.0, z: -1.23, r: 31.6, estimated: false }  # 신뢰성
  multimodal: { s: 38.4, z: -1.65, r: 25.3, estimated: false }  # 멀티모달
  long_context: { s: 15.7, z: -1.09, r: 33.7, estimated: false }  # 긴문맥
  instruction: { s: 23.9, z: -1.26, r: 31.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 2B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# Qwen3.5 2B (non-reasoning)

Alibaba · Open · Tiny · 컨텍스트 262k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.0 | -1.2 | 실측 | [[aa-omniscience]] 7.0%×1.0, [[gpqa-diamond]] 44.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 35.6 | -0.96 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 44.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 34.4 | -1.04 | 실측 | [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 44.7 | -0.35 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 82.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 31.6 | -1.23 | 실측 | [[aa-omniscience]] 2.0%×1.0 |
| 멀티모달 | 25.3 | -1.65 | 실측 | [[mmmu-pro]] 43.0%×1.0 |
| 긴문맥 | 33.7 | -1.09 | 실측 | [[aa-lcr]] 14.0%×1.0 |
| 지시 따르기 | 31.1 | -1.26 | 실측 | [[ifbench]] 29.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
