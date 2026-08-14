---
type: Model
title: GPT-5.6 Terra (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: 1.74
output_speed_tps: 94.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.2, z: 1.71, r: 75.6, estimated: false }  # 전문 지식
  reasoning: { s: 85.2, z: 2.44, r: 86.6, estimated: false }  # 추론
  coding: { s: 89.6, z: 1.7, r: 75.4, estimated: false }  # 코딩
  agentic: { s: 78.9, z: 1.66, r: 74.9, estimated: false }  # 에이전트
  trust: { s: 10.5, z: -0.73, r: 39.0, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 0.92, r: 63.8, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.21, r: 68.2, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.89, r: 63.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# GPT-5.6 Terra (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 94.0 t/s · TTFT 25.72s · 1M ctx` · 가성비 30.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.6 | +1.71 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 86.6 | +2.44 | 실측 | [[critpt]] 27.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 75.4 | +1.7 | 실측 | [[scicode]] 52.0%×1.0, [[terminal-bench]] 63.0%×0.5 |
| 에이전트 | 74.9 | +1.66 | 실측 | [[gdpval]] 54.0%×1.0, [[tau2-bench]] 80.0%×1.0, [[tau3-banking]] 30.0%×1.0, [[terminal-bench]] 63.0%×1.0 |
| 신뢰성 | 39.0 | -0.73 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 63.8 | +0.92 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 68.2 | +1.21 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 63.3 | +0.89 | 실측 | [[ifbench]] 66.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
