---
type: Model
title: GPT-5.6 Luna (max)
creator: OpenAI
license: Proprietary
intelligence_index: 51.0
price_blended_usd_1m: None
output_speed_tps: 175.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.1, z: 1.59, r: 73.9, estimated: false }  # 전문 지식
  reasoning: { s: 77.1, z: 2.14, r: 82.1, estimated: false }  # 추론
  coding: { s: 88.3, z: 1.72, r: 75.8, estimated: false }  # 코딩
  agentic: { s: 76.5, z: 1.55, r: 73.3, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.84, r: 37.4, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 0.95, r: 64.3, estimated: false }  # 멀티모달
  long_context: { s: 97.4, z: 1.42, r: 71.3, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.18, r: 67.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-02
timestamp: 2026-08-02T00:00:00Z
---

# GPT-5.6 Luna (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $None/1M · 175.0 t/s · TTFT 135.29s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.9 | +1.59 | 실측 | [[aa-omniscience]] 42.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 82.1 | +2.14 | 실측 | [[critpt]] 21.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 75.8 | +1.72 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 73.3 | +1.55 | 실측 | [[apex-agents]] 36.0%×1.0, [[gdpval]] 54.0%×1.0, [[itbench]] 40.0%×1.0, [[tau3-banking]] 27.0%×1.0 |
| 신뢰성 | 37.4 | -0.84 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 64.3 | +0.95 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 71.3 | +1.42 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 67.7 | +1.18 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
