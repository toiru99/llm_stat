---
type: Model
title: MiniMax-M3.1-Flash
creator: MiniMax
license: Open
intelligence_index: 29.0
price_blended_usd_1m: 0.1005
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.3, z: 1.26, r: 69.0, estimated: false }  # 전문 지식
  reasoning: { s: 62.1, z: 0.73, r: 60.9, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.32, r: 69.8, estimated: false }  # 코딩
  agentic: { s: 78.5, z: 1.52, r: 72.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.5, z: 0.76, r: 61.5, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.13, r: 66.9, estimated: false }  # 긴문맥
  instruction: { s: 67.0, z: 0.58, r: 58.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M3.1-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-05
timestamp: 2026-11-05T00:00:00Z
---

# MiniMax-M3.1-Flash

MiniMax · Open · Large · 컨텍스트 1M · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1005/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 288.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.0 | +1.26 | 실측 | [[humanitys-last-exam]] 48.0%×0.3 |
| 추론 | 60.9 | +0.73 | 실측 | [[critpt]] 33.0%×1.0, [[humanitys-last-exam]] 48.0%×1.0 |
| 코딩 | 69.8 | +1.32 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 72.8 | +1.52 | 실측 | [[gdpval]] 1465.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.5 | +0.76 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 66.9 | +1.13 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 58.8 | +0.58 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
