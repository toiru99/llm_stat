---
type: Model
title: Claude Sonnet 5.5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 30.8195522148431
price_blended_usd_1m: 1.47
output_speed_tps: 127.44140120427532
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.9, z: 0.28, r: 54.2, estimated: false }  # 전문 지식
  reasoning: { s: 50.1, z: 0.73, r: 60.9, estimated: false }  # 추론
  coding: { s: 75.6, z: 1.22, r: 68.3, estimated: false }  # 코딩
  agentic: { s: 76.2, z: 1.09, r: 66.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.1, z: 0.97, r: 64.6, estimated: false }  # 긴문맥
  instruction: { s: 67.8, z: 0.59, r: 58.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude Sonnet 5.5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **30.8195522148431**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 127.44140120427532 t/s · TTFT 4.728554789945062s · 1M ctx` · 가성비 21.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.2 | +0.28 | 실측 | [[humanitys-last-exam]] 39.805375347544%×0.3 |
| 추론 | 60.9 | +0.73 | 실측 | [[critpt]] 16.8571428571429%×1.0, [[humanitys-last-exam]] 39.805375347544%×1.0 |
| 코딩 | 68.3 | +1.22 | 실측 | [[scicode]] 52.8935185185185%×1.0 |
| 에이전트 | 66.4 | +1.09 | 실측 | [[gdpval]] 1325.77%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.6 | +0.97 | 실측 | [[aa-lcr]] 76.3333333333333%×1.0 |
| 지시 따르기 | 58.8 | +0.59 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
