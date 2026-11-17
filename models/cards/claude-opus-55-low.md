---
type: Model
title: Claude Opus 5.5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 34.752785007759
price_blended_usd_1m: 2.94
output_speed_tps: 104.67825701187168
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.6, z: 0.84, r: 62.7, estimated: false }  # 전문 지식
  reasoning: { s: 57.1, z: 1.08, r: 66.1, estimated: false }  # 추론
  coding: { s: 85.0, z: 1.54, r: 73.1, estimated: false }  # 코딩
  agentic: { s: 72.3, z: 0.96, r: 64.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.9, z: 1.16, r: 67.4, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: 67.2, z: 0.57, r: 58.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude Opus 5.5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **34.752785007759**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 멀티모달
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 104.67825701187168 t/s · TTFT 4.982147751177386s · 1M ctx` · 가성비 11.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.7 | +0.84 | 실측 | [[humanitys-last-exam]] 48.3317886932345%×0.3 |
| 추론 | 66.1 | +1.08 | 실측 | [[critpt]] 17.714285714285698%×1.0, [[humanitys-last-exam]] 48.3317886932345%×1.0 |
| 코딩 | 73.1 | +1.54 | 실측 | [[scicode]] 58.5648148148148%×1.0 |
| 에이전트 | 64.4 | +0.96 | 실측 | [[gdpval]] 1238.72%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.4 | +1.16 | 실측 | [[mmmu-pro]] 84.6820809248555%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 80.6666666666667%×1.0 |
| 지시 따르기 | 58.5 | +0.57 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
