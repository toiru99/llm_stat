---
type: Model
title: GPT-5.6 Luna (high)
creator: OpenAI
license: Proprietary
intelligence_index: 46.0
price_blended_usd_1m: None
output_speed_tps: 155.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.9, z: 1.45, r: 71.7, estimated: false }  # 전문 지식
  reasoning: { s: 68.9, z: 1.74, r: 76.1, estimated: false }  # 추론
  coding: { s: 85.0, z: 1.59, r: 73.9, estimated: false }  # 코딩
  agentic: { s: 68.6, z: 1.25, r: 68.7, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.84, r: 37.4, estimated: false }  # 신뢰성
  multimodal: { s: 90.0, z: 0.89, r: 63.3, estimated: false }  # 멀티모달
  long_context: { s: 90.8, z: 1.23, r: 68.4, estimated: false }  # 긴문맥
  instruction: { s: 78.8, z: 1.06, r: 65.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# GPT-5.6 Luna (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **46.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.0 · 출력 $6.0 · 혼합 $None/1M · 155.0 t/s · TTFT 11.26s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.7 | +1.45 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 76.1 | +1.74 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 73.9 | +1.59 | 실측 | [[scicode]] 51.0%×1.0 |
| 에이전트 | 68.7 | +1.25 | 실측 | [[gdpval]] 48.0%×1.0, [[tau3-banking]] 22.0%×1.0 |
| 신뢰성 | 37.4 | -0.84 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 63.3 | +0.89 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 68.4 | +1.23 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 65.9 | +1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
