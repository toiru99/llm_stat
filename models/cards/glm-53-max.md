---
type: Model
title: GLM-5.3 (max)
creator: Z AI
license: Proprietary
intelligence_index: 60.0
price_blended_usd_1m: 0.902
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: 753
is_reasoning: true
radar:
  knowledge: { s: 66.4, z: 1.19, r: 67.8, estimated: false }  # 전문 지식
  reasoning: { s: 77.3, z: 2.02, r: 80.4, estimated: false }  # 추론
  coding: { s: 93.3, z: 1.83, r: 77.4, estimated: false }  # 코딩
  agentic: { s: 96.0, z: 2.28, r: 84.2, estimated: false }  # 에이전트
  trust: { s: 79.1, z: 2.19, r: 82.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.6, z: 1.23, r: 68.4, estimated: false }  # 긴문맥
  instruction: { s: 74.9, z: 0.84, r: 62.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.3 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# GLM-5.3 (max)

Z AI · Proprietary · Large(753B) · 컨텍스트 1M · 종합지능 **60.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.902/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 66.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.8 | +1.19 | 실측 | [[aa-omniscience]] 34.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 80.4 | +2.02 | 실측 | [[critpt]] 19.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 77.4 | +1.83 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 84.2 | +2.28 | 실측 | [[gdpval]] 63.0%×1.0, [[tau3-banking]] 50.0%×1.0 |
| 신뢰성 | 82.8 | +2.19 | 실측 | [[aa-omniscience]] 70.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.4 | +1.23 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 62.6 | +0.84 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
