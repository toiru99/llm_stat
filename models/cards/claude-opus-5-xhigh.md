---
type: Model
title: Claude Opus 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 63.0
price_blended_usd_1m: 3.85
output_speed_tps: 55.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 95.1, z: 2.6, r: 89.1, estimated: false }  # 전문 지식
  reasoning: { s: 95.2, z: 2.99, r: 94.8, estimated: false }  # 추론
  coding: { s: 91.7, z: 1.84, r: 77.6, estimated: false }  # 코딩
  agentic: { s: 91.4, z: 2.21, r: 83.2, estimated: false }  # 에이전트
  trust: { s: 44.2, z: 0.82, r: 62.3, estimated: false }  # 신뢰성
  multimodal: { s: 98.6, z: 1.29, r: 69.3, estimated: false }  # 멀티모달
  long_context: { s: 91.6, z: 1.28, r: 69.2, estimated: false }  # 긴문맥
  instruction: { s: 77.7, z: 0.99, r: 64.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# Claude Opus 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **63.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 55.0 t/s · TTFT 23.46s · 1M ctx` · 가성비 16.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 89.1 | +2.6 | 실측 | [[aa-omniscience]] 60.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 54.0%×0.3 |
| 추론 | 94.8 | +2.99 | 실측 | [[critpt]] 28.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 54.0%×1.0 |
| 코딩 | 77.6 | +1.84 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 83.2 | +2.21 | 실측 | [[gdpval]] 66.0%×1.0, [[tau3-banking]] 43.0%×1.0 |
| 신뢰성 | 62.3 | +0.82 | 실측 | [[aa-omniscience]] 40.0%×1.0 |
| 멀티모달 | 69.3 | +1.29 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 69.2 | +1.28 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 64.9 | +0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
