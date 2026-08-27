---
type: Model
title: Claude Sonnet 5 (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 43.0
price_blended_usd_1m: 1.54
output_speed_tps: 64.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 55.6, z: 0.67, r: 60.1, estimated: false }  # 전문 지식
  reasoning: { s: 39.6, z: 0.18, r: 52.8, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.34, r: 70.2, estimated: false }  # 코딩
  agentic: { s: 47.8, z: 0.4, r: 56.1, estimated: false }  # 에이전트
  trust: { s: 53.5, z: 1.04, r: 65.6, estimated: false }  # 신뢰성
  multimodal: { s: 81.4, z: 0.43, r: 56.4, estimated: false }  # 멀티모달
  long_context: { s: 79.5, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.0, r: 65.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Claude Sonnet 5 (Non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **43.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 64.0 t/s · TTFT 1.7s · 1M ctx` · 가성비 27.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.1 | +0.67 | 실측 | [[aa-omniscience]] 34.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 52.8 | +0.18 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 70.2 | +1.34 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 56.1 | +0.4 | 실측 | [[gdpval]] 43.0%×1.0, [[tau3-banking]] 16.0%×1.0 |
| 신뢰성 | 65.6 | +1.04 | 실측 | [[aa-omniscience]] 48.0%×1.0 |
| 멀티모달 | 56.4 | +0.43 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 65.0 | +1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
