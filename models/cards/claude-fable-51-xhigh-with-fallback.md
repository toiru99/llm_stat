---
type: Model
title: Claude Fable 5.1 (xhigh with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 65.0
price_blended_usd_1m: 7.175
output_speed_tps: 60.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 98.6, z: 2.9, r: 93.5, estimated: false }  # 전문 지식
  reasoning: { s: 98.2, z: 3.19, r: 97.9, estimated: false }  # 추론
  coding: { s: 96.8, z: 2.12, r: 81.8, estimated: false }  # 코딩
  agentic: { s: 94.4, z: 2.23, r: 83.5, estimated: false }  # 에이전트
  trust: { s: 27.8, z: 0.17, r: 52.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.35, r: 70.3, estimated: false }  # 긴문맥
  instruction: { s: 82.6, z: 1.25, r: 68.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (xhigh with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Claude Fable 5.1 (xhigh with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **65.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 60.0 t/s · TTFT 130.21s · 1M ctx` · 가성비 9.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 93.5 | +2.9 | 실측 | [[aa-omniscience]] 66.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 59.0%×0.3 |
| 추론 | 97.9 | +3.19 | 실측 | [[critpt]] 31.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 59.0%×1.0 |
| 코딩 | 81.8 | +2.12 | 실측 | [[scicode]] 60.0%×1.0 |
| 에이전트 | 83.5 | +2.23 | 실측 | [[gdpval]] 67.0%×1.0, [[tau3-banking]] 46.0%×1.0 |
| 신뢰성 | 52.5 | +0.17 | 실측 | [[aa-omniscience]] 29.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.3 | +1.35 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 68.8 | +1.25 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
