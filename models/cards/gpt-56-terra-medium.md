---
type: Model
title: GPT-5.6 Terra (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 46.0
price_blended_usd_1m: None
output_speed_tps: 115.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.2, z: 1.56, r: 73.4, estimated: false }  # 전문 지식
  reasoning: { s: 68.1, z: 1.7, r: 75.5, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.52, r: 72.9, estimated: false }  # 코딩
  agentic: { s: 65.8, z: 1.14, r: 67.1, estimated: false }  # 에이전트
  trust: { s: 12.6, z: -0.73, r: 39.1, estimated: false }  # 신뢰성
  multimodal: { s: 88.6, z: 0.82, r: 62.3, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 70.4, z: 0.72, r: 60.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# GPT-5.6 Terra (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **46.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $None/1M · 115.0 t/s · TTFT 1.63s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.4 | +1.56 | 실측 | [[aa-omniscience]] 44.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 75.5 | +1.7 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 72.9 | +1.52 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 67.1 | +1.14 | 실측 | [[gdpval]] 45.0%×1.0, [[tau2-bench]] 73.0%×1.0, [[tau3-banking]] 19.0%×1.0 |
| 신뢰성 | 39.1 | -0.73 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | 62.3 | +0.82 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 60.7 | +0.72 | 실측 | [[ifbench]] 62.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
