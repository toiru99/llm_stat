---
type: Model
title: Claude Haiku 5.5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 18.6180055310996
price_blended_usd_1m: 0.077
output_speed_tps: 221.74049265468
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 35.4, z: -0.55, r: 41.7, estimated: false }  # 전문 지식
  reasoning: { s: 30.5, z: -0.23, r: 46.5, estimated: false }  # 추론
  coding: { s: 69.5, z: 0.96, r: 64.4, estimated: false }  # 코딩
  agentic: { s: 67.6, z: 0.72, r: 60.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 81.2, z: 0.72, r: 60.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Claude Haiku 5.5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **18.6180055310996**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 221.74049265468 t/s · TTFT 7.21324252760742s · 1M ctx` · 가성비 241.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 41.7 | -0.55 | 실측 | [[humanitys-last-exam]] 27.0158%×0.3 |
| 추론 | 46.5 | -0.23 | 실측 | [[critpt]] 9.14286%×1.0, [[humanitys-last-exam]] 27.0158%×1.0 |
| 코딩 | 64.4 | +0.96 | 실측 | [[scicode]] 49.1898%×1.0 |
| 에이전트 | 60.8 | +0.72 | 실측 | [[gdpval]] 1130.34 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.8 | +0.72 | 실측 | [[aa-lcr]] 72%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
