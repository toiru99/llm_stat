---
type: Model
title: GPT-5.6 Sol (max)
creator: OpenAI
license: Proprietary
intelligence_index: 61.0
price_blended_usd_1m: 3.08
output_speed_tps: 72.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 92.2, z: 2.42, r: 86.3, estimated: false }  # 전문 지식
  reasoning: { s: 95.9, z: 2.92, r: 93.7, estimated: false }  # 추론
  coding: { s: 95.6, z: 1.91, r: 78.7, estimated: false }  # 코딩
  agentic: { s: 92.6, z: 2.13, r: 82.0, estimated: false }  # 에이전트
  trust: { s: 7.0, z: -0.92, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: 97.1, z: 1.19, r: 67.8, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.29, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.28, r: 69.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# GPT-5.6 Sol (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **61.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 72.0 t/s · TTFT 122.11s · 1M ctx` · 가성비 19.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 86.3 | +2.42 | 실측 | [[aa-omniscience]] 59.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 49.0%×0.3 |
| 추론 | 93.7 | +2.92 | 실측 | [[critpt]] 32.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 49.0%×1.0 |
| 코딩 | 78.7 | +1.91 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 66.0%×0.5 |
| 에이전트 | 82.0 | +2.13 | 실측 | [[gdpval]] 61.0%×1.0, [[itbench]] 56.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 44.0%×1.0, [[terminal-bench]] 66.0%×1.0 |
| 신뢰성 | 36.3 | -0.92 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 67.8 | +1.19 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 69.4 | +1.29 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 69.3 | +1.28 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
