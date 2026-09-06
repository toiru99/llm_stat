---
type: Model
title: Grok 4.1 Fast (Non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: 11.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.9, z: -0.48, r: 42.8, estimated: false }  # 전문 지식
  reasoning: { s: 23.2, z: -0.57, r: 41.5, estimated: false }  # 추론
  coding: { s: 21.2, z: -0.38, r: 44.3, estimated: false }  # 코딩
  agentic: { s: 38.9, z: 0.06, r: 50.8, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.38, r: 44.3, estimated: false }  # 신뢰성
  multimodal: { s: 45.8, z: -1.2, r: 31.9, estimated: false }  # 멀티모달
  long_context: { s: 34.8, z: -0.44, r: 43.4, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.79, r: 38.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.1 Fast (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Grok 4.1 Fast (Non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.8 | -0.48 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 41.5 | -0.57 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 44.3 | -0.38 | 실측 | [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 50.8 | +0.06 | 실측 | [[itbench]] 18.0%×1.0, [[tau2-bench]] 64.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 44.3 | -0.38 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 31.9 | -1.2 | 실측 | [[mmmu-pro]] 48.0%×1.0 |
| 긴문맥 | 43.4 | -0.44 | 실측 | [[aa-lcr]] 31.0%×1.0 |
| 지시 따르기 | 38.2 | -0.79 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
