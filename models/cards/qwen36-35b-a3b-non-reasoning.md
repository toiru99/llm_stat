---
type: Model
title: Qwen3.6 35B A3B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.5625
output_speed_tps: 142.0
context_window: 262000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.4, z: -0.15, r: 47.7, estimated: false }  # 전문 지식
  reasoning: { s: 35.1, z: -0.02, r: 49.7, estimated: false }  # 추론
  coding: { s: 39.4, z: 0.15, r: 52.2, estimated: false }  # 코딩
  agentic: { s: 40.1, z: 0.09, r: 51.3, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: 76.7, z: 0.32, r: 54.7, estimated: false }  # 멀티모달
  long_context: { s: 71.9, z: 0.65, r: 59.7, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.82, r: 37.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 35B A3B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# Qwen3.6 35B A3B (Non-reasoning)

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.38 · 출력 $2.25 · 혼합 $0.5625/1M · 142.0 t/s · TTFT 2.12s · 262k ctx` · 가성비 26.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.7 | -0.15 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 49.7 | -0.02 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 52.2 | +0.15 | 실측 | [[terminal-bench]] 26.0%×0.5 |
| 에이전트 | 51.3 | +0.09 | 실측 | [[gdpval]] 17.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 26.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 54.7 | +0.32 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 59.7 | +0.65 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 37.7 | -0.82 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
