---
type: Model
title: GPT-6 Luna (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 23.4508728089378
price_blended_usd_1m: 0.077
output_speed_tps: 117.27964162489
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 45.4, z: -0.06, r: 49.0, estimated: false }  # 전문 지식
  reasoning: { s: 47.1, z: 0.59, r: 58.9, estimated: false }  # 추론
  coding: { s: 73.7, z: 1.1, r: 66.5, estimated: false }  # 코딩
  agentic: { s: 78.3, z: 1.1, r: 66.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.0, z: 0.79, r: 61.9, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.0, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-6 Luna (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **23.4508728089378**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 117.27964162489 t/s · TTFT 17.4942368933447s · 1M ctx` · 가성비 304.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 49.0 | -0.06 | 실측 | [[humanitys-last-exam]] 34.3373%×0.3 |
| 추론 | 58.9 | +0.59 | 실측 | [[critpt]] 17.4286%×1.0, [[humanitys-last-exam]] 34.3373%×1.0 |
| 코딩 | 66.5 | +1.1 | 실측 | [[scicode]] 51.7361%×1.0 |
| 에이전트 | 66.5 | +1.1 | 실측 | [[gdpval]] 1374.09 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.9 | +0.79 | 실측 | [[mmmu-pro]] 79.711%×1.0 |
| 긴문맥 | 64.9 | +1.0 | 실측 | [[aa-lcr]] 80%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
