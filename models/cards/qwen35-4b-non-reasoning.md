---
type: Model
title: Qwen3.5 4B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 11.0
price_blended_usd_1m: 0.042
output_speed_tps: 24.0
context_window: 262000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.4, z: -0.63, r: 40.6, estimated: false }  # 전문 지식
  reasoning: { s: 27.5, z: -0.38, r: 44.3, estimated: false }  # 추론
  coding: { s: 16.7, z: -0.64, r: 40.5, estimated: false }  # 코딩
  agentic: { s: 37.8, z: 0.0, r: 50.0, estimated: false }  # 에이전트
  trust: { s: 1.0, z: -1.15, r: 32.7, estimated: false }  # 신뢰성
  multimodal: { s: 64.4, z: -0.3, r: 45.5, estimated: false }  # 멀티모달
  long_context: { s: 39.3, z: -0.34, r: 44.8, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.99, r: 35.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 4B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Qwen3.5 4B (Non-reasoning)

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 멀티모달
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.03 · 출력 $0.15 · 혼합 $0.042/1M · 24.0 t/s · TTFT 0.93s · 262k ctx` · 가성비 261.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.6 | -0.63 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 44.3 | -0.38 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 40.5 | -0.64 | 실측 | [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 50.0 | +0.0 | 실측 | [[tau2-bench]] 88.0%×1.0, [[tau3-banking]] 4.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 32.7 | -1.15 | 실측 | [[aa-omniscience]] 3.0%×1.0 |
| 멀티모달 | 45.5 | -0.3 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 44.8 | -0.34 | 실측 | [[aa-lcr]] 35.0%×1.0 |
| 지시 따르기 | 35.1 | -0.99 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
