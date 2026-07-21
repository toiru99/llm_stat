---
type: Model
title: GPT-5.6 Terra (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 46.0
price_blended_usd_1m: None
output_speed_tps: 135.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.2, z: 1.62, r: 74.4, estimated: false }  # 전문 지식
  reasoning: { s: 68.1, z: 1.8, r: 77.1, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.56, r: 73.4, estimated: false }  # 코딩
  agentic: { s: 67.6, z: 1.21, r: 68.2, estimated: false }  # 에이전트
  trust: { s: 12.9, z: -0.7, r: 39.5, estimated: false }  # 신뢰성
  multimodal: { s: 89.9, z: 0.87, r: 63.1, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 70.4, z: 0.74, r: 61.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# GPT-5.6 Terra (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **46.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $None/1M · 135.0 t/s · TTFT 1.29s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.4 | +1.62 | 실측 | [[aa-omniscience]] 44.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 77.1 | +1.8 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 73.4 | +1.56 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 68.2 | +1.21 | 실측 | [[gdpval]] 45.0%×1.0, [[tau2-bench]] 73.0%×1.0, [[tau3-banking]] 19.0%×1.0 |
| 신뢰성 | 39.5 | -0.7 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | 63.1 | +0.87 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 61.1 | +0.74 | 실측 | [[ifbench]] 62.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
