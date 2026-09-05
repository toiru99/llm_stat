---
type: Model
title: Qwen3.5 0.8B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Tiny
params_b: 0.873
is_reasoning: false
radar:
  knowledge: { s: 9.4, z: -1.52, r: 27.2, estimated: false }  # 전문 지식
  reasoning: { s: 7.7, z: -1.32, r: 30.3, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.12, r: 33.2, estimated: false }  # 코딩
  agentic: { s: 21.9, z: -0.6, r: 41.0, estimated: false }  # 에이전트
  trust: { s: 0.0, z: -1.15, r: 32.7, estimated: false }  # 신뢰성
  multimodal: { s: 15.3, z: -2.72, r: 9.2, estimated: false }  # 멀티모달
  long_context: { s: 9.0, z: -1.23, r: 31.5, estimated: false }  # 긴문맥
  instruction: { s: 14.1, z: -1.61, r: 25.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 0.8B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Qwen3.5 0.8B (Non-reasoning)

Alibaba · Open · Tiny(0.873B) · 컨텍스트 262k · 종합지능 **1.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 27.2 | -1.52 | 실측 | [[aa-omniscience]] 5.0%×1.0, [[gpqa-diamond]] 24.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 30.3 | -1.32 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 24.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 33.2 | -1.12 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 41.0 | -0.6 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 65.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 32.7 | -1.15 | 실측 | [[aa-omniscience]] 2.0%×1.0 |
| 멀티모달 | 9.2 | -2.72 | 실측 | [[mmmu-pro]] 26.0%×1.0 |
| 긴문맥 | 31.5 | -1.23 | 실측 | [[aa-lcr]] 8.0%×1.0 |
| 지시 따르기 | 25.8 | -1.61 | 실측 | [[ifbench]] 22.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
