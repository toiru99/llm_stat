---
type: Model
title: Grok 4.6 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.35
output_speed_tps: 80.7329231794606
context_window: 500000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.8, z: 1.61, r: 74.2, estimated: false }  # 전문 지식
  reasoning: { s: 67.9, z: 1.59, r: 73.9, estimated: false }  # 추론
  coding: { s: 81.5, z: 1.41, r: 71.1, estimated: false }  # 코딩
  agentic: { s: 94.1, z: 1.7, r: 75.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.6, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.04, r: 65.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.6 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Grok 4.6 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 80.7329231794606 t/s · TTFT 15.7902920701639s · 500k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.2 | +1.61 | 실측 | [[gpqa-diamond]] 94.94949494949499%×0.4, [[humanitys-last-exam]] 42.9101019462465%×0.3 |
| 추론 | 73.9 | +1.59 | 실측 | [[critpt]] 17.1428571428571%×1.0, [[gpqa-diamond]] 94.94949494949499%×1.0, [[humanitys-last-exam]] 42.9101019462465%×1.0 |
| 코딩 | 71.1 | +1.41 | 실측 | [[scicode]] 56.4814814814815%×1.0 |
| 에이전트 | 75.5 | +1.7 | 실측 | [[gdpval]] 1627.03%×1.0, [[tau3-banking]] 50.7216494845361%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 80.3333333333333%×1.0 |
| 지시 따르기 | 65.7 | +1.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
