---
type: Model
title: Qwen3.6 35B A3B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 25.0
price_blended_usd_1m: 0.5625
output_speed_tps: 134.0
context_window: 262000
status: current
size_class: Small
params_b: 36
is_reasoning: false
radar:
  knowledge: { s: 38.8, z: -0.07, r: 48.9, estimated: false }  # 전문 지식
  reasoning: { s: 35.7, z: 0.06, r: 50.9, estimated: false }  # 추론
  coding: { s: 14.2, z: -1.38, r: 29.3, estimated: false }  # 코딩
  agentic: { s: 43.3, z: 0.24, r: 53.6, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.86, r: 37.0, estimated: false }  # 신뢰성
  multimodal: { s: 80.0, z: 0.44, r: 56.6, estimated: false }  # 멀티모달
  long_context: { s: 72.3, z: 0.69, r: 60.3, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.79, r: 38.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 35B A3B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Qwen3.6 35B A3B (Non-reasoning)

Alibaba · Open · Small(36B) · 컨텍스트 262k · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 신뢰성, 코딩

## 실용 지표
`입력 $0.38 · 출력 $2.25 · 혼합 $0.5625/1M · 134.0 t/s · TTFT 2.0s · 262k ctx` · 가성비 44.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.9 | -0.07 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 50.9 | +0.06 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 29.3 | -1.38 | 실측 | [[scicode]] 1.0%×1.0, [[terminal-bench]] 26.0%×0.5 |
| 에이전트 | 53.6 | +0.24 | 실측 | [[gdpval]] 26.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 26.0%×1.0 |
| 신뢰성 | 37.0 | -0.86 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 56.6 | +0.44 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 60.3 | +0.69 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 38.1 | -0.79 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
