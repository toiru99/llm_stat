---
type: Model
title: Claude Fable 5.2 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 53.9249388799182
price_blended_usd_1m: 5.74
output_speed_tps: 108.473458503157
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.1, z: 1.62, r: 74.3, estimated: false }  # 전문 지식
  reasoning: { s: 81.3, z: 2.29, r: 84.4, estimated: false }  # 추론
  coding: { s: 83.6, z: 1.44, r: 71.5, estimated: false }  # 코딩
  agentic: { s: 85.9, z: 1.37, r: 70.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 0.99, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.2 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Claude Fable 5.2 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **53.9249388799182**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $8.0 · 출력 $40.0 · 혼합 $5.74/1M · 108.473458503157 t/s · TTFT 8.09292097542341s · 1M ctx` · 가성비 9.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 74.3 | +1.62 | 실측 | [[humanitys-last-exam]] 59.7312%×0.3 |
| 추론 | 84.4 | +2.29 | 실측 | [[critpt]] 29.4286%×1.0, [[humanitys-last-exam]] 59.7312%×1.0 |
| 코딩 | 71.5 | +1.44 | 실측 | [[scicode]] 57.7546%×1.0 |
| 에이전트 | 70.5 | +1.37 | 실측 | [[gdpval]] 1546.01 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.9 | +0.99 | 실측 | [[aa-lcr]] 80%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
