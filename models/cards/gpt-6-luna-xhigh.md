---
type: Model
title: GPT-6 Luna (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 23.4508728089378
price_blended_usd_1m: 0.077
output_speed_tps: 99.71305855760532
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 45.4, z: -0.08, r: 48.8, estimated: false }  # 전문 지식
  reasoning: { s: 47.1, z: 0.58, r: 58.7, estimated: false }  # 추론
  coding: { s: 73.7, z: 1.16, r: 67.3, estimated: false }  # 코딩
  agentic: { s: 78.3, z: 1.17, r: 67.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.2, z: 0.82, r: 62.3, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.1, r: 66.4, estimated: false }  # 긴문맥
  instruction: { s: 56.9, z: 0.14, r: 52.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-6 Luna (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **23.4508728089378**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 99.71305855760532 t/s · TTFT 16.6817612886046s · 1M ctx` · 가성비 304.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.8 | -0.08 | 실측 | [[humanitys-last-exam]] 34.3373493975904%×0.3 |
| 추론 | 58.7 | +0.58 | 실측 | [[critpt]] 17.4285714285714%×1.0, [[humanitys-last-exam]] 34.3373493975904%×1.0 |
| 코딩 | 67.3 | +1.16 | 실측 | [[scicode]] 51.73611111111111%×1.0 |
| 에이전트 | 67.5 | +1.17 | 실측 | [[gdpval]] 1374.29%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.3 | +0.82 | 실측 | [[mmmu-pro]] 79.7109826589595%×1.0 |
| 긴문맥 | 66.4 | +1.1 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 52.0 | +0.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
