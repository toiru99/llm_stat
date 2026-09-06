---
type: Model
title: Claude Sonnet 4.6 (Non-reasoning, high)
creator: Anthropic
license: Proprietary
intelligence_index: 29.0
price_blended_usd_1m: 2.31
output_speed_tps: 45.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 57.0, z: 0.78, r: 61.7, estimated: false }  # 전문 지식
  reasoning: { s: 35.1, z: 0.0, r: 50.0, estimated: false }  # 추론
  coding: { s: 69.7, z: 1.31, r: 69.6, estimated: false }  # 코딩
  agentic: { s: 75.3, z: 1.45, r: 71.7, estimated: false }  # 에이전트
  trust: { s: 29.9, z: 0.25, r: 53.8, estimated: false }  # 신뢰성
  multimodal: { s: 77.8, z: 0.38, r: 55.7, estimated: false }  # 멀티모달
  long_context: { s: 76.4, z: 0.84, r: 62.6, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.5, r: 42.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 4.6 (Non-reasoning, high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Claude Sonnet 4.6 (Non-reasoning, high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **29.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 45.0 t/s · TTFT 1.55s · 1M ctx` · 가성비 12.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.7 | +0.78 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 50.0 | +0.0 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 69.6 | +1.31 | 실측 | [[terminal-bench]] 46.0%×0.5 |
| 에이전트 | 71.7 | +1.45 | 실측 | [[tau2-bench]] 80.0%×1.0, [[terminal-bench]] 46.0%×1.0 |
| 신뢰성 | 53.8 | +0.25 | 실측 | [[aa-omniscience]] 31.0%×1.0 |
| 멀티모달 | 55.7 | +0.38 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 62.6 | +0.84 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 42.6 | -0.5 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
