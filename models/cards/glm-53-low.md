---
type: Model
title: GLM-5.3 (low)
creator: Z AI
license: Open
intelligence_index: 34.0
price_blended_usd_1m: 0.902
output_speed_tps: 89.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.9, z: 0.45, r: 56.7, estimated: false }  # 전문 지식
  reasoning: { s: 52.7, z: 0.7, r: 60.5, estimated: false }  # 추론
  coding: { s: 58.3, z: 0.69, r: 60.3, estimated: false }  # 코딩
  agentic: { s: 71.4, z: 1.27, r: 69.0, estimated: false }  # 에이전트
  trust: { s: 35.1, z: 0.35, r: 55.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 0.88, r: 63.1, estimated: false }  # 긴문맥
  instruction: { s: 69.3, z: 0.63, r: 59.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.3 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# GLM-5.3 (low)

Z AI · Open · Large · 컨텍스트 1M · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.902/1M · 89.0 t/s · TTFT 2.83s · 1M ctx` · 가성비 37.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.7 | +0.45 | 실측 | [[aa-omniscience]] 34.0%×1.0, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 60.5 | +0.7 | 실측 | [[critpt]] 15.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 60.3 | +0.69 | 실측 | [[scicode]] 42.0%×1.0 |
| 에이전트 | 69.0 | +1.27 | 실측 | [[gdpval]] 1334.0%×1.0 |
| 신뢰성 | 55.3 | +0.35 | 실측 | [[aa-omniscience]] 36.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.1 | +0.88 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 59.5 | +0.63 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
