---
type: Model
title: Claude Sonnet 4.6 (Non-reasoning, high)
creator: Anthropic
license: Proprietary
intelligence_index: 37.0
price_blended_usd_1m: 2.31
output_speed_tps: 44.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 58.6, z: 0.89, r: 63.3, estimated: false }  # 전문 지식
  reasoning: { s: 35.9, z: 0.07, r: 51.1, estimated: false }  # 추론
  coding: { s: 75.5, z: 1.17, r: 67.5, estimated: false }  # 코딩
  agentic: { s: 75.3, z: 1.51, r: 72.6, estimated: false }  # 에이전트
  trust: { s: 29.9, z: 0.28, r: 54.2, estimated: false }  # 신뢰성
  multimodal: { s: 80.0, z: 0.44, r: 56.6, estimated: false }  # 멀티모달
  long_context: { s: 74.7, z: 0.78, r: 61.7, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.48, r: 42.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 4.6 (Non-reasoning, high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Claude Sonnet 4.6 (Non-reasoning, high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **37.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 44.0 t/s · TTFT 1.72s · 1M ctx` · 가성비 16.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.3 | +0.89 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 51.1 | +0.07 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 67.5 | +1.17 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 46.0%×0.5 |
| 에이전트 | 72.6 | +1.51 | 실측 | [[tau2-bench]] 80.0%×1.0, [[terminal-bench]] 46.0%×1.0 |
| 신뢰성 | 54.2 | +0.28 | 실측 | [[aa-omniscience]] 31.0%×1.0 |
| 멀티모달 | 56.6 | +0.44 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 61.7 | +0.78 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 42.8 | -0.48 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
