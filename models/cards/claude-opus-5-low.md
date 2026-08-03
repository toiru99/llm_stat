---
type: Model
title: Claude Opus 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 51.0
price_blended_usd_1m: None
output_speed_tps: 51.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.7, z: 2.0, r: 80.0, estimated: false }  # 전문 지식
  reasoning: { s: 80.9, z: 2.33, r: 85.0, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.37, r: 70.6, estimated: false }  # 코딩
  agentic: { s: 69.1, z: 1.27, r: 69.0, estimated: false }  # 에이전트
  trust: { s: 50.6, z: 1.07, r: 66.0, estimated: false }  # 신뢰성
  multimodal: { s: 92.9, z: 1.02, r: 65.3, estimated: false }  # 멀티모달
  long_context: { s: 90.8, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 80.6, z: 1.13, r: 67.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# Claude Opus 5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 신뢰성, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $None/1M · 51.0 t/s · TTFT 2.8s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.0 | +2.0 | 실측 | [[aa-omniscience]] 50.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 85.0 | +2.33 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 70.6 | +1.37 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 69.0 | +1.27 | 실측 | [[gdpval]] 48.0%×1.0, [[tau3-banking]] 23.0%×1.0 |
| 신뢰성 | 66.0 | +1.07 | 실측 | [[aa-omniscience]] 45.0%×1.0 |
| 멀티모달 | 65.3 | +1.02 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 67.0 | +1.13 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
