---
type: Model
title: GPT-5.6 Luna (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 49.0
price_blended_usd_1m: None
output_speed_tps: 160.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.2, z: 1.5, r: 72.5, estimated: false }  # 전문 지식
  reasoning: { s: 75.7, z: 2.07, r: 81.0, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.51, r: 72.7, estimated: false }  # 코딩
  agentic: { s: 72.8, z: 1.41, r: 71.2, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.84, r: 37.4, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 0.95, r: 64.3, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 78.3, z: 1.04, r: 65.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# GPT-5.6 Luna (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **49.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $None/1M · 160.0 t/s · TTFT 51.87s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.5 | +1.5 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 81.0 | +2.07 | 실측 | [[critpt]] 21.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 72.7 | +1.51 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 71.2 | +1.41 | 실측 | [[gdpval]] 51.0%×1.0, [[tau3-banking]] 24.0%×1.0 |
| 신뢰성 | 37.4 | -0.84 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 64.3 | +0.95 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 65.6 | +1.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
