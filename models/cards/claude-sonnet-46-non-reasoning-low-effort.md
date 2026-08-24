---
type: Model
title: Claude Sonnet 4.6 (Non-reasoning, Low Effort)
creator: Anthropic
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 2.31
output_speed_tps: 44.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 55.7, z: 0.68, r: 60.2, estimated: false }  # 전문 지식
  reasoning: { s: 34.7, z: -0.05, r: 49.3, estimated: false }  # 추론
  coding: { s: 70.1, z: 0.88, r: 63.2, estimated: false }  # 코딩
  agentic: { s: 71.7, z: 1.34, r: 70.0, estimated: false }  # 에이전트
  trust: { s: 43.0, z: 0.64, r: 59.6, estimated: false }  # 신뢰성
  multimodal: { s: 77.1, z: 0.22, r: 53.4, estimated: false }  # 멀티모달
  long_context: { s: 78.3, z: 0.83, r: 62.4, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.49, r: 42.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 4.6 (Non-reasoning, Low Effort)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Claude Sonnet 4.6 (Non-reasoning, Low Effort)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 44.0 t/s · TTFT 1.59s · 1M ctx` · 가성비 15.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.2 | +0.68 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 49.3 | -0.05 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 63.2 | +0.88 | 실측 | [[scicode]] 44.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 70.0 | +1.34 | 실측 | [[tau2-bench]] 79.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 59.6 | +0.64 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 53.4 | +0.22 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 62.4 | +0.83 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 42.6 | -0.49 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
