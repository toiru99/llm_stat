---
type: Model
title: GPT-6 Sol (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 107.64573123131531
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.8, z: 0.71, r: 60.6, estimated: false }  # 전문 지식
  reasoning: { s: 70.1, z: 1.72, r: 75.8, estimated: false }  # 추론
  coding: { s: 79.2, z: 1.34, r: 70.2, estimated: false }  # 코딩
  agentic: { s: 82.4, z: 1.31, r: 69.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.0, z: 1.01, r: 65.2, estimated: false }  # 멀티모달
  long_context: { s: 91.7, z: 1.14, r: 67.1, estimated: false }  # 긴문맥
  instruction: { s: 73.6, z: 0.84, r: 62.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-6 Sol (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 107.64573123131531 t/s · TTFT 16.12176938048331s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.6 | +0.71 | 실측 | [[humanitys-last-exam]] 46.2928637627433%×0.3 |
| 추론 | 75.8 | +1.72 | 실측 | [[critpt]] 28.000000000000004%×1.0, [[humanitys-last-exam]] 46.2928637627433%×1.0 |
| 코딩 | 70.2 | +1.34 | 실측 | [[scicode]] 55.0925925925926%×1.0 |
| 에이전트 | 69.6 | +1.31 | 실측 | [[gdpval]] 1465.98%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.2 | +1.01 | 실측 | [[mmmu-pro]] 82.5433526011561%×1.0 |
| 긴문맥 | 67.1 | +1.14 | 실측 | [[aa-lcr]] 81.3333333333333%×1.0 |
| 지시 따르기 | 62.5 | +0.84 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
