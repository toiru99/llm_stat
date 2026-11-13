---
type: Model
title: Claude Fable 5.1 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 47.0
price_blended_usd_1m: 7.175
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.5, z: 1.85, r: 77.7, estimated: false }  # 전문 지식
  reasoning: { s: 83.1, z: 1.94, r: 79.1, estimated: false }  # 추론
  coding: { s: 85.2, z: 1.58, r: 73.7, estimated: false }  # 코딩
  agentic: { s: 86.0, z: 1.73, r: 75.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.23, r: 68.5, estimated: false }  # 긴문맥
  instruction: { s: 78.8, z: 1.1, r: 66.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Claude Fable 5.1 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **47.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 6.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.7 | +1.85 | 실측 | [[gpqa-diamond]] 90.6%×0.4, [[humanitys-last-exam]] 55.9%×0.3 |
| 추론 | 79.1 | +1.94 | 실측 | [[critpt]] 62.0%×1.0, [[gpqa-diamond]] 90.6%×1.0, [[humanitys-last-exam]] 55.9%×1.0 |
| 코딩 | 73.7 | +1.58 | 실측 | [[scicode]] 58.7%×1.0 |
| 에이전트 | 75.9 | +1.73 | 실측 | [[gdpval]] 1644.0%×1.0, [[tau3-banking]] 43.1%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.5 | +1.23 | 실측 | [[aa-lcr]] 83.7%×1.0 |
| 지시 따르기 | 66.6 | +1.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
