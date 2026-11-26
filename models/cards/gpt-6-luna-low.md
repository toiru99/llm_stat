---
type: Model
title: GPT-6 Luna (low)
creator: OpenAI
license: Proprietary
intelligence_index: 9.66610812336462
price_blended_usd_1m: 0.077
output_speed_tps: 99.8878495000427
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 26.2, z: -1.0, r: 35.0, estimated: false }  # 전문 지식
  reasoning: { s: 16.7, z: -0.92, r: 36.2, estimated: false }  # 추론
  coding: { s: 65.7, z: 0.83, r: 62.5, estimated: false }  # 코딩
  agentic: { s: 63.6, z: 0.58, r: 58.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.0, z: 0.54, r: 58.1, estimated: false }  # 멀티모달
  long_context: { s: 83.5, z: 0.79, r: 61.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-6 Luna (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **9.66610812336462**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 99.8878495000427 t/s · TTFT 2.22526362857167s · 1M ctx` · 가성비 125.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 35.0 | -1.0 | 실측 | [[humanitys-last-exam]] 20.2502%×0.3 |
| 추론 | 36.2 | -0.92 | 실측 | [[critpt]] 2.57143%×1.0, [[humanitys-last-exam]] 20.2502%×1.0 |
| 코딩 | 62.5 | +0.83 | 실측 | [[scicode]] 46.875%×1.0 |
| 에이전트 | 58.7 | +0.58 | 실측 | [[gdpval]] 1040.73 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.1 | +0.54 | 실측 | [[mmmu-pro]] 75.9538%×1.0 |
| 긴문맥 | 61.8 | +0.79 | 실측 | [[aa-lcr]] 74%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
