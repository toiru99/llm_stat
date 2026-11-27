---
type: Model
title: Claude Opus 5.5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 34.752785007759
price_blended_usd_1m: 2.94
output_speed_tps: 109.44918799485
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.6, z: 0.86, r: 63.0, estimated: false }  # 전문 지식
  reasoning: { s: 57.1, z: 1.09, r: 66.3, estimated: false }  # 추론
  coding: { s: 85.0, z: 1.48, r: 72.2, estimated: false }  # 코딩
  agentic: { s: 72.4, z: 0.89, r: 63.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.6, z: 1.13, r: 67.0, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Claude Opus 5.5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **34.752785007759**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 멀티모달
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 109.44918799485 t/s · TTFT 5.61968559863537s · 1M ctx` · 가성비 11.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 63.0 | +0.86 | 실측 | [[humanitys-last-exam]] 48.3318%×0.3 |
| 추론 | 66.3 | +1.09 | 실측 | [[critpt]] 17.7143%×1.0, [[humanitys-last-exam]] 48.3318%×1.0 |
| 코딩 | 72.2 | +1.48 | 실측 | [[scicode]] 58.5648%×1.0 |
| 에이전트 | 63.3 | +0.89 | 실측 | [[gdpval]] 1238.98 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.0 | +1.13 | 실측 | [[mmmu-pro]] 84.6821%×1.0 |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 80.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
