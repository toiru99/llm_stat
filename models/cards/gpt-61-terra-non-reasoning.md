---
type: Model
title: GPT-6.1 Terra (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 30.0
price_blended_usd_1m: 0.735
output_speed_tps: 90.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 33.3, z: -0.71, r: 39.4, estimated: false }  # 전문 지식
  reasoning: { s: 39.6, z: -0.27, r: 45.9, estimated: false }  # 추론
  coding: { s: 68.3, z: 1.05, r: 65.7, estimated: false }  # 코딩
  agentic: { s: 68.9, z: 1.19, r: 67.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 83.6, z: 0.57, r: 58.6, estimated: false }  # 멀티모달
  long_context: { s: 76.4, z: 0.73, r: 60.9, estimated: false }  # 긴문맥
  instruction: { s: 44.4, z: -0.35, r: 44.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# GPT-6.1 Terra (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · 90.0 t/s · TTFT 0.96s · 1M ctx` · 가성비 40.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.4 | -0.71 | 실측 | [[humanitys-last-exam]] 21.0%×0.3 |
| 추론 | 45.9 | -0.27 | 실측 | [[critpt]] 33.0%×1.0, [[humanitys-last-exam]] 21.0%×1.0 |
| 코딩 | 65.7 | +1.05 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 67.9 | +1.19 | 실측 | [[gdpval]] 1286.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.6 | +0.57 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 60.9 | +0.73 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 44.8 | -0.35 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
