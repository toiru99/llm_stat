---
type: Model
title: Claude Opus 4.7 (Non-reasoning, high)
creator: Anthropic
license: Proprietary
intelligence_index: 43.0
price_blended_usd_1m: None
output_speed_tps: 42.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 74.2, z: 1.55, r: 73.2, estimated: false }  # 전문 지식
  reasoning: { s: 55.4, z: 1.05, r: 65.7, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.51, r: 72.7, estimated: false }  # 코딩
  agentic: { s: 79.0, z: 1.66, r: 74.8, estimated: false }  # 에이전트
  trust: { s: 54.0, z: 1.23, r: 68.5, estimated: false }  # 신뢰성
  multimodal: { s: 87.1, z: 0.75, r: 61.2, estimated: false }  # 멀티모달
  long_context: { s: 88.2, z: 1.14, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.33, r: 45.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.7 (Non-reasoning, high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# Claude Opus 4.7 (Non-reasoning, high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **43.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $None/1M · 42.0 t/s · TTFT 1.56s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.2 | +1.55 | 실측 | [[aa-omniscience]] 44.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 31.0%×0.3 |
| 추론 | 65.7 | +1.05 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 31.0%×1.0 |
| 코딩 | 72.7 | +1.51 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 55.0%×0.5 |
| 에이전트 | 74.8 | +1.66 | 실측 | [[tau2-bench]] 74.0%×1.0, [[terminal-bench]] 55.0%×1.0 |
| 신뢰성 | 68.5 | +1.23 | 실측 | [[aa-omniscience]] 48.0%×1.0 |
| 멀티모달 | 61.2 | +0.75 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 67.2 | +1.14 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 45.0 | -0.33 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
