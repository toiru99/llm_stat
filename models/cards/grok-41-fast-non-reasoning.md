---
type: Model
title: Grok 4.1 Fast (non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.7, z: -0.47, r: 42.9, estimated: false }  # 전문 지식
  reasoning: { s: 34.7, z: -0.5, r: 42.6, estimated: false }  # 추론
  coding: { s: 21.2, z: -0.53, r: 42.0, estimated: false }  # 코딩
  agentic: { s: 26.1, z: -0.28, r: 45.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 45.2, z: -1.34, r: 29.9, estimated: false }  # 멀티모달
  long_context: { s: 34.8, z: -0.52, r: 42.2, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.79, r: 38.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.1 Fast (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# Grok 4.1 Fast (non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.9 | -0.47 | 실측 | [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 42.6 | -0.5 | 실측 | [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 42.0 | -0.53 | 실측 | [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 45.8 | -0.28 | 실측 | [[itbench]] 18.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 29.9 | -1.34 | 실측 | [[mmmu-pro]] 48.0%×1.0 |
| 긴문맥 | 42.2 | -0.52 | 실측 | [[aa-lcr]] 31.0%×1.0 |
| 지시 따르기 | 38.1 | -0.79 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
