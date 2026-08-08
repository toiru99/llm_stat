---
type: Model
title: GPT-5.6 Luna (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 39.0
price_blended_usd_1m: 0.174
output_speed_tps: 180.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.2, z: 1.22, r: 68.3, estimated: false }  # 전문 지식
  reasoning: { s: 50.8, z: 0.79, r: 61.9, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.22, r: 68.3, estimated: false }  # 코딩
  agentic: { s: 46.8, z: 0.44, r: 56.6, estimated: false }  # 에이전트
  trust: { s: 8.1, z: -0.83, r: 37.5, estimated: false }  # 신뢰성
  multimodal: { s: 87.1, z: 0.74, r: 61.1, estimated: false }  # 멀티모달
  long_context: { s: 86.7, z: 1.14, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: 72.9, z: 0.79, r: 61.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# GPT-5.6 Luna (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **39.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 180.0 t/s · TTFT 2.38s · 1M ctx` · 가성비 224.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.3 | +1.22 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 26.0%×0.3 |
| 추론 | 61.9 | +0.79 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 26.0%×1.0 |
| 코딩 | 68.3 | +1.22 | 실측 | [[scicode]] 46.0%×1.0 |
| 에이전트 | 56.6 | +0.44 | 실측 | [[gdpval]] 39.0%×1.0, [[tau3-banking]] 18.0%×1.0 |
| 신뢰성 | 37.5 | -0.83 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 61.1 | +0.74 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 67.0 | +1.14 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 61.9 | +0.79 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
