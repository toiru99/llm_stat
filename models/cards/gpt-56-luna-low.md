---
type: Model
title: GPT-5.6 Luna (low)
creator: OpenAI
license: Proprietary
intelligence_index: 26.0
price_blended_usd_1m: 0.174
output_speed_tps: 107.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.1, z: 0.97, r: 64.6, estimated: false }  # 전문 지식
  reasoning: { s: 42.7, z: 0.37, r: 55.5, estimated: false }  # 추론
  coding: { s: 50.8, z: 0.65, r: 59.7, estimated: true }  # 코딩
  agentic: { s: 35.5, z: -0.07, r: 48.9, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.77, r: 38.5, estimated: false }  # 신뢰성
  multimodal: { s: 81.9, z: 0.58, r: 58.7, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.91, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: 74.0, z: 0.89, r: 63.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# GPT-5.6 Luna (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **26.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 107.0 t/s · TTFT 1.76s · 1M ctx` · 가성비 149.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.6 | +0.97 | 실측 | [[aa-omniscience]] 40.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 55.5 | +0.37 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 59.7 | +0.65 | 추정 | (추정) |
| 에이전트 | 48.9 | -0.07 | 실측 | [[gdpval]] 29.0%×1.0, [[tau3-banking]] 13.0%×1.0 |
| 신뢰성 | 38.5 | -0.77 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 58.7 | +0.58 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 63.6 | +0.91 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 63.3 | +0.89 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
