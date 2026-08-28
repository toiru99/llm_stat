---
type: Model
title: GPT-5.6 Terra (max)
creator: OpenAI
license: Proprietary
intelligence_index: 57.0
price_blended_usd_1m: 1.74
output_speed_tps: 107.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.2, z: 1.92, r: 78.7, estimated: false }  # 전문 지식
  reasoning: { s: 89.7, z: 2.8, r: 92.0, estimated: false }  # 추론
  coding: { s: 89.3, z: 1.75, r: 76.2, estimated: false }  # 코딩
  agentic: { s: 84.5, z: 1.87, r: 78.0, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.65, r: 40.2, estimated: false }  # 신뢰성
  multimodal: { s: 94.3, z: 1.14, r: 67.1, estimated: false }  # 멀티모달
  long_context: { s: 96.4, z: 1.44, r: 71.7, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.3, r: 69.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# GPT-5.6 Terra (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **57.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 107.0 t/s · TTFT 159.18s · 1M ctx` · 가성비 32.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.7 | +1.92 | 실측 | [[aa-omniscience]] 47.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 92.0 | +2.8 | 실측 | [[critpt]] 30.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 76.2 | +1.75 | 실측 | [[scicode]] 54.0%×1.0, [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 78.0 | +1.87 | 실측 | [[apex-agents]] 39.0%×1.0, [[gdpval]] 53.0%×1.0, [[itbench]] 51.0%×1.0, [[tau2-bench]] 86.0%×1.0, [[tau3-banking]] 40.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | 40.2 | -0.65 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | 67.1 | +1.14 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 71.7 | +1.44 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 69.4 | +1.3 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
