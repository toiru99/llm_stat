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
  knowledge: { s: 37.9, z: -0.43, r: 43.5, estimated: false }  # 전문 지식
  reasoning: { s: 33.9, z: -0.45, r: 43.2, estimated: false }  # 추론
  coding: { s: 21.9, z: -0.53, r: 42.0, estimated: false }  # 코딩
  agentic: { s: 26.5, z: -0.28, r: 45.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 44.6, z: -1.36, r: 29.7, estimated: false }  # 멀티모달
  long_context: { s: 35.3, z: -0.53, r: 42.0, estimated: false }  # 긴문맥
  instruction: { s: 34.3, z: -0.8, r: 38.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.1 Fast (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
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
| 전문 지식 | 43.5 | -0.43 | 실측 | [[gpqa-diamond]] 63.7%×0.4, [[humanitys-last-exam]] 5.1%×0.3 |
| 추론 | 43.2 | -0.45 | 실측 | [[gpqa-diamond]] 63.7%×1.0, [[humanitys-last-exam]] 5.1%×1.0 |
| 코딩 | 42.0 | -0.53 | 실측 | [[terminal-bench]] 14.4%×0.5 |
| 에이전트 | 45.8 | -0.28 | 실측 | [[itbench]] 17.9%×1.0, [[terminal-bench]] 14.4%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 29.7 | -1.36 | 실측 | [[mmmu-pro]] 48.0%×1.0 |
| 긴문맥 | 42.0 | -0.53 | 실측 | [[aa-lcr]] 31.3%×1.0 |
| 지시 따르기 | 38.0 | -0.8 | 실측 | [[ifbench]] 36.5%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
