---
type: Model
title: Grok Build 0.1 0616
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.54
output_speed_tps: 94.0
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.9, z: 1.3, r: 69.5, estimated: false }  # 전문 지식
  reasoning: { s: 76.8, z: 1.4, r: 71.0, estimated: false }  # 추론
  coding: { s: 60.2, z: 0.77, r: 61.6, estimated: true }  # 코딩
  agentic: { s: 41.5, z: 0.25, r: 53.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 84.9, z: 0.64, r: 59.6, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 0.96, r: 64.4, estimated: false }  # 긴문맥
  instruction: { s: 88.5, z: 1.49, r: 72.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok Build 0.1 0616
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Grok Build 0.1 0616

SpaceXAI · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $1.0 · 출력 $2.0 · 혼합 $0.54/1M · 94.0 t/s · TTFT 1.26s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.5 | +1.3 | 실측 | [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 38.0%×0.3 |
| 추론 | 71.0 | +1.4 | 실측 | [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 38.0%×1.0 |
| 코딩 | 61.6 | +0.77 | 추정 | (추정) |
| 에이전트 | 53.8 | +0.25 | 실측 | [[gdpval]] 1073.0%×1.0, [[tau3-banking]] 13.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 59.6 | +0.64 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 64.4 | +0.96 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 72.4 | +1.49 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
