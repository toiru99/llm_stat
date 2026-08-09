---
type: Model
title: GPT-5.6 Terra (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: 1.74
output_speed_tps: 120.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.4, z: 1.76, r: 76.4, estimated: false }  # 전문 지식
  reasoning: { s: 85.6, z: 2.51, r: 87.7, estimated: false }  # 추론
  coding: { s: 89.6, z: 1.75, r: 76.3, estimated: false }  # 코딩
  agentic: { s: 78.9, z: 1.72, r: 75.7, estimated: false }  # 에이전트
  trust: { s: 10.5, z: -0.73, r: 39.1, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 0.95, r: 64.2, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.25, r: 68.7, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.92, r: 63.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-09
timestamp: 2026-08-09T00:00:00Z
---

# GPT-5.6 Terra (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 120.0 t/s · TTFT 11.98s · 1M ctx` · 가성비 30.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.4 | +1.76 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 87.7 | +2.51 | 실측 | [[critpt]] 27.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 76.3 | +1.75 | 실측 | [[scicode]] 52.0%×1.0, [[terminal-bench]] 63.0%×0.5 |
| 에이전트 | 75.7 | +1.72 | 실측 | [[gdpval]] 54.0%×1.0, [[tau2-bench]] 80.0%×1.0, [[tau3-banking]] 30.0%×1.0, [[terminal-bench]] 63.0%×1.0 |
| 신뢰성 | 39.1 | -0.73 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 64.2 | +0.95 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 68.7 | +1.25 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 63.9 | +0.92 | 실측 | [[ifbench]] 66.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
