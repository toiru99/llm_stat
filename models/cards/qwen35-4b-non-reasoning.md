---
type: Model
title: Qwen3.5 4B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 16.0
price_blended_usd_1m: 0.042
output_speed_tps: 34.0
context_window: 262000
status: current
size_class: Small
params_b: 4.66
is_reasoning: false
radar:
  knowledge: { s: 29.1, z: -0.57, r: 41.4, estimated: false }  # 전문 지식
  reasoning: { s: 28.2, z: -0.32, r: 45.3, estimated: false }  # 추론
  coding: { s: 25.6, z: -0.92, r: 36.2, estimated: false }  # 코딩
  agentic: { s: 37.8, z: 0.04, r: 50.6, estimated: false }  # 에이전트
  trust: { s: 1.0, z: -1.09, r: 33.7, estimated: false }  # 신뢰성
  multimodal: { s: 67.1, z: -0.19, r: 47.2, estimated: false }  # 멀티모달
  long_context: { s: 41.0, z: -0.26, r: 46.1, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.96, r: 35.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 4B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Qwen3.5 4B (Non-reasoning)

Alibaba · Open · Small(4.66B) · 컨텍스트 262k · 종합지능 **16.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 멀티모달
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.03 · 출력 $0.15 · 혼합 $0.042/1M · 34.0 t/s · TTFT 0.68s · 262k ctx` · 가성비 381.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.4 | -0.57 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 45.3 | -0.32 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 36.2 | -0.92 | 실측 | [[scicode]] 18.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 50.6 | +0.04 | 실측 | [[tau2-bench]] 88.0%×1.0, [[tau3-banking]] 4.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 33.7 | -1.09 | 실측 | [[aa-omniscience]] 3.0%×1.0 |
| 멀티모달 | 47.2 | -0.19 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 46.1 | -0.26 | 실측 | [[aa-lcr]] 34.0%×1.0 |
| 지시 따르기 | 35.7 | -0.96 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
