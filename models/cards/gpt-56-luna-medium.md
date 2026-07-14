---
type: Model
title: GPT-5.6 Luna (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: 0.87
output_speed_tps: 200.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.3, z: 1.31, r: 69.6, estimated: false }  # 전문 지식
  reasoning: { s: 50.1, z: 0.88, r: 63.2, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.3, r: 69.4, estimated: false }  # 코딩
  agentic: { s: 53.7, z: 0.69, r: 60.3, estimated: false }  # 에이전트
  trust: { s: 11.8, z: -0.76, r: 38.7, estimated: false }  # 신뢰성
  multimodal: { s: 88.4, z: 0.81, r: 62.1, estimated: false }  # 멀티모달
  long_context: { s: 86.8, z: 1.14, r: 67.1, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.98, r: 64.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-14
timestamp: 2026-07-14T00:00:00Z
---

# GPT-5.6 Luna (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.0 · 출력 $6.0 · 혼합 $0.87/1M · 200.0 t/s · TTFT 2.03s · 1M ctx` · 가성비 43.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.6 | +1.31 | 실측 | [[aa-omniscience]] 40.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 63.2 | +0.88 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 69.4 | +1.3 | 실측 | [[scicode]] 46.0%×1.0 |
| 에이전트 | 60.3 | +0.69 | 실측 | [[gdpval]] 39.0%×1.0, [[tau3-banking]] 15.0%×1.0 |
| 신뢰성 | 38.7 | -0.76 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 62.1 | +0.81 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 67.1 | +1.14 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 64.7 | +0.98 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
