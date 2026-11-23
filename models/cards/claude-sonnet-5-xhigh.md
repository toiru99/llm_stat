---
type: Model
title: Claude Sonnet 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 95.13705246855
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 51.8, z: 0.22, r: 53.3, estimated: false }  # 전문 지식
  reasoning: { s: 47.5, z: 0.59, r: 58.8, estimated: false }  # 추론
  coding: { s: 77.5, z: 1.27, r: 69.1, estimated: false }  # 코딩
  agentic: { s: 77.9, z: 1.14, r: 67.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 0.97, r: 64.6, estimated: false }  # 긴문맥
  instruction: { s: 63.2, z: 0.39, r: 55.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Claude Sonnet 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 95.13705246855 t/s · TTFT 17.4605650057166s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.3 | +0.22 | 실측 | [[humanitys-last-exam]] 39.017608897127%×0.3 |
| 추론 | 58.8 | +0.59 | 실측 | [[critpt]] 15.4285714285714%×1.0, [[humanitys-last-exam]] 39.017608897127%×1.0 |
| 코딩 | 69.1 | +1.27 | 실측 | [[scicode]] 54.050925925925895%×1.0 |
| 에이전트 | 67.1 | +1.14 | 실측 | [[gdpval]] 1365.15%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.6 | +0.97 | 실측 | [[aa-lcr]] 76.6666666666667%×1.0 |
| 지시 따르기 | 55.8 | +0.39 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
