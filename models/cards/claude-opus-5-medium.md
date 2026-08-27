---
type: Model
title: Claude Opus 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 59.0
price_blended_usd_1m: 3.85
output_speed_tps: 54.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 90.5, z: 2.33, r: 85.0, estimated: false }  # 전문 지식
  reasoning: { s: 91.1, z: 2.69, r: 90.3, estimated: false }  # 추론
  coding: { s: 85.0, z: 1.48, r: 72.2, estimated: false }  # 코딩
  agentic: { s: 80.0, z: 1.65, r: 74.7, estimated: false }  # 에이전트
  trust: { s: 43.0, z: 0.6, r: 59.0, estimated: false }  # 신뢰성
  multimodal: { s: 95.7, z: 1.12, r: 66.8, estimated: false }  # 멀티모달
  long_context: { s: 95.2, z: 1.33, r: 69.9, estimated: false }  # 긴문맥
  instruction: { s: 77.6, z: 0.95, r: 64.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Claude Opus 5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **59.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 54.0 t/s · TTFT 5.13s · 1M ctx` · 가성비 15.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 85.0 | +2.33 | 실측 | [[aa-omniscience]] 57.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 51.0%×0.3 |
| 추론 | 90.3 | +2.69 | 실측 | [[critpt]] 27.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 51.0%×1.0 |
| 코딩 | 72.2 | +1.48 | 실측 | [[scicode]] 51.0%×1.0 |
| 에이전트 | 74.7 | +1.65 | 실측 | [[gdpval]] 56.0%×1.0, [[tau3-banking]] 39.0%×1.0 |
| 신뢰성 | 59.0 | +0.6 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 66.8 | +1.12 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 69.9 | +1.33 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 64.2 | +0.95 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
