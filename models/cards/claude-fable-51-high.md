---
type: Model
title: Claude Fable 5.1 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 47.174988245604
price_blended_usd_1m: 7.175
output_speed_tps: 85.7174911854919
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.5, z: 1.84, r: 77.6, estimated: false }  # 전문 지식
  reasoning: { s: 84.4, z: 2.41, r: 86.1, estimated: false }  # 추론
  coding: { s: 85.1, z: 1.53, r: 72.9, estimated: false }  # 코딩
  agentic: { s: 87.0, z: 1.46, r: 71.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 83.3, z: 1.23, r: 68.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Claude Fable 5.1 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **47.174988245604** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 85.7174911854919 t/s · TTFT 11.3102136460121s · 1M ctx` · 가성비 6.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.6 | +1.84 | 실측 | [[gpqa-diamond]] 90.6060606060606%×0.4, [[humanitys-last-exam]] 55.9314179796108%×0.3 |
| 추론 | 86.1 | +2.41 | 실측 | [[critpt]] 30.2857142857143%×1.0, [[gpqa-diamond]] 90.6060606060606%×1.0, [[humanitys-last-exam]] 55.9314179796108%×1.0 |
| 코딩 | 72.9 | +1.53 | 실측 | [[scicode]] 58.6805555555556%×1.0 |
| 에이전트 | 71.9 | +1.46 | 실측 | [[gdpval]] 1643.98%×1.0, [[tau3-banking]] 43.0927835051546%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 83.6666666666667%×1.0 |
| 지시 따르기 | 68.5 | +1.23 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
