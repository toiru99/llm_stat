---
type: Model
title: Qwen3.5 122B A10B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 28.0
price_blended_usd_1m: 0.68
output_speed_tps: 145.0
context_window: 262000
status: current
size_class: Medium
params_b: 125
is_reasoning: false
radar:
  knowledge: { s: 41.5, z: 0.04, r: 50.6, estimated: false }  # 전문 지식
  reasoning: { s: 38.3, z: 0.17, r: 52.6, estimated: false }  # 추론
  coding: { s: 53.9, z: 0.29, r: 54.3, estimated: false }  # 코딩
  agentic: { s: 45.0, z: 0.29, r: 54.4, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.87, r: 36.9, estimated: false }  # 신뢰성
  multimodal: { s: 77.5, z: 0.34, r: 55.2, estimated: false }  # 멀티모달
  long_context: { s: 74.7, z: 0.75, r: 61.2, estimated: false }  # 긴문맥
  instruction: { s: 54.9, z: 0.08, r: 51.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 122B A10B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Qwen3.5 122B A10B (Non-reasoning)

Alibaba · Open · Medium(125B) · 컨텍스트 262k · 종합지능 **28.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.4 · 출력 $3.2 · 혼합 $0.68/1M · 145.0 t/s · TTFT 2.31s · 262k ctx` · 가성비 41.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.6 | +0.04 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 52.6 | +0.17 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 54.3 | +0.29 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 30.0%×0.5 |
| 에이전트 | 54.4 | +0.29 | 실측 | [[gdpval]] 20.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 30.0%×1.0 |
| 신뢰성 | 36.9 | -0.87 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 55.2 | +0.34 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 61.2 | +0.75 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 51.2 | +0.08 | 실측 | [[ifbench]] 51.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
