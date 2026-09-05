---
type: Model
title: Qwen3.5 122B A10B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 21.0
price_blended_usd_1m: 0.68
output_speed_tps: 144.0
context_window: 262000
status: current
size_class: Medium
params_b: 125
is_reasoning: false
radar:
  knowledge: { s: 41.2, z: 0.01, r: 50.2, estimated: false }  # 전문 지식
  reasoning: { s: 38.0, z: 0.14, r: 52.1, estimated: false }  # 추론
  coding: { s: 45.5, z: 0.47, r: 57.1, estimated: false }  # 코딩
  agentic: { s: 44.4, z: 0.26, r: 54.0, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.86, r: 37.1, estimated: false }  # 신뢰성
  multimodal: { s: 76.4, z: 0.31, r: 54.6, estimated: false }  # 멀티모달
  long_context: { s: 68.5, z: 0.6, r: 59.0, estimated: false }  # 긴문맥
  instruction: { s: 54.9, z: 0.1, r: 51.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 122B A10B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Qwen3.5 122B A10B (Non-reasoning)

Alibaba · Open · Medium(125B) · 컨텍스트 262k · 종합지능 **21.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.4 · 출력 $3.2 · 혼합 $0.68/1M · 144.0 t/s · TTFT 2.32s · 262k ctx` · 가성비 30.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.2 | +0.01 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 52.1 | +0.14 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 57.1 | +0.47 | 실측 | [[terminal-bench]] 30.0%×0.5 |
| 에이전트 | 54.0 | +0.26 | 실측 | [[gdpval]] 17.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 30.0%×1.0 |
| 신뢰성 | 37.1 | -0.86 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 54.6 | +0.31 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 59.0 | +0.6 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 51.5 | +0.1 | 실측 | [[ifbench]] 51.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
