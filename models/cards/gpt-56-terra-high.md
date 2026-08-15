---
type: Model
title: GPT-5.6 Terra (high)
creator: OpenAI
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: 1.74
output_speed_tps: 116.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.0, z: 1.61, r: 74.1, estimated: false }  # 전문 지식
  reasoning: { s: 78.8, z: 2.13, r: 81.9, estimated: false }  # 추론
  coding: { s: 84.8, z: 1.5, r: 72.5, estimated: false }  # 코딩
  agentic: { s: 74.9, z: 1.51, r: 72.6, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.79, r: 38.2, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 0.92, r: 63.8, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.14, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.77, r: 61.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-15
timestamp: 2026-08-15T00:00:00Z
---

# GPT-5.6 Terra (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 116.0 t/s · TTFT 3.56s · 1M ctx` · 가성비 28.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.1 | +1.61 | 실측 | [[aa-omniscience]] 45.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 81.9 | +2.13 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 72.5 | +1.5 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 72.6 | +1.51 | 실측 | [[gdpval]] 51.0%×1.0, [[tau2-bench]] 78.0%×1.0, [[tau3-banking]] 29.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | 38.2 | -0.79 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 63.8 | +0.92 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 67.0 | +1.14 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 61.6 | +0.77 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
