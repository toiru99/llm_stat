---
type: Model
title: GPT-5.6 Luna (low)
creator: OpenAI
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 0.174
output_speed_tps: 143.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.8, z: 1.06, r: 65.9, estimated: false }  # 전문 지식
  reasoning: { s: 44.2, z: 0.46, r: 56.9, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.22, r: 68.2, estimated: false }  # 코딩
  agentic: { s: 37.4, z: 0.06, r: 50.8, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.78, r: 38.4, estimated: false }  # 신뢰성
  multimodal: { s: 84.3, z: 0.6, r: 59.0, estimated: false }  # 멀티모달
  long_context: { s: 78.3, z: 0.88, r: 63.1, estimated: false }  # 긴문맥
  instruction: { s: 66.8, z: 0.54, r: 58.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# GPT-5.6 Luna (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 143.0 t/s · TTFT 1.7s · 1M ctx` · 가성비 195.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.9 | +1.06 | 실측 | [[aa-omniscience]] 40.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 56.9 | +0.46 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 68.2 | +1.22 | 실측 | [[scicode]] 46.0%×1.0 |
| 에이전트 | 50.8 | +0.06 | 실측 | [[gdpval]] 33.0%×1.0, [[tau3-banking]] 13.0%×1.0 |
| 신뢰성 | 38.4 | -0.78 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 59.0 | +0.6 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 63.1 | +0.88 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 58.1 | +0.54 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
