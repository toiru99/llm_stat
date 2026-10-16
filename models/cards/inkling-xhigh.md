---
type: Model
title: Inkling (xhigh)
creator: Thinking Machines
license: Open
intelligence_index: 25.0
price_blended_usd_1m: 0.724
output_speed_tps: 180.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.1, z: 1.13, r: 66.9, estimated: false }  # 전문 지식
  reasoning: { s: 52.1, z: 0.7, r: 60.5, estimated: false }  # 추론
  coding: { s: 66.7, z: 1.0, r: 65.0, estimated: false }  # 코딩
  agentic: { s: 49.8, z: 0.4, r: 55.9, estimated: false }  # 에이전트
  trust: { s: 30.9, z: 0.18, r: 52.6, estimated: false }  # 신뢰성
  multimodal: { s: 79.5, z: 0.4, r: 55.9, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.03, r: 65.5, estimated: false }  # 긴문맥
  instruction: { s: 80.8, z: 1.1, r: 66.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-16
timestamp: 2026-10-16T00:00:00Z
---

# Inkling (xhigh)

Thinking Machines · Open · Large · 컨텍스트 1M · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.0 · 출력 $4.05 · 혼합 $0.724/1M · 180.0 t/s · TTFT 1.85s · 1M ctx` · 가성비 34.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.9 | +1.13 | 실측 | [[aa-omniscience]] 42.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 60.5 | +0.7 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 65.0 | +1.0 | 실측 | [[scicode]] 47.0%×1.0 |
| 에이전트 | 55.9 | +0.4 | 실측 | [[gdpval]] 29.0%×1.0, [[tau3-banking]] 29.0%×1.0 |
| 신뢰성 | 52.6 | +0.18 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | 55.9 | +0.4 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 65.5 | +1.03 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 66.5 | +1.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
