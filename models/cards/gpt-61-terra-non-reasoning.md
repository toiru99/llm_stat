---
type: Model
title: GPT-6.1 Terra (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 30.465393816852
price_blended_usd_1m: 0.735
output_speed_tps: 61.8788537806619
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.4, z: -0.94, r: 35.9, estimated: false }  # 전문 지식
  reasoning: { s: 20.5, z: -0.73, r: 39.1, estimated: false }  # 추론
  coding: { s: 67.2, z: 0.88, r: 63.2, estimated: false }  # 코딩
  agentic: { s: 74.4, z: 0.96, r: 64.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.0, z: 0.54, r: 58.1, estimated: false }  # 멀티모달
  long_context: { s: 76.3, z: 0.57, r: 58.5, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-6.1 Terra (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **30.465393816852**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · 61.8788537806619 t/s · TTFT 2.27766307037698s · 1M ctx` · 가성비 41.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 35.9 | -0.94 | 실측 | [[humanitys-last-exam]] 21.1307%×0.3 |
| 추론 | 39.1 | -0.73 | 실측 | [[critpt]] 4.85714%×1.0, [[humanitys-last-exam]] 21.1307%×1.0 |
| 코딩 | 63.2 | +0.88 | 실측 | [[scicode]] 47.8009%×1.0 |
| 에이전트 | 64.5 | +0.96 | 실측 | [[gdpval]] 1286.33 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.1 | +0.54 | 실측 | [[mmmu-pro]] 76.0116%×1.0 |
| 긴문맥 | 58.5 | +0.57 | 실측 | [[aa-lcr]] 67.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
