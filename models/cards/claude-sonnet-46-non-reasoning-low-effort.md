---
type: Model
title: Claude Sonnet 4.6 (Non-reasoning, Low Effort)
creator: Anthropic
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: None
output_speed_tps: 44.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 57.3, z: 0.76, r: 61.4, estimated: false }  # 전문 지식
  reasoning: { s: 35.2, z: 0.04, r: 50.7, estimated: false }  # 추론
  coding: { s: 70.1, z: 0.97, r: 64.6, estimated: false }  # 코딩
  agentic: { s: 71.7, z: 1.37, r: 70.5, estimated: false }  # 에이전트
  trust: { s: 44.8, z: 0.79, r: 61.8, estimated: false }  # 신뢰성
  multimodal: { s: 77.1, z: 0.27, r: 54.1, estimated: false }  # 멀티모달
  long_context: { s: 77.6, z: 0.84, r: 62.6, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.45, r: 43.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 4.6 (Non-reasoning, Low Effort)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# Claude Sonnet 4.6 (Non-reasoning, Low Effort)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $None/1M · 44.0 t/s · TTFT 1.28s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.4 | +0.76 | 실측 | [[aa-omniscience]] 36.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 50.7 | +0.04 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 64.6 | +0.97 | 실측 | [[scicode]] 44.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 70.5 | +1.37 | 실측 | [[tau2-bench]] 79.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 61.8 | +0.79 | 실측 | [[aa-omniscience]] 40.0%×1.0 |
| 멀티모달 | 54.1 | +0.27 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 62.6 | +0.84 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 43.3 | -0.45 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
