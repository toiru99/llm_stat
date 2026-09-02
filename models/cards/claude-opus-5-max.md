---
type: Model
title: Claude Opus 5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 63.0
price_blended_usd_1m: 3.85
output_speed_tps: 54.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 93.0, z: 2.62, r: 89.3, estimated: false }  # 전문 지식
  reasoning: { s: 93.8, z: 2.97, r: 94.6, estimated: false }  # 추론
  coding: { s: 90.3, z: 1.85, r: 77.7, estimated: false }  # 코딩
  agentic: { s: 89.7, z: 2.05, r: 80.7, estimated: false }  # 에이전트
  trust: { s: 38.1, z: 0.66, r: 59.9, estimated: false }  # 신뢰성
  multimodal: { s: 100.0, z: 1.42, r: 71.3, estimated: false }  # 멀티모달
  long_context: { s: 91.6, z: 1.28, r: 69.2, estimated: false }  # 긴문맥
  instruction: { s: 79.5, z: 1.12, r: 66.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Claude Opus 5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **63.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 54.0 t/s · TTFT 71.27s · 1M ctx` · 가성비 16.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 89.3 | +2.62 | 실측 | [[aa-omniscience]] 61.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 55.0%×0.3 |
| 추론 | 94.6 | +2.97 | 실측 | [[critpt]] 29.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 55.0%×1.0 |
| 코딩 | 77.7 | +1.85 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 80.7 | +2.05 | 실측 | [[gdpval]] 66.0%×1.0, [[tau3-banking]] 42.0%×1.0 |
| 신뢰성 | 59.9 | +0.66 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 71.3 | +1.42 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 69.2 | +1.28 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 66.8 | +1.12 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
