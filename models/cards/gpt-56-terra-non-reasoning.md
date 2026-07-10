---
type: Model
title: GPT-5.6 Terra (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 2.17
output_speed_tps: 152.0
context_window: 1000000
radar:
  knowledge: { s: 55.9, z: -0.02, r: 49.7, estimated: false }  # 전문 지식
  reasoning: { s: 34.2, z: -0.66, r: 40.1, estimated: false }  # 추론
  coding: { s: 75.0, z: 0.48, r: 57.2, estimated: false }  # 코딩
  agentic: { s: 49.1, z: -0.21, r: 46.8, estimated: false }  # 에이전트
  trust: { s: 2.5, z: -1.0, r: 35.0, estimated: false }  # 신뢰성
  multimodal: { s: 70.7, z: -0.46, r: 43.1, estimated: false }  # 멀티모달
  long_context: { s: 67.6, z: -0.25, r: 46.3, estimated: false }  # 긴문맥
  instruction: { s: 68.2, z: -0.08, r: 48.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# GPT-5.6 Terra (Non-reasoning)

OpenAI · Proprietary · 컨텍스트 1M · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.17/1M · 152.0 t/s · TTFT 0.74s · 1M ctx` · 가성비 15.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.7 | -0.02 | 실측 | [[aa-omniscience]] 36.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 40.1 | -0.66 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 57.2 | +0.48 | 실측 | [[scicode]] 45.0%×1.0 |
| 에이전트 | 46.8 | -0.21 | 실측 | [[gdpval]] 37.0%×1.0, [[tau3-banking]] 13.0%×1.0 |
| 신뢰성 | 35.0 | -1.0 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | 43.1 | -0.46 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 46.3 | -0.25 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 48.8 | -0.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
