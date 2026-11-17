---
type: Model
title: Claude Haiku 5.5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 34.6387759486628
price_blended_usd_1m: 0.077
output_speed_tps: 230.9400945484707
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.8, z: 0.47, r: 57.1, estimated: false }  # 전문 지식
  reasoning: { s: 60.0, z: 1.22, r: 68.3, estimated: false }  # 추론
  coding: { s: 73.7, z: 1.16, r: 67.3, estimated: false }  # 코딩
  agentic: { s: 84.9, z: 1.4, r: 70.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 1.04, r: 65.6, estimated: false }  # 긴문맥
  instruction: { s: 66.0, z: 0.52, r: 57.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude Haiku 5.5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **34.6387759486628**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 230.9400945484707 t/s · TTFT 47.19159742784992s · 1M ctx` · 가성비 449.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.1 | +0.47 | 실측 | [[humanitys-last-exam]] 42.678405931418%×0.3 |
| 추론 | 68.3 | +1.22 | 실측 | [[critpt]] 22.5714285714286%×1.0, [[humanitys-last-exam]] 42.678405931418%×1.0 |
| 코딩 | 67.3 | +1.16 | 실측 | [[scicode]] 51.73611111111111%×1.0 |
| 에이전트 | 70.9 | +1.4 | 실측 | [[gdpval]] 1523.15%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.6 | +1.04 | 실측 | [[aa-lcr]] 78.3333333333333%×1.0 |
| 지시 따르기 | 57.8 | +0.52 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
