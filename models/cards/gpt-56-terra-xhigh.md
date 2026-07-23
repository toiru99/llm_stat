---
type: Model
title: GPT-5.6 Terra (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 52.0
price_blended_usd_1m: None
output_speed_tps: 121.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.1, z: 1.85, r: 77.7, estimated: false }  # 전문 지식
  reasoning: { s: 85.3, z: 2.7, r: 90.5, estimated: false }  # 추론
  coding: { s: 89.6, z: 1.82, r: 77.2, estimated: false }  # 코딩
  agentic: { s: 84.0, z: 1.85, r: 77.8, estimated: false }  # 에이전트
  trust: { s: 13.8, z: -0.64, r: 40.4, estimated: false }  # 신뢰성
  multimodal: { s: 92.8, z: 1.0, r: 65.0, estimated: false }  # 멀티모달
  long_context: { s: 93.4, z: 1.32, r: 69.8, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.96, r: 64.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# GPT-5.6 Terra (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **52.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $None/1M · 121.0 t/s · TTFT 18.75s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.7 | +1.85 | 실측 | [[aa-omniscience]] 45.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 90.5 | +2.7 | 실측 | [[critpt]] 27.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 77.2 | +1.82 | 실측 | [[scicode]] 52.0%×1.0, [[terminal-bench]] 63.0%×0.5 |
| 에이전트 | 77.8 | +1.85 | 실측 | [[gdpval]] 54.0%×1.0, [[tau2-bench]] 80.0%×1.0, [[tau3-banking]] 24.0%×1.0, [[terminal-bench]] 63.0%×1.0 |
| 신뢰성 | 40.4 | -0.64 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 65.0 | +1.0 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 69.8 | +1.32 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 64.5 | +0.96 | 실측 | [[ifbench]] 66.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
