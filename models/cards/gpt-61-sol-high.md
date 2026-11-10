---
type: Model
title: GPT-6.1 Sol (high)
creator: OpenAI
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: 1.47
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 68.7, z: 1.05, r: 65.8, estimated: false }  # 전문 지식
  reasoning: { s: 79.1, z: 1.76, r: 76.4, estimated: false }  # 추론
  coding: { s: 80.4, z: 1.43, r: 71.5, estimated: false }  # 코딩
  agentic: { s: 81.4, z: 1.58, r: 73.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 94.6, z: 1.17, r: 67.5, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.19, r: 67.9, estimated: false }  # 긴문맥
  instruction: { s: 81.6, z: 1.24, r: 68.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# GPT-6.1 Sol (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 34.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.8 | +1.05 | 실측 | [[humanitys-last-exam]] 51.4%×0.3 |
| 추론 | 76.4 | +1.76 | 실측 | [[critpt]] 68.5%×1.0, [[humanitys-last-exam]] 51.4%×1.0 |
| 코딩 | 71.5 | +1.43 | 실측 | [[scicode]] 55.8%×1.0 |
| 에이전트 | 73.7 | +1.58 | 실측 | [[gdpval]] 1520.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.5 | +1.17 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 67.9 | +1.19 | 실측 | [[aa-lcr]] 82.3%×1.0 |
| 지시 따르기 | 68.6 | +1.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
