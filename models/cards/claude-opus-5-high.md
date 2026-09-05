---
type: Model
title: Claude Opus 5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 52.0
price_blended_usd_1m: 3.85
output_speed_tps: 56.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 90.6, z: 2.39, r: 85.9, estimated: false }  # 전문 지식
  reasoning: { s: 91.6, z: 2.72, r: 90.8, estimated: false }  # 추론
  coding: { s: 83.7, z: 1.81, r: 77.2, estimated: false }  # 코딩
  agentic: { s: 88.5, z: 1.95, r: 79.3, estimated: false }  # 에이전트
  trust: { s: 38.1, z: 0.65, r: 59.7, estimated: false }  # 신뢰성
  multimodal: { s: 93.1, z: 1.13, r: 67.0, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.98, r: 64.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Claude Opus 5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **52.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 56.0 t/s · TTFT 22.98s · 1M ctx` · 가성비 13.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 85.9 | +2.39 | 실측 | [[aa-omniscience]] 59.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 53.0%×0.3 |
| 추론 | 90.8 | +2.72 | 실측 | [[critpt]] 28.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 53.0%×1.0 |
| 코딩 | 77.2 | +1.81 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 79.3 | +1.95 | 실측 | [[gdpval]] 57.0%×1.0, [[tau3-banking]] 45.0%×1.0 |
| 신뢰성 | 59.7 | +0.65 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 67.0 | +1.13 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 64.8 | +0.98 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
