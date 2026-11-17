---
type: Model
title: K2 Horizon 375B A23B
creator: Institute of Foundation Models
license: Open
intelligence_index: 17.8202731734027
price_blended_usd_1m: 0
output_speed_tps: 217.22231624579265
context_window: 524288
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.3, z: 1.07, r: 66.1, estimated: false }  # 전문 지식
  reasoning: { s: 48.2, z: 0.64, r: 59.5, estimated: false }  # 추론
  coding: { s: 59.2, z: 0.66, r: 60.0, estimated: false }  # 코딩
  agentic: { s: 72.2, z: 0.96, r: 64.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.1, r: 66.4, estimated: false }  # 긴문맥
  instruction: { s: 87.4, z: 1.41, r: 71.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Horizon 375B A23B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# K2 Horizon 375B A23B

Institute of Foundation Models · Open · Large · 컨텍스트 524k · 종합지능 **17.8202731734027**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 추론

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 217.22231624579265 t/s · TTFT 6.345300174963103s · 524k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.1 | +1.07 | 실측 | [[gpqa-diamond]] 87.27272727272731%×0.4, [[humanitys-last-exam]] 31.974050046339197%×0.3 |
| 추론 | 59.5 | +0.64 | 실측 | [[critpt]] 4.57142857142857%×1.0, [[gpqa-diamond]] 87.27272727272731%×1.0, [[humanitys-last-exam]] 31.974050046339197%×1.0 |
| 코딩 | 60.0 | +0.66 | 실측 | [[scicode]] 42.939814814814795%×1.0 |
| 에이전트 | 64.3 | +0.96 | 실측 | [[gdpval]] 1363.18%×1.0, [[tau3-banking]] 34.226804123711304%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.4 | +1.1 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 71.2 | +1.41 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
