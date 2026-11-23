---
type: Model
title: GPT-6 Sol (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 120.841831621378
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.8, z: 0.7, r: 60.4, estimated: false }  # 전문 지식
  reasoning: { s: 70.1, z: 1.7, r: 75.5, estimated: false }  # 추론
  coding: { s: 79.2, z: 1.33, r: 69.9, estimated: false }  # 코딩
  agentic: { s: 82.4, z: 1.3, r: 69.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.7, z: 0.99, r: 64.8, estimated: false }  # 멀티모달
  long_context: { s: 91.7, z: 1.13, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: 73.8, z: 0.83, r: 62.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# GPT-6 Sol (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 120.841831621378 t/s · TTFT 13.2909350687472s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.4 | +0.7 | 실측 | [[humanitys-last-exam]] 46.2928637627433%×0.3 |
| 추론 | 75.5 | +1.7 | 실측 | [[critpt]] 28.000000000000004%×1.0, [[humanitys-last-exam]] 46.2928637627433%×1.0 |
| 코딩 | 69.9 | +1.33 | 실측 | [[scicode]] 55.0925925925926%×1.0 |
| 에이전트 | 69.4 | +1.3 | 실측 | [[gdpval]] 1465.98%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.8 | +0.99 | 실측 | [[mmmu-pro]] 82.5433526011561%×1.0 |
| 긴문맥 | 67.0 | +1.13 | 실측 | [[aa-lcr]] 81.3333333333333%×1.0 |
| 지시 따르기 | 62.5 | +0.83 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
