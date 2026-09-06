---
type: Model
title: Qwen3.5 4B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 10.0
price_blended_usd_1m: 0.042
output_speed_tps: 18.0
context_window: 262000
status: current
size_class: Small
params_b: 4.66
is_reasoning: false
radar:
  knowledge: { s: 28.5, z: -0.6, r: 41.0, estimated: false }  # 전문 지식
  reasoning: { s: 27.7, z: -0.36, r: 44.7, estimated: false }  # 추론
  coding: { s: 16.7, z: -0.54, r: 41.9, estimated: false }  # 코딩
  agentic: { s: 37.7, z: 0.01, r: 50.2, estimated: false }  # 에이전트
  trust: { s: 1.0, z: -1.11, r: 33.4, estimated: false }  # 신뢰성
  multimodal: { s: 65.3, z: -0.24, r: 46.4, estimated: false }  # 멀티모달
  long_context: { s: 39.3, z: -0.3, r: 45.5, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.97, r: 35.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 4B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Qwen3.5 4B (Non-reasoning)

Alibaba · Open · Small(4.66B) · 컨텍스트 262k · 종합지능 **10.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 멀티모달
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.03 · 출력 $0.15 · 혼합 $0.042/1M · 18.0 t/s · TTFT 0.73s · 262k ctx` · 가성비 238.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.0 | -0.6 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 44.7 | -0.36 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 41.9 | -0.54 | 실측 | [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 50.2 | +0.01 | 실측 | [[tau2-bench]] 88.0%×1.0, [[tau3-banking]] 4.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 33.4 | -1.11 | 실측 | [[aa-omniscience]] 3.0%×1.0 |
| 멀티모달 | 46.4 | -0.24 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 45.5 | -0.3 | 실측 | [[aa-lcr]] 35.0%×1.0 |
| 지시 따르기 | 35.5 | -0.97 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
