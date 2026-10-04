---
type: Model
title: GPT-5.6 Terra (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 21.0
price_blended_usd_1m: 1.74
output_speed_tps: 84.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 53.2, z: 0.49, r: 57.4, estimated: false }  # 전문 지식
  reasoning: { s: 32.8, z: -0.17, r: 47.5, estimated: false }  # 추론
  coding: { s: 63.3, z: 0.92, r: 63.8, estimated: false }  # 코딩
  agentic: { s: 37.3, z: -0.06, r: 49.2, estimated: false }  # 에이전트
  trust: { s: 3.1, z: -1.09, r: 33.7, estimated: false }  # 신뢰성
  multimodal: { s: 71.2, z: -0.01, r: 49.9, estimated: false }  # 멀티모달
  long_context: { s: 66.3, z: 0.44, r: 56.6, estimated: false }  # 긴문맥
  instruction: { s: 56.8, z: 0.1, r: 51.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# GPT-5.6 Terra (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **21.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 84.0 t/s · TTFT 0.81s · 1M ctx` · 가성비 12.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.4 | +0.49 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 47.5 | -0.17 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 63.8 | +0.92 | 실측 | [[scicode]] 45.0%×1.0 |
| 에이전트 | 49.2 | -0.06 | 실측 | [[gdpval]] 29.0%×1.0, [[tau3-banking]] 16.0%×1.0 |
| 신뢰성 | 33.7 | -1.09 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | 49.9 | -0.01 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 56.6 | +0.44 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 51.6 | +0.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
