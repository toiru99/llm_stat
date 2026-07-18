---
type: Model
title: GPT-5.6 Luna (high)
creator: OpenAI
license: Proprietary
intelligence_index: 46.0
price_blended_usd_1m: 0.87
output_speed_tps: 173.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.9, z: 1.51, r: 72.7, estimated: false }  # 전문 지식
  reasoning: { s: 68.9, z: 1.85, r: 77.8, estimated: false }  # 추론
  coding: { s: 85.0, z: 1.63, r: 74.5, estimated: false }  # 코딩
  agentic: { s: 72.2, z: 1.4, r: 70.9, estimated: false }  # 에이전트
  trust: { s: 10.6, z: -0.81, r: 37.9, estimated: false }  # 신뢰성
  multimodal: { s: 91.3, z: 0.94, r: 64.1, estimated: false }  # 멀티모달
  long_context: { s: 90.8, z: 1.25, r: 68.7, estimated: false }  # 긴문맥
  instruction: { s: 78.8, z: 1.09, r: 66.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-18
timestamp: 2026-07-18T00:00:00Z
---

# GPT-5.6 Luna (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **46.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.0 · 출력 $6.0 · 혼합 $0.87/1M · 173.0 t/s · TTFT 7.55s · 1M ctx` · 가성비 52.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.7 | +1.51 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 77.8 | +1.85 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 74.5 | +1.63 | 실측 | [[scicode]] 51.0%×1.0 |
| 에이전트 | 70.9 | +1.4 | 실측 | [[gdpval]] 49.0%×1.0, [[tau3-banking]] 22.0%×1.0 |
| 신뢰성 | 37.9 | -0.81 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 64.1 | +0.94 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 68.7 | +1.25 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 66.3 | +1.09 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
