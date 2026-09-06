---
type: Model
title: GPT-5.6 Terra (high)
creator: OpenAI
license: Proprietary
intelligence_index: 41.0
price_blended_usd_1m: 1.74
output_speed_tps: 98.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.0, z: 1.54, r: 73.2, estimated: false }  # 전문 지식
  reasoning: { s: 76.8, z: 2.01, r: 80.2, estimated: false }  # 추론
  coding: { s: 81.0, z: 1.7, r: 75.5, estimated: false }  # 코딩
  agentic: { s: 73.9, z: 1.39, r: 70.9, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.77, r: 38.5, estimated: false }  # 신뢰성
  multimodal: { s: 88.9, z: 0.93, r: 63.9, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.86, r: 62.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# GPT-5.6 Terra (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **41.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 98.0 t/s · TTFT 3.67s · 1M ctx` · 가성비 23.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.2 | +1.54 | 실측 | [[aa-omniscience]] 45.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 80.2 | +2.01 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 75.5 | +1.7 | 실측 | [[scicode]] 52.0%×1.0, [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 70.9 | +1.39 | 실측 | [[gdpval]] 46.0%×1.0, [[tau2-bench]] 78.0%×1.0, [[tau3-banking]] 29.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | 38.5 | -0.77 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 63.9 | +0.93 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 62.8 | +0.86 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
