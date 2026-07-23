---
type: Model
title: Grok 4.5 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: 54.0
price_blended_usd_1m: None
output_speed_tps: 68.0
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.5, z: 2.21, r: 83.1, estimated: false }  # 전문 지식
  reasoning: { s: 73.6, z: 2.08, r: 81.3, estimated: false }  # 추론
  coding: { s: 90.0, z: 1.83, r: 77.5, estimated: false }  # 코딩
  agentic: { s: 91.1, z: 2.13, r: 81.9, estimated: false }  # 에이전트
  trust: { s: 51.7, z: 1.16, r: 67.4, estimated: false }  # 신뢰성
  multimodal: { s: 94.2, z: 1.07, r: 66.0, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.2, r: 68.0, estimated: false }  # 긴문맥
  instruction: { s: 75.4, z: 0.94, r: 64.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# Grok 4.5 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **54.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $None/1M · 68.0 t/s · TTFT 9.45s · 500k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 83.1 | +2.21 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 81.3 | +2.08 | 실측 | [[critpt]] 15.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 77.5 | +1.83 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 81.9 | +2.13 | 실측 | [[gdpval]] 51.0%×1.0, [[tau3-banking]] 33.0%×1.0 |
| 신뢰성 | 67.4 | +1.16 | 실측 | [[aa-omniscience]] 46.0%×1.0 |
| 멀티모달 | 66.0 | +1.07 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 68.0 | +1.2 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 64.1 | +0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
