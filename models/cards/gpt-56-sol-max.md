---
type: Model
title: GPT-5.6 Sol (max)
creator: OpenAI
license: Proprietary
intelligence_index: 61.0
price_blended_usd_1m: 3.08
output_speed_tps: 70.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 89.7, z: 2.41, r: 86.2, estimated: false }  # 전문 지식
  reasoning: { s: 93.9, z: 2.92, r: 93.8, estimated: false }  # 추론
  coding: { s: 93.5, z: 1.95, r: 79.3, estimated: false }  # 코딩
  agentic: { s: 92.0, z: 2.12, r: 81.8, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.87, r: 36.9, estimated: false }  # 신뢰성
  multimodal: { s: 95.8, z: 1.25, r: 68.7, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.33, r: 70.0, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.38, r: 70.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# GPT-5.6 Sol (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **61.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 70.0 t/s · TTFT 98.98s · 1M ctx` · 가성비 19.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 86.2 | +2.41 | 실측 | [[aa-omniscience]] 59.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 49.0%×0.3 |
| 추론 | 93.8 | +2.92 | 실측 | [[critpt]] 32.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 49.0%×1.0 |
| 코딩 | 79.3 | +1.95 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 66.0%×0.5 |
| 에이전트 | 81.8 | +2.12 | 실측 | [[gdpval]] 61.0%×1.0, [[itbench]] 56.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 44.0%×1.0, [[terminal-bench]] 66.0%×1.0 |
| 신뢰성 | 36.9 | -0.87 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 68.7 | +1.25 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 70.0 | +1.33 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 70.6 | +1.38 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
