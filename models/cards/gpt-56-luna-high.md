---
type: Model
title: GPT-5.6 Luna (high)
creator: OpenAI
license: Proprietary
intelligence_index: 46.0
price_blended_usd_1m: 0.87
output_speed_tps: 237.0
context_window: 1000000
radar:
  knowledge: { s: 71.8, z: 0.69, r: 60.4, estimated: false }  # 전문 지식
  reasoning: { s: 68.9, z: 0.9, r: 63.5, estimated: false }  # 추론
  coding: { s: 85.0, z: 0.92, r: 63.8, estimated: false }  # 코딩
  agentic: { s: 72.2, z: 0.71, r: 60.6, estimated: false }  # 에이전트
  trust: { s: 7.5, z: -0.82, r: 37.7, estimated: false }  # 신뢰성
  multimodal: { s: 89.7, z: 0.59, r: 58.9, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 0.72, r: 60.8, estimated: false }  # 긴문맥
  instruction: { s: 78.3, z: 0.39, r: 55.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# GPT-5.6 Luna (high)

OpenAI · Proprietary · 컨텍스트 1M · 종합지능 **46.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $1.0 · 출력 $6.0 · 혼합 $0.87/1M · 237.0 t/s · TTFT 4.67s · 1M ctx` · 가성비 52.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.4 | +0.69 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 63.5 | +0.9 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 63.8 | +0.92 | 실측 | [[scicode]] 51.0%×1.0 |
| 에이전트 | 60.6 | +0.71 | 실측 | [[gdpval]] 49.0%×1.0, [[tau3-banking]] 22.0%×1.0 |
| 신뢰성 | 37.7 | -0.82 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 58.9 | +0.59 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 60.8 | +0.72 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 55.9 | +0.39 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
