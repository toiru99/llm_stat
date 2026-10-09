---
type: Model
title: Claude 4 Sonnet (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 17.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 36.9, z: -0.26, r: 46.0, estimated: false }  # 전문 지식
  reasoning: { s: 25.2, z: -0.52, r: 42.2, estimated: false }  # 추론
  coding: { s: 40.9, z: 0.14, r: 52.1, estimated: false }  # 코딩
  agentic: { s: 46.7, z: 0.29, r: 54.4, estimated: false }  # 에이전트
  trust: { s: 58.8, z: 1.48, r: 72.2, estimated: false }  # 신뢰성
  multimodal: { s: 64.4, z: -0.35, r: 44.7, estimated: false }  # 멀티모달
  long_context: { s: 49.4, z: -0.08, r: 48.8, estimated: false }  # 긴문맥
  instruction: { s: 46.5, z: -0.33, r: 45.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4 Sonnet (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# Claude 4 Sonnet (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **17.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.0 | -0.26 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 42.2 | -0.52 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 52.1 | +0.14 | 실측 | [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 54.4 | +0.29 | 실측 | [[tau2-bench]] 52.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 72.2 | +1.48 | 실측 | [[aa-omniscience]] 59.0%×1.0 |
| 멀티모달 | 44.7 | -0.35 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 48.8 | -0.08 | 실측 | [[aa-lcr]] 44.0%×1.0 |
| 지시 따르기 | 45.0 | -0.33 | 실측 | [[ifbench]] 45.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
