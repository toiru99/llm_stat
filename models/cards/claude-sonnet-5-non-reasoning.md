---
type: Model
title: Claude Sonnet 5 (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 42.0
price_blended_usd_1m: 2.31
output_speed_tps: 62.0
context_window: 1000000
radar:
  knowledge: { s: 56.7, z: 0.21, r: 53.2, estimated: false }  # 전문 지식
  reasoning: { s: 39.7, z: -0.27, r: 45.9, estimated: false }  # 추론
  coding: { s: 81.7, z: 0.93, r: 64.0, estimated: false }  # 코딩
  agentic: { s: 50.9, z: -0.01, r: 49.8, estimated: false }  # 에이전트
  trust: { s: 57.5, z: 0.74, r: 61.2, estimated: false }  # 신뢰성
  multimodal: { s: 79.3, z: 0.17, r: 52.6, estimated: false }  # 멀티모달
  long_context: { s: 79.7, z: 0.31, r: 54.7, estimated: false }  # 긴문맥
  instruction: { s: 71.5, z: 0.13, r: 51.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# Claude Sonnet 5 (Non-reasoning)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 62.0 t/s · TTFT 1.28s · 1M ctx` · 가성비 18.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.2 | +0.21 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 45.9 | -0.27 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 64.0 | +0.93 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 49.8 | -0.01 | 실측 | [[gdpval]] 44.0%×1.0, [[tau3-banking]] 14.0%×1.0 |
| 신뢰성 | 61.2 | +0.74 | 실측 | [[aa-omniscience]] 50.0%×1.0 |
| 멀티모달 | 52.6 | +0.17 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 54.7 | +0.31 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 51.9 | +0.13 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
