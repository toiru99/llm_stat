---
type: Model
title: K2 Horizon 375B A23B
creator: Institute of Foundation Models
license: Open
intelligence_index: 31.0
price_blended_usd_1m: 0
output_speed_tps: 124.0
context_window: 524000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.0, z: 0.16, r: 52.4, estimated: false }  # 전문 지식
  reasoning: { s: 52.3, z: 0.72, r: 60.7, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.81, r: 62.1, estimated: false }  # 코딩
  agentic: { s: 64.7, z: 0.99, r: 64.8, estimated: false }  # 에이전트
  trust: { s: 74.2, z: 2.21, r: 83.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: 92.1, z: 1.57, r: 73.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Horizon 375B A23B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# K2 Horizon 375B A23B

Institute of Foundation Models · Open · Large · 컨텍스트 524k · 종합지능 **31.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 124.0 t/s · TTFT 12.54s · 524k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.4 | +0.16 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 60.7 | +0.72 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 62.1 | +0.81 | 실측 | [[scicode]] 43.0%×1.0 |
| 에이전트 | 64.8 | +0.99 | 실측 | [[gdpval]] 42.0%×1.0, [[tau3-banking]] 34.0%×1.0 |
| 신뢰성 | 83.2 | +2.21 | 실측 | [[aa-omniscience]] 74.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 73.6 | +1.57 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
