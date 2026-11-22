---
type: Model
title: GPT-5.6 Luna (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.174
output_speed_tps: 105.994745250487
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.7, z: 1.27, r: 69.1, estimated: false }  # 전문 지식
  reasoning: { s: 66.3, z: 1.51, r: 72.7, estimated: false }  # 추론
  coding: { s: 71.6, z: 1.07, r: 66.1, estimated: false }  # 코딩
  agentic: { s: 67.7, z: 0.79, r: 61.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.4, z: 0.72, r: 60.7, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.14, r: 67.1, estimated: false }  # 긴문맥
  instruction: { s: 87.3, z: 1.4, r: 70.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# GPT-5.6 Luna (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 지시 따르기
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 105.994745250487 t/s · TTFT 18.9068754512632s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.1 | +1.27 | 실측 | [[gpqa-diamond]] 89.49494949494951%×0.4, [[humanitys-last-exam]] 36.9786839666358%×0.3 |
| 추론 | 72.7 | +1.51 | 실측 | [[critpt]] 20.571428571428598%×1.0, [[gpqa-diamond]] 89.49494949494951%×1.0, [[humanitys-last-exam]] 36.9786839666358%×1.0 |
| 코딩 | 66.1 | +1.07 | 실측 | [[scicode]] 50.462962962963%×1.0 |
| 에이전트 | 61.8 | +0.79 | 실측 | [[gdpval]] 1406.71%×1.0, [[tau3-banking]] 28.659793814432998%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.7 | +0.72 | 실측 | [[mmmu-pro]] 78.5549132947977%×1.0 |
| 긴문맥 | 67.1 | +1.14 | 실측 | [[aa-lcr]] 81.6666666666667%×1.0 |
| 지시 따르기 | 70.9 | +1.4 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
