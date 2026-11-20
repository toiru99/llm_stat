---
type: Model
title: Grok Build 0.1 0616
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.54
output_speed_tps: 155.575892685558
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.5, z: 1.31, r: 69.6, estimated: false }  # 전문 지식
  reasoning: { s: 56.2, z: 1.02, r: 65.3, estimated: false }  # 추론
  coding: { s: 65.4, z: 0.86, r: 62.9, estimated: true }  # 코딩
  agentic: { s: 45.4, z: 0.02, r: 50.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.7, z: 0.58, r: 58.7, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 0.91, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: 87.3, z: 1.4, r: 71.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok Build 0.1 0616
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Grok Build 0.1 0616

SpaceXAI · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $1.0 · 출력 $2.0 · 혼합 $0.54/1M · 155.575892685558 t/s · TTFT 1.5839846719639s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.6 | +1.31 | 실측 | [[gpqa-diamond]] 89.49494949494951%×0.4, [[humanitys-last-exam]] 38.2761816496756%×0.3 |
| 추론 | 65.3 | +1.02 | 실측 | [[critpt]] 9.14285714285714%×1.0, [[gpqa-diamond]] 89.49494949494951%×1.0, [[humanitys-last-exam]] 38.2761816496756%×1.0 |
| 코딩 | 62.9 | +0.86 | 추정 | (추정) |
| 에이전트 | 50.3 | +0.02 | 실측 | [[gdpval]] 1072.58%×1.0, [[tau3-banking]] 13.4020618556701%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.7 | +0.58 | 실측 | [[mmmu-pro]] 76.5317919075144%×1.0 |
| 긴문맥 | 63.6 | +0.91 | 실측 | [[aa-lcr]] 74.6666666666667%×1.0 |
| 지시 따르기 | 71.0 | +1.4 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
