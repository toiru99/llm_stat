---
type: Model
title: MiniMax-M3
creator: MiniMax
license: Open
intelligence_index: 18.8789083859255
price_blended_usd_1m: 0.222
output_speed_tps: 110.34603544666386
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.1, z: 1.45, r: 71.8, estimated: false }  # 전문 지식
  reasoning: { s: 52.8, z: 0.86, r: 62.9, estimated: false }  # 추론
  coding: { s: 65.5, z: 0.88, r: 63.2, estimated: false }  # 코딩
  agentic: { s: 64.1, z: 0.68, r: 60.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.7, z: 0.74, r: 61.1, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.2, r: 68.0, estimated: false }  # 긴문맥
  instruction: { s: 99.3, z: 1.91, r: 78.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# MiniMax-M3

MiniMax · Open · Large · 컨텍스트 1M · 종합지능 **18.8789083859255**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 110.34603544666386 t/s · TTFT 1.7814960695099946s · 1M ctx` · 가성비 85.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.8 | +1.45 | 실측 | [[gpqa-diamond]] 92.9292929292929%×0.4, [[humanitys-last-exam]] 38.9712696941613%×0.3 |
| 추론 | 62.9 | +0.86 | 실측 | [[critpt]] 3.7142857142857104%×1.0, [[gpqa-diamond]] 92.9292929292929%×1.0, [[humanitys-last-exam]] 38.9712696941613%×1.0 |
| 코딩 | 63.2 | +0.88 | 실측 | [[scicode]] 47.1064814814815%×1.0, [[terminal-bench]] 42.4242424242424%×0.5 |
| 에이전트 | 60.1 | +0.68 | 실측 | [[gdpval]] 1249.67%×1.0, [[tau2-bench]] 88.8888888888889%×1.0, [[tau3-banking]] 15.2577319587629%×1.0, [[terminal-bench]] 42.4242424242424%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.1 | +0.74 | 실측 | [[mmmu-pro]] 78.5549132947977%×1.0 |
| 긴문맥 | 68.0 | +1.2 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 78.6 | +1.91 | 실측 | [[ifbench]] 82.85714285714289%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
