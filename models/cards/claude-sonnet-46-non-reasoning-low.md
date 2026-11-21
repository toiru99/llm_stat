---
type: Model
title: Claude Sonnet 4.6 (non-reasoning, low)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 55.0315499252128
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 52.1, z: 0.23, r: 53.5, estimated: false }  # 전문 지식
  reasoning: { s: 32.4, z: -0.16, r: 47.6, estimated: false }  # 추론
  coding: { s: 64.4, z: 0.83, r: 62.4, estimated: false }  # 코딩
  agentic: { s: 72.0, z: 0.94, r: 64.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 72.9, z: 0.08, r: 51.2, estimated: false }  # 멀티모달
  long_context: { s: 78.2, z: 0.73, r: 60.9, estimated: false }  # 긴문맥
  instruction: { s: 42.5, z: -0.48, r: 42.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 4.6 (non-reasoning, low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Claude Sonnet 4.6 (non-reasoning, low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 55.0315499252128 t/s · TTFT 1.33764415128559s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.5 | +0.23 | 실측 | [[gpqa-diamond]] 79.6969696969697%×0.4, [[humanitys-last-exam]] 11.2140871177016%×0.3 |
| 추론 | 47.6 | -0.16 | 실측 | [[critpt]] 0.857142857142857%×1.0, [[gpqa-diamond]] 79.6969696969697%×1.0, [[humanitys-last-exam]] 11.2140871177016%×1.0 |
| 코딩 | 62.4 | +0.83 | 실측 | [[terminal-bench]] 42.4242424242424%×0.5 |
| 에이전트 | 64.1 | +0.94 | 실측 | [[tau2-bench]] 78.9473684210526%×1.0, [[terminal-bench]] 42.4242424242424%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.2 | +0.08 | 실측 | [[mmmu-pro]] 69.19075144508669%×1.0 |
| 긴문맥 | 60.9 | +0.73 | 실측 | [[aa-lcr]] 69.3333333333333%×1.0 |
| 지시 따르기 | 42.9 | -0.48 | 실측 | [[ifbench]] 42.3809523809524%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
