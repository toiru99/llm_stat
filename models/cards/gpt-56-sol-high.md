---
type: Model
title: GPT-5.6 Sol (high)
creator: OpenAI
license: Proprietary
intelligence_index: 57.0
price_blended_usd_1m: 3.08
output_speed_tps: 75.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 90.1, z: 2.31, r: 84.7, estimated: false }  # 전문 지식
  reasoning: { s: 87.4, z: 2.5, r: 87.5, estimated: false }  # 추론
  coding: { s: 94.6, z: 1.87, r: 78.1, estimated: false }  # 코딩
  agentic: { s: 83.5, z: 1.77, r: 76.5, estimated: false }  # 에이전트
  trust: { s: 8.1, z: -0.87, r: 37.0, estimated: false }  # 신뢰성
  multimodal: { s: 95.7, z: 1.11, r: 66.7, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.18, r: 67.7, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.05, r: 65.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# GPT-5.6 Sol (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **57.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 75.0 t/s · TTFT 9.22s · 1M ctx` · 가성비 18.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 84.7 | +2.31 | 실측 | [[aa-omniscience]] 58.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 87.5 | +2.5 | 실측 | [[critpt]] 26.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 78.1 | +1.87 | 실측 | [[scicode]] 57.0%×1.0, [[terminal-bench]] 62.0%×0.5 |
| 에이전트 | 76.5 | +1.77 | 실측 | [[gdpval]] 56.0%×1.0, [[tau2-bench]] 83.0%×1.0, [[tau3-banking]] 37.0%×1.0, [[terminal-bench]] 62.0%×1.0 |
| 신뢰성 | 37.0 | -0.87 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 66.7 | +1.11 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 67.7 | +1.18 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 65.8 | +1.05 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
