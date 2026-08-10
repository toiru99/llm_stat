---
type: Model
title: GPT-5.6 Sol (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 42.0
price_blended_usd_1m: 4.35
output_speed_tps: 61.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 68.7, z: 1.34, r: 70.1, estimated: false }  # 전문 지식
  reasoning: { s: 42.5, z: 0.38, r: 55.7, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.29, r: 69.3, estimated: false }  # 코딩
  agentic: { s: 52.4, z: 0.66, r: 60.0, estimated: false }  # 에이전트
  trust: { s: 5.8, z: -0.94, r: 35.9, estimated: false }  # 신뢰성
  multimodal: { s: 81.4, z: 0.46, r: 57.0, estimated: false }  # 멀티모달
  long_context: { s: 68.7, z: 0.59, r: 58.8, estimated: false }  # 긴문맥
  instruction: { s: 58.9, z: 0.22, r: 53.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-10
timestamp: 2026-08-10T00:00:00Z
---

# GPT-5.6 Sol (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 61.0 t/s · TTFT 1.16s · 1M ctx` · 가성비 9.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.1 | +1.34 | 실측 | [[aa-omniscience]] 49.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 55.7 | +0.38 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 69.3 | +1.29 | 실측 | [[scicode]] 47.0%×1.0 |
| 에이전트 | 60.0 | +0.66 | 실측 | [[gdpval]] 44.0%×1.0, [[tau3-banking]] 20.0%×1.0 |
| 신뢰성 | 35.9 | -0.94 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 57.0 | +0.46 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 58.8 | +0.59 | 실측 | [[aa-lcr]] 57.0%×1.0 |
| 지시 따르기 | 53.2 | +0.22 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
