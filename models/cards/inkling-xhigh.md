---
type: Model
title: Inkling (xhigh)
creator: Thinking Machines
license: Open
intelligence_index: 25.0
price_blended_usd_1m: 0.724
output_speed_tps: 169.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.1, z: 1.14, r: 67.0, estimated: false }  # 전문 지식
  reasoning: { s: 52.3, z: 0.72, r: 60.8, estimated: false }  # 추론
  coding: { s: 66.7, z: 1.04, r: 65.6, estimated: false }  # 코딩
  agentic: { s: 49.3, z: 0.41, r: 56.1, estimated: false }  # 에이전트
  trust: { s: 30.9, z: 0.2, r: 53.0, estimated: false }  # 신뢰성
  multimodal: { s: 79.5, z: 0.4, r: 56.1, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 82.7, z: 1.18, r: 67.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# Inkling (xhigh)

Thinking Machines · Open · Large · 컨텍스트 1M · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.0 · 출력 $4.05 · 혼합 $0.724/1M · 169.0 t/s · TTFT 1.86s · 1M ctx` · 가성비 34.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.0 | +1.14 | 실측 | [[aa-omniscience]] 42.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 60.8 | +0.72 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 65.6 | +1.04 | 실측 | [[scicode]] 47.0%×1.0 |
| 에이전트 | 56.1 | +0.41 | 실측 | [[gdpval]] 28.0%×1.0, [[tau3-banking]] 29.0%×1.0 |
| 신뢰성 | 53.0 | +0.2 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | 56.1 | +0.4 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 67.7 | +1.18 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
