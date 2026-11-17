---
type: Model
title: Grok 4.3 (non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.64
output_speed_tps: 72.75228406875574
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.3, z: -0.33, r: 45.1, estimated: false }  # 전문 지식
  reasoning: { s: 24.2, z: -0.55, r: 41.7, estimated: false }  # 추론
  coding: { s: 45.1, z: 0.18, r: 52.8, estimated: false }  # 코딩
  agentic: { s: 42.5, z: -0.07, r: 48.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 67.3, z: -0.2, r: 46.9, estimated: false }  # 멀티모달
  long_context: { s: 36.5, z: -0.5, r: 42.5, estimated: false }  # 긴문맥
  instruction: { s: 49.9, z: -0.16, r: 47.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Grok 4.3 (non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 긴문맥, 추론

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 72.75228406875574 t/s · TTFT 1.1538012315612087s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.1 | -0.33 | 실측 | [[gpqa-diamond]] 65.75757575757581%×0.4, [[humanitys-last-exam]] 6.76552363299351%×0.3 |
| 추론 | 41.7 | -0.55 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 65.75757575757581%×1.0, [[humanitys-last-exam]] 6.76552363299351%×1.0 |
| 코딩 | 52.8 | +0.18 | 실측 | [[scicode]] 39.3518518518519%×1.0, [[terminal-bench]] 18.939393939393902%×0.5 |
| 에이전트 | 48.9 | -0.07 | 실측 | [[gdpval]] 948.52%×1.0, [[tau2-bench]] 65.78947368421049%×1.0, [[tau3-banking]] 8.04123711340206%×1.0, [[terminal-bench]] 18.939393939393902%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 46.9 | -0.2 | 실측 | [[mmmu-pro]] 64.7976878612717%×1.0 |
| 긴문맥 | 42.5 | -0.5 | 실측 | [[aa-lcr]] 32.3333333333333%×1.0 |
| 지시 따르기 | 47.6 | -0.16 | 실측 | [[ifbench]] 47.6190476190476%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
