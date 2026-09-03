---
type: Model
title: GPT-5.6 Luna (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: 0.174
output_speed_tps: 113.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.7, z: 1.43, r: 71.5, estimated: false }  # 전문 지식
  reasoning: { s: 73.5, z: 1.92, r: 78.8, estimated: false }  # 추론
  coding: { s: 80.6, z: 1.41, r: 71.2, estimated: false }  # 코딩
  agentic: { s: 65.4, z: 1.08, r: 66.3, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.87, r: 36.9, estimated: false }  # 신뢰성
  multimodal: { s: 90.1, z: 0.97, r: 64.5, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 80.7, z: 1.16, r: 67.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# GPT-5.6 Luna (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 113.0 t/s · TTFT 63.82s · 1M ctx` · 가성비 287.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.5 | +1.43 | 실측 | [[aa-omniscience]] 42.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 78.8 | +1.92 | 실측 | [[critpt]] 21.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 71.2 | +1.41 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 66.3 | +1.08 | 실측 | [[gdpval]] 51.0%×1.0, [[tau3-banking]] 29.0%×1.0 |
| 신뢰성 | 36.9 | -0.87 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 64.5 | +0.97 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 67.4 | +1.16 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
