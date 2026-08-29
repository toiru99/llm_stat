---
type: Model
title: GPT-5.6 Luna (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 39.0
price_blended_usd_1m: 0.174
output_speed_tps: 109.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.3, z: 1.27, r: 69.1, estimated: false }  # 전문 지식
  reasoning: { s: 50.4, z: 0.81, r: 62.1, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.22, r: 68.3, estimated: false }  # 코딩
  agentic: { s: 46.4, z: 0.38, r: 55.6, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.8, r: 38.1, estimated: false }  # 신뢰성
  multimodal: { s: 87.1, z: 0.79, r: 61.9, estimated: false }  # 멀티모달
  long_context: { s: 86.7, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 75.3, z: 0.97, r: 64.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# GPT-5.6 Luna (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **39.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 109.0 t/s · TTFT 2.95s · 1M ctx` · 가성비 224.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.1 | +1.27 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 26.0%×0.3 |
| 추론 | 62.1 | +0.81 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 26.0%×1.0 |
| 코딩 | 68.3 | +1.22 | 실측 | [[scicode]] 46.0%×1.0 |
| 에이전트 | 55.6 | +0.38 | 실측 | [[gdpval]] 38.0%×1.0, [[tau3-banking]] 18.0%×1.0 |
| 신뢰성 | 38.1 | -0.8 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 61.9 | +0.79 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 64.5 | +0.97 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
