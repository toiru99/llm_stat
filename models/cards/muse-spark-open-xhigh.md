---
type: Model
title: Muse Spark Open (xhigh)
creator: Meta
license: Open
intelligence_index: 24.8815868992913
price_blended_usd_1m: 0.78
output_speed_tps: 185.45744071725736
context_window: 1048576
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.4, z: 1.47, r: 72.0, estimated: false }  # 전문 지식
  reasoning: { s: 63.9, z: 1.41, r: 71.2, estimated: false }  # 추론
  coding: { s: 84.8, z: 1.53, r: 73.0, estimated: false }  # 코딩
  agentic: { s: 79.5, z: 1.21, r: 68.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 88.9, z: 0.9, r: 63.5, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 1.04, r: 65.6, estimated: false }  # 긴문맥
  instruction: { s: 77.6, z: 1.0, r: 65.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark Open (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Muse Spark Open (xhigh)

Meta · Open · Large · 컨텍스트 1M · 종합지능 **24.8815868992913**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 185.45744071725736 t/s · TTFT 1.0022930692367726s · 1M ctx` · 가성비 31.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.0 | +1.47 | 실측 | [[gpqa-diamond]] 88.98989898989899%×0.4, [[humanitys-last-exam]] 43.8832252085264%×0.3 |
| 추론 | 71.2 | +1.41 | 실측 | [[critpt]] 14.857142857142899%×1.0, [[gpqa-diamond]] 88.98989898989899%×1.0, [[humanitys-last-exam]] 43.8832252085264%×1.0 |
| 코딩 | 73.0 | +1.53 | 실측 | [[scicode]] 58.449074074074105%×1.0 |
| 에이전트 | 68.1 | +1.21 | 실측 | [[gdpval]] 1401.12%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.5 | +0.9 | 실측 | [[mmmu-pro]] 80.9248554913295%×1.0 |
| 긴문맥 | 65.6 | +1.04 | 실측 | [[aa-lcr]] 78.3333333333333%×1.0 |
| 지시 따르기 | 65.0 | +1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
