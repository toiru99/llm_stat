---
type: Model
title: Muse Wonder (max)
creator: Meta
license: Proprietary
intelligence_index: 43.5748225998431
price_blended_usd_1m: 2.94
output_speed_tps: 121.29505537618365
context_window: 1048576
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.0, z: 0.96, r: 64.4, estimated: false }  # 전문 지식
  reasoning: { s: 73.1, z: 1.87, r: 78.0, estimated: false }  # 추론
  coding: { s: 87.8, z: 1.64, r: 74.5, estimated: false }  # 코딩
  agentic: { s: 95.8, z: 1.77, r: 76.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: 78.2, z: 1.03, r: 65.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Wonder (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Muse Wonder (max)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **43.5748225998431**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 121.29505537618365 t/s · TTFT 19.149513892008322s · 1M ctx` · 가성비 14.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.4 | +0.96 | 실측 | [[humanitys-last-exam]] 50.0926784059314%×0.3 |
| 추론 | 78.0 | +1.87 | 실측 | [[critpt]] 28.2857142857143%×1.0, [[humanitys-last-exam]] 50.0926784059314%×1.0 |
| 코딩 | 74.5 | +1.64 | 실측 | [[scicode]] 60.300925925925895%×1.0 |
| 에이전트 | 76.6 | +1.77 | 실측 | [[gdpval]] 1770.34%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 80.6666666666667%×1.0 |
| 지시 따르기 | 65.4 | +1.03 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
