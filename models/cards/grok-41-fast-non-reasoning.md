---
type: Model
title: Grok 4.1 Fast (Non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: 17.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 31.1, z: -0.47, r: 43.0, estimated: false }  # 전문 지식
  reasoning: { s: 23.5, z: -0.56, r: 41.6, estimated: false }  # 추론
  coding: { s: 39.3, z: -0.32, r: 45.1, estimated: false }  # 코딩
  agentic: { s: 38.9, z: 0.06, r: 50.9, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.38, r: 44.2, estimated: false }  # 신뢰성
  multimodal: { s: 46.5, z: -1.18, r: 32.2, estimated: false }  # 멀티모달
  long_context: { s: 34.9, z: -0.47, r: 43.0, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.8, r: 38.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.1 Fast (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Grok 4.1 Fast (Non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **17.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.0 | -0.47 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 41.6 | -0.56 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 45.1 | -0.32 | 실측 | [[scicode]] 30.0%×1.0, [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 50.9 | +0.06 | 실측 | [[itbench]] 18.0%×1.0, [[tau2-bench]] 64.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 44.2 | -0.38 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 32.2 | -1.18 | 실측 | [[mmmu-pro]] 48.0%×1.0 |
| 긴문맥 | 43.0 | -0.47 | 실측 | [[aa-lcr]] 29.0%×1.0 |
| 지시 따르기 | 38.0 | -0.8 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
