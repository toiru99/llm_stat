---
type: Model
title: Grok 4.7 (low)
creator: SpaceXAI
license: Proprietary
intelligence_index: 31.132077602567
price_blended_usd_1m: 1.35
output_speed_tps: 69.3902061409299
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.0, z: 0.23, r: 53.4, estimated: false }  # 전문 지식
  reasoning: { s: 44.8, z: 0.45, r: 56.8, estimated: false }  # 추론
  coding: { s: 78.9, z: 1.32, r: 69.8, estimated: false }  # 코딩
  agentic: { s: 87.7, z: 1.48, r: 72.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 84.9, z: 0.69, r: 60.3, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: 59.7, z: 0.24, r: 53.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.7 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Grok 4.7 (low)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **31.132077602567**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 69.3902061409299 t/s · TTFT 11.2668394391741s · 500k ctx` · 가성비 23.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.4 | +0.23 | 실측 | [[humanitys-last-exam]] 39.156626506024104%×0.3 |
| 추론 | 56.8 | +0.45 | 실측 | [[critpt]] 13.4285714285714%×1.0, [[humanitys-last-exam]] 39.156626506024104%×1.0 |
| 코딩 | 69.8 | +1.32 | 실측 | [[scicode]] 54.86111111111111%×1.0 |
| 에이전트 | 72.2 | +1.48 | 실측 | [[gdpval]] 1587.42%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.3 | +0.69 | 실측 | [[mmmu-pro]] 78.150289017341%×1.0 |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 53.7 | +0.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
