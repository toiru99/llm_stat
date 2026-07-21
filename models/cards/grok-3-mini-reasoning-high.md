---
type: Model
title: Grok 3 mini Reasoning (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: 23.0
price_blended_usd_1m: None
output_speed_tps: 73.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 36.4, z: -0.2, r: 47.0, estimated: false }  # 전문 지식
  reasoning: { s: 34.8, z: 0.06, r: 50.9, estimated: false }  # 추론
  coding: { s: 54.1, z: 0.33, r: 54.9, estimated: false }  # 코딩
  agentic: { s: 58.3, z: 0.85, r: 62.8, estimated: false }  # 에이전트
  trust: { s: 87.1, z: 2.8, r: 92.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 65.8, z: 0.5, r: 57.6, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.19, r: 47.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 3 mini Reasoning (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# Grok 3 mini Reasoning (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **23.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $0.5 · 혼합 $None/1M · 73.0 t/s · TTFT 0.72s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.0 | -0.2 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 50.9 | +0.06 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 54.9 | +0.33 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 62.8 | +0.85 | 실측 | [[tau2-bench]] 90.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 92.0 | +2.8 | 실측 | [[aa-omniscience]] 75.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.6 | +0.5 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 47.1 | -0.19 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
