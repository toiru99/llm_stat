---
type: Model
title: Claude Opus 5.5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 34.752785007759
price_blended_usd_1m: 2.94
output_speed_tps: 102.831108401152
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.6, z: 0.83, r: 62.5, estimated: false }  # 전문 지식
  reasoning: { s: 57.1, z: 1.06, r: 65.9, estimated: false }  # 추론
  coding: { s: 85.0, z: 1.53, r: 72.9, estimated: false }  # 코딩
  agentic: { s: 72.3, z: 0.95, r: 64.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.6, z: 1.13, r: 67.0, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.11, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 67.2, z: 0.56, r: 58.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Claude Opus 5.5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **34.752785007759**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 멀티모달
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 102.831108401152 t/s · TTFT 4.9282853382291s · 1M ctx` · 가성비 11.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.5 | +0.83 | 실측 | [[humanitys-last-exam]] 48.3317886932345%×0.3 |
| 추론 | 65.9 | +1.06 | 실측 | [[critpt]] 17.714285714285698%×1.0, [[humanitys-last-exam]] 48.3317886932345%×1.0 |
| 코딩 | 72.9 | +1.53 | 실측 | [[scicode]] 58.5648148148148%×1.0 |
| 에이전트 | 64.3 | +0.95 | 실측 | [[gdpval]] 1238.72%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.0 | +1.13 | 실측 | [[mmmu-pro]] 84.6820809248555%×1.0 |
| 긴문맥 | 66.6 | +1.11 | 실측 | [[aa-lcr]] 80.6666666666667%×1.0 |
| 지시 따르기 | 58.4 | +0.56 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
