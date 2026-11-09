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
  knowledge: { s: 78.3, z: 1.28, r: 69.2, estimated: false }  # 전문 지식
  reasoning: { s: 64.1, z: 0.84, r: 62.6, estimated: false }  # 추론
  coding: { s: 86.2, z: 1.62, r: 74.4, estimated: false }  # 코딩
  agentic: { s: 66.4, z: 1.1, r: 66.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 94.6, z: 1.17, r: 67.5, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 74.5, z: 0.92, r: 63.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Claude Opus 5.5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 11.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.2 | +1.28 | 실측 | [[humanitys-last-exam]] 48.3%×0.3 |
| 추론 | 62.6 | +0.84 | 실측 | [[critpt]] 36.0%×1.0, [[humanitys-last-exam]] 48.3%×1.0 |
| 코딩 | 74.4 | +1.62 | 실측 | [[scicode]] 58.6%×1.0 |
| 에이전트 | 66.4 | +1.1 | 실측 | [[gdpval]] 1240.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.5 | +1.17 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 80.7%×1.0 |
| 지시 따르기 | 63.8 | +0.92 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
