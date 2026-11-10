---
type: Model
title: Grok Build 0.1 0616
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.54
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.4, z: 1.33, r: 69.9, estimated: false }  # 전문 지식
  reasoning: { s: 71.5, z: 1.38, r: 70.7, estimated: false }  # 추론
  coding: { s: 61.9, z: 0.81, r: 62.2, estimated: true }  # 코딩
  agentic: { s: 41.7, z: 0.23, r: 53.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 83.8, z: 0.62, r: 59.3, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 0.93, r: 64.0, estimated: false }  # 긴문맥
  instruction: { s: 90.9, z: 1.64, r: 74.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok Build 0.1 0616
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Grok Build 0.1 0616

SpaceXAI · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $1.0 · 출력 $2.0 · 혼합 $0.54/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.9 | +1.33 | 실측 | [[gpqa-diamond]] 89.5%×0.4, [[humanitys-last-exam]] 38.3%×0.3 |
| 추론 | 70.7 | +1.38 | 실측 | [[gpqa-diamond]] 89.5%×1.0, [[humanitys-last-exam]] 38.3%×1.0 |
| 코딩 | 62.2 | +0.81 | 추정 | (추정) |
| 에이전트 | 53.5 | +0.23 | 실측 | [[gdpval]] 1073.0%×1.0, [[tau3-banking]] 13.4%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 59.3 | +0.62 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 64.0 | +0.93 | 실측 | [[aa-lcr]] 74.7%×1.0 |
| 지시 따르기 | 74.6 | +1.64 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
