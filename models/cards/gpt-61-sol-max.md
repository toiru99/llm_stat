---
type: Model
title: GPT-6.1 Sol (max)
creator: OpenAI
license: Proprietary
intelligence_index: 54.6087338138148
price_blended_usd_1m: 1.47
output_speed_tps: 49.10000757826655
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.8, z: 1.15, r: 67.2, estimated: false }  # 전문 지식
  reasoning: { s: 79.8, z: 2.2, r: 83.0, estimated: false }  # 추론
  coding: { s: 77.7, z: 1.29, r: 69.4, estimated: false }  # 코딩
  agentic: { s: 88.6, z: 1.53, r: 72.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 95.6, z: 1.24, r: 68.7, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.2, r: 68.0, estimated: false }  # 긴문맥
  instruction: { s: 79.4, z: 1.08, r: 66.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-6.1 Sol (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **54.6087338138148**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 49.10000757826655 t/s · TTFT 154.7055679319778s · 1M ctx` · 가성비 37.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.2 | +1.15 | 실측 | [[humanitys-last-exam]] 52.919369786839695%×0.3 |
| 추론 | 83.0 | +2.2 | 실측 | [[critpt]] 31.7142857142857%×1.0, [[humanitys-last-exam]] 52.919369786839695%×1.0 |
| 코딩 | 69.4 | +1.29 | 실측 | [[scicode]] 54.1666666666667%×1.0 |
| 에이전트 | 72.9 | +1.53 | 실측 | [[gdpval]] 1607.47%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 68.7 | +1.24 | 실측 | [[mmmu-pro]] 85.9537572254335%×1.0 |
| 긴문맥 | 68.0 | +1.2 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 66.2 | +1.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
