---
type: Model
title: Grok Build 0.1 0616
creator: SpaceXAI
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: None
output_speed_tps: 84.0
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.0, z: 2.04, r: 80.6, estimated: false }  # 전문 지식
  reasoning: { s: 63.2, z: 1.54, r: 73.1, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.55, r: 73.3, estimated: false }  # 코딩
  agentic: { s: 45.7, z: 0.37, r: 55.5, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.81, r: 37.9, estimated: false }  # 신뢰성
  multimodal: { s: 89.9, z: 0.86, r: 62.9, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: 71.5, z: 0.78, r: 61.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok Build 0.1 0616
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# Grok Build 0.1 0616

SpaceXAI · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **40.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.0 · 출력 $2.0 · 혼합 $None/1M · 84.0 t/s · TTFT 0.57s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.6 | +2.04 | 실측 | [[aa-omniscience]] 51.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 73.1 | +1.54 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 73.3 | +1.55 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 55.5 | +0.37 | 실측 | [[gdpval]] 36.0%×1.0, [[tau3-banking]] 11.0%×1.0 |
| 신뢰성 | 37.9 | -0.81 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 62.9 | +0.86 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 61.7 | +0.78 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
