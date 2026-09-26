---
type: Model
title: Qwen3.5 122B A10B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 18.0
price_blended_usd_1m: 0.68
output_speed_tps: 142.0
context_window: 262000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 41.1, z: -0.03, r: 49.6, estimated: false }  # 전문 지식
  reasoning: { s: 37.7, z: 0.1, r: 51.5, estimated: false }  # 추론
  coding: { s: 45.5, z: 0.36, r: 55.4, estimated: false }  # 코딩
  agentic: { s: 41.5, z: 0.14, r: 52.2, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: 75.3, z: 0.25, r: 53.7, estimated: false }  # 멀티모달
  long_context: { s: 68.5, z: 0.55, r: 58.2, estimated: false }  # 긴문맥
  instruction: { s: 54.9, z: 0.06, r: 50.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 122B A10B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Qwen3.5 122B A10B (Non-reasoning)

Alibaba · Open · Medium · 컨텍스트 262k · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.4 · 출력 $3.2 · 혼합 $0.68/1M · 142.0 t/s · TTFT 2.4s · 262k ctx` · 가성비 26.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.6 | -0.03 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 51.5 | +0.1 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 55.4 | +0.36 | 실측 | [[terminal-bench]] 30.0%×0.5 |
| 에이전트 | 52.2 | +0.14 | 실측 | [[gdpval]] 10.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 30.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 53.7 | +0.25 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 58.2 | +0.55 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 50.9 | +0.06 | 실측 | [[ifbench]] 51.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
