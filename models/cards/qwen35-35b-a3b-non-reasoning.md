---
type: Model
title: Qwen3.5 35B A3B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 17.0
price_blended_usd_1m: 0.425
output_speed_tps: 169.0
context_window: 262000
status: current
size_class: Small
params_b: 36
is_reasoning: false
radar:
  knowledge: { s: 37.4, z: -0.17, r: 47.5, estimated: false }  # 전문 지식
  reasoning: { s: 35.8, z: 0.04, r: 50.6, estimated: false }  # 추론
  coding: { s: 16.7, z: -0.54, r: 41.9, estimated: false }  # 코딩
  agentic: { s: 33.0, z: -0.17, r: 47.5, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: 75.0, z: 0.24, r: 53.6, estimated: false }  # 멀티모달
  long_context: { s: 70.8, z: 0.67, r: 60.0, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.32, r: 45.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 35B A3B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Qwen3.5 35B A3B (Non-reasoning)

Alibaba · Open · Small(36B) · 컨텍스트 262k · 종합지능 **17.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.425/1M · 169.0 t/s · TTFT 2.12s · 262k ctx` · 가성비 40.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.5 | -0.17 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 50.6 | +0.04 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 41.9 | -0.54 | 실측 | [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 47.5 | -0.17 | 실측 | [[gdpval]] 12.0%×1.0, [[tau2-bench]] 86.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 53.6 | +0.24 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 60.0 | +0.67 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 45.2 | -0.32 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
