---
type: Model
title: Claude Sonnet 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 28.0
price_blended_usd_1m: 1.54
output_speed_tps: 69.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 53.6, z: 0.48, r: 57.3, estimated: false }  # 전문 지식
  reasoning: { s: 37.8, z: 0.03, r: 50.4, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.25, r: 68.8, estimated: false }  # 코딩
  agentic: { s: 62.0, z: 0.94, r: 64.1, estimated: false }  # 에이전트
  trust: { s: 28.9, z: 0.07, r: 51.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.91, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: 49.1, z: -0.23, r: 46.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Claude Sonnet 5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **28.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 69.0 t/s · TTFT 1.8s · 1M ctx` · 가성비 18.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.3 | +0.48 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 50.4 | +0.03 | 실측 | [[critpt]] 9.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 68.8 | +1.25 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 64.1 | +0.94 | 실측 | [[gdpval]] 1158.0%×1.0 |
| 신뢰성 | 51.1 | +0.07 | 실측 | [[aa-omniscience]] 30.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.6 | +0.91 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 46.5 | -0.23 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
