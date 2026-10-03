---
type: Model
title: GPT-5.6 Terra (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 30.0
price_blended_usd_1m: 1.74
output_speed_tps: 84.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.0, z: 1.27, r: 69.0, estimated: false }  # 전문 지식
  reasoning: { s: 65.3, z: 1.31, r: 69.6, estimated: false }  # 추론
  coding: { s: 71.7, z: 1.21, r: 68.1, estimated: false }  # 코딩
  agentic: { s: 60.5, z: 0.83, r: 62.4, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.85, r: 37.3, estimated: false }  # 신뢰성
  multimodal: { s: 84.9, z: 0.68, r: 60.1, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.95, r: 64.3, estimated: false }  # 긴문맥
  instruction: { s: 70.4, z: 0.67, r: 60.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# GPT-5.6 Terra (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 84.0 t/s · TTFT 2.42s · 1M ctx` · 가성비 17.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.0 | +1.27 | 실측 | [[aa-omniscience]] 45.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 69.6 | +1.31 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 68.1 | +1.21 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 62.4 | +0.83 | 실측 | [[gdpval]] 38.0%×1.0, [[tau2-bench]] 73.0%×1.0, [[tau3-banking]] 26.0%×1.0 |
| 신뢰성 | 37.3 | -0.85 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 60.1 | +0.68 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 64.3 | +0.95 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 60.1 | +0.67 | 실측 | [[ifbench]] 62.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
