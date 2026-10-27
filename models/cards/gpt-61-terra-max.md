---
type: Model
title: GPT-6.1 Terra (max)
creator: OpenAI
license: Proprietary
intelligence_index: 48.0
price_blended_usd_1m: 0.735
output_speed_tps: 91.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.6, z: 1.41, r: 71.1, estimated: false }  # 전문 지식
  reasoning: { s: 79.9, z: 1.93, r: 79.0, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.42, r: 71.3, estimated: false }  # 코딩
  agentic: { s: 79.1, z: 1.53, r: 72.9, estimated: false }  # 에이전트
  trust: { s: 61.9, z: 1.57, r: 73.5, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.19, r: 67.8, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.21, r: 68.2, estimated: false }  # 긴문맥
  instruction: { s: 69.8, z: 0.66, r: 59.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# GPT-6.1 Terra (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **48.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 신뢰성
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · 91.0 t/s · TTFT 133.64s · 1M ctx` · 가성비 65.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.1 | +1.41 | 실측 | [[aa-omniscience]] 49.0%×1.0, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 79.0 | +1.93 | 실측 | [[critpt]] 28.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 71.3 | +1.42 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 72.9 | +1.53 | 실측 | [[gdpval]] 1476.0%×1.0 |
| 신뢰성 | 73.5 | +1.57 | 실측 | [[aa-omniscience]] 62.0%×1.0 |
| 멀티모달 | 67.8 | +1.19 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 68.2 | +1.21 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 59.8 | +0.66 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
