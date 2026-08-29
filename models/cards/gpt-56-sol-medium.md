---
type: Model
title: GPT-5.6 Sol (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 56.0
price_blended_usd_1m: 3.08
output_speed_tps: 71.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.9, z: 2.39, r: 85.9, estimated: false }  # 전문 지식
  reasoning: { s: 81.8, z: 2.39, r: 85.9, estimated: false }  # 추론
  coding: { s: 94.0, z: 1.94, r: 79.2, estimated: false }  # 코딩
  agentic: { s: 81.7, z: 1.76, r: 76.3, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.8, r: 38.1, estimated: false }  # 신뢰성
  multimodal: { s: 94.3, z: 1.14, r: 67.1, estimated: false }  # 멀티모달
  long_context: { s: 89.2, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.23, r: 68.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# GPT-5.6 Sol (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **56.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 71.0 t/s · TTFT 6.85s · 1M ctx` · 가성비 18.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 85.9 | +2.39 | 실측 | [[aa-omniscience]] 58.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 85.9 | +2.39 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 79.2 | +1.94 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 63.0%×0.5 |
| 에이전트 | 76.3 | +1.76 | 실측 | [[gdpval]] 52.0%×1.0, [[tau2-bench]] 81.0%×1.0, [[tau3-banking]] 36.0%×1.0, [[terminal-bench]] 63.0%×1.0 |
| 신뢰성 | 38.1 | -0.8 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 67.1 | +1.14 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 68.5 | +1.23 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
