---
type: Model
title: GPT-5.5 Instant (June 2026)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.35
output_speed_tps: 129.25087577150802
context_window: 400000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.0, z: 0.57, r: 58.6, estimated: false }  # 전문 지식
  reasoning: { s: 36.5, z: 0.06, r: 50.9, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.2, r: 68.0, estimated: false }  # 코딩
  agentic: { s: 31.5, z: -0.45, r: 43.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.76, r: 61.4, estimated: false }  # 긴문맥
  instruction: { s: 75.7, z: 0.92, r: 63.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 Instant (June 2026)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-5.5 Instant (June 2026)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 129.25087577150802 t/s · TTFT 1.824984808713167s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.6 | +0.57 | 실측 | [[gpqa-diamond]] 82.3232323232323%×0.4, [[humanitys-last-exam]] 19.9258572752549%×0.3 |
| 추론 | 50.9 | +0.06 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 82.3232323232323%×1.0, [[humanitys-last-exam]] 19.9258572752549%×1.0 |
| 코딩 | 68.0 | +1.2 | 실측 | [[scicode]] 52.546296296296305%×1.0 |
| 에이전트 | 43.2 | -0.45 | 실측 | [[gdpval]] 515.91%×1.0, [[tau3-banking]] 11.7525773195876%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.4 | +0.76 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 63.8 | +0.92 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
