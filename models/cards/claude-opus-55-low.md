---
type: Model
title: Claude Opus 5.5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 2.94
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.5, z: 0.85, r: 62.7, estimated: false }  # 전문 지식
  reasoning: { s: 55.8, z: 0.62, r: 59.3, estimated: false }  # 추론
  coding: { s: 85.0, z: 1.59, r: 73.8, estimated: false }  # 코딩
  agentic: { s: 66.4, z: 1.07, r: 66.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 94.6, z: 1.17, r: 67.5, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.14, r: 67.1, estimated: false }  # 긴문맥
  instruction: { s: 64.1, z: 0.49, r: 57.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Claude Opus 5.5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 멀티모달
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 11.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.7 | +0.85 | 실측 | [[humanitys-last-exam]] 48.3%×0.3 |
| 추론 | 59.3 | +0.62 | 실측 | [[critpt]] 36.0%×1.0, [[humanitys-last-exam]] 48.3%×1.0 |
| 코딩 | 73.8 | +1.59 | 실측 | [[scicode]] 58.6%×1.0 |
| 에이전트 | 66.1 | +1.07 | 실측 | [[gdpval]] 1240.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.5 | +1.17 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 67.1 | +1.14 | 실측 | [[aa-lcr]] 80.7%×1.0 |
| 지시 따르기 | 57.3 | +0.49 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
