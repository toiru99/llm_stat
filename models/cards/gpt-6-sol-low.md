---
type: Model
title: GPT-6 Sol (low)
creator: OpenAI
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 1.54
output_speed_tps: 68.0
context_window: 872000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.6, z: 1.36, r: 70.4, estimated: false }  # 전문 지식
  reasoning: { s: 53.3, z: 0.78, r: 61.7, estimated: false }  # 추론
  coding: { s: 71.7, z: 1.23, r: 68.4, estimated: false }  # 코딩
  agentic: { s: 50.7, z: 0.48, r: 57.1, estimated: false }  # 에이전트
  trust: { s: 48.5, z: 1.04, r: 65.6, estimated: false }  # 신뢰성
  multimodal: { s: 87.7, z: 0.84, r: 62.6, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.14, r: 67.1, estimated: false }  # 긴문맥
  instruction: { s: 81.5, z: 1.14, r: 67.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# GPT-6 Sol (low)

OpenAI · Proprietary · Unknown · 컨텍스트 872k · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 68.0 t/s · TTFT 2.26s · 872k ctx` · 가성비 22.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.4 | +1.36 | 실측 | [[aa-omniscience]] 51.0%×1.0, [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 61.7 | +0.78 | 실측 | [[critpt]] 16.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 68.4 | +1.23 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 57.1 | +0.48 | 실측 | [[gdpval]] 34.0%×1.0 |
| 신뢰성 | 65.6 | +1.04 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | 62.6 | +0.84 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 67.1 | +1.14 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 67.2 | +1.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
