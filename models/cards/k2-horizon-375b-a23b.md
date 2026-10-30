---
type: Model
title: K2 Horizon 375B A23B
creator: Institute of Foundation Models
license: Open
intelligence_index: 18.0
price_blended_usd_1m: 0
output_speed_tps: 681.0
context_window: 524000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.3, z: 1.05, r: 65.8, estimated: false }  # 전문 지식
  reasoning: { s: 52.6, z: 0.31, r: 54.7, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.77, r: 61.5, estimated: false }  # 코딩
  agentic: { s: 69.9, z: 1.23, r: 68.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.13, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: 68.5, z: 0.66, r: 59.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Horizon 375B A23B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# K2 Horizon 375B A23B

Institute of Foundation Models · Open · Large · 컨텍스트 524k · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 681.0 t/s · TTFT 2.31s · 524k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.8 | +1.05 | 실측 | [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 54.7 | +0.31 | 실측 | [[critpt]] 12.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 61.5 | +0.77 | 실측 | [[scicode]] 43.0%×1.0 |
| 에이전트 | 68.4 | +1.23 | 실측 | [[gdpval]] 1365.0%×1.0, [[tau3-banking]] 34.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.0 | +1.13 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 59.9 | +0.66 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
