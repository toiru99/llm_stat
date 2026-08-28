---
type: Model
title: GPT-5.6 Sol (low)
creator: OpenAI
license: Proprietary
intelligence_index: 51.0
price_blended_usd_1m: 3.08
output_speed_tps: 72.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.1, z: 2.26, r: 83.9, estimated: false }  # 전문 지식
  reasoning: { s: 70.5, z: 1.82, r: 77.3, estimated: false }  # 추론
  coding: { s: 91.9, z: 1.86, r: 77.9, estimated: false }  # 코딩
  agentic: { s: 74.3, z: 1.47, r: 72.0, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.7, r: 39.5, estimated: false }  # 신뢰성
  multimodal: { s: 94.3, z: 1.14, r: 67.1, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 1.06, r: 65.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# GPT-5.6 Sol (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 72.0 t/s · TTFT 2.65s · 1M ctx` · 가성비 16.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 83.9 | +2.26 | 실측 | [[aa-omniscience]] 57.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 77.3 | +1.82 | 실측 | [[critpt]] 15.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 77.9 | +1.86 | 실측 | [[scicode]] 55.0%×1.0, [[terminal-bench]] 61.0%×0.5 |
| 에이전트 | 72.0 | +1.47 | 실측 | [[gdpval]] 47.0%×1.0, [[tau2-bench]] 76.0%×1.0, [[tau3-banking]] 29.0%×1.0, [[terminal-bench]] 61.0%×1.0 |
| 신뢰성 | 39.5 | -0.7 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 67.1 | +1.14 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 65.9 | +1.06 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
