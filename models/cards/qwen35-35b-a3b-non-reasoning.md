---
type: Model
title: Qwen3.5 35B A3B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 24.0
price_blended_usd_1m: 0.425
output_speed_tps: 164.0
context_window: 262000
status: current
size_class: Small
params_b: 36
is_reasoning: false
radar:
  knowledge: { s: 38.3, z: -0.12, r: 48.2, estimated: false }  # 전문 지식
  reasoning: { s: 36.7, z: 0.11, r: 51.7, estimated: false }  # 추론
  coding: { s: 37.8, z: -0.41, r: 43.9, estimated: false }  # 코딩
  agentic: { s: 34.0, z: -0.11, r: 48.3, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.9, r: 36.5, estimated: false }  # 신뢰성
  multimodal: { s: 77.1, z: 0.3, r: 54.5, estimated: false }  # 멀티모달
  long_context: { s: 72.3, z: 0.7, r: 60.6, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.3, r: 45.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 35B A3B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Qwen3.5 35B A3B (Non-reasoning)

Alibaba · Open · Small(36B) · 컨텍스트 262k · 종합지능 **24.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.425/1M · 164.0 t/s · TTFT 2.04s · 262k ctx` · 가성비 56.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.2 | -0.12 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 51.7 | +0.11 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 43.9 | -0.41 | 실측 | [[scicode]] 29.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 48.3 | -0.11 | 실측 | [[gdpval]] 15.0%×1.0, [[tau2-bench]] 86.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 36.5 | -0.9 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 54.5 | +0.3 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 60.6 | +0.7 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 45.4 | -0.3 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
