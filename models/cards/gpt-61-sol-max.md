---
type: Model
title: GPT-6.1 Sol (max)
creator: OpenAI
license: Proprietary
intelligence_index: 55.0
price_blended_usd_1m: 1.47
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.8, z: 1.14, r: 67.1, estimated: false }  # 전문 지식
  reasoning: { s: 80.8, z: 1.83, r: 77.4, estimated: false }  # 추론
  coding: { s: 77.8, z: 1.34, r: 70.0, estimated: false }  # 코딩
  agentic: { s: 86.2, z: 1.73, r: 76.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.24, r: 68.6, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.29, r: 69.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# GPT-6.1 Sol (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **55.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 37.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.1 | +1.14 | 실측 | [[humanitys-last-exam]] 52.9%×0.3 |
| 추론 | 77.4 | +1.83 | 실측 | [[critpt]] 69.5%×1.0, [[humanitys-last-exam]] 52.9%×1.0 |
| 코딩 | 70.0 | +1.34 | 실측 | [[scicode]] 54.2%×1.0 |
| 에이전트 | 76.0 | +1.73 | 실측 | [[gdpval]] 1608.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 68.6 | +1.24 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 69.4 | +1.29 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
