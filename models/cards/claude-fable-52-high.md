---
type: Model
title: Claude Fable 5.2 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 61.8723835945334
price_blended_usd_1m: 5.74
output_speed_tps: 110.587203580118
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.9, z: 2.05, r: 80.7, estimated: false }  # 전문 지식
  reasoning: { s: 90.5, z: 2.75, r: 91.2, estimated: false }  # 추론
  coding: { s: 86.5, z: 1.53, r: 73.0, estimated: false }  # 코딩
  agentic: { s: 93.5, z: 1.64, r: 74.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.11, r: 66.7, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.2 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Claude Fable 5.2 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **61.8723835945334**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $8.0 · 출력 $40.0 · 혼합 $5.74/1M · 110.587203580118 t/s · TTFT 29.8998653836014s · 1M ctx` · 가성비 10.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 80.7 | +2.05 | 실측 | [[humanitys-last-exam]] 66.1724%×0.3 |
| 추론 | 91.2 | +2.75 | 실측 | [[critpt]] 32.8571%×1.0, [[humanitys-last-exam]] 66.1724%×1.0 |
| 코딩 | 73.0 | +1.53 | 실측 | [[scicode]] 59.4907%×1.0 |
| 에이전트 | 74.5 | +1.64 | 실측 | [[gdpval]] 1718.56 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.7 | +1.11 | 실측 | [[aa-lcr]] 83.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
