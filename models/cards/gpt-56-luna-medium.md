---
type: Model
title: GPT-5.6 Luna (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: None
output_speed_tps: 148.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.3, z: 1.23, r: 68.4, estimated: false }  # 전문 지식
  reasoning: { s: 50.1, z: 0.78, r: 61.8, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.23, r: 68.5, estimated: false }  # 코딩
  agentic: { s: 50.7, z: 0.56, r: 58.3, estimated: false }  # 에이전트
  trust: { s: 11.5, z: -0.78, r: 38.2, estimated: false }  # 신뢰성
  multimodal: { s: 87.1, z: 0.75, r: 61.2, estimated: false }  # 멀티모달
  long_context: { s: 86.8, z: 1.11, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 74.4, z: 0.88, r: 63.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# GPT-5.6 Luna (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $None/1M · 148.0 t/s · TTFT 2.31s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.4 | +1.23 | 실측 | [[aa-omniscience]] 40.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 61.8 | +0.78 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 68.5 | +1.23 | 실측 | [[scicode]] 46.0%×1.0 |
| 에이전트 | 58.3 | +0.56 | 실측 | [[gdpval]] 39.0%×1.0, [[tau3-banking]] 15.0%×1.0 |
| 신뢰성 | 38.2 | -0.78 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 61.2 | +0.75 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 66.6 | +1.11 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 63.2 | +0.88 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
