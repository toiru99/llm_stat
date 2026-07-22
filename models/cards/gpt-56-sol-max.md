---
type: Model
title: GPT-5.6 Sol (max)
creator: OpenAI
license: Proprietary
intelligence_index: 59.0
price_blended_usd_1m: None
output_speed_tps: 63.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 96.0, z: 2.66, r: 89.9, estimated: false }  # 전문 지식
  reasoning: { s: 96.2, z: 3.26, r: 98.9, estimated: false }  # 추론
  coding: { s: 95.6, z: 2.06, r: 80.9, estimated: false }  # 코딩
  agentic: { s: 97.2, z: 2.35, r: 85.3, estimated: false }  # 에이전트
  trust: { s: 11.8, z: -0.76, r: 38.7, estimated: false }  # 신뢰성
  multimodal: { s: 98.6, z: 1.27, r: 69.1, estimated: false }  # 멀티모달
  long_context: { s: 97.4, z: 1.44, r: 71.5, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.37, r: 70.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-22
timestamp: 2026-07-22T00:00:00Z
---

# GPT-5.6 Sol (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **59.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $None/1M · 63.0 t/s · TTFT 142.01s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 89.9 | +2.66 | 실측 | [[aa-omniscience]] 59.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 47.0%×0.3 |
| 추론 | 98.9 | +3.26 | 실측 | [[critpt]] 32.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 47.0%×1.0 |
| 코딩 | 80.9 | +2.06 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 66.0%×0.5 |
| 에이전트 | 85.3 | +2.35 | 실측 | [[gdpval]] 62.0%×1.0, [[itbench]] 56.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 33.0%×1.0, [[terminal-bench]] 66.0%×1.0 |
| 신뢰성 | 38.7 | -0.76 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 69.1 | +1.27 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 71.5 | +1.44 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 70.6 | +1.37 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
