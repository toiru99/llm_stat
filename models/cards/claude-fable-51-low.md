---
type: Model
title: Claude Fable 5.1 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 39.0
price_blended_usd_1m: 7.175
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.7, z: 1.61, r: 74.1, estimated: false }  # 전문 지식
  reasoning: { s: 79.5, z: 1.53, r: 73.0, estimated: false }  # 추론
  coding: { s: 83.0, z: 1.52, r: 72.8, estimated: false }  # 코딩
  agentic: { s: 77.5, z: 1.48, r: 72.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.2, r: 68.0, estimated: false }  # 긴문맥
  instruction: { s: 80.5, z: 1.17, r: 67.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Claude Fable 5.1 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **39.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 5.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.1 | +1.61 | 실측 | [[gpqa-diamond]] 88.1%×0.4, [[humanitys-last-exam]] 48.9%×0.3 |
| 추론 | 73.0 | +1.53 | 실측 | [[critpt]] 49.5%×1.0, [[gpqa-diamond]] 88.1%×1.0, [[humanitys-last-exam]] 48.9%×1.0 |
| 코딩 | 72.8 | +1.52 | 실측 | [[scicode]] 56.7%×1.0 |
| 에이전트 | 72.1 | +1.48 | 실측 | [[gdpval]] 1477.0%×1.0, [[tau3-banking]] 39.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.0 | +1.2 | 실측 | [[aa-lcr]] 82.3%×1.0 |
| 지시 따르기 | 67.6 | +1.17 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
