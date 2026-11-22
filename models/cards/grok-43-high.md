---
type: Model
title: Grok 4.3 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.64
output_speed_tps: 83.5399234371721
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.2, z: 1.3, r: 69.5, estimated: false }  # 전문 지식
  reasoning: { s: 54.9, z: 0.95, r: 64.3, estimated: false }  # 추론
  coding: { s: 64.5, z: 0.83, r: 62.4, estimated: false }  # 코딩
  agentic: { s: 59.8, z: 0.51, r: 57.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 84.8, z: 0.68, r: 60.3, estimated: false }  # 멀티모달
  long_context: { s: 82.3, z: 0.85, r: 62.8, estimated: false }  # 긴문맥
  instruction: { s: 97.1, z: 1.81, r: 77.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Grok 4.3 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 83.5399234371721 t/s · TTFT 14.0876636263771s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.5 | +1.3 | 실측 | [[gpqa-diamond]] 90.1010101010101%×0.4, [[humanitys-last-exam]] 37.2103799814643%×0.3 |
| 추론 | 64.3 | +0.95 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 90.1010101010101%×1.0, [[humanitys-last-exam]] 37.2103799814643%×1.0 |
| 코딩 | 62.4 | +0.83 | 실측 | [[scicode]] 48.2638888888889%×1.0, [[terminal-bench]] 37.878787878787904%×0.5 |
| 에이전트 | 57.7 | +0.51 | 실측 | [[gdpval]] 945.36%×1.0, [[tau2-bench]] 97.6608187134503%×1.0, [[tau3-banking]] 12.3711340206186%×1.0, [[terminal-bench]] 37.878787878787904%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.3 | +0.68 | 실측 | [[mmmu-pro]] 78.09248554913299%×1.0 |
| 긴문맥 | 62.8 | +0.85 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 77.1 | +1.81 | 실측 | [[ifbench]] 81.2925170068027%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
