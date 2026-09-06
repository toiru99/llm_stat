---
type: Model
title: Qwen3.6 35B A3B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 17.0
price_blended_usd_1m: 0.5625
output_speed_tps: 141.0
context_window: 262000
status: current
size_class: Small
params_b: 36
is_reasoning: false
radar:
  knowledge: { s: 38.6, z: -0.11, r: 48.3, estimated: false }  # 전문 지식
  reasoning: { s: 35.4, z: 0.02, r: 50.2, estimated: false }  # 추론
  coding: { s: 39.4, z: 0.25, r: 53.8, estimated: false }  # 코딩
  agentic: { s: 42.8, z: 0.21, r: 53.1, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.87, r: 37.0, estimated: false }  # 신뢰성
  multimodal: { s: 77.8, z: 0.38, r: 55.7, estimated: false }  # 멀티모달
  long_context: { s: 71.9, z: 0.7, r: 60.5, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.79, r: 38.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 35B A3B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Qwen3.6 35B A3B (Non-reasoning)

Alibaba · Open · Small(36B) · 컨텍스트 262k · 종합지능 **17.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.38 · 출력 $2.25 · 혼합 $0.5625/1M · 141.0 t/s · TTFT 2.06s · 262k ctx` · 가성비 30.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.3 | -0.11 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 50.2 | +0.02 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 53.8 | +0.25 | 실측 | [[terminal-bench]] 26.0%×0.5 |
| 에이전트 | 53.1 | +0.21 | 실측 | [[gdpval]] 23.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 26.0%×1.0 |
| 신뢰성 | 37.0 | -0.87 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 55.7 | +0.38 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 60.5 | +0.7 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 38.2 | -0.79 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
