---
type: Model
title: GPT-5.6 Luna (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: 0.174
output_speed_tps: 125.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.6, z: 1.54, r: 73.1, estimated: false }  # 전문 지식
  reasoning: { s: 75.1, z: 2.05, r: 80.8, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.5, r: 72.4, estimated: false }  # 코딩
  agentic: { s: 67.1, z: 1.18, r: 67.8, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.85, r: 37.3, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 1.0, r: 65.0, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.18, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 81.1, z: 1.21, r: 68.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# GPT-5.6 Luna (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 125.0 t/s · TTFT 64.05s · 1M ctx` · 가성비 287.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.1 | +1.54 | 실측 | [[aa-omniscience]] 42.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 80.8 | +2.05 | 실측 | [[critpt]] 21.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 72.4 | +1.5 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 67.8 | +1.18 | 실측 | [[gdpval]] 51.0%×1.0, [[tau3-banking]] 29.0%×1.0 |
| 신뢰성 | 37.3 | -0.85 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 65.0 | +1.0 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 67.8 | +1.18 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 68.1 | +1.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
