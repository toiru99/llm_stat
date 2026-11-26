---
type: Model
title: Beam 1.0
creator: Reflection
license: Open
intelligence_index: 17.6630199213872
price_blended_usd_1m: 0.228
output_speed_tps: 373.258667739593
context_window: 1048576
status: current
size_class: Large
params_b: 501
is_reasoning: true
radar:
  knowledge: { s: 45.9, z: -0.04, r: 49.4, estimated: false }  # 전문 지식
  reasoning: { s: 41.3, z: 0.31, r: 54.6, estimated: false }  # 추론
  coding: { s: 68.4, z: 0.92, r: 63.8, estimated: false }  # 코딩
  agentic: { s: 69.6, z: 0.79, r: 61.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 0.93, r: 63.9, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Beam 1.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Beam 1.0

Reflection · Open · Large(501B) · 컨텍스트 1M · 종합지능 **17.6630199213872**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.4 · 출력 $1.2 · 혼합 $0.228/1M · 373.258667739593 t/s · TTFT 0.697228480006512s · 1M ctx` · 가성비 77.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 49.4 | -0.04 | 실측 | [[humanitys-last-exam]] 34.6617%×0.3 |
| 추론 | 54.6 | +0.31 | 실측 | [[critpt]] 13.1429%×1.0, [[humanitys-last-exam]] 34.6617%×1.0 |
| 코딩 | 63.8 | +0.92 | 실측 | [[scicode]] 48.4954%×1.0 |
| 에이전트 | 61.9 | +0.79 | 실측 | [[gdpval]] 1177.08 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.9 | +0.93 | 실측 | [[aa-lcr]] 78%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
