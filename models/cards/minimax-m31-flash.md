---
type: Model
title: MiniMax-M3.1-Flash
creator: MiniMax
license: Open
intelligence_index: 29.0
price_blended_usd_1m: 0.1005
output_speed_tps: 119.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.3, z: 1.28, r: 69.1, estimated: false }  # 전문 지식
  reasoning: { s: 60.7, z: 0.68, r: 60.2, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.33, r: 69.9, estimated: false }  # 코딩
  agentic: { s: 78.5, z: 1.52, r: 72.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.7, z: 0.78, r: 61.7, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.13, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: 67.5, z: 0.62, r: 59.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M3.1-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# MiniMax-M3.1-Flash

MiniMax · Open · Large · 컨텍스트 1M · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1005/1M · 119.0 t/s · TTFT 1.28s · 1M ctx` · 가성비 288.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.1 | +1.28 | 실측 | [[humanitys-last-exam]] 48.0%×0.3 |
| 추론 | 60.2 | +0.68 | 실측 | [[critpt]] 31.0%×1.0, [[humanitys-last-exam]] 48.0%×1.0 |
| 코딩 | 69.9 | +1.33 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 72.8 | +1.52 | 실측 | [[gdpval]] 1465.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.7 | +0.78 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 67.0 | +1.13 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 59.3 | +0.62 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
