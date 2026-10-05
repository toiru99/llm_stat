---
type: Model
title: Claude Sonnet 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 1.54
output_speed_tps: 73.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.4, z: 0.78, r: 61.7, estimated: false }  # 전문 지식
  reasoning: { s: 55.1, z: 0.84, r: 62.7, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.43, r: 71.5, estimated: false }  # 코딩
  agentic: { s: 62.7, z: 0.91, r: 63.7, estimated: false }  # 에이전트
  trust: { s: 40.2, z: 0.64, r: 59.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.05, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.73, r: 60.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# Claude Sonnet 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 73.0 t/s · TTFT 25.45s · 1M ctx` · 가성비 22.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.7 | +0.78 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 62.7 | +0.84 | 실측 | [[critpt]] 15.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 71.5 | +1.43 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 63.7 | +0.91 | 실측 | [[gdpval]] 42.0%×1.0 |
| 신뢰성 | 59.5 | +0.64 | 실측 | [[aa-omniscience]] 41.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.8 | +1.05 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 60.9 | +0.73 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
