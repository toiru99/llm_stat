---
type: Model
title: Claude Opus 4.7 (Non-reasoning, high)
creator: Anthropic
license: Proprietary
intelligence_index: 43.0
price_blended_usd_1m: None
output_speed_tps: 50.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 74.2, z: 1.62, r: 74.3, estimated: false }  # 전문 지식
  reasoning: { s: 55.4, z: 1.14, r: 67.0, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.56, r: 73.4, estimated: false }  # 코딩
  agentic: { s: 79.0, z: 1.66, r: 74.9, estimated: false }  # 에이전트
  trust: { s: 55.3, z: 1.3, r: 69.5, estimated: false }  # 신뢰성
  multimodal: { s: 88.4, z: 0.8, r: 62.0, estimated: false }  # 멀티모달
  long_context: { s: 88.2, z: 1.17, r: 67.5, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.31, r: 45.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.7 (Non-reasoning, high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# Claude Opus 4.7 (Non-reasoning, high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **43.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $None/1M · 50.0 t/s · TTFT 1.62s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.3 | +1.62 | 실측 | [[aa-omniscience]] 44.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 31.0%×0.3 |
| 추론 | 67.0 | +1.14 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 31.0%×1.0 |
| 코딩 | 73.4 | +1.56 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 55.0%×0.5 |
| 에이전트 | 74.9 | +1.66 | 실측 | [[tau2-bench]] 74.0%×1.0, [[terminal-bench]] 55.0%×1.0 |
| 신뢰성 | 69.5 | +1.3 | 실측 | [[aa-omniscience]] 48.0%×1.0 |
| 멀티모달 | 62.0 | +0.8 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 67.5 | +1.17 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 45.3 | -0.31 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
