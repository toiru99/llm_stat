---
type: Model
title: GPT-5.6 Luna (high)
creator: OpenAI
license: Proprietary
intelligence_index: 47.0
price_blended_usd_1m: 0.174
output_speed_tps: 141.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.0, z: 1.36, r: 70.4, estimated: false }  # 전문 지식
  reasoning: { s: 68.4, z: 1.59, r: 73.9, estimated: false }  # 추론
  coding: { s: 85.0, z: 1.49, r: 72.3, estimated: false }  # 코딩
  agentic: { s: 60.3, z: 0.89, r: 63.4, estimated: false }  # 에이전트
  trust: { s: 7.0, z: -0.9, r: 36.4, estimated: false }  # 신뢰성
  multimodal: { s: 90.0, z: 0.84, r: 62.7, estimated: false }  # 멀티모달
  long_context: { s: 89.2, z: 1.16, r: 67.3, estimated: false }  # 긴문맥
  instruction: { s: 84.1, z: 1.21, r: 68.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# GPT-5.6 Luna (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **47.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 141.0 t/s · TTFT 11.21s · 1M ctx` · 가성비 270.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.4 | +1.36 | 실측 | [[aa-omniscience]] 42.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 73.9 | +1.59 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 72.3 | +1.49 | 실측 | [[scicode]] 51.0%×1.0 |
| 에이전트 | 63.4 | +0.89 | 실측 | [[gdpval]] 48.0%×1.0, [[tau3-banking]] 25.0%×1.0 |
| 신뢰성 | 36.4 | -0.9 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 62.7 | +0.84 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 67.3 | +1.16 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 68.2 | +1.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
