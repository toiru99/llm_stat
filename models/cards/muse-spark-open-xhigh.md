---
type: Model
title: Muse Spark Open (xhigh)
creator: Meta
license: Open
intelligence_index: 25.0
price_blended_usd_1m: 0.78
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.7, z: 1.48, r: 72.1, estimated: false }  # 전문 지식
  reasoning: { s: 67.8, z: 1.01, r: 65.1, estimated: false }  # 추론
  coding: { s: 85.8, z: 1.62, r: 74.3, estimated: false }  # 코딩
  agentic: { s: 75.1, z: 1.4, r: 70.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 89.2, z: 0.9, r: 63.5, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 1.07, r: 66.0, estimated: false }  # 긴문맥
  instruction: { s: 74.7, z: 0.92, r: 63.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark Open (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Muse Spark Open (xhigh)

Meta · Open · Large · 컨텍스트 1M · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 32.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.1 | +1.48 | 실측 | [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 43.9%×0.3 |
| 추론 | 65.1 | +1.01 | 실측 | [[critpt]] 29.5%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 43.9%×1.0 |
| 코딩 | 74.3 | +1.62 | 실측 | [[scicode]] 58.4%×1.0 |
| 에이전트 | 70.9 | +1.4 | 실측 | [[gdpval]] 1401.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.5 | +0.9 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 66.0 | +1.07 | 실측 | [[aa-lcr]] 78.3%×1.0 |
| 지시 따르기 | 63.9 | +0.92 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
