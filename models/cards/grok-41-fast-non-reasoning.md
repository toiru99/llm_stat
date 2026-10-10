---
type: Model
title: Grok 4.1 Fast (non-reasoning)
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
  knowledge: { s: 30.9, z: -0.55, r: 41.8, estimated: false }  # 전문 지식
  reasoning: { s: 23.2, z: -0.61, r: 40.8, estimated: false }  # 추론
  coding: { s: 21.2, z: -0.53, r: 42.0, estimated: false }  # 코딩
  agentic: { s: 38.9, z: -0.01, r: 49.9, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.47, r: 42.9, estimated: false }  # 신뢰성
  multimodal: { s: 45.2, z: -1.31, r: 30.3, estimated: false }  # 멀티모달
  long_context: { s: 34.8, z: -0.52, r: 42.2, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.86, r: 37.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.1 Fast (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Grok 4.1 Fast (non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.8 | -0.55 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 40.8 | -0.61 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 42.0 | -0.53 | 실측 | [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 49.9 | -0.01 | 실측 | [[itbench]] 18.0%×1.0, [[tau2-bench]] 64.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 42.9 | -0.47 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 30.3 | -1.31 | 실측 | [[mmmu-pro]] 48.0%×1.0 |
| 긴문맥 | 42.2 | -0.52 | 실측 | [[aa-lcr]] 31.0%×1.0 |
| 지시 따르기 | 37.1 | -0.86 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
