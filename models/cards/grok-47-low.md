---
type: Model
title: Grok 4.7 (low)
creator: SpaceXAI
license: Proprietary
intelligence_index: 31.132077602567
price_blended_usd_1m: 1.35
output_speed_tps: 71.37338597581416
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.0, z: 0.24, r: 53.6, estimated: false }  # 전문 지식
  reasoning: { s: 44.8, z: 0.47, r: 57.0, estimated: false }  # 추론
  coding: { s: 78.9, z: 1.33, r: 70.0, estimated: false }  # 코딩
  agentic: { s: 87.7, z: 1.49, r: 72.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.2, z: 0.71, r: 60.7, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.1, r: 66.4, estimated: false }  # 긴문맥
  instruction: { s: 59.7, z: 0.25, r: 53.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.7 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Grok 4.7 (low)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **31.132077602567**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 71.37338597581416 t/s · TTFT 11.224296054651852s · 500k ctx` · 가성비 23.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.6 | +0.24 | 실측 | [[humanitys-last-exam]] 39.156626506024104%×0.3 |
| 추론 | 57.0 | +0.47 | 실측 | [[critpt]] 13.4285714285714%×1.0, [[humanitys-last-exam]] 39.156626506024104%×1.0 |
| 코딩 | 70.0 | +1.33 | 실측 | [[scicode]] 54.86111111111111%×1.0 |
| 에이전트 | 72.4 | +1.49 | 실측 | [[gdpval]] 1587.42%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.7 | +0.71 | 실측 | [[mmmu-pro]] 78.150289017341%×1.0 |
| 긴문맥 | 66.4 | +1.1 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 53.8 | +0.25 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
