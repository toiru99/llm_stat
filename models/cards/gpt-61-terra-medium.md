---
type: Model
title: GPT-6.1 Terra (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 41.0
price_blended_usd_1m: 0.735
output_speed_tps: 91.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.3, z: 1.3, r: 69.5, estimated: false }  # 전문 지식
  reasoning: { s: 64.3, z: 1.23, r: 68.4, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.25, r: 68.8, estimated: false }  # 코딩
  agentic: { s: 70.9, z: 1.25, r: 68.7, estimated: false }  # 에이전트
  trust: { s: 55.7, z: 1.29, r: 69.3, estimated: false }  # 신뢰성
  multimodal: { s: 93.2, z: 1.05, r: 65.7, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 67.8, z: 0.57, r: 58.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# GPT-6.1 Terra (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **41.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 신뢰성
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · 91.0 t/s · TTFT 1.43s · 1M ctx` · 가성비 55.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.5 | +1.3 | 실측 | [[aa-omniscience]] 49.0%×1.0, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 68.4 | +1.23 | 실측 | [[critpt]] 21.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 68.8 | +1.25 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 68.7 | +1.25 | 실측 | [[gdpval]] 1325.0%×1.0 |
| 신뢰성 | 69.3 | +1.29 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | 65.7 | +1.05 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 58.6 | +0.57 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
