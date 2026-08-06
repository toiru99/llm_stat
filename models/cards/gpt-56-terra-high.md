---
type: Model
title: GPT-5.6 Terra (high)
creator: OpenAI
license: Proprietary
intelligence_index: 49.0
price_blended_usd_1m: 1.74
output_speed_tps: 109.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.8, z: 1.66, r: 75.0, estimated: false }  # 전문 지식
  reasoning: { s: 78.8, z: 2.2, r: 83.0, estimated: false }  # 추론
  coding: { s: 84.8, z: 1.55, r: 73.3, estimated: false }  # 코딩
  agentic: { s: 73.1, z: 1.49, r: 72.4, estimated: false }  # 에이전트
  trust: { s: 13.8, z: -0.68, r: 39.7, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 0.95, r: 64.2, estimated: false }  # 멀티모달
  long_context: { s: 94.7, z: 1.33, r: 70.0, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.82, r: 62.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# GPT-5.6 Terra (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **49.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 109.0 t/s · TTFT 2.72s · 1M ctx` · 가성비 28.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.0 | +1.66 | 실측 | [[aa-omniscience]] 44.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 83.0 | +2.2 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 73.3 | +1.55 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 72.4 | +1.49 | 실측 | [[gdpval]] 50.0%×1.0, [[tau2-bench]] 78.0%×1.0, [[tau3-banking]] 22.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | 39.7 | -0.68 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 64.2 | +0.95 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 70.0 | +1.33 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 62.3 | +0.82 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
